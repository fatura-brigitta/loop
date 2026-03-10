export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

type Vote = "LIKE" | "DISLIKE";

export async function POST(req: Request) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json({ message: t.notLoggedIn }, { status: 401 });
    }

    const { post_id, type } = (await req.json()) as { post_id?: string; type?: Vote };

    if (!post_id || (type !== "LIKE" && type !== "DISLIKE")) {
      return NextResponse.json({ message: t.badRequest }, { status: 400 });
    }

    const result = await prisma.$transaction(async (tx) => {
      const existing = await tx.forumVote.findUnique({
        where: { user_id_forum_id: { user_id: userId, forum_id: post_id } },
        select: { type: true },
      });

      let myVote: Vote | null = type;

      if (!existing) {
        await tx.forumVote.create({
          data: { user_id: userId, forum_id: post_id, type },
        });
      } else if (existing.type === type) {
        await tx.forumVote.delete({
          where: { user_id_forum_id: { user_id: userId, forum_id: post_id } },
        });
        myVote = null;
      } else {
        await tx.forumVote.update({
          where: { user_id_forum_id: { user_id: userId, forum_id: post_id } },
          data: { type },
        });
      }

      const likes = await tx.forumVote.count({ where: { forum_id: post_id, type: "LIKE" } });
      const dislikes = await tx.forumVote.count({ where: { forum_id: post_id, type: "DISLIKE" } });

      await tx.forum.update({
        where: { id: post_id },
        data: { likes, dislikes },
      });

      return { id: post_id, likes, dislikes, myVote };
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error("VOTE ERROR:", err);
    return NextResponse.json({ message: t.serverError }, { status: 500 });
  }
}