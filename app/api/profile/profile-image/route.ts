import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

export async function PUT(req: NextRequest) {
  const lang = await getLang();
  const t = messages[lang];

  try {

    const cookieStore = cookies();
    const userId = (await cookieStore).get("userId")?.value;

    if (!userId) {
      return NextResponse.json({ message: t.notLoggedIn }, { status: 401 });
    }

    const body = await req.json();
    const profile_image = body.profile_image ?? null;

    if (profile_image && profile_image.length > 10_000_000) {
      return NextResponse.json({ message: t.imageTooLarge }, { status: 400 });
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        profile_image: profile_image
      }
    });

    return NextResponse.json({ ok: true });

  } catch (err) {
    console.error("PROFILE IMAGE ERROR:", err);
    return NextResponse.json({ message: t.serverError }, { status: 500 });
  }
}