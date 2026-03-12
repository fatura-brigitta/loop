import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

import { rateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/getClientIp";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ token: string }> }
) {

  const ip = getClientIp(req as any);
  rateLimit(ip, 30, 60000);

  const lang = await getLang();
  const t = messages[lang];

  const { token } = await params;

  if (!token || token.length < 20) {
    return NextResponse.json({
      status: "INVALID",
      message: t.invalidTicket
    });
  }

  try {

    const ticket = await prisma.ticket.findFirst({
      where: { qr_token: token },
      include: {
        chairs: true,
        ticket_types: true,
        screenings: {
          include: {
            movies: true,
            halls: true,
            screening_types: true
          }
        }
      }
    });

    if (!ticket) {
      return NextResponse.json({
        status: "INVALID",
        message: t.invalidTicket
      });
    }

    const screening = ticket.screenings!;
    const movie = screening.movies!.title;

    const responseData = {
      movie,
      hall: screening.halls!.name,
      start: screening.start,
      row: ticket.chairs!.row,
      seat: ticket.chairs!.column,
      type: ticket.ticket_types!.type
    };

    const now = new Date();
    const start = new Date(screening.start);

    const oneHourBefore = new Date(start);
    oneHourBefore.setHours(oneHourBefore.getHours() - 1);

    const fifteenMinutesAfter = new Date(start);
    fifteenMinutesAfter.setMinutes(fifteenMinutesAfter.getMinutes() + 15);

    if (now < oneHourBefore) {
      return NextResponse.json({
        status: "TOO_EARLY",
        ...responseData
      });
    }

    if (now > fifteenMinutesAfter) {
      return NextResponse.json({
        status: "EXPIRED",
        ...responseData
      });
    }

    if (ticket.used_at) {
      return NextResponse.json({
        status: "USED",
        used: true,
        ...responseData
      });
    }

    await prisma.ticket.update({
      where: { id: ticket.id },
      data: { used_at: new Date() }
    });

    return NextResponse.json({
      status: "VALID",
      used: false,
      ...responseData
    });

  } catch (err: any) {

    if (err.message === "RATE_LIMIT") {
      return NextResponse.json(
        { status: "RATE_LIMIT", message: "Too many scans" },
        { status: 429 }
      );
    }

    console.error("SCAN ERROR:", err);

    return NextResponse.json(
      { status: "ERROR", message: t.serverError },
      { status: 500 }
    );
  }
}