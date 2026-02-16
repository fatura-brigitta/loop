import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { seatIds } = await req.json();

  if (!seatIds || seatIds.length === 0) {
    return NextResponse.json({ message: "No seats selected" }, { status: 400 });
  }

  const cookieStore = cookies();
  const userId = (await cookieStore).get("userId")?.value;

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // 1️⃣ Ellenőrizzük nem foglalta-e már le valaki
  const alreadyReserved = await prisma.chair.findMany({
    where: {
      id: { in: seatIds },
      state: true,
    },
  });

  if (alreadyReserved.length > 0) {
    return NextResponse.json(
      { message: "Az egyik szék időközben foglalt lett!" },
      { status: 409 }
    );
  }

  // 2️⃣ Foglalás
  await prisma.chair.updateMany({
    where: {
      id: { in: seatIds },
    },
    data: {
      state: true,
    },
  });

  return NextResponse.json({ ok: true });
}