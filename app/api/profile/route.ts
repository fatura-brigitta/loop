export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";

/* =========================
   GET  → profil adatok
   ========================= */
export async function GET() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return NextResponse.json({ message: "Not logged in" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      birth_date: true,
      phone_number: true,
    },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

/* =========================
   PATCH → név módosítás
   ========================= */
export async function PATCH(req: Request) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return NextResponse.json({ message: "Not logged in" }, { status: 401 });
  }

  const { name } = await req.json();

  if (!name || name.length < 2) {
    return NextResponse.json({ message: "Invalid name" }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: userId },
    data: { name },
  });

  return NextResponse.json({ ok: true });
}

/* =========================
   PUT → jelszó módosítás
   ========================= */
export async function PUT(req: Request) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return NextResponse.json({ message: "Not logged in" }, { status: 401 });
  }

  const { oldPassword, newPassword } = await req.json();

  if (!oldPassword || !newPassword) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const valid = await bcrypt.compare(oldPassword, user.password_hash);

  if (!valid) {
    return NextResponse.json({ message: "Wrong old password" }, { status: 400 });
  }

  if (oldPassword === newPassword) {
    return NextResponse.json(
      { message: "New password cannot be the same as the old one" },
      { status: 400 }
    );
  }

  if (newPassword.length < 5) {
    return NextResponse.json(
      { message: "Password must be at least 5 characters long" },
      { status: 400 }
    );
  }

  const hashed = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: userId },
    data: { password_hash: hashed },
  });

  return NextResponse.json({ ok: true });
}

/* =========================
   POST → jegyek lekérése
   ========================= */
export async function POST() {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const objectUserId = new ObjectId(userId).toString();

    const tickets = await prisma.ticket.findMany({
      where: {
        user_id: objectUserId,
      },
      include: {
        screenings: {
          include: {
            movies: true,
            halls: true,
            screening_types: true,
          },
        },
        chairs: true,
        ticket_types: true,
      },
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(tickets);
  } catch (err) {
    console.error("PROFILE TICKETS ERROR:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}