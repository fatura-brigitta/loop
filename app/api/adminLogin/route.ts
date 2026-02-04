import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { name, password } = await req.json();

  if (!name || !password) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  const adminUser = await prisma.admin.findFirst({
    where: { name },
  });

  if (!adminUser) {
    return NextResponse.json({ message: "Invalid username or password" }, { status: 404 });
  }

  const valid = await bcrypt.compare(password, adminUser.password_hash);
  if (!valid) {
    return NextResponse.json({ message: "Invalid username or password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });

    res.cookies.set("admin-auth", "true", {
        httpOnly: true,
        path: "/",
    });

  return res;
}