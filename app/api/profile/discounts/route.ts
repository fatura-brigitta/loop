import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const discounts = await prisma.discount.findMany({
      orderBy: {
        percent: "asc",
      },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
        percent: true,
      },
    });

    return NextResponse.json(discounts);
  } catch (error) {
    console.error("GET /api/discounts error:", error);
    return NextResponse.json(
      { error: "Nem sikerült lekérni a kedvezményeket." },
      { status: 500 },
    );
  }
}