export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

import { forumReplySchema } from "@/lib/validators";
import { sanitizeText } from "@/lib/sanitize";
import { rateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/getClientIp";
import { checkOrigin } from "@/lib/checkOrigin";
import { ZodError } from "zod";
import cloudinary from "@/lib/cloudinary";

const getProfileImage = (src?: string | null) => {
  if (!src) return "/profile/default.png";

  if (src.startsWith("http")) return src;

  return cloudinary.url(src, {
    width: 80,
    height: 80,
    crop: "fill",
    quality: "auto",
    fetch_format: "auto",
  });
};

export async function POST(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    checkOrigin(req);

    const ip = getClientIp(req);
    rateLimit(`forum-reply-ip-${ip}`, 10, 60_000);

    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json(
        { message: t.notLoggedIn },
        { status: 401 }
      );
    }

    const { forum_id, comment } = forumReplySchema.parse(await req.json());

    const cleanComment = sanitizeText(comment);

    const reply = await prisma.forumReply.create({
      data: {
        forum_id,
        user_id: userId,
        comment: cleanComment,
      },
      select: {
        id: true,
        forum_id: true,
        comment: true,
        created_at: true,
      },
    });

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, profile_image: true },
    });

    return NextResponse.json(
      {
        id: reply.id,
        forum_id: reply.forum_id,
        comment: reply.comment,
        created_at: reply.created_at,
        user_name: user?.name ?? "Ismeretlen felhasználó",
        profile_image: getProfileImage(user?.profile_image)
      },
      {
        headers: { "Cache-Control": "no-store" }
      }
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

    console.error("REPLY POST ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}