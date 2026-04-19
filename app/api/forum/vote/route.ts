export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

import { forumVoteSchema } from "@/lib/validators";
import { rateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/getClientIp";
import { checkOrigin } from "@/lib/checkOrigin";

import { ZodError } from "zod";

type Vote = "LIKE" | "DISLIKE";

export async function POST(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    checkOrigin(req);

    const ip = getClientIp(req);
    rateLimit(`forum-vote-ip-${ip}`, 20, 60_000);

    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json(
        { message: t.notLoggedIn },
        { status: 401 }
      );
    }

    const { post_id, type } =  forumVoteSchema.parse(await req.json());

    const result = await prisma.$transaction(async (tx) => {
      const existing = await tx.forumVote.findUnique({
        where: {
          user_id_forum_id: {
            user_id: userId,
            forum_id: post_id
          }
        },
        select: { type: true },
      });

      let myVote: Vote | null = type;

      if (!existing) {

        await tx.forumVote.create({
          data: {
            user_id: userId,
            forum_id: post_id,
            type
          },
        });

      } else if (existing.type === type) {
        await tx.forumVote.delete({
          where: {
            user_id_forum_id: {
              user_id: userId,
              forum_id: post_id
            }
          },
        });

        myVote = null;

      } else {
        await tx.forumVote.update({
          where: {
            user_id_forum_id: {
              user_id: userId,
              forum_id: post_id
            }
          },
          data: { type },
        });
      }

      const likes = await tx.forumVote.count({
        where: { forum_id: post_id, type: "LIKE" }
      });

      const dislikes = await tx.forumVote.count({
        where: { forum_id: post_id, type: "DISLIKE" }
      });

      await tx.forum.update({
        where: { id: post_id },
        data: { likes, dislikes },
      });

      return {
        id: post_id,
        likes,
        dislikes,
        myVote
      };
    });

    return NextResponse.json(
      result,
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

    console.error("VOTE ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}