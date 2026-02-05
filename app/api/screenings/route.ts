import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const raw = (await cookieStore).get("selectedMovieId")?.value;
  const movieId = raw && raw.length > 0 ? raw : null;

  const screenings = await prisma.screening.findMany({
    where: movieId ? { movie_id: movieId } : undefined,
    orderBy: { start: "asc" },
    include: {
      movies: true,
      screening_types: true,
    },
  });

  return NextResponse.json(screenings);
}
