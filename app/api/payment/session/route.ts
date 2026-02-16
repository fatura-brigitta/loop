import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { calculateAge, getTicketTypeByAge, calculateTicketPrice } from "@/lib/price";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const paymentId = cookieStore.get("paymentSessionId")?.value;

    if (!paymentId) {
      return NextResponse.json({ message: "No payment session" }, { status: 400 });
    }

    const session = await prisma.payment_session.findUnique({
      where: { id: paymentId },
      include: {
        screenings: {
          include: {
            movies: true,
            halls: true,
            screening_types: true,
          },
        },
        users: true,
      },
    });

    if (!session || !session.screenings || !session.users) {
      return NextResponse.json({ message: "Invalid session" }, { status: 400 });
    }

    const age = calculateAge(new Date(session.users.birth_date));
    const ticketTypeName = getTicketTypeByAge(age);

    const ticketType = await prisma.ticket_type.findFirst({
      where: { type: ticketTypeName },
    });

    if (!ticketType) {
      return NextResponse.json({ message: "Ticket type missing" }, { status: 500 });
    }

    if ( !session || !session.screenings || !session.users || !session.screenings.screening_types || !session.screenings.movies || !session.screenings.halls
      ) {
      return NextResponse.json({ message: "Invalid session data" }, { status: 400 });
      }

    const screeningPercent = session.screenings.screening_types.percent;
    const ticketDiscount = ticketType.percent;

    const pricePerSeat = calculateTicketPrice(screeningPercent, ticketDiscount);

    const chairIds = session.chair_ids as unknown as string[];
    const totalPrice = pricePerSeat * chairIds.length;

    const chairs = await prisma.chair.findMany({
      where: { id: { in: chairIds } },
      orderBy: [{ row: "asc" }, { column: "asc" }],
    });
    
    return NextResponse.json({
      sessionId: session.id,
      movieTitle: session.screenings.movies.title,
      hallName: session.screenings.halls.name,
      start: session.screenings.start,
      seats: chairs.map((c) => ({
        row: c.row,
        column: c.column,
      })),
      totalPrice,
    });

  } catch (err) {
    console.error("PAYMENT SESSION ERROR:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}