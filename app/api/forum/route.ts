import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

import { forumPostSchema } from "@/lib/validators";
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

export async function GET(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    const { searchParams } = new URL(req.url);
    const movieId = searchParams.get("movie");

    if (!movieId) {
      return NextResponse.json([], {
        headers: { "Cache-Control": "no-store" },
      });
    }

    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    const posts = await prisma.forum.findMany({
      where: { movie_id: movieId },
      orderBy: { id: "desc" },
    });

    const postIds = posts.map(p => p.id);
    const userIds = posts.map(p => p.user_id);

    const users = userIds.length
      ? await prisma.user.findMany({
          where: { id: { in: userIds } },
          select: { id: true, name: true, profile_image: true },
        })
      : [];

    const votes = userId && postIds.length
      ? await prisma.forumVote.findMany({
          where: { user_id: userId, forum_id: { in: postIds } },
          select: { forum_id: true, type: true },
        })
      : [];

    const voteMap = new Map(votes.map(v => [v.forum_id, v.type]));

    const replies = postIds.length
      ? await prisma.forumReply.findMany({
          where: { forum_id: { in: postIds } },
          orderBy: { created_at: "asc" },
        })
      : [];

    const replyUserIds = replies.map(r => r.user_id);

    const replyUsers = replyUserIds.length
      ? await prisma.user.findMany({
          where: { id: { in: replyUserIds } },
          select: { id: true, name: true, profile_image: true },
        })
      : [];

    const replyUserMap = new Map(replyUsers.map(u => [u.id, u]));

    const replyMap = new Map<string, any[]>();

    for (const r of replies) {
      const u = replyUserMap.get(r.user_id);

      const formatted = {
        id: r.id,
        forum_id: r.forum_id,
        comment: r.comment,
        created_at: r.created_at,
        user_name: u?.name ?? "Ismeretlen felhasználó",
        profile_image: getProfileImage(u?.profile_image)
      };

      replyMap.set(
        r.forum_id,
        [...(replyMap.get(r.forum_id) ?? []), formatted]
      );
    }

    const formatted = posts.map((p) => {
      const user = users.find(u => u.id === p.user_id);

      return {
        id: p.id,
        user_name: user?.name ?? "Ismeretlen felhasználó",
        profile_image: getProfileImage(user?.profile_image),
        comment: p.comment,
        review: p.review,
        likes: p.likes ?? 0,
        dislikes: p.dislikes ?? 0,
        myVote: voteMap.get(p.id) ?? null,
        replies: replyMap.get(p.id) ?? []
      };
    });

    return NextResponse.json(
      formatted,
      { headers: { "Cache-Control": "no-store" } }
    );

  } catch (err) {
    console.error("FORUM GET ERROR:", err);

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
    if (process.env.NODE_ENV !== "test") {
      rateLimit(`forum-post-ip-${ip}`, 10, 60_000);
    }

    const cookieStore = await cookies();
    const userCookie = cookieStore.get("userId");

    if (!userCookie) {
      return NextResponse.json(
        { message: t.notLoggedIn },
        { status: 401 }
      );
    }

    const { movie_id, comment, review } =
      forumPostSchema.parse(await req.json());

    const cleanComment = sanitizeText(comment);

    const newPost = await prisma.forum.create({
      data: {
        movie_id,
        user_id: userCookie.value,
        comment: cleanComment,
        review: review ?? 0,
      },
    });

    return NextResponse.json(
      newPost,
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

    console.error("FORUM POST ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}