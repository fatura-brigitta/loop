import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

import { verifyEmailSchema } from "@/lib/validators";
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

    const { email, code } = verifyEmailSchema.parse(await req.json());

    rateLimit(`verify-ip-${ip}`, 10, 60_000);
    rateLimit(`verify-ip-email-${ip}-${email}`, 5, 60_000);

    await prisma.$transaction(async (tx) => {

      const user = await tx.user.findUnique({
        where: { email },
      });

      if (!user || !user.email_code || !user.email_code_exp) {
        throw new Error("INVALID_CODE");
      }

      if (user.email_verified) {
        return;
      }

      const expired =
        new Date(user.email_code_exp).getTime() < Date.now();

      if (expired) {
        throw new Error("EXPIRED_CODE");
      }

      if (user.email_code !== code) {
        throw new Error("WRONG_CODE");
      }

      await tx.user.update({
        where: { id: user.id },
        data: {
          email_verified: true,
          email_code: null,
          email_code_exp: null,
        },
      });

    });

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

    if (err.message === "INVALID_CODE") {
      return NextResponse.json(
        { message: t.invalidCode },
        { status: 400 }
      );
    }

    if (err.message === "EXPIRED_CODE") {
      return NextResponse.json(
        { message: t.expiredCode },
        { status: 400 }
      );
    }

    if (err.message === "WRONG_CODE") {
      return NextResponse.json(
        { message: t.wrongCode },
        { status: 400 }
      );
    }

    console.error("VERIFY ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}