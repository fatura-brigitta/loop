import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ObjectId } from "bson";

type Entity =
  | "movies"
  | "halls"
  | "screenings"
  | "screening_types"
  | "bad_words"
  | "flagged_comments";

function jsonError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

function getEntity(req: Request): Entity | null {
  const { searchParams } = new URL(req.url);
  const e = searchParams.get("entity");
  if (
    e === "movies" ||
    e === "halls" ||
    e === "screenings" ||
    e === "screening_types" ||
    e === "bad_words" ||
    e === "flagged_comments"
  )
    return e;
  return null;
}

function parseId(id: string): string {
  try {
    return new ObjectId(id).toString();
  } catch {
    throw new Error("Érvénytelen ID formátum");
  }
}

function opt<T>(v: T | null | undefined | ""): T | undefined {
  if (v === null || v === undefined || v === "") return undefined;
  return v;
}

//
// ================= GET =================
//
export async function GET(req: Request) {
  try {
    const entity = getEntity(req);
    if (!entity) return jsonError("Hiányzó vagy érvénytelen entitás");

    if (entity === "movies") {
      return NextResponse.json(
        await prisma.movie.findMany({ orderBy: { title: "asc" } })
      );
    }

    if (entity === "halls") {
      return NextResponse.json(
        await prisma.hall.findMany({ orderBy: { name: "asc" } })
      );
    }

    if (entity === "screening_types") {
      return NextResponse.json(
        await prisma.screening_type.findMany({ orderBy: { type: "asc" } })
      );
    }

    if (entity === "bad_words") {
      const words = await prisma.badWord.findMany({
        orderBy:{word:"asc"}
      });

      return NextResponse.json(words);
    }

    if(entity === "flagged_comments"){

      const words = await prisma.badWord.findMany();
      const bad = words.map(w => w.word.toLowerCase());

      const posts = await prisma.forum.findMany({
        include:{
          users:true,
          movies:true
        }
      });

      const replies = await prisma.forumReply.findMany({
        include:{
          user:true,
          forum:{
            include:{
              movies:true
            }
          }
        }
      });

      const flaggedPosts = posts
      .filter(p => bad.some(w => p.comment.toLowerCase().includes(w)))
      .map(p => ({
        id:p.id,
        comment:p.comment,
        user:p.users?.name ?? "Ismeretlen",
        movie:p.movies?.title ?? "",
        type:"post"
      }));

      const flaggedReplies = replies
      .filter(r => bad.some(w => r.comment.toLowerCase().includes(w)))
      .map(r => ({
        id:r.id,
        comment:r.comment,
        user:r.user?.name ?? "Ismeretlen",
        movie:r.forum?.movies?.title ?? "",
        type:"reply"
      }));

      return NextResponse.json([
        ...flaggedPosts,
        ...flaggedReplies
      ]);
    }

    const screenings = await prisma.screening.findMany({
      orderBy: { start: "desc" },
      include: {
        movies: true,
        halls: true,
        screening_types: true,
      },
    });

    return NextResponse.json(screenings);
  } catch (e) {
    console.error(e);
    return jsonError("Szerver hiba történt", 500);
  }
}

//
// ================= PUT =================
//
export async function PUT(req: Request) {
  try {
    const entity = getEntity(req);
    if (!entity) return jsonError("Hiányzó vagy érvénytelen bemenet");

    const body = await req.json();
    if (!body.id) return jsonError("Hiányzó azonosító");

    const id = parseId(body.id);

    // ---------- MOVIES ----------
    if (entity === "movies") {
      const updated = await prisma.movie.update({
        where: { id },
        data: {
          title: body.title,
          director: opt(body.director),
          actors: opt(body.actors),
          playtime: Number(body.playtime),
          language: opt(body.language),
          trailer: opt(body.trailer),
          poster: opt(body.poster),
          onscreen: Boolean(body.onscreen),
          genre: opt(body.genre),
          review: body.review !== undefined ? Number(body.review) : undefined,
          description: opt(body.description),
        },
      });

      return NextResponse.json(updated);
    }

    // ---------- HALLS ----------
    if (entity === "halls") {
      const hallId = parseId(body.id);
      const rows = Number(body.row);
      const columns = Number(body.column);

      if (!body.name || rows <= 0 || columns <= 0)
        return jsonError("Invalid hall data");

      const result = await prisma.$transaction(async (tx) => {

        const updatedHall = await tx.hall.update({
          where: { id: hallId },
          data: {
            name: body.name,
            row: rows,
            column: columns,
          },
        });

        const existingChairs = await tx.chair.findMany({
          where: { hall_id: hallId },
          include: { tickets: true },
        });

        const keepIds = new Set<string>();
        const chairsToCreate: { row: number; column: number }[] = [];

        for (let r = 1; r <= rows; r++) {
          for (let c = 1; c <= columns; c++) {

            const existing = existingChairs.find(
              ch => ch.row === r && ch.column === c
            );

            if (existing) {
              keepIds.add(existing.id);
            } else {
              chairsToCreate.push({ row: r, column: c });
            }
          }
        }

        const toDelete = existingChairs.filter(ch => !keepIds.has(ch.id));

        if (toDelete.some(ch => ch.tickets.length > 0)) {
          throw new Error(
            "Nem csökkenthető a terem mérete, mert léteznek jegyek a megszűnő székekre."
          );
        }

        if (toDelete.length > 0) {
          await tx.chair.deleteMany({
            where: { id: { in: toDelete.map(c => c.id) } },
          });
        }

        for (const chair of chairsToCreate) {
          await tx.chair.create({
            data: {
              hall_id: hallId,
              row: chair.row,
              column: chair.column,
            },
          });
        }

        return updatedHall;
      });

      return NextResponse.json(result);
    }
    
    return jsonError("Nem támogatott PUT entitás");
  } catch (e) {
    console.error(e);
    return jsonError("Szerver hiba történt", 500);
  }
}


//
// ================= POST =================
//
export async function POST(req: Request) {
  try {
    const entity = getEntity(req);
    if (!entity) return jsonError("Hiányzó vagy érvénytelen bemenet");

    const body = await req.json();

    // ---------- MOVIES ----------
    if (entity === "movies") {
      if (!body.title) return jsonError("Cím megadása kötelező");

      const created = await prisma.movie.create({
        data: {
          title: body.title,
          director: opt(body.director),
          actors: opt(body.actors),
          playtime: Number(body.playtime ?? 120),
          language: opt(body.language),
          trailer: opt(body.trailer),
          poster: opt(body.poster),
          onscreen: Boolean(body.onscreen),
          genre: opt(body.genre),
          review: body.review !== undefined ? Number(body.review) : undefined,
          description: opt(body.description),
        },
      });

      return NextResponse.json(created, { status: 201 });
    }

    // ---------- HALLS ----------
    if (entity === "halls") {
      if (!body.name) return jsonError("Terem nevének megadása kötelező");

      const rows = Number(body.row);
      const columns = Number(body.column);

      if (!rows || rows <= 0 || !columns || columns <= 0) {
        return jsonError("A sorok és oszlopok számának pozitív számnak kell lennie");
      }

      const createdHall = await prisma.hall.create({
        data: {
          name: body.name,
          row: rows,
          column: columns,
        },
      });

      const chairs = [];

      for (let r = 1; r <= rows; r++) {
        for (let c = 1; c <= columns; c++) {
          chairs.push({
            hall_id: createdHall.id,
            row: r,
            column: c,
            state: false,
          });
        }
      }

      await prisma.chair.createMany({
        data: chairs,
      });

      return NextResponse.json(createdHall, { status: 201 });
    }


    // ---------- SCREENINGS ----------
    if (entity === "screenings") {
      if (!body.movie_id || !body.hall_id || !body.start || !body.screening_type_id)
        return jsonError("Minden mező kitöltése kötelező");

      const movie_id = parseId(body.movie_id);
      const hall_id = parseId(body.hall_id);
      const screening_type_id = parseId(body.screening_type_id);

      const movie = await prisma.movie.findUnique({ where: { id: movie_id } });
      if (!movie) return jsonError("Film nem található");
      if (!movie.onscreen) return jsonError("A film nem vetítendő");

      const startDate = new Date(body.start);
      if (isNaN(startDate.getTime())) return jsonError("Érvénytelen vetítési idő");

      const OPEN_HOUR = 10;
      const CLOSE_HOUR = 22;

      const open = new Date(startDate);
      open.setHours(OPEN_HOUR,0,0,0);

      const close = new Date(startDate);
      close.setHours(CLOSE_HOUR,0,0,0);

      const CLEANING_MINUTES = 15;

      // film vége
      const movieEnd = new Date(startDate.getTime() + movie.playtime * 60000);

      // terem foglalás vége (film + takarítás)
      const endDate = new Date(movieEnd.getTime() + CLEANING_MINUTES * 60000);

      if(startDate < open)
        return jsonError("A mozi még nincs nyitva ebben az időpontban");

      if(endDate > close)
        return jsonError("A vetítés a zárás után érne véget");

      // overlap check
      const conflict = await prisma.screening.findFirst({
        where: {
          hall_id,
          AND: [
            { start: { lt: endDate } },
            { end: { gt: startDate } },
          ],
        },
      });

      if (conflict)
        return jsonError("Egy másik vetítés már foglalja ezt a termet ebben az időpontban", 409);

      const created = await prisma.screening.create({
        data: {
          movie_id,
          hall_id,
          screening_type_id,
          start: startDate,
          end: endDate,
        },
      });

      return NextResponse.json(created, { status: 201 });
    }

    if (entity === "bad_words") {
      const words:string[] = body.words;
      await prisma.badWord.deleteMany();
      if(words.length){
        await prisma.badWord.createMany({
          data: words.map(w=>({
            word: w.toLowerCase().trim()
          }))
        });
      }
      return NextResponse.json({ok:true});
    }

    return jsonError("Nem támogatott bemenet");
  } catch (e) {
    console.error(e);
    return jsonError("Szerver hiba történt", 500);
  }
}

//
// ================= DELETE =================
//
export async function DELETE(req: Request) {
  try {
    const entity = getEntity(req);
    if (!entity) return jsonError("Hiányzó vagy érvénytelen bemenet");

    const body = await req.json();
    if (!body.id) return jsonError("Hiányzó azonosító");

    const id = parseId(body.id);

    if (entity === "movies") {
      await prisma.movie.delete({ where: { id } });
      return NextResponse.json({ ok: true });
    }

    if (entity === "halls") {
      await prisma.hall.delete({ where: { id } });
      return NextResponse.json({ ok: true });
    }

    if (entity === "screenings") {
      await prisma.screening.delete({ where: { id } });
      return NextResponse.json({ ok: true });
    }

    if(entity === "flagged_comments"){

      if(body.type === "reply"){
        await prisma.forumReply.delete({
          where:{id}
        });
      } else {
        await prisma.forum.delete({
          where:{id}
        });
      }

      return NextResponse.json({ok:true});
    }
    return jsonError("Nem támogatott bemenet");
  } catch (e) {
    console.error(e);
    return jsonError("Szerver hiba történt", 500);
  }
}
