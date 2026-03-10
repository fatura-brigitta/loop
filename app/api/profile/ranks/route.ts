import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

export async function GET() {
  const lang = await getLang();
  const t = messages[lang];

  try {
    const ranks = await prisma.rank.findMany({
      orderBy: {
        point_limit: "asc",
      },
      select: {
        id: true,
        name: true,
        point_limit: true,
        discount_id: true,
        image: true,
      },
    });

    return NextResponse.json(ranks);
  } catch (error) {
    console.error("GET /api/profile/ranks error:", error);
    return NextResponse.json(
      { message: t.rankFetchError },
      { status: 500 }
    );
  }
}