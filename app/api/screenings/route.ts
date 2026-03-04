import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {

    const cookieStore = await cookies();
    const movieId = cookieStore.get("selectedMovie")?.value;

    const screenings = await prisma.screening.findMany({
      where: movieId ? { movie_id: movieId } : {},
      orderBy: { start: "asc" },
      include: {
        screening_types: true
      }
    });

    const movieIds = [...new Set(screenings.map(s => s.movie_id))];

    const movies = await prisma.movie.findMany({
      where: {
        id: { in: movieIds }
      }
    });

    const movieMap = new Map(movies.map(m => [m.id, m]));

    const safeScreenings = screenings
      .map(s => {
        const movie = movieMap.get(s.movie_id);
        if (!movie) return null;

        return {
          ...s,
          movies: movie
        };
      })
      .filter(Boolean);

    const res = NextResponse.json(safeScreenings);

    res.cookies.set("selectedMovie", "", {
      maxAge: 0,
      path: "/",
    });

    return res;

  } catch (err) {
    console.error("SCREENINGS ERROR:", err);
    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ message: "Hiányzó azonosító" }, { status: 400 });
    }

    const res = NextResponse.json({ ok: true });

    res.cookies.set("screeningId", id, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });

    return res;
  } catch (err) {
    console.error("SELECT SCREENING ERROR:", err);
    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}

export async function PUT() {
  try {
    const cookieStore = await cookies();
    const screeningId = cookieStore.get("screeningId")?.value;

    if (!screeningId) {
      return NextResponse.json({ message: "Hiányzó vetítés" }, { status: 400 });
    }

    const screening = await prisma.screening.findUnique({
      where: { id: screeningId },
    });

    if (!screening) {
      return NextResponse.json({ message: "Vetítés nem található" }, { status: 404 });
    }

    const hall = await prisma.hall.findUnique({
      where: { id: screening.hall_id },
    });

    if (!hall) {
      return NextResponse.json({ message: "Terem nem található" }, { status: 404 });
    }

    const chairs = await prisma.chair.findMany({
      where: { hall_id: hall.id },
      orderBy: [{ row: "asc" }, { column: "asc" }],
    });

    const takenTickets = await prisma.ticket.findMany({
      where: { screening_id: screeningId },
      select: { chair_id: true },
    });

    const takenChairIds = new Set(takenTickets.map(t => t.chair_id));

    const chairsWithState = chairs.map(chair => ({
      ...chair,
      state: takenChairIds.has(chair.id),
    }));

    return NextResponse.json({
      hall,
      chairs: chairsWithState,
    });

  } catch (err) {
    console.error("HALL LOAD ERROR:", err);
    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}