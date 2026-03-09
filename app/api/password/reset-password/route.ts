import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json(
        { message: "Hiányzó adatok" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findFirst({
      where: { password_reset_token: token }
    });

    if (!user || !user.password_reset_exp) {
      return NextResponse.json(
        { message: "Érvénytelen vagy lejárt link" },
        { status: 400 }
      );
    }

    if (new Date(user.password_reset_exp).getTime() < Date.now()) {
      return NextResponse.json(
        { message: "A link lejárt" },
        { status: 400 }
      );
    }

    const password_hash = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password_hash,
        password_reset_token: null,
        password_reset_exp: null,
      },
    });

    return NextResponse.json({ ok: true });

  } catch (err) {
    console.error("RESET PASSWORD ERROR:", err);
    return NextResponse.json(
      { message: "Szerver hiba" },
      { status: 500 }
    );
  }
}