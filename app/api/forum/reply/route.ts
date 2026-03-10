export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

export async function POST(req: Request) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json({ message: t.notLoggedIn }, { status: 401 });
    }

    const { forum_id, comment } = await req.json();

    if (!forum_id || !comment || !String(comment).trim()) {
      return NextResponse.json({ message: t.missingData }, { status: 400 });
    }

    const reply = await prisma.forumReply.create({
      data: {
        forum_id,
        user_id: userId,
        comment: String(comment).trim(),
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

    return NextResponse.json({
      id: reply.id,
      forum_id: reply.forum_id,
      comment: reply.comment,
      created_at: reply.created_at,
      user_name: user?.name ?? "Ismeretlen felhasználó",
      profile_image: user?.profile_image ?? "/profile/default.png",
    });
  } catch (err) {
    console.error("REPLY POST ERROR:", err);
    return NextResponse.json({ message: t.serverError }, { status: 500 });
  }
}