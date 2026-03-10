import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ token: string }> }
) {

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

      const used = !!ticket.used_at;

      if (!used) {
        await tx.ticket.update({
          where: { id: ticket.id },
          data: { used_at: new Date() }
        });
      }

      return { ticket, used };
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
        { error: "Érvénytelen jegy" },
        { status: 404 }
      );
    }

    console.error("SCAN ERROR:", err);

    return NextResponse.json(
      { error: "Szerver hiba" },
      { status: 500 }
    );
  }
}