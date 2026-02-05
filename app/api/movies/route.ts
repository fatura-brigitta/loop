import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const movies = await prisma.movie.findMany({
      where: {
        onscreen: true,
      },
      select: {
        id: true,
        title: true,
        director: true,
        actors: true,
        poster: true,
        playtime: true,
        language: true,
        genre: true,
        review: true,
        description: true,
      },
    });

    return NextResponse.json(movies);
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
