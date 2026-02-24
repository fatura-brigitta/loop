import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const movieId = searchParams.get("movie");

  if (!movieId) return NextResponse.json([]);

  const posts = await prisma.forum.findMany({
    where: { movie_id: movieId },
    orderBy: { id: "desc" },
  });

  const users = await prisma.user.findMany({
    where: {
      id: { in: posts.map((p) => p.user_id) },
    },
    select: {
      id: true,
      name: true,
      profile_image: true,
    },
  });

  const formatted = posts.map((p) => {
    const user = users.find((u) => u.id === p.user_id);

    return {
      id: p.id,
      user_name: user?.name ?? "Ismeretlen felhasználó",
      profile_image: user?.profile_image ?? "/profile/default.png",
      comment: p.comment,
      review: p.review,
    };
  });

  return NextResponse.json(formatted);
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