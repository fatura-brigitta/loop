import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { name, password } = await req.json();

  if (!name || !password) {
    return NextResponse.json({ message: "Hiányzó adatok" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { name },
  });


  if (!user) {
    return NextResponse.json({ message: "Invalid username or password" }, { status: 404 });
  }

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    return NextResponse.json({ message: "Invalid username or password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set("userId", user.id, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return res;
}