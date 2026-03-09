import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export async function PUT(req: Request) {

  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return NextResponse.json({ error: "Not logged in" }, { status: 401 });
  }

  const { theme } = await req.json();

  await prisma.user.update({
    where: { id: userId },
    data: { theme }
  });

  return NextResponse.json({ ok: true });
}