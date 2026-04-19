import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ObjectId } from "bson";
import { getOpeningHours } from "@/lib/openingHours";
import { getLang } from "@/lib/lang";
import { messages} from "@/lib/messages";
import { fromZonedTime } from "date-fns-tz";

type Entity =
  | "movies"
  | "halls"
  | "screenings"
  | "screening_types"
  | "bad_words"
  | "flagged_comments"
  | "opening_hours"
  | "opening_overrides";;

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
    e === "flagged_comments" ||
    e === "opening_hours" ||
    e === "opening_overrides"
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

export async function GET(req: Request) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    const entity = getEntity(req);
    if (!entity) return jsonError(t.missingOrInvalidEntity);

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
      const bad = words.map(w => w.word.toLowerCase().trim());

      const posts = await prisma.forum.findMany({
        select: {
          id: true,
          comment: true,
          users: {
            select: { name: true }
          },
          movies: {
            select: { title: true }
          }
        }
      });

      const replies = await prisma.forumReply.findMany({
        select: {
          id: true,
          comment: true,
          user: {
            select: { name: true }
          },
          forum: {
            select: {
              movies: {
                select: { title: true }
              }
            }
          }
        }
      });

      const flaggedPosts = posts
      .filter(p =>
        bad.some(w =>
          (p.comment ?? "").toLowerCase().includes(w)
        )
      )
      .map(p => ({
        id:p.id,
        comment:p.comment,
        user:p.users?.name ?? "Ismeretlen",
        movie:p.movies?.title ?? "",
        type:"post"
      }));

      const flaggedReplies = replies
      .filter(r =>
        bad.some(w =>
          (r.comment ?? "").toLowerCase().includes(w)
        )
      )
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

    if (entity === "opening_hours") {
      return NextResponse.json(
        await prisma.openingHours.findMany({
          orderBy: { weekday: "asc" }
        })
      );
    }

    if (entity === "opening_overrides") {
      return NextResponse.json(
        await prisma.openingOverride.findMany({
          orderBy: { date: "asc" }
        })
      );
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
    return jsonError(t.serverError, 500);
  }
}

export async function PUT(req: Request) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    const entity = getEntity(req);
    if (!entity) return jsonError(t.missingOrInvalidEntity);

    const body = await req.json();
    if (!body.id) return jsonError(t.missingId);

    const id = parseId(body.id);

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
          backdrop: opt(body.backdrop),
          onscreen: Boolean(body.onscreen),
          genre: opt(body.genre),
          review: body.review !== undefined ? Number(body.review) : undefined,
          description: opt(body.description),
        },
      });
      return NextResponse.json(updated);
    }

    if (entity === "halls") {
      const hallId = parseId(body.id);
      const rows = Number(body.row);
      const columns = Number(body.column);

      const MAX_rows = 15;
      const MAX_columns = 10;
      if (!body.name || rows <= 0 || columns <= 0) {
        return jsonError(t.invalidHallData);
      }

      if (rows > MAX_rows || columns > MAX_columns) {
        return jsonError(t.invalidHallSize);
      }

      try {
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

          const chairMap = new Map(
            existingChairs.map(ch => [`${ch.row}-${ch.column}`, ch])
          );

          const keepIds = new Set<string>();
          const chairsToCreate: { row: number; column: number }[] = [];

          for (let r = 1; r <= rows; r++) {
            for (let c = 1; c <= columns; c++) {
              const existing = chairMap.get(`${r}-${c}`);

              if (existing) {
                keepIds.add(existing.id);
              } else {
                chairsToCreate.push({ row: r, column: c });
              }
            }
          }

          const toDelete = existingChairs.filter(ch => !keepIds.has(ch.id));
          if (toDelete.some(ch => ch.tickets.length > 0)) {
            throw new Error(t.hallResizeBlocked);
          }

          if (toDelete.length > 0) {
            await tx.chair.deleteMany({
              where: { id: { in: toDelete.map(c => c.id) } },
            });
          }

          if (chairsToCreate.length > 0) {
            await tx.chair.createMany({
              data: chairsToCreate.map(chair => ({
                hall_id: hallId,
                row: chair.row,
                column: chair.column,
              })),
            });
          }
          return updatedHall;
        });
        return NextResponse.json(result);

      } catch (error) {
        console.error("HALL UPDATE ERROR:", error);

        return jsonError(
          error instanceof Error ? error.message : "Unknown error"
        );
      }
    }
    
    return jsonError(t.unsupportedPutEntity);
  } catch (e) {
    console.error(e);
    return jsonError(t.serverError, 500);
  }
}

