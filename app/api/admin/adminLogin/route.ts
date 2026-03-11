export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

import { rateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/getClientIp";
import { checkOrigin } from "@/lib/checkOrigin";
import { adminLoginSchema } from "@/lib/validators";

import { ZodError } from "zod";

export async function POST(req: Request) {

  const lang = await getLang();
  const t = messages[lang];

  try {

    checkOrigin(req);

    const ip = getClientIp(req);
    rateLimit(`admin-login-${ip}`, 5, 60_000);

    const { name, password } =
      adminLoginSchema.parse(await req.json());

    const adminUser = await prisma.admin.findFirst({
      where: { name },
    });

    if (!adminUser) {
      return NextResponse.json(
        { message: t.invalidAdminCredentials },
        { status: 401 }
      );
    }

    const valid = await bcrypt.compare(password, adminUser.password_hash);

    if (!valid) {
      return NextResponse.json(
        { message: t.invalidAdminCredentials },
        { status: 401 }
      );
    }

    const res = NextResponse.json(
      { ok: true },
      { headers: { "Cache-Control": "no-store" } }
    );

    res.cookies.set("admin-auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return res;

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

    console.error("ADMIN LOGIN ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}