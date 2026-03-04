import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  try {

    const { searchParams } = new URL(req.url);
    const movieId = searchParams.get("movie");

    if (!movieId) return NextResponse.json([]);

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
        profile_image: u?.profile_image ?? "/profile/default.png",
      };

      replyMap.set(r.forum_id, [...(replyMap.get(r.forum_id) ?? []), formatted]);
    }

    const formatted = posts.map((p) => {

      const user = users.find(u => u.id === p.user_id);

      return {
        id: p.id,
        user_name: user?.name ?? "Ismeretlen felhasználó",
        profile_image: user?.profile_image ?? "/profile/default.png",
        comment: p.comment,
        review: p.review,
        likes: p.likes ?? 0,
        dislikes: p.dislikes ?? 0,
        myVote: voteMap.get(p.id) ?? null,
        replies: replyMap.get(p.id) ?? []
      };
    });

    return NextResponse.json(formatted);

  } catch (err) {

    console.error("FORUM GET ERROR:", err);

    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get("userId");

    if (!userCookie) {
      return NextResponse.json({ error: "Nincs bejelentkezve" }, { status: 401 });
    }

    const { movie_id, comment, review } = await req.json();

    if (!movie_id || !comment) {
      return NextResponse.json({ error: "Hiányzó adatok" }, { status: 400 });
    }

    const newPost = await prisma.forum.create({
      data: {
        movie_id: movie_id,
        user_id: userCookie.value,
        comment: comment,
        review: Number(review) || 0,
      },
    });

    return NextResponse.json(newPost);
  } catch (err) {
    console.error("FORUM POST ERROR:", err);
    return NextResponse.json({ error: "Szerver hiba" }, { status: 500 });
  }
}