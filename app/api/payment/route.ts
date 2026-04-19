export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { calculateTicketPrice } from "@/lib/price";
import { sendTicketEmail } from "@/lib/sendTicketEmail";
import { generateQrToken } from "@/lib/generateQrToken";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

import { rateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/getClientIp";
import { checkOrigin } from "@/lib/checkOrigin";
import { paymentCreateSchema, paymentPriceSchema } from "@/lib/validators";
import { ZodError } from "zod";

async function handleCreate(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    checkOrigin(req);

    const ip = getClientIp(req);
    rateLimit(`payment-create-${ip}`, 5, 60_000);

    const cookieStore = await cookies();

    const { seatIds, ticketTypes } =
      paymentCreateSchema.parse(await req.json());

    const userId = cookieStore.get("userId")?.value;
    const screeningId = cookieStore.get("screeningId")?.value;

    if (!userId || !screeningId)
      return NextResponse.json(
        { message: t.invalidId },
        { status: 401 }
      );

    if (ticketTypes && ticketTypes.length > 0 && ticketTypes.length !== seatIds.length) {
      return NextResponse.json(
        { message: t.missingTicketTypes },
        { status: 400 }
      );
    }

    const session = await prisma.payment_session.create({
      data: {
        user_id: userId,
        screening_id: screeningId,
        chair_ids: seatIds,
        selected_ticket_types: ticketTypes ?? [],
        status: "pending",
      },
    });

    const res = NextResponse.json(
      { ok: true },
      { headers: { "Cache-Control": "no-store" } }
    );

    res.cookies.set("paymentSessionId", session.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
    return res;

  } catch (err: any) {
    if (err instanceof ZodError)
      return NextResponse.json({ message: t.invalidData }, { status: 400 });

    if (err.message === "RATE_LIMIT")
      return NextResponse.json({ message: t.rateLimitError }, { status: 429 });

    if (err.message === "CSRF")
      return NextResponse.json({ message: t.csrfError }, { status: 403 });

    console.error("PAYMENT CREATE ERROR:", err);

    return NextResponse.json(
      { message: t.paymentStartError },
      { status: 500 }
    );
  }
}

async function handleSession() {
  const lang = await getLang();
  const t = messages[lang];

  try {
    const cookieStore = await cookies();
    const paymentId = cookieStore.get("paymentSessionId")?.value;
    const userId = cookieStore.get("userId")?.value;

    if (!paymentId || !userId)
      return NextResponse.json(
        { message: t.noSession },
        { status: 400 }
      );

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

    if (!session || !session.screenings || session.user_id !== userId)
      return NextResponse.json(
        { message: t.invalidSession },
        { status: 400 }
      );

    const chairIds = session.chair_ids as string[];

    const chairs = await prisma.chair.findMany({
      where: { id: { in: chairIds } },
      orderBy: [{ row: "asc" }, { column: "asc" }],
    });

    const ticketTypes = await prisma.ticket_type.findMany();

    const baseType = await prisma.ticket_type.findFirst({
      where: { type: "Normál" },
    });

    const pricePerSeat = calculateTicketPrice(
      session.screenings.screening_types!.percent,
      baseType?.percent ?? 0
    );

    const totalPrice = pricePerSeat * chairIds.length;

    return NextResponse.json(
      {
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
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (err) {
    console.error("PAYMENT SESSION ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}

async function handlePrice(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    checkOrigin(req);

    const ip = getClientIp(req);
    rateLimit(`payment-price-${ip}`, 20, 60_000);

    const cookieStore = await cookies();

    const paymentId = cookieStore.get("paymentSessionId")?.value;
    const userId = cookieStore.get("userId")?.value;

    if (!paymentId || !userId)
      return NextResponse.json(
        { message: t.noSession },
        { status: 400 }
      );

    const { ticketTypes } =
      paymentPriceSchema.parse(await req.json());

    const session = await prisma.payment_session.findUnique({
      where: { id: paymentId },
      include: {
        screenings: {
          include: { screening_types: true },
        },
      },
    });

    if (!session || !session.screenings || session.user_id !== userId)
      return NextResponse.json(
        { message: t.invalidSession },
        { status: 400 }
      );

    let totalPrice = 0;

    for (const typeName of ticketTypes) {
      const type = await prisma.ticket_type.findFirst({
        where: { type: typeName },
      });

      if (!type) continue;

      const price = calculateTicketPrice(
        session.screenings.screening_types!.percent,
        type.percent
      );
      totalPrice += price;
    }

    return NextResponse.json(
      { totalPrice },
      { headers: { "Cache-Control": "no-store" } }
    );

  } catch (err: any) {
    if (err instanceof ZodError)
      return NextResponse.json({ message: t.invalidData }, { status: 400 });

    if (err.message === "RATE_LIMIT")
      return NextResponse.json({ message: t.rateLimitError }, { status: 429 });

    if (err.message === "CSRF")
      return NextResponse.json({ message: t.csrfError }, { status: 403 });

    console.error("PRICE ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}

async function handleConfirm(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    checkOrigin(req);

    const ip = getClientIp(req);
    rateLimit(`payment-confirm-${ip}`, 5, 60_000);

    const cookieStore = await cookies();

    const paymentId = cookieStore.get("paymentSessionId")?.value;
    const userId = cookieStore.get("userId")?.value;

    if (!paymentId || !userId)
      return NextResponse.json(
        { message: t.noSession },
        { status: 400 }
      );

    const session = await prisma.payment_session.findUnique({
      where: { id: paymentId },
    });

    if (!session || session.status === "paid" || session.user_id !== userId)
      return NextResponse.json(
        { message: t.invalidSession },
        { status: 400 }
      );

    const chairIds = session.chair_ids as string[];
    const ticketTypes = (session.selected_ticket_types as string[]) ?? [];

    if (ticketTypes.length === 0 || ticketTypes.length !== chairIds.length)
      return NextResponse.json(
        { message: t.missingTicketTypes },
        { status: 400 }
      );

    const screening = await prisma.screening.findUnique({
      where: { id: session.screening_id },
      include: {
        screening_types: true,
        movies: true,
        halls: true,
      },
    });

    const createdTicketIds: string[] = [];
    let totalSpent = 0;
    let rankUp: null | { name: string; image: string } = null;

    await prisma.$transaction(async (tx) => {

      const existingTickets = await tx.ticket.findMany({
        where: {
          screening_id: session.screening_id,
          chair_id: { in: chairIds }
        }
      });

      if (existingTickets.length > 0)
        throw new Error("SEAT_TAKEN");

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
      const gainedPoints = Math.round(totalEuro * 6);

      const user = await tx.user.findUnique({
        where: { id: session.user_id },
        include: { ranks: true }
      });

      const oldPoints = user!.points;
      const newPoints = oldPoints + gainedPoints;

      await tx.user.update({
        where: { id: session.user_id },
        data: {
          points: newPoints,
          last_ticket_at: new Date()
        }
      });

      const newRank = await tx.rank.findFirst({
        where: {
          point_limit: {
            lte: newPoints
          }
        },
        orderBy: {
          point_limit: "desc"
        }
      });

      if (newRank && newRank.id !== user!.rank_id) {
        const oldLimit = user!.ranks?.point_limit ?? 0;

        if (newRank.point_limit > oldLimit) {
          rankUp = {
            name: newRank.name,
            image: newRank.image
          };

          if (newRank.discount_id) {
            await tx.coupon.create({
              data: {
                user_id: session.user_id,
                discount_id: newRank.discount_id,
                qr_token: generateQrToken()
              }
            });
          }
        }

        await tx.user.update({
          where: { id: session.user_id },
          data: { rank_id: newRank.id }
        });
      }
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

    const res = NextResponse.json(
      { ok: true, rankUp},
      { headers: { "Cache-Control": "no-store" } },
    );

    res.cookies.set("paymentSessionId", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0,
      path: "/",
    });

    return res;

  } catch (err: any) {
    if (err.message === "SEAT_TAKEN")
      return NextResponse.json(
        { message: t.seatTaken },
        { status: 400 }
      );

    if (err.message === "RATE_LIMIT")
      return NextResponse.json(
        { message: t.rateLimitError },
        { status: 429 }
      );

    if (err.message === "CSRF")
      return NextResponse.json(
        { message: t.csrfError },
        { status: 403 }
      );

    console.error("CONFIRM ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
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