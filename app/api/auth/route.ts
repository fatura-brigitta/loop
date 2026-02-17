export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

/**
 * GET /api/auth
 * -> active user (cookie: userId)
 */
export async function GET() {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json({ message: "Not logged in" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true },
    });

    if (!user) {
      return NextResponse.json({ message: "Invalid session" }, { status: 401 });
    }

    return NextResponse.json(user);
  } catch (err) {
    console.error("AUTH GET ERROR:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

/**
 * POST /api/auth
 * -> login
 */
export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Missing email or password" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, name: true, password_hash: true },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) {
      return NextResponse.json(
        { message: "Invalid email or password" },
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
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

/**
 * PUT /api/auth
 * -> register
 */
export async function PUT(req: NextRequest) {
  try {
    const { name, email, phone_number, birth_date, password } = await req.json();

    if (!name || !email || !phone_number || !birth_date || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const exists = await prisma.user.findUnique({
      where: { email },
    });

    if (exists) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const password_hash = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        phone_number,
        birth_date: new Date(birth_date),
        password_hash,
        points: 0,
        rank_id: "aa0000000000000000000001",
      },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("AUTH PUT (REGISTER) ERROR:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

/**
 * DELETE /api/auth
 * -> logout
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
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}