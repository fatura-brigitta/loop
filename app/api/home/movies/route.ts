import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const movies = await prisma.movie.findMany({
      where: { onscreen: true },
    });

    if (!movies.length) {
      return NextResponse.json([]);
    }

    const shuffled = movies.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    return NextResponse.json(
      selected.map((m) => ({
        id: m.id,
        title: m.title,
        backdrop: m.backdrop,
        poster: m.poster,
        genre: m.genre,
        review: m.review,
        playtime: m.playtime,
      }))
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json([], { status: 500 });
  }
}