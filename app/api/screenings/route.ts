import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const movieId = (await cookieStore).get("selectedMovieId")?.value;

  const screenings = await prisma.screening.findMany({
    where: movieId ? { movie_id: movieId } : {},
    orderBy: { start: "asc" },
    include: {
      movies: true,
      screening_types: true,
    },
  });

  return NextResponse.json(screenings);
}