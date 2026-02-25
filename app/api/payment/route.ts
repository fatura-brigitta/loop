export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { calculateTicketPrice } from "@/lib/price";
import { sendTicketEmail } from "@/lib/sendTicketEmail";
import { generateQrToken } from "@/lib/generateQrToken";

/* ================= CREATE SESSION ================= */

async function handleCreate(req: NextRequest) {
  try {
    const cookieStore = await cookies();

    const userId = cookieStore.get("userId")?.value;
    const screeningId = cookieStore.get("screeningId")?.value;

    if (!userId || !screeningId)
      return NextResponse.json({ message: "Nem megfelelő azonosító" }, { status: 401 });

    const { seatIds } = await req.json();

    if (!seatIds || seatIds.length === 0)
      return NextResponse.json({ message: "Nincs kiválasztott szék" }, { status: 400 });

    const session = await prisma.payment_session.create({
      data: {
        user_id: userId,
        screening_id: screeningId,
        chair_ids: seatIds,
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
    return NextResponse.json({ message: "Nem sikerült elindítani a fizetést" }, { status: 500 });
  }
}

/* ================= GET SESSION ==================== */

async function handleSession() {
    try {
      const cookieStore = await cookies();
      const paymentId = cookieStore.get("paymentSessionId")?.value;

      if (!paymentId)
        return NextResponse.json({ message: "Nincs fizetési munkamenet" }, { status: 400 });

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

      if (
        !session ||
        !session.screenings ||
        !session.screenings.screening_types ||
        !session.screenings.movies ||
        !session.screenings.halls
      ) {
        return NextResponse.json({ message: "Érvénytelen munkamenet adatok" }, { status: 400 });
      }

      const chairIds = session.chair_ids as unknown as string[];

      const chairs = await prisma.chair.findMany({
        where: { id: { in: chairIds } },
        orderBy: [{ row: "asc" }, { column: "asc" }],
      });

      const normalType = await prisma.ticket_type.findFirst({
        where: { type: "Normál" },
      });

      if (!normalType)
        return NextResponse.json({ message: "A jegytípus hiányzik" }, { status: 500 });

      const pricePerSeat = calculateTicketPrice(
        session.screenings.screening_types.percent,
        normalType.percent
      );

      const totalPrice = pricePerSeat * chairIds.length;

      return NextResponse.json({
        sessionId: session.id,
        movieTitle: session.screenings.movies.title,
        hallName: session.screenings.halls.name,
        start: session.screenings.start,
        screeningType: session.screenings.screening_types.type,
        ticketType: null,
        seats: chairs.map((c) => ({
          row: c.row,
          column: c.column,
        })),
        totalPrice,
      });
    } catch (err) {
      console.error("PAYMENT SESSION ERROR:", err);
      return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
    }
  }

  async function handlePrice(req: NextRequest) {
    try {
      const cookieStore = await cookies();
      const paymentId = cookieStore.get("paymentSessionId")?.value;

      if (!paymentId)
        return NextResponse.json({ message: "Nincs fizetési munkamenet" }, { status: 400 });

      const { ticketType } = await req.json();

      if (!ticketType)
        return NextResponse.json({ message: "Hiányzó jegytípus" }, { status: 400 });

      const session = await prisma.payment_session.findUnique({
        where: { id: paymentId },
        include: {
          screenings: {
            include: { screening_types: true },
          },
        },
      });

      if (!session || !session.screenings || !session.screenings.screening_types)
        return NextResponse.json({ message: "Érvénytelen munkamenet" }, { status: 400 });

      const type = await prisma.ticket_type.findFirst({
        where: { type: ticketType },
      });

      if (!type)
        return NextResponse.json({ message: "A jegytípus hiányzik" }, { status: 400 });

      const chairIds = session.chair_ids as unknown as string[];

      const pricePerSeat = calculateTicketPrice(
        session.screenings.screening_types.percent,
        type.percent
      );

      const totalPrice = pricePerSeat * chairIds.length;

      return NextResponse.json({ totalPrice });
    } catch (err) {
      console.error("PRICE ERROR:", err);
      return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
    }
  }

/* ================= CONFIRM PAYMENT ================ */

async function handleConfirm(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const paymentId = cookieStore.get("paymentSessionId")?.value;

    if (!paymentId)
      return NextResponse.json({ message: "Nincs fizetési munkamenet" }, { status: 400 });

    const body = await req.json();
    const chosenType = body.ticketType;

    if (!chosenType)
      return NextResponse.json({ message: "Hiányzó jegytípus" }, { status: 400 });

    const session = await prisma.payment_session.findUnique({
      where: { id: paymentId },
    });

    if (!session || session.status === "paid")
      return NextResponse.json({ message: "Érvénytelen munkamenet" }, { status: 400 });

    const user = await prisma.user.findUnique({
      where: { id: session.user_id },
    });

    if (!user)
      return NextResponse.json({ message: "A felhasználó hiányzik" }, { status: 500 });

    const ticketType = await prisma.ticket_type.findFirst({
      where: { type: chosenType },
    });

    if (!ticketType)
      return NextResponse.json({ message: "A jegytípus hiányzik" }, { status: 500 });

    const screening = await prisma.screening.findUnique({
      where: { id: session.screening_id },
      include: { screening_types: true },
    });

    if (!screening || !screening.screening_types)
      return NextResponse.json({ message: "A vetítés vagy a vetítés típusa hiányzik" }, { status: 500 });

    const price = calculateTicketPrice(
      screening.screening_types.percent,
      ticketType.percent
    );

    const chairIds = session.chair_ids as unknown as string[];

    await prisma.$transaction(async (tx) => {

      const originalUser = await tx.user.findUnique({
        where: { id: session.user_id },
      });

      if (!originalUser) throw new Error("User not found");

      for (const chairId of chairIds) {
        await tx.ticket.create({
          data: {
            user_id: session.user_id,
            screening_id: session.screening_id,
            screening_type_id: screening.screening_type_id,
            chair_id: chairId,
            ticket_type_id: ticketType.id,
            price: price,
            qr_token: generateQrToken(),
          },
        });
      }

      const gainedPoints = Math.floor((price * chairIds.length) / 50);

      const updatedUser = await tx.user.update({
        where: { id: session.user_id },
        data: {
          points: {
            increment: gainedPoints,
          },
        },
      });

      const ranks = await tx.rank.findMany({
        orderBy: { point_limit: "asc" },
      });

      let newRank = ranks[0];

      for (const r of ranks) {
        if (updatedUser.points >= r.point_limit) {
          newRank = r;
        }
      }

      if (String(newRank.id) !== String(originalUser.rank_id)) {

        await tx.user.update({
          where: { id: updatedUser.id },
          data: { rank_id: newRank.id },
        });

        if (newRank.discount_id) {
          await tx.coupon.create({
            data: {
              user_id: updatedUser.id,
              discount_id: newRank.discount_id,
              qr_token: generateQrToken(),
              used: false,
            },
          });
        }
      }

      await tx.payment_session.update({
        where: { id: paymentId },
        data: { status: "paid" },
      });
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

    sendTicketEmail({
      to: user.email,
      name: user.name,
      tickets,
    }).catch((err) => console.error("EMAIL HIBA:", err));

    const res = NextResponse.json({ ok: true });
    res.cookies.set("paymentSessionId", "", { maxAge: 0, path: "/" });

    return res;

  } catch (err) {
    console.error("CONFIRM ERROR:", err);
    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}

/* ================= ROUTER ========================= */

export async function POST(req: NextRequest) {
  const action = req.nextUrl.searchParams.get("action");

  if (action === "create") return handleCreate(req);
  if (action === "confirm") return handleConfirm(req);
  if (action === "price") return handlePrice(req);

  return NextResponse.json({ message: "Érvénytelen művelet" }, { status: 400 });
}

export async function GET(req: NextRequest) {
  const action = req.nextUrl.searchParams.get("action");

  if (action === "session") return handleSession();

  return NextResponse.json({ message: "Érvénytelen művelet" }, { status: 400 });
}