import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ObjectId } from "bson";

type Entity = "movies" | "halls" | "screenings" | "screening_types";

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
    e === "screening_types"
  )
    return e;
  return null;
}

function parseId(id: string): string {
  try {
    return new ObjectId(id).toString();
  } catch {
    throw new Error("Invalid id format");
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
    if (!entity) return jsonError("Missing or invalid entity");

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

    // screenings with relations
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
    return jsonError("Server error", 500);
  }
}

//
// ================= POST =================
//
export async function POST(req: Request) {
  try {
    const entity = getEntity(req);
    if (!entity) return jsonError("Missing or invalid entity");

    const body = await req.json();

    // ---------- MOVIES ----------
    if (entity === "movies") {
      if (!body.title) return jsonError("Title is required");

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
      if (!body.name) return jsonError("Hall name required");

      const rows = Number(body.row);
      const columns = Number(body.column);

      if (!rows || rows <= 0 || !columns || columns <= 0) {
        return jsonError("Rows and columns must be positive numbers");
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
        return jsonError("All fields required");

      const movie_id = parseId(body.movie_id);
      const hall_id = parseId(body.hall_id);
      const screening_type_id = parseId(body.screening_type_id);

      const movie = await prisma.movie.findUnique({ where: { id: movie_id } });
      if (!movie) return jsonError("Movie not found");
      if (!movie.onscreen) return jsonError("Movie is not on screen");

      const startDate = new Date(body.start);
      if (isNaN(startDate.getTime())) return jsonError("Invalid start date");

      const endDate = new Date(startDate.getTime() + movie.playtime * 60000);

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
        return jsonError("Another screening already occupies this hall at this time", 409);

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

    return jsonError("Unsupported entity");
  } catch (e) {
    console.error(e);
    return jsonError("Server error", 500);
  }
}

//
// ================= DELETE =================
//
export async function DELETE(req: Request) {
  try {
    const entity = getEntity(req);
    if (!entity) return jsonError("Missing or invalid entity");

    const body = await req.json();
    if (!body.id) return jsonError("Missing id");

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

    return jsonError("Unsupported entity");
  } catch (e) {
    console.error(e);
    return jsonError("Server error", 500);
  }
}
