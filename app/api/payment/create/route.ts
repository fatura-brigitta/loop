import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();

    const userId = cookieStore.get("userId")?.value;
    const screeningId = cookieStore.get("screeningId")?.value;

    if (!userId || !screeningId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { seatIds } = await req.json();

    if (!seatIds || seatIds.length === 0) {
      return NextResponse.json({ message: "No seats selected" }, { status: 400 });
    }

    const session = await prisma.payment_session.create({
      data: {
        user_id: new ObjectId(userId).toHexString(),
        screening_id: new ObjectId(screeningId).toHexString(),
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
    return NextResponse.json(
      { message: "Could not start payment" },
      { status: 500 }
    );
  }
}