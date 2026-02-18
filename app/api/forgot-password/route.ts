import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { generateResetToken, resetTokenExpiry } from "@/lib/resetPasswordToken";
import { sendResetPasswordEmail } from "@/lib/sendResetPasswordEmail";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!isValidEmail(email)) {
        return NextResponse.json({ ok: true });
    }

    if (!email) {
      return NextResponse.json(
        { message: "Hiányzó email" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ ok: true });
    }

    const token = generateResetToken();

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password_reset_token: token,
        password_reset_exp: resetTokenExpiry(),
      },
    });

    try {
      await sendResetPasswordEmail(user.email, token);
    } catch (err) {
      console.error("RESET EMAIL ERROR:", err);
    }

    return NextResponse.json({ ok: true });

  } catch (err) {
    console.error("FORGOT PASSWORD ERROR:", err);
    return NextResponse.json(
      { message: "Szerver hiba" },
      { status: 500 }
    );
  }
}
