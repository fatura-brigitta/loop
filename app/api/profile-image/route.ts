import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export async function PUT(req: NextRequest) {
  try {

    const cookieStore = cookies();
    const userId = (await cookieStore).get("userId")?.value;

    if (!userId) {
      return NextResponse.json({ message: "Nem vagy bejelentkezve" }, { status: 401 });
    }

    const body = await req.json();
    const profile_image = body.profile_image ?? null;

    if (profile_image && profile_image.length > 10_000_000) {
      return NextResponse.json({ message: "A kép túl nagy!" }, { status: 400 });
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
    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}