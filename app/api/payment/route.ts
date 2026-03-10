export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { calculateTicketPrice } from "@/lib/price";
import { sendTicketEmail } from "@/lib/sendTicketEmail";
import { generateQrToken } from "@/lib/generateQrToken";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

async function handleCreate(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];
  try {
    const cookieStore = await cookies();
    const body = await req.json();

    const seatIds = body.seatIds;
    const ticketTypes = body.ticketTypes;

    const userId = cookieStore.get("userId")?.value;
    const screeningId = cookieStore.get("screeningId")?.value;

    if (!userId || !screeningId)
      return NextResponse.json({ message: t.invalidId }, { status: 401 });

    if (!seatIds || seatIds.length === 0)
      return NextResponse.json({ message: t.noSeatSelected }, { status: 400 });

    const session = await prisma.payment_session.create({
      data: {
        user_id: userId,
        screening_id: screeningId,
        chair_ids: seatIds,
        selected_ticket_types: ticketTypes ?? [],
        status: "pending",
      },
    });

    const res = NextResponse.json({ ok: true });

    res.cookies.set("paymentSessionId", session.id, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });

    return res;
  } catch (err) {
    console.error("PAYMENT CREATE ERROR:", err);
    return NextResponse.json({ message: t.paymentStartError }, { status: 500 });
  }
}

async function handleSession() {
  const lang = await getLang();
  const t = messages[lang];

  try {

    const cookieStore = await cookies();
    const paymentId = cookieStore.get("paymentSessionId")?.value;

    if (!paymentId)
      return NextResponse.json({ message: t.noSession }, { status: 400 });

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
      },
    });

    if (!session || !session.screenings)
      return NextResponse.json({ message: t.invalidSession }, { status: 400 });

    const chairIds = session.chair_ids as string[];

    const chairs = await prisma.chair.findMany({
      where: { id: { in: chairIds } },
      orderBy: [{ row: "asc" }, { column: "asc" }],
    });

    const ticketTypes = await prisma.ticket_type.findMany();

    const baseType = await prisma.ticket_type.findFirst({
      where: { type: "Normál" }
    });

    const pricePerSeat = calculateTicketPrice(
      session.screenings.screening_types!.percent,
      baseType?.percent ?? 0
    );

    const totalPrice = pricePerSeat * chairIds.length;

    return NextResponse.json({
      sessionId: session.id,
      movieTitle: session.screenings.movies?.title,
      hallName: session.screenings.halls?.name,
      start: session.screenings.start,
      screeningType: session.screenings.screening_types?.type,
      seats: chairs.map((c) => ({
        row: c.row,
        column: c.column,
      })),
      ticketTypes,
      totalPrice
    });

  } catch (err) {
    console.error("PAYMENT SESSION ERROR:", err);
    return NextResponse.json({ message: t.serverError }, { status: 500 });
  }
}

async function handlePrice(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  try {

    const cookieStore = await cookies();
    const paymentId = cookieStore.get("paymentSessionId")?.value;

    if (!paymentId)
      return NextResponse.json({ message: t.noSession }, { status: 400 });

    const { ticketTypes } = await req.json();

    const session = await prisma.payment_session.findUnique({
      where: { id: paymentId },
      include: {
        screenings: {
          include: { screening_types: true },
        },
      },
    });

    if (!session || !session.screenings)
      return NextResponse.json({ message: t.invalidSession }, { status: 400 });

    let totalPrice = 0;

    for (const typeName of ticketTypes) {

      const type = await prisma.ticket_type.findFirst({
        where: { type: typeName }
      });

      if (!type) continue;

      const price = calculateTicketPrice(
        session.screenings.screening_types!.percent,
        type.percent
      );

      totalPrice += price;
    }

    return NextResponse.json({ totalPrice });

  } catch (err) {
    console.error("PRICE ERROR:", err);
    return NextResponse.json({ message: t.serverError }, { status: 500 });
  }
}

async function handleConfirm(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  try {

    const cookieStore = await cookies();
    const paymentId = cookieStore.get("paymentSessionId")?.value;

    if (!paymentId)
      return NextResponse.json({ message: t.noSession }, { status: 400 });

    const session = await prisma.payment_session.findUnique({
      where: { id: paymentId },
    });

    if (!session || session.status === "paid")
      return NextResponse.json({ message: t.invalidSession }, { status: 400 });

    const ticketTypes = (session.selected_ticket_types as string[]) ?? [];

    if (ticketTypes.length === 0)
      return NextResponse.json({ message: t.missingTicketTypes }, { status: 400 });

    const screening = await prisma.screening.findUnique({
      where: { id: session.screening_id },
      include: {
        screening_types: true,
        movies: true,
        halls: true,
      },
    });

    const chairIds = session.chair_ids as string[];

    const createdTicketIds: string[] = [];
    let totalSpent = 0;

    await prisma.$transaction(async (tx) => {

      const existingTickets = await tx.ticket.findMany({
        where: {
          screening_id: session.screening_id,
          chair_id: { in: chairIds }
        }
      });

      if (existingTickets.length > 0) {
        throw new Error("SEAT_TAKEN");
      }

      for (let i = 0; i < chairIds.length; i++) {

        const chairId = chairIds[i];
        const typeName = ticketTypes[i];

        const type = await tx.ticket_type.findFirst({
          where: { type: typeName }
        });

        if (!type) continue;

        const price = calculateTicketPrice(
          screening!.screening_types!.percent,
          type.percent
        );

        const ticket = await tx.ticket.create({
          data: {
            user_id: session.user_id,
            screening_id: screening!.id,
            screening_type_id: screening!.screening_type_id,
            chair_id: chairId,
            ticket_type_id: type.id,
            price,
            qr_token: generateQrToken(),
          },
        });

        totalSpent += price;
        createdTicketIds.push(ticket.id);
      }

      await tx.payment_session.update({
        where: { id: paymentId },
        data: { status: "paid" }
      });

      const totalEuro = totalSpent / 100;
      const gainedPoints = Math.round(totalEuro * 4);

      await tx.user.update({
        where: { id: session.user_id },
        data: {
          points: {
            increment: gainedPoints
          },
          last_ticket_at: new Date()
        }
      });

    });

    const tickets = await prisma.ticket.findMany({
      where: { id: { in: createdTicketIds } },
      include: {
        chairs: true,
        ticket_types: true,
        users: true,
        screenings: {
          include: {
            movies: true,
            halls: true,
            screening_types: true,
          }
        }
      }
    });

    await sendTicketEmail({
      to: tickets[0].users?.email ?? "",
      name: tickets[0].users?.name ?? "",
      tickets
    });

    const res = NextResponse.json({ ok: true });
    res.cookies.set("paymentSessionId", "", { maxAge: 0, path: "/" });

    return res;

  } catch (err: any) {
      if(err.message === "SEAT_TAKEN"){
        return NextResponse.json(
          { message: t.seatTaken },
          { status: 400 }
        );
      }

    console.error("CONFIRM ERROR:", err);
    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  const action = req.nextUrl.searchParams.get("action");

  if (action === "create") return handleCreate(req);
  if (action === "confirm") return handleConfirm(req);
  if (action === "price") return handlePrice(req);

  return NextResponse.json({ message: t.invalidAction }, { status: 400 });
}

export async function GET(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  const action = req.nextUrl.searchParams.get("action");

  if (action === "session") return handleSession();

  return NextResponse.json({ message: t.invalidAction }, { status: 400 });
}