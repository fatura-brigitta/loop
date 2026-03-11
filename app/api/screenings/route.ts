export const dynamic = "force-dynamic";

import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

import { rateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/getClientIp";
import { checkOrigin } from "@/lib/checkOrigin";

import { ZodError } from "zod";
import { z } from "zod";

const screeningSchema = z.object({
  id: z.string().trim().min(1)
});

export async function GET(req: Request) {

  const lang = await getLang();
  const t = messages[lang];

  try {

    const ip = getClientIp(req);
    rateLimit(`screenings-${ip}`, 60, 60_000);

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

    const res = NextResponse.json(
      safeScreenings,
      { headers: { "Cache-Control": "no-store" } }
    );

    res.cookies.set("selectedMovie", "", {
      maxAge: 0,
      path: "/",
    });

    return res;

  } catch (err) {

    console.error("SCREENINGS ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
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
    rateLimit(`select-screening-${ip}`, 20, 60_000);

    const { id } = screeningSchema.parse(await req.json());

    const res = NextResponse.json(
      { ok: true },
      { headers: { "Cache-Control": "no-store" } }
    );

    res.cookies.set("screeningId", id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return res;

  } catch (err: any) {

    if (err instanceof ZodError) {
      return NextResponse.json(
        { message: t.invalidId },
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

    console.error("SELECT SCREENING ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {

  const lang = await getLang();
  const t = messages[lang];

  try {

    checkOrigin(req);

    const ip = getClientIp(req);
    rateLimit(`screening-hall-${ip}`, 30, 60_000);

    const cookieStore = await cookies();
    const screeningId = cookieStore.get("screeningId")?.value;

    if (!screeningId) {
      return NextResponse.json(
        { message: t.missingScreening },
        { status: 400 }
      );
    }

    const screening = await prisma.screening.findUnique({
      where: { id: screeningId },
      include: {
        movies: true,
        screening_types: true
      }
    });

    if (!screening) {
      return NextResponse.json(
        { message: t.screeningNotFound },
        { status: 404 }
      );
    }

    const hall = await prisma.hall.findUnique({
      where: { id: screening.hall_id },
    });

    if (!hall) {
      return NextResponse.json(
        { message: t.hallNotFound },
        { status: 404 }
      );
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

    return NextResponse.json(
      {
        hall,
        chairs: chairsWithState,
        screening: {
          start: screening.start,
          type: screening.screening_types?.type,
          movie: {
            title: screening?.movies?.title
          }
        }
      },
      { headers: { "Cache-Control": "no-store" } }
    );

  } catch (err) {

    console.error("HALL LOAD ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}