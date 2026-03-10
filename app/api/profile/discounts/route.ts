import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

export async function GET() {
  const lang = await getLang();
  const t = messages[lang];

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
      { message: t.discountFetchError },
      { status: 500 },
    );
  }
}