import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return NextResponse.json({ message: "Not logged in" }, { status: 401 });
  }

  const { oldPassword, newPassword } = await req.json();

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const valid = await bcrypt.compare(oldPassword, user.password_hash);

  if (!valid) {
    return NextResponse.json({ message: "Wrong old password" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: userId },
    data: { password_hash: hashed },
  });

  return NextResponse.json({ ok: true });
}
