export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { calculateTicketPrice } from "@/lib/price";
import { sendTicketEmail } from "@/lib/sendTicketEmail";
import { generateQrToken } from "@/lib/generateQrToken";

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

      let selectedType;

      if (session.ticket_type_id) {
        selectedType = await prisma.ticket_type.findUnique({
          where: { id: session.ticket_type_id },
        });
      } else {
        selectedType = await prisma.ticket_type.findFirst({
          where: { type: "Normál" },
        });
      }

      if (!selectedType)
        return NextResponse.json({ message: "A jegytípus hiányzik" }, { status: 500 });

      const pricePerSeat = calculateTicketPrice(
        session.screenings.screening_types.percent,
        selectedType!.percent
      );

      const totalPrice = pricePerSeat * chairIds.length;

      return NextResponse.json({
        sessionId: session.id,
        movieTitle: session.screenings.movies.title,
        hallName: session.screenings.halls.name,
        start: session.screenings.start,
        screeningType: session.screenings.screening_types.type,
        ticketType: selectedType.type,
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
      const type = await prisma.ticket_type.findFirst({
        where: { type: ticketType },
      });

      if (!type)
        return NextResponse.json({ message: "A jegytípus hiányzik" }, { status: 400 });
      await prisma.payment_session.update({
        where: { id: paymentId },
        data: {
          ticket_type_id: type.id
        }
      });

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

async function handleConfirm(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const paymentId = cookieStore.get("paymentSessionId")?.value;

    if (!paymentId)
      return NextResponse.json({ message: "Nincs fizetési munkamenet" }, { status: 400 });

    const { ticketType } = await req.json();

    const session = await prisma.payment_session.findUnique({
      where: { id: paymentId },
    });

    if (!session || session.status === "paid")
      return NextResponse.json({ message: "Érvénytelen munkamenet" }, { status: 400 });

    const userBefore = await prisma.user.findUnique({
      where: { id: session.user_id },
      select: {
        id: true,
        name: true,
        email: true,
        rank_id: true,
        points: true,
      },
    });

    if (!userBefore)
      return NextResponse.json({ message: "Felhasználó nem található" }, { status: 500 });

    const screening = await prisma.screening.findUnique({
      where: { id: session.screening_id },
      include: {
        screening_types: true,
        movies: true,
        halls: true,
      },
    });

    const type = await prisma.ticket_type.findFirst({
      where: { type: ticketType },
    });

    if (!screening || !type)
      return NextResponse.json({ message: "Hiányzó adatok" }, { status: 500 });

    const chairIds = session.chair_ids as string[];

    const price = calculateTicketPrice(
      screening.screening_types!.percent,
      type.percent
    );

    const createdTicketIds: string[] = [];

    for (const chairId of chairIds) {
      const ticket = await prisma.ticket.create({
        data: {
          user_id: userBefore.id,
          screening_id: screening.id,
          screening_type_id: screening.screening_type_id,
          chair_id: chairId,
          ticket_type_id: type.id,
          price,
          qr_token: generateQrToken(),
        },
      });

      createdTicketIds.push(ticket.id);
    }

    const gainedPoints = Math.floor((price * chairIds.length) / 50);

    const userAfter = await prisma.user.update({
      where: { id: userBefore.id },
      data: {
        points: { increment: gainedPoints },
      },
    });

    const ranks = await prisma.rank.findMany({
      orderBy: { point_limit: "asc" },
    });

    let calculatedRank = ranks[0];

    for (const r of ranks) {
      if (userAfter.points >= r.point_limit) {
        calculatedRank = r;
      }
    }

    if (String(calculatedRank.id) !== String(userBefore.rank_id)) {

      await prisma.user.update({
        where: { id: userBefore.id },
        data: { rank_id: calculatedRank.id },
      });

      NextResponse.json({ message: `Gratulálunk, elértél egy új rangot: ${calculatedRank.name}!`}, { status: 200 });

      if (calculatedRank.discount_id) {

        await prisma.coupon.create({
          data: {
            user_id: userBefore.id,
            discount_id: calculatedRank.discount_id,
            qr_token: generateQrToken(),
            used: false,
          },
        });

        NextResponse.json({ message: `Kupon létrehozva!`}, { status: 200 });
      }
    }

    await prisma.payment_session.update({
      where: { id: paymentId },
      data: { status: "paid" },
    });

    const fullTickets = await prisma.ticket.findMany({
      where: {
        id: { in: createdTicketIds }
      },
      include: {
        chairs: true,
        ticket_types: true,
        screenings: {
          include: {
            movies: true,
            halls: true,
            screening_types: true,
          }
        }
      }
    });

    try {
      await sendTicketEmail({
        to: userBefore.email,
        name: userBefore.name,
        tickets: fullTickets
      });

      NextResponse.json({ message: "Jegyek sikeresen elküldve" }, { status: 200 });
    } catch (err) {
      NextResponse.json({ message: "Nem sikerült elküldeni a jegyeket" }, { status: 500 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set("paymentSessionId", "", { maxAge: 0, path: "/" });

    return res;

  } catch (err) {
    if(err instanceof Error) {
      NextResponse.json({ message: `Fizetési hiba: ${err.message}` }, { status: 500 });
    }
    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}

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