export async function POST(req: Request) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    const entity = getEntity(req);
    if (!entity) return jsonError(t.missingOrInvalidInput);

    const body = await req.json();

    if (entity === "movies") {
      if (!body.title) return jsonError(t.titleRequired);

      const created = await prisma.movie.create({
        data: {
          title: body.title,
          director: opt(body.director),
          actors: opt(body.actors),
          playtime: Number(body.playtime ?? 120),
          language: opt(body.language),
          trailer: opt(body.trailer),
          poster: opt(body.poster),
          backdrop: opt(body.backdrop),
          onscreen: Boolean(body.onscreen),
          genre: opt(body.genre),
          review: body.review !== undefined ? Number(body.review) : undefined,
          description: opt(body.description),
        },
      });

      return NextResponse.json(created, { status: 201 });
    }

    if (entity === "halls") {
        if (!body.name) return jsonError(t.hallNameRequired);

        const rows = Number(body.row);
        const columns = Number(body.column);

        const MAX_rows = 15;
        const MAX_columns = 10;

        if (!rows || rows <= 0 || !columns || columns <= 0) {
          return jsonError(t.positiveRowsColumns);
        }

        if (rows > MAX_rows || columns > MAX_columns) {
          return jsonError(t.invalidHallSize);
        }

        try {
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
              });
            }
          }

          if (chairs.length > 0) {
            await prisma.chair.createMany({
              data: chairs,
            });
          }
          return NextResponse.json(createdHall, { status: 201 });

        } catch (error) {
          console.error("HALL CREATE ERROR:", error);

          return jsonError(
            error instanceof Error ? error.message : "Unknown error"
          );
        }
      }

    if (entity === "screenings") {
      if (!body.movie_id || !body.hall_id || !body.start || !body.screening_type_id)
        return jsonError(t.allFieldsRequired);

      const movie_id = parseId(body.movie_id);
      const hall_id = parseId(body.hall_id);
      const screening_type_id = parseId(body.screening_type_id);

      const movie = await prisma.movie.findUnique({ where: { id: movie_id } });
      if (!movie) return jsonError(t.movieNotFound);
      if (!movie.onscreen) return jsonError(t.movieNotScreened);

      const startDate = new Date(body.start);
      if (isNaN(startDate.getTime())) return jsonError(t.invalidScreeningTime);

      const hours = await getOpeningHours(startDate)

      if (!hours) {
        return jsonError(t.cinemaClosedThatDay)
      }

      const [openH, openM] = hours.open.split(":").map(Number)
      const [closeH, closeM] = hours.close.split(":").map(Number)

      const timeZone = "Europe/Budapest";

      const open = fromZonedTime(
        `${startDate.toISOString().slice(0, 10)}T${hours.open}:00`,
        timeZone
      );

      const close = fromZonedTime(
        `${startDate.toISOString().slice(0, 10)}T${hours.close}:00`,
        timeZone
      );

      if (close <= open) {
        close.setDate(close.getDate() + 1)
      }
      const CLEANING_MINUTES = 15;

      const movieEnd = new Date(startDate.getTime() + movie.playtime * 60000);

      const endDate = new Date(movieEnd.getTime() + CLEANING_MINUTES * 60000);

      if(startDate < open)
        return jsonError(t.cinemaNotOpenYet);

      if(endDate > close)
        return jsonError(t.screeningEndsAfterClose);

      const created = await prisma.$transaction(async (tx) => {

      const conflict = await tx.screening.findFirst({
        where: {
          hall_id,
          AND: [
            { start: { lt: endDate } },
            { end: { gt: startDate } },
          ],
        },
      });

      if (conflict) {
        throw new Error(t.screeningConflict);
      }

      return await tx.screening.create({
        data: {
          movie_id,
          hall_id,
          screening_type_id,
          start: startDate,
          end: endDate,
        },
      });
    });

      return NextResponse.json(created, { status: 201 });
    }

    if (entity === "bad_words") {
      const words:string[] = body.words;
      await prisma.$transaction(async (tx) => {

      await tx.badWord.deleteMany();

      if(words.length){
        await tx.badWord.createMany({
          data: words.map(w => ({
            word: w.toLowerCase().trim()
          }))
        });
      }

    });
      return NextResponse.json({ok:true});
    }

    if (entity === "opening_hours") {
      const created = await prisma.openingHours.upsert({
        where: { weekday: body.weekday },
        update: {
          open_time: body.open_time,
          close_time: body.close_time,
          closed: body.closed
        },
        create: {
          weekday: body.weekday,
          open_time: body.open_time,
          close_time: body.close_time,
          closed: body.closed
        }
      });

      return NextResponse.json(created);
    }

    if (entity === "opening_overrides") {

      const created = await prisma.openingOverride.create({
        data: {
          date: new Date(body.date),
          open_time: body.open_time,
          close_time: body.close_time,
          closed: body.closed
        }
      });

      return NextResponse.json(created);
    }

    return jsonError(t.unsupportedInput);
  } catch (e) {
    console.error(e);
    return jsonError(t.serverError, 500);
  }
}

export async function DELETE(req: Request) {
  const lang = await getLang();
  const t = messages[lang];
  
  try {
    const entity = getEntity(req);
    if (!entity) return jsonError(t.missingOrInvalidInput);

    const body = await req.json();
    if (!body.id) return jsonError(t.invalidId);

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

    if (entity === "opening_overrides") {
      await prisma.openingOverride.delete({
        where: { id }
      });

      return NextResponse.json({ ok: true });
    }
    return jsonError(t.unsupportedInput);
  } catch (e) {
    console.error(e);
    return jsonError(t.serverError, 500);
  }
}