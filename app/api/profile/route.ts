export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import parsePhoneNumberFromString from "libphonenumber-js";

export async function GET() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return NextResponse.json({ message: "Nem vagy bejelentkezve" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      ranks: true
    }
  });

  if (!user) {
    return NextResponse.json({ message: "Felhasználó nem található" }, { status: 404 });
  }

  const now = new Date();

  let diffDays = 0;

  if (user.last_ticket_at) {
    diffDays =
      (now.getTime() - new Date(user.last_ticket_at).getTime()) /
      (1000 * 60 * 60 * 24);
  }

  const days = Math.floor(diffDays);

  if (Math.floor(days) >= 30) {

    if (user.ranks?.point_limit === 0) {
      console.log("Lowest rank → cannot downgrade");
    }
    else if (user.ranks?.name === "VIP") {
      console.log("VIP user → no downgrade");
    }

    else {

      const lowerRank = await prisma.rank.findFirst({
        where: {
          point_limit: {
            lt: user.ranks?.point_limit ?? 0
          }
        },
        orderBy: {
          point_limit: "desc"
        }
      });

      if (lowerRank && lowerRank.id !== user.rank_id) {

        await prisma.user.update({
          where: { id: user.id },
          data: { rank_id: lowerRank.id }
        });

        user.ranks = lowerRank;
      }

    }
  }

  let inactivityWarning = false;

  if (days === 29) {
    inactivityWarning = true;
  }

  const nextRank = await prisma.rank.findFirst({
    where: {
      point_limit: {
        gt: user.points
      }
    },
    orderBy: {
      point_limit: "asc"
    }
  });

  let progress = 100;

  if (nextRank) {
    const currentRankLimit = user.ranks?.point_limit || 0;
    const needed = nextRank.point_limit - currentRankLimit;
    const current = user.points - currentRankLimit;

    progress = Math.floor((current / needed) * 100);
    if (progress < 0) progress = 0;
    if (progress > 100) progress = 100;
  }

  return NextResponse.json({
    id: user.id,
    name: user.name,
    email: user.email,
    profile_image: user.profile_image,
    gender: user.gender,
    phone_number: user.phone_number,
    hasPassword: !!user.password_hash,
    points: user.points,
    rank: user.ranks,
    nextRank,
    progress,
    inactivityWarning
  });
}

export async function PATCH(req: Request) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return NextResponse.json(
      { message: "Nem vagy bejelentkezve" },
      { status: 401 }
    );
  }

  const { name, phone_number, gender } = await req.json();

  if (!name || name.length < 2) {
    return NextResponse.json(
      { message: "A név túl rövid" },
      { status: 400 }
    );
  }

  const phone = parsePhoneNumberFromString(phone_number, "HU");

  if (!phone || !phone.isValid()) {
    return NextResponse.json(
      { message: "Érvénytelen telefonszám formátum!" },
      { status: 400 }
    );
  }

  const normalizedPhone = phone.number;

  const existingPhone = await prisma.user.findFirst({
    where: {
      phone_number: normalizedPhone,
      NOT: { id: userId },
    },
  });

  if (existingPhone) {
    return NextResponse.json(
      { message: "Ez a telefonszám már használatban van!" },
      { status: 409 }
    );
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      name,
      phone_number: normalizedPhone,
      gender,
    },
  });

  return NextResponse.json({
    updatedUser,
  });
}

export async function PUT(req: Request) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return NextResponse.json(
      { message: "Nem vagy bejelentkezve" },
      { status: 401 }
    );
  }

  const { oldPassword, newPassword } = await req.json();

  if (!newPassword || newPassword.length < 5) {
    return NextResponse.json(
      { message: "A jelszó legalább 5 karakter hosszú kell legyen" },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Felhasználó nem található" },
      { status: 404 }
    );
  }

  if (user.password_hash) {
    if (!oldPassword) {
      return NextResponse.json(
        { message: "Hiányzik a régi jelszó" },
        { status: 400 }
      );
    }

    const valid = await bcrypt.compare(oldPassword, user.password_hash);

    if (!valid) {
      return NextResponse.json(
        { message: "Hibás jelszó" },
        { status: 400 }
      );
    }
  }

  const hashed = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: userId },
    data: { password_hash: hashed },
  });

  return NextResponse.json({ ok: true });
}

export async function POST() {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json({ message: "Nem vagy bejelentkezve" }, { status: 401 });
    }

    const now = new Date();

    const activeTickets = await prisma.ticket.findMany({
      where: {
        user_id: userId,
        screenings: {
          start: {
            gte: now,
          },
        },
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
        screenings: { start: "asc" },
      },
    });

    const historyTickets = await prisma.ticket.findMany({
      where: {
        user_id: userId,
        screenings: {
          start: {
            lt: now,
          },
        },
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
        screenings: { start: "desc" },
      },
    });

    return NextResponse.json({
      active: activeTickets,
      history: historyTickets,
    });

  } catch (err) {
    console.error("PROFILE TICKETS ERROR:", err);
    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}