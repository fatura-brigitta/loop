import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

export async function GET() {
  const lang = await getLang();
  const t = messages[lang];

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
    return NextResponse.json({ message: t.serverError }, { status: 500 });
  }
}