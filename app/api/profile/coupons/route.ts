export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";
import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

export async function GET() {
  const lang = await getLang();
  const t = messages[lang];

  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId)
    return NextResponse.json({ message: t.notLoggedIn }, { status: 401 });

  const coupons = await prisma.coupon.findMany({
    where: { user_id: userId },
    include: {
      discounts: true
    },
    orderBy: {
      created_at: "desc"
    }
  });

  return NextResponse.json(coupons);
}