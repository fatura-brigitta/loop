import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

export async function POST(req: NextRequest) {

  const lang = await getLang();
  const t = messages[lang];

  try {

    let { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json(
        { message: t.missingEmailCode },
        { status: 400 }
      );
    }

    email = String(email).trim().toLowerCase();
    code = String(code).trim();

    if (code.length !== 4 || !/^\d{4}$/.test(code)) {
      return NextResponse.json(
        { message: t.codeFormat },
        { status: 400 }
      );
    }

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

      const expired = new Date(user.email_code_exp).getTime() < Date.now();
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

    return NextResponse.json({ ok: true });

  } catch (err: any) {

    console.error("VERIFY ERROR:", err);

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

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}