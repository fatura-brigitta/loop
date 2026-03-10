import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const lang = await getLang();
  const t = messages[lang];

  const { token } = await params;

  try {

    const result = await prisma.$transaction(async (tx) => {

      const ticket = await tx.ticket.findFirst({
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
        throw new Error("INVALID");
      }

      const now = new Date();
      const start = new Date(ticket.screenings!.start);

      const oneHourBefore = new Date(start);
      oneHourBefore.setHours(oneHourBefore.getHours() - 1);

      const fifteenMinutesAfter = new Date(start);
      fifteenMinutesAfter.setMinutes(fifteenMinutesAfter.getMinutes() + 15);

      if (now < oneHourBefore) {
        throw new Error("TOO_EARLY");
      }

      if (now > fifteenMinutesAfter) {
        throw new Error("EXPIRED");
      }

      await tx.ticket.update({
        where: { id: ticket.id },
        data: { used_at: new Date() }
      });

      return { ticket, used: false };
    });

    const { ticket, used } = result;

    return NextResponse.json({
      used,
      movie: ticket.screenings!.movies!.title,
      hall: ticket.screenings!.halls!.name,
      start: ticket.screenings!.start,
      row: ticket.chairs!.row,
      seat: ticket.chairs!.column,
      type: ticket.ticket_types!.type
    });

  } catch (err:any) {

    if (err.message === "INVALID") {
      return NextResponse.json(
        { message: t.invalidTicket },
        { status: 404 }
      );
    }

    if (err.message === "TOO_EARLY") {
      return NextResponse.json(
        { message: t.ticketScanTooEarly },
        { status: 400 }
      );
    }

    if (err.message === "EXPIRED") {
      return NextResponse.json(
        { message: t.ticketExpired },
        { status: 400 }
      );
    }

    console.error("SCAN ERROR:", err);

    return NextResponse.json(
      { error: t.serverError },
      { status: 500 }
    );
  }
}