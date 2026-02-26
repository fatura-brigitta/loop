export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { generate4DigitCode, codeExpiry } from "@/lib/emailVerification";
import { sendVerificationEmail } from "@/lib/sendVerificationEmail";

/**
 * GET /api/auth
 * -> aktív felhasználó
 */
export async function GET() {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json(
        { message: "Nem vagy bejelentkezve" },
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
        { message: "Érvénytelen felhasználói azonosító" },
        { status: 401 }
      );
    }

    return NextResponse.json(user);
  } catch (err) {
    console.error("AUTH GET ERROR:", err);
    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}

/**
 * POST /api/auth
 * -> LOGIN
 */
export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Hiányzó email vagy jelszó" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Érvénytelen email vagy jelszó" },
        { status: 401 }
      );
    }

    if (!user.email_verified) {
      return NextResponse.json(
        {
          message: "Az email címed még nincs megerősítve!",
          needsVerification: true,
          email,
        },
        { status: 403 }
      );
    }

    const ok = await bcrypt.compare(password, user.password_hash);

    if (!ok) {
      return NextResponse.json(
        { message: "Érvénytelen email vagy jelszó" },
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
    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}

/**
 * PUT /api/auth
 * -> REGISZTRÁCIÓ
 */
export async function PUT(req: NextRequest) {
  try {
    const { name, email, password, phone_number, profile_image, gender } =
      await req.json();

    if (!name || !email || !password || !phone_number || !gender) {
      return NextResponse.json(
        { message: "Hiányzó kötelező mezők" },
        { status: 400 }
      );
    }

    const phone = parsePhoneNumberFromString(phone_number);

    if (!phone || !phone.isValid()) {
      return NextResponse.json(
        { message: "Érvénytelen telefonszám formátum!" },
        { status: 400 }
      );
    }

    const normalizedPhone = phone.number;

    if (password.length < 5) {
      return NextResponse.json(
        { message: "A jelszó túl rövid" },
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
        { message: "Alap rang (0 pontos) nem található!" },
        { status: 500 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password_hash,
        phone_number: normalizedPhone,
        profile_image: profile_image || "/profile/default.png",
        gender: safeGender,
        points: 0,
        rank_id: baseRank.id,
        email_verified: false,
      },
    });

    const code = generate4DigitCode();

    await prisma.user.update({
      where: { id: newUser.id },
      data: {
        email_code: code,
        email_code_exp: codeExpiry(10),
      },
    });

    sendVerificationEmail(newUser.email, newUser.name, code)
      .catch(err => console.error("EMAIL SEND ERROR:", err));

    return NextResponse.json(
      {
        ok: true,
        needsVerification: true,
        email: newUser.email,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("AUTH REGISTER ERROR:", err);

    if (err.code === "P2002") {
      if (err.meta?.target?.includes("email")) {
        return NextResponse.json(
          { message: "Ez az email már regisztrálva van!" },
          { status: 409 }
        );
      }

      if (err.meta?.target?.includes("phone_number")) {
        return NextResponse.json(
          { message: "Ez a telefonszám már regisztrálva van!" },
          { status: 409 }
        );
      }
    }

    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}

/**
 * DELETE /api/auth
 */
export async function DELETE() {
  const res = NextResponse.json({ ok: true });

  res.cookies.set("userId", "", {
    maxAge: 0,
    path: "/",
  });

  return res;
}