import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const OPEN_HOUR = 10;
const CLOSE_HOUR = 22;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");
    if (!date) {
      return NextResponse.json({ error: "Hiányzó dátum" }, { status: 400 });
    }

    const dayStart = new Date(date);
    dayStart.setHours(OPEN_HOUR, 0, 0, 0);

    const dayEnd = new Date(date);
    dayEnd.setHours(CLOSE_HOUR, 0, 0, 0);

    const halls = await prisma.hall.findMany({ orderBy: { name: "asc" } });

    const screenings = await prisma.screening.findMany({
      where: {
        start: { lt: dayEnd },
        end: { gt: dayStart },
      },
      include: {
        movies: true,
        halls: true,
        screening_types: true,
      },
      orderBy: { start: "asc" },
    });

    return NextResponse.json({ halls, screenings, dayStart, dayEnd });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Szerver hiba" }, { status: 500 });
  }
}
