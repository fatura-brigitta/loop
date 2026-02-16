import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return NextResponse.json({ message: "Not logged in" }, { status: 401 });
  }

  const { name } = await req.json();

  if (!name || name.length < 2) {
    return NextResponse.json({ message: "Invalid name" }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: userId },
    data: { name },
  });

  return NextResponse.json({ ok: true });
}