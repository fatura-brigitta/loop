export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import parsePhoneNumberFromString from "libphonenumber-js";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

import { rateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/getClientIp";
import { checkOrigin } from "@/lib/checkOrigin";
import { profilePatchSchema, profilePasswordSchema } from "@/lib/validators";
import { sanitizeText } from "@/lib/sanitize";
import { ZodError } from "zod";

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
      include: { ranks: true }
    });

    if (!user) {
      return NextResponse.json(
        { message: t.userNotFound },
        { status: 404 }
      );
    }

    const now = new Date();

    let diffDays = 0;

    if (user.last_ticket_at) {
      diffDays =
        (now.getTime() - new Date(user.last_ticket_at).getTime()) /
        (1000 * 60 * 60 * 24);
    }

    const days = Math.floor(diffDays);

    if (days >= 30) {

      if (user.ranks?.name === "VIP") {
        console.log("VIP user → no downgrade");
      }

      else if (user.ranks?.name === "BRONZE") {
        console.log("Bronze user → cannot downgrade");
      }

      else {

        const lowerRank = await prisma.rank.findFirst({
          where: {
            point_limit: {
              lt: user.ranks?.point_limit
            }
          },
          orderBy: {
            point_limit: "desc"
          }
        });

        if (lowerRank && lowerRank.id !== user.rank_id) {

          await prisma.user.update({
            where: { id: user.id },
            data: {
              rank_id: lowerRank.id,
              points: lowerRank.point_limit
            }
          });

          user.ranks = lowerRank;
          user.points = lowerRank.point_limit;
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

    return NextResponse.json(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        profile_image: user.profile_image,
        gender: user.gender,
        phone_number: user.phone_number,
        theme: user.theme,
        hasPassword: !!user.password_hash,
        points: user.points,
        rank: user.ranks,
        nextRank,
        progress,
        inactivityWarning
      },
      { headers: { "Cache-Control": "no-store" } }
    );

  } catch (err) {

    console.error("PROFILE GET ERROR:", err);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {

  const lang = await getLang();
  const t = messages[lang];

  try {

    checkOrigin(req);

    const ip = getClientIp(req);
    rateLimit(`profile-patch-${ip}`, 10, 60_000);

    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json(
        { message: t.notLoggedIn },
        { status: 401 }
      );
    }

    const { name, phone_number, gender } =
      profilePatchSchema.parse(await req.json());

    const cleanName = sanitizeText(name);

    const phone = parsePhoneNumberFromString(phone_number, "HU");

    if (!phone || !phone.isValid()) {
      return NextResponse.json(
        { message: t.invalidPhone },
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
        { message: t.phoneInUse },
        { status: 409 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name: cleanName,
        phone_number: normalizedPhone,
        gender,
        last_ticket_at: new Date()
      },
    });

    return NextResponse.json(
      { updatedUser },
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

    console.error("PROFILE PATCH ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {

  const lang = await getLang();
  const t = messages[lang];

  try {

    checkOrigin(req);

    const ip = getClientIp(req);
    rateLimit(`profile-password-${ip}`, 5, 60_000);

    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json(
        { message: t.notLoggedIn },
        { status: 401 }
      );
    }

    const { oldPassword, newPassword } =
      profilePasswordSchema.parse(await req.json());

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json(
        { message: t.notLoggedIn },
        { status: 401 }
      );
    }

    if (user.password_hash) {

      if (!oldPassword) {
        return NextResponse.json(
          { message: t.missingOldPassword },
          { status: 400 }
        );
      }

      const valid = await bcrypt.compare(oldPassword, user.password_hash);

      if (!valid) {
        return NextResponse.json(
          { message: t.wrongPassword },
          { status: 400 }
        );
      }
    }

    const hashed = await bcrypt.hash(newPassword, 12);

    await prisma.user.update({
      where: { id: userId },
      data: { password_hash: hashed },
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

    console.error("PROFILE PASSWORD ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}

export async function POST() {

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

    const now = new Date();

    const activeTickets = await prisma.ticket.findMany({
      where: {
        user_id: userId,
        screenings: {
          start: { gte: now }
        }
      },
      include: {
        screenings: {
          include: {
            movies: true,
            halls: true,
            screening_types: true
          }
        },
        chairs: true,
        ticket_types: true
      },
      orderBy: {
        screenings: { start: "asc" }
      }
    });

    const historyTickets = await prisma.ticket.findMany({
      where: {
        user_id: userId,
        screenings: {
          start: { lt: now }
        }
      },
      include: {
        screenings: {
          include: {
            movies: true,
            halls: true,
            screening_types: true
          }
        },
        chairs: true,
        ticket_types: true
      },
      orderBy: {
        screenings: { start: "desc" }
      }
    });

    return NextResponse.json(
      {
        active: activeTickets,
        history: historyTickets
      },
      { headers: { "Cache-Control": "no-store" } }
    );

  } catch (err) {

    console.error("PROFILE TICKETS ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}