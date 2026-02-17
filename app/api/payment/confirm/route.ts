import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { calculateAge, getTicketTypeByAge, calculateTicketPrice } from "@/lib/price";
import { sendTicketEmail } from "@/lib/sendTicketEmail";

export async function POST() {
  try {
    const cookieStore = await cookies();
    const paymentId = cookieStore.get("paymentSessionId")?.value;

    if (!paymentId) {
      return NextResponse.json(
        { message: "No payment session" },
        { status: 400 }
      );
    }

    const session = await prisma.payment_session.findUnique({
      where: { id: paymentId },
    });

    if (!session || session.status === "paid") {
      return NextResponse.json(
        { message: "Invalid session" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user_id },
    });

    if (!user || !user.birth_date) {
      return NextResponse.json(
        { message: "User birthdate missing" },
        { status: 500 }
      );
    }

    const age = calculateAge(new Date(user.birth_date));
    const ticketTypeName = getTicketTypeByAge(age);

    const ticketType = await prisma.ticket_type.findFirst({
      where: { type: ticketTypeName },
    });

    if (!ticketType) {
      return NextResponse.json(
        { message: "Ticket type missing" },
        { status: 500 }
      );
    }

    const screening = await prisma.screening.findUnique({
      where: { id: session.screening_id },
      include: {
        screening_types: true,
      },
    });

    if (!screening || !screening.screening_types) {
      return NextResponse.json(
        { message: "Screening missing" },
        { status: 500 }
      );
    }

    const price = calculateTicketPrice(
      screening.screening_types.percent,
      ticketType.percent                
    );


    const chairIds = session.chair_ids as unknown as string[];

    await prisma.chair.updateMany({
      where: { id: { in: chairIds } },
      data: { state: true },
    });

    for (const chairId of chairIds) {
      await prisma.ticket.create({
        data: {
          user_id: session.user_id,
          screening_id: session.screening_id,
          screening_type_id: screening.screening_type_id,
          chair_id: chairId,
          ticket_type_id: ticketType.id,
          price: price,
        },
      });

    }

    await prisma.payment_session.update({
      where: { id: paymentId },
      data: { status: "paid" },
    });

    const tickets = await prisma.ticket.findMany({
      where: {
        user_id: session.user_id,
        screening_id: session.screening_id,
        chair_id: { in: chairIds },
      },
      include: {
        screenings: {
          include: {
            movies: true,
            halls: true,
            screening_types: true,
          },
        },
        chairs: true,
        ticket_types: true,
      },
    });

    await sendTicketEmail({
      to: user.email,
      name: user.name,
      tickets,
    });

    const res = NextResponse.json({ ok: true });
    res.cookies.set("paymentSessionId", "", { maxAge: 0, path: "/" });

    return res;
  } catch (err) {
    console.error("CONFIRM ERROR:", err);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}