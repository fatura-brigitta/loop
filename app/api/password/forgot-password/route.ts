import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

import { generateResetToken, resetTokenExpiry } from "@/lib/resetPasswordToken";
import { sendResetPasswordEmail } from "@/lib/sendResetPasswordEmail";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

import { forgotPasswordSchema } from "@/lib/validators";
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
    rateLimit(`auth:forgot:ip:${ip}`, 5, 60_000);

    const { email } = forgotPasswordSchema.parse(await req.json());

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { ok: true },
        {
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
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

    return NextResponse.json(
      { ok: true },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
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

    console.error("FORGOT PASSWORD ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}