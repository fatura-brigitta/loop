import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

const normalizeProfileImage = (val: unknown) => {
  if (typeof val !== "string") return "/profile/default.png";
  const s = val.trim();

  if (!s || s === "null" || s === "undefined") return "/profile/default.png";

  if (s.startsWith("data:image/")) return s;
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  if (s.startsWith("/")) return s;

  return null;
};

export async function GET() {
  const users = await prisma.user.findMany({
    where: { consent: true },
    orderBy: { points: "desc" },
    take: 3,
    select: {
      name: true,
      points: true,
      profile_image: true
    }
  });

  return NextResponse.json(users);
}