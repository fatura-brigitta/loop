export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { generate4DigitCode, codeExpiry } from "@/lib/emailVerification";
import { sendVerificationEmail } from "@/lib/sendVerificationEmail";

/**
 * GET /api/auth
 * -> aktív felhasználó (cookie: userId)
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
      select: { id: true, name: true, email: true },
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
      select: {
        id: true,
        name: true,
        password_hash: true,
        email_verified: true,
      },
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

    const res = NextResponse.json({ ok: true, name: user.name });

    res.cookies.set("userId", user.id, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });

    return res;
  } catch (err) {
    console.error("AUTH POST (LOGIN) ERROR:", err);
    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}

/**
 * PUT /api/auth
 * -> REGISZTRÁCIÓ + EMAIL KÓD KÜLDÉS
 */
export async function PUT(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Hiányzó kötelező mezők" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Érvénytelen email formátum" },
        { status: 400 }
      );
    }

    const exists = await prisma.user.findUnique({
      where: { email },
    });

    if (exists) {
      if (!exists.email_verified) {
        const code = generate4DigitCode();

        await prisma.user.update({
          where: { id: exists.id },
          data: {
            email_code: code,
            email_code_exp: codeExpiry(10),
          },
        });

        await sendVerificationEmail(exists.email, exists.name, code);

        return NextResponse.json({
          ok: true,
          needsVerification: true,
          email: exists.email,
        });
      }

      return NextResponse.json(
        { message: "Ezzel az email címmel már van fiók. Jelentkezz be!" },
        { status: 409 }
      );
    }

    if (password.length < 5) {
      return NextResponse.json(
        { message: "A jelszó túl rövid" },
        { status: 400 }
      );
    }

    const password_hash = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password_hash,
        points: 0,
        rank_id: "aa0000000000000000000001",
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

    await sendVerificationEmail(newUser.email, newUser.name, code);

    return NextResponse.json(
      {
        ok: true,
        needsVerification: true,
        email: newUser.email,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("AUTH PUT (REGISTER) ERROR:", err);

    if (err.code === "P2002") {
      return NextResponse.json(
        { message: "Ez az email cím már regisztrálva van!" },
        { status: 409 }
      );
    }

    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}

/**
 * DELETE /api/auth
 * -> LOGOUT
 */
export async function DELETE() {
  try {
    const res = NextResponse.json({ ok: true });

    res.cookies.set("userId", "", {
      maxAge: 0,
      path: "/",
    });

    return res;
  } catch (err) {
    console.error("AUTH DELETE (LOGOUT) ERROR:", err);
    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}