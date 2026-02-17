export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { calculateAge, getTicketTypeByAge, calculateTicketPrice } from "@/lib/price";
import { sendTicketEmail } from "@/lib/sendTicketEmail";

/* ================= CREATE SESSION ================= */

async function handleCreate(req: NextRequest) {
  try {
    const cookieStore = await cookies();

    const userId = cookieStore.get("userId")?.value;
    const screeningId = cookieStore.get("screeningId")?.value;

    if (!userId || !screeningId)
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const { seatIds } = await req.json();

    if (!seatIds || seatIds.length === 0)
      return NextResponse.json({ message: "No seats selected" }, { status: 400 });

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
    return NextResponse.json({ message: "Could not start payment" }, { status: 500 });
  }
}

/* ================= GET SESSION ==================== */

async function handleSession() {
  try {
    const cookieStore = await cookies();
    const paymentId = cookieStore.get("paymentSessionId")?.value;

    if (!paymentId)
      return NextResponse.json({ message: "No payment session" }, { status: 400 });

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

    if ( !session || !session.screenings || !session.users || !session.screenings.screening_types || !session.screenings.movies || !session.screenings.halls) {
        return NextResponse.json({ message: "Invalid session data" }, { status: 400 });
    }

    const age = calculateAge(new Date(session.users.birth_date));
    const ticketTypeName = getTicketTypeByAge(age);

    const ticketType = await prisma.ticket_type.findFirst({
      where: { type: ticketTypeName },
    });

    if (!ticketType)
      return NextResponse.json({ message: "Ticket type missing" }, { status: 500 });

    const pricePerSeat = calculateTicketPrice(
      session.screenings.screening_types.percent,
      ticketType.percent
    );

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

/* ================= CONFIRM PAYMENT ================ */

async function handleConfirm() {
  try {
    const cookieStore = await cookies();
    const paymentId = cookieStore.get("paymentSessionId")?.value;

    if (!paymentId)
      return NextResponse.json({ message: "No payment session" }, { status: 400 });

    const session = await prisma.payment_session.findUnique({
      where: { id: paymentId },
    });

    if (!session || session.status === "paid")
      return NextResponse.json({ message: "Invalid session" }, { status: 400 });

    const user = await prisma.user.findUnique({
      where: { id: session.user_id },
    });

    if (!user || !user.birth_date)
      return NextResponse.json({ message: "User birthdate missing" }, { status: 500 });

    const age = calculateAge(new Date(user.birth_date));
    const ticketTypeName = getTicketTypeByAge(age);

    const ticketType = await prisma.ticket_type.findFirst({
      where: { type: ticketTypeName },
    });

    if (!ticketType)
      return NextResponse.json({ message: "Ticket type missing" }, { status: 500 });

    const screening = await prisma.screening.findUnique({
      where: { id: session.screening_id },
      include: { screening_types: true },
    });

    if (!screening || !screening.screening_types)
      return NextResponse.json({ message: "Screening missing" }, { status: 500 });

    const price = calculateTicketPrice(
      screening.screening_types.percent,
      ticketType.percent
    );

    const chairIds = session.chair_ids as unknown as string[];

    await prisma.chair.updateMany({
      where: { id: { in: chairIds } },
      data: { state: true },
    });

    // jegyek létrehozása
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
        }).catch((err) => {
        console.error("EMAIL ERROR (IGNORED):", err);
    });

    await prisma.payment_session.update({
      where: { id: paymentId },
      data: { status: "paid" },
    });

    const res = NextResponse.json({ ok: true });
    res.cookies.set("paymentSessionId", "", { maxAge: 0, path: "/" });

    return res;
  } catch (err) {
    console.error("CONFIRM ERROR:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

/* ================= ROUTER ========================= */

export async function POST(req: NextRequest) {
  const action = req.nextUrl.searchParams.get("action");

  if (action === "create") return handleCreate(req);
  if (action === "confirm") return handleConfirm();

  return NextResponse.json({ message: "Invalid action" }, { status: 400 });
}

export async function GET(req: NextRequest) {
  const action = req.nextUrl.searchParams.get("action");

  if (action === "session") return handleSession();

  return NextResponse.json({ message: "Invalid action" }, { status: 400 });
}