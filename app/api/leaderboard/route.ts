import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany({
    orderBy: { points: "desc" },
    take: 3,
    select: {
      name: true,
      points: true,
      profile_image: true,
    },
  });

  return NextResponse.json(users);
}