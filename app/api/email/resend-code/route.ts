import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { generate4DigitCode, codeExpiry } from "@/lib/emailVerification";
import { sendVerificationEmail } from "@/lib/sendVerificationEmail";
import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

export async function POST(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    let { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: t.missingEmail },
        { status: 400 }
      );
    }

    email = String(email).trim().toLowerCase();

    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true, name: true, email_verified: true },
    });

    if (!user) {
      return NextResponse.json({ ok: true });
    }

    if (user.email_verified) {
      return NextResponse.json({ ok: true });
    }

    const code = generate4DigitCode();

    await prisma.user.update({
      where: { id: user.id },
      data: {
        email_code: code,
        email_code_exp: codeExpiry(10),
      },
    });

    await sendVerificationEmail(user.email, user.name, code);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("RESEND CODE ERROR:", err);
    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}