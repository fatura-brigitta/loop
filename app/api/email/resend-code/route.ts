import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

import { generate4DigitCode, codeExpiry } from "@/lib/emailVerification";
import { sendVerificationEmail } from "@/lib/sendVerificationEmail";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

import { resendCodeSchema } from "@/lib/validators";
import { rateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/getClientIp";
import { checkOrigin } from "@/lib/checkOrigin";

import { ZodError } from "zod";

export async function POST(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    checkOrigin(req);

    const ip = getClientIp(req);
    rateLimit(`auth:resend:ip:${ip}`, 5, 60_000);

    const { email } = resendCodeSchema.parse(await req.json());

    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        email_verified: true
      },
    });

    if (!user) {
      return NextResponse.json(
        { ok: true },
        { headers: { "Cache-Control": "no-store" } }
      );
    }

    if (user.email_verified) {
      return NextResponse.json(
        { ok: true },
        { headers: { "Cache-Control": "no-store" } }
      );
    }

    const code = generate4DigitCode();

    await prisma.user.update({
      where: { id: user.id },
      data: {
        email_code: code,
        email_code_exp: codeExpiry(10),
      },
    });

    try {
      await sendVerificationEmail(user.email, user.name, code);
    } catch (err) {
      console.error("EMAIL SEND ERROR:", err);
    }

    return NextResponse.json(
      { ok: true },
      { headers: { "Cache-Control": "no-store" } }
    );

  } catch (err: any) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { message: t.invalidData },
        { status: 400 }
      );
    }

    if (err.message === "RATE_LIMIT") {
      return NextResponse.json(
        { message: t.rateLimitError },
        { status: 429 }
      );
    }

    if (err.message === "CSRF") {
      return NextResponse.json(
        { message: t.csrfError },
        { status: 403 }
      );
    }

    console.error("RESEND CODE ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}