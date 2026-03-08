import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {

    const screeningTypes = await prisma.screening_type.findMany({
      orderBy: { percent: "asc" },
    });

    const ticketTypes = await prisma.ticket_type.findMany({
      orderBy: { percent: "asc" },
    });

    return NextResponse.json({
      screeningTypes,
      ticketTypes,
      basePrice: 500,
    });

  } catch (e) {
    return NextResponse.json({ message: "Hiba" }, { status: 500 });
  }
}