import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    let { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json(
        { message: "Hiányzó email vagy kód" },
        { status: 400 }
      );
    }

    email = String(email).trim().toLowerCase();

    code = String(code).trim();

    if (code.length !== 4 || !/^\d{4}$/.test(code)) {
      return NextResponse.json(
        { message: "A kód 4 számjegyből áll!" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.email_code || !user.email_code_exp) {
      return NextResponse.json(
        { message: "Érvénytelen email vagy kód" },
        { status: 400 }
      );
    }

    if (user.email_verified) {
      return NextResponse.json({ ok: true });
    }

    const expired = new Date(user.email_code_exp).getTime() < Date.now();
    if (expired) {
      return NextResponse.json(
        { message: "A kód lejárt. Regisztrálj újra!" },
        { status: 400 }
      );
    }

    if (user.email_code !== code) {
      return NextResponse.json(
        { message: "Hibás megerősítő kód!" },
        { status: 400 }
      );
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        email_verified: true,
        email_code: null,
        email_code_exp: null,
      },
    });

    return NextResponse.json({ ok: true });

  } catch (err) {
    console.error("VERIFY ERROR:", err);
    return NextResponse.json(
      { message: "Szerver hiba" },
      { status: 500 }
    );
  }
}