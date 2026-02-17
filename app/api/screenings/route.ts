// import prisma from "@/lib/prisma";
// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export async function GET() {
//   const cookieStore = cookies();
//   const movieId = (await cookieStore).get("selectedMovieId")?.value;

//   const screenings = await prisma.screening.findMany({
//     where: movieId ? { movie_id: movieId } : {},
//     orderBy: { start: "asc" },
//     include: {
//       movies: true,
//       screening_types: true,
//     },
//   });

//   return NextResponse.json(screenings);
// }

import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

/* =====================================================
   GET  → Vetítések lekérése (movies → screenings oldal)
===================================================== */
export async function GET() {
  try {
    const cookieStore = await cookies();
    const movieId = cookieStore.get("selectedMovieId")?.value;

    const screenings = await prisma.screening.findMany({
      where: movieId ? { movie_id: movieId } : {},
      orderBy: { start: "asc" },
      include: {
        movies: true,
        screening_types: true,
      },
    });

    return NextResponse.json(screenings);
  } catch (err) {
    console.error("SCREENINGS ERROR:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

/* =====================================================
   POST → Vetítés kiválasztása (régi selectHall)
===================================================== */
export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ message: "Missing id" }, { status: 400 });
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
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

/* =====================================================
   PUT → Terem + székek lekérése (hall + hallByCookie)
===================================================== */
export async function PUT() {
  try {
    const cookieStore = await cookies();
    const screeningId = cookieStore.get("screeningId")?.value;

    if (!screeningId) {
      return NextResponse.json({ message: "Missing screening" }, { status: 400 });
    }

    const screening = await prisma.screening.findUnique({
      where: { id: screeningId },
    });

    if (!screening) {
      return NextResponse.json({ message: "Screening not found" }, { status: 404 });
    }

    const hall = await prisma.hall.findUnique({
      where: { id: screening.hall_id },
    });

    if (!hall) {
      return NextResponse.json({ message: "Hall not found" }, { status: 404 });
    }

    const chairs = await prisma.chair.findMany({
      where: { hall_id: hall.id },
      orderBy: [{ row: "asc" }, { column: "asc" }],
    });

    return NextResponse.json({
      hall,
      chairs,
    });
  } catch (err) {
    console.error("HALL LOAD ERROR:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}