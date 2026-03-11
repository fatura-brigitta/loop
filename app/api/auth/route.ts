export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { generate4DigitCode, codeExpiry } from "@/lib/emailVerification";
import { sendVerificationEmail } from "@/lib/sendVerificationEmail";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { ZodError } from "zod";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

import { rateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/getClientIp";
import { checkOrigin } from "@/lib/checkOrigin";
import { loginSchema, registerSchema } from "@/lib/validators";
import { sanitizeText } from "@/lib/sanitize";

const isProd = process.env.NODE_ENV === "production";

export async function GET() {
  const lang = await getLang();
  const t = messages[lang];

  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json(
        { message: t.notLoggedIn },
        {
          status: 401,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        phone_number: true,
        profile_image: true,
        gender: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: t.invalidCredentials },
        {
          status: 401,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    return NextResponse.json(user, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("AUTH GET ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    checkOrigin(req);

    const ip = getClientIp(req);
    const { email, password } = loginSchema.parse(await req.json());

    rateLimit(`auth:login:ip:${ip}`, 10, 60_000);
    rateLimit(`auth:login:email:${email}`, 10, 60_000);
    rateLimit(`auth:login:ip-email:${ip}:${email}`, 5, 60_000);

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: t.invalidCredentials },
        {
          status: 401,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    if (!user.email_verified) {
      return NextResponse.json(
        {
          message: t.emailNotVerified,
          needsVerification: true,
          email,
        },
        {
          status: 403,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    if (!user.password_hash) {
      return NextResponse.json(
        { message: t.invalidCredentials },
        {
          status: 401,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    const ok = await bcrypt.compare(password, user.password_hash);

    if (!ok) {
      return NextResponse.json(
        { message: t.invalidCredentials },
        {
          status: 401,
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    const res = NextResponse.json(
      {
        ok: true,
        name: user.name,
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );

    res.cookies.set("userId", user.id, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
    });

    return res;
  } catch (err: any) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { message: t.zodError },
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

    console.error("AUTH POST ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    checkOrigin(req);

    const ip = getClientIp(req);
    rateLimit(`auth:register:ip:${ip}`, 5, 60_000);

    const {
      name,
      email,
      password,
      phone_number,
      profile_image,
      gender,
      consent,
    } = registerSchema.parse(await req.json());

    const cleanName = sanitizeText(name);
    const cleanProfileImage = profile_image
      ? sanitizeText(profile_image)
      : null;

    const phone = parsePhoneNumberFromString(phone_number);

    if (!phone || !phone.isValid()) {
      return NextResponse.json(
        { message: t.invalidPhone },
        { status: 400 }
      );
    }

    const normalizedPhone = phone.number;
    const password_hash = await bcrypt.hash(password, 12);

    const baseRank = await prisma.rank.findFirst({
      where: { point_limit: 0 },
      select: { id: true },
    });

    if (!baseRank) {
      return NextResponse.json(
        { message: t.serverError },
        { status: 500 }
      );
    }

    const newUser = await prisma.$transaction(async (tx) => {
      const createdUser = await tx.user.create({
        data: {
          name: cleanName,
          email,
          password_hash,
          phone_number: normalizedPhone,
          profile_image: cleanProfileImage || "/profile/default.png",
          gender,
          points: 0,
          consent: !!consent,
          rank_id: baseRank.id,
          email_verified: false,
        },
      });

      const code = generate4DigitCode();

      await tx.user.update({
        where: { id: createdUser.id },
        data: {
          email_code: code,
          email_code_exp: codeExpiry(10),
        },
      });

      return {
        user: createdUser,
        code,
      };
    });

    const { user, code } = newUser;

    try {
      await sendVerificationEmail(user.email, user.name, code);
    } catch (err) {
      console.error("EMAIL SEND ERROR:", err);
    }

    return NextResponse.json(
      {
        ok: true,
        needsVerification: true,
        email: user.email,
      },
      { status: 201 }
    );
  } catch (err: any) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { message: t.zodError },
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

    console.error("AUTH REGISTER ERROR:", err);

    if (err.code === "P2002") {
      if (err.meta?.target?.includes("email")) {
        return NextResponse.json(
          { message: t.emailExists },
          { status: 409 }
        );
      }

      if (err.meta?.target?.includes("phone_number")) {
        return NextResponse.json(
          { message: t.phoneExists },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    checkOrigin(req);

    const res = NextResponse.json(
      { ok: true },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );

    res.cookies.set("userId", "", {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    });

    return res;
  } catch (err: any) {
    if (err.message === "CSRF") {
      return NextResponse.json(
        { message: t.csrfError },
        { status: 403 }
      );
    }

    console.error("AUTH DELETE ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}