import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body: { name?: string; email?: string; phone_number?: string; password?: string } = await req.json();

    if (!body.name || !body.email || !body.phone_number || !body.password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Ellenőrizzük, hogy létezik-e már a felhasználó
    const exists = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (exists) {
      return NextResponse.json({ message: "User already exists" }, { status: 409 });
    }

    const password_hash = await bcrypt.hash(body.password, 10);

    await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        phone_number: body.phone_number,
        points: 0,
        password_hash,
        rank_id: "aa0000000000000000000001" // alapértelmezett rang
      },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Unknown error occurred" }, { status: 500 });
  }
}