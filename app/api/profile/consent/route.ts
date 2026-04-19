import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const { consent } = await req.json();

  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  await prisma.user.update({
    where: { id: userId },
    data: {
      consent
    }
  });
  return NextResponse.json({ ok: true });
}