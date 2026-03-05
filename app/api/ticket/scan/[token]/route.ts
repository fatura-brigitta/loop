import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ token: string }> }
) {

  const { token } = await params;

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
    return NextResponse.json({ error: "Érvénytelen jegy" }, { status: 404 });
  }

  const used = !!ticket.used_at;

  if (!used) {
    await prisma.ticket.update({
      where: { id: ticket.id },
      data: { used_at: new Date() }
    });
  }

  return NextResponse.json({
    used,
    movie: ticket.screenings!.movies!.title,
    hall: ticket.screenings!.halls!.name,
    start: ticket.screenings!.start,
    row: ticket.chairs!.row,
    seat: ticket.chairs!.column,
    type: ticket.ticket_types!.type
  });

}