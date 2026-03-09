import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
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
      { error: "Nem sikerült lekérni a rangokat." },
      { status: 500 },
    );
  }
}