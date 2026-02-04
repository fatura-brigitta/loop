import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body: { name?: string; password?: string } = await req.json();

    if (!body.name || !body.password) {
      return NextResponse.json({ message: "Hiányzó mezők" }, { status: 400 });
    }

    // létező user ellenőrzése
    const exists = await prisma.user.findUnique({
      where: { name: body.name },
    });

    if (exists) {
      return NextResponse.json({ message: "Felhasználó már létezik" }, { status: 409 });
    }

    const password_hash = await bcrypt.hash(body.password, 10);

    await prisma.user.create({
      data: {
        name: body.name,
        password_hash,
      },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Ismeretlen hiba" }, { status: 500 });
  }
}