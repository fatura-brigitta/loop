import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

export async function PUT(req: Request) {
  const lang = await getLang();
  const t = messages[lang];

  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return NextResponse.json(
      { message: t.notLoggedIn },
      { status: 401 }
    );
  }

  const { theme } = await req.json();

  await prisma.user.update({
    where: { id: userId },
    data: { theme }
  });

  return NextResponse.json({ ok: true });
}