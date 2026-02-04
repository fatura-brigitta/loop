import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ message: "Invalid email or password" }, { status: 404 });
  }

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set("userId", user.id, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return res;
}