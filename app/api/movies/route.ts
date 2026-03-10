import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

export async function GET() {
  const lang = await getLang();
  const t = messages[lang];

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
  } catch (err) {
    console.error("MOVIES ERROR:", err);
    return NextResponse.json(
      { message: t.movieFetchError },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    const { movieId } = await req.json();

    if (!movieId) {
      return NextResponse.json(
        { message: t.missingMovieId },
        { status: 400 }
      );
    }

    const res = NextResponse.json({ ok: true });

    res.cookies.set("selectedMovieId", movieId, {
      path: "/",
      httpOnly: false,
      sameSite: "lax",
    });

    return res;
  } catch (err) {
    console.error("SET MOVIE ERROR:", err);
    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const lang = await getLang();
  const t = messages[lang];

  try {
    const res = NextResponse.json({ ok: true });

    res.cookies.set("selectedMovieId", "", {
      path: "/",
      maxAge: 0,
    });

    return res;
  } catch (err) {
    console.error("CLEAR MOVIE ERROR:", err);
    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}