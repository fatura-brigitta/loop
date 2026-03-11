export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

import { rateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/getClientIp";
import { checkOrigin } from "@/lib/checkOrigin";

import { z } from "zod";
import { ZodError } from "zod";

const movieSelectSchema = z.object({
  movieId: z.string().trim().min(1),
});

export async function GET(req: Request) {

  const lang = await getLang();
  const t = messages[lang];

  try {

    const ip = getClientIp(req);
    rateLimit(`movies-${ip}`, 60, 60_000);

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

    return NextResponse.json(
      movies,
      { headers: { "Cache-Control": "no-store" } }
    );

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

    checkOrigin(req);

    const ip = getClientIp(req);
    rateLimit(`movies-select-${ip}`, 30, 60_000);

    const { movieId } =
      movieSelectSchema.parse(await req.json());

    const res = NextResponse.json(
      { ok: true },
      { headers: { "Cache-Control": "no-store" } }
    );

    res.cookies.set("selectedMovieId", movieId, {
      path: "/",
      httpOnly: false,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return res;

  } catch (err: any) {

    if (err instanceof ZodError) {
      return NextResponse.json(
        { message: t.missingMovieId },
        { status: 400 }
      );
    }

    if (err.message === "RATE_LIMIT") {
      return NextResponse.json(
        { message: t.rateLimitError },
        { status: 429 }
      );
    }

    if (err.message === "CSRF") {
      return NextResponse.json(
        { message: t.csrfError },
        { status: 403 }
      );
    }

    console.error("SET MOVIE ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {

  const lang = await getLang();
  const t = messages[lang];

  try {

    checkOrigin(req);

    const ip = getClientIp(req);
    rateLimit(`movies-clear-${ip}`, 30, 60_000);

    const res = NextResponse.json(
      { ok: true },
      { headers: { "Cache-Control": "no-store" } }
    );

    res.cookies.set("selectedMovieId", "", {
      path: "/",
      maxAge: 0,
      secure: process.env.NODE_ENV === "production",
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