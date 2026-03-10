export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { generate4DigitCode, codeExpiry } from "@/lib/emailVerification";
import { sendVerificationEmail } from "@/lib/sendVerificationEmail";
import { parsePhoneNumberFromString } from "libphonenumber-js";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

export async function GET() {
  const lang = await getLang();
  const t = messages[lang];

  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json(
        { message: t.notLoggedIn },
        { status: 401 }
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
        { status: 401 }
      );
    }

    return NextResponse.json(user);
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
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: t.missingEmailPassword },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: t.invalidCredentials },
        { status: 401 }
      );
    }

    if (!user.email_verified) {
      return NextResponse.json(
        {
          message: t.emailNotVerified,
          needsVerification: true,
          email,
        },
        { status: 403 }
      );
    }

    if (!user.password_hash) {
      return NextResponse.json(
        { message: t.invalidCredentials },
        { status: 400 }
      );
    }

    const ok = await bcrypt.compare(password, user.password_hash);

    if (!ok) {
      return NextResponse.json(
        { message: t.invalidCredentials },
        { status: 401 }
      );
    }

    const res = NextResponse.json({
      ok: true,
      name: user.name,
    });

    res.cookies.set("userId", user.id, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });

    return res;
  } catch (err) {
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
    const { name, email, password, phone_number, profile_image, gender, consent } =
      await req.json();

    if (!name || !email || !password || !phone_number || !gender) {
      return NextResponse.json(
        { message: t.missingFields },
        { status: 400 }
      );
    }

    const phone = parsePhoneNumberFromString(phone_number);

    if (!phone || !phone.isValid()) {
      return NextResponse.json(
        { message: t.invalidPhone },
        { status: 400 }
      );
    }

    const normalizedPhone = phone.number;

    if (password.length < 5) {
      return NextResponse.json(
        { message: t.shortPassword },
        { status: 400 }
      );
    }

    const allowedGenders = new Set(["MALE", "FEMALE", "RATHER_NOT_SAY"]);
    const safeGender = allowedGenders.has(gender) ? gender : "RATHER_NOT_SAY";

    const password_hash = await bcrypt.hash(password, 10);

    const baseRank = await prisma.rank.findFirst({
      where: { point_limit: 0 },
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
          name,
          email,
          password_hash,
          phone_number: normalizedPhone,
          profile_image: profile_image || "/profile/default.png",
          gender: safeGender,
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
        code
      };

    });

    sendVerificationEmail(newUser.user.email, newUser.user.name, newUser.code)
      .catch(err => console.error("EMAIL SEND ERROR:", err));

    return NextResponse.json(
      {
        ok: true,
        needsVerification: true,
        email: newUser.user.email,
      },
      { status: 201 }
    );

  } catch (err: any) {
    console.error("AUTH REGISTER ERROR:", err);

    const lang = await getLang();
    const t = messages[lang];

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

export async function DELETE() {
  const res = NextResponse.json({ ok: true });

  res.cookies.set("userId", "", {
    maxAge: 0,
    path: "/",
  });

  return res;
}