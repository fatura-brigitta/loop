import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";

export async function DELETE() {

  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return NextResponse.json(
      { message: "Nem vagy bejelentkezve" },
      { status: 401 }
    );
  }

  const now = new Date();

  await prisma.ticket.deleteMany({
    where: {
      user_id: userId,
      screenings: {
        start: {
          lt: now
        }
      }
    }
  });

  return NextResponse.json({ ok: true });
}