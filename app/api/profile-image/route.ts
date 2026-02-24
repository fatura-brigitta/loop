import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export async function PUT(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json({ message: "Nem vagy bejelentkezve" }, { status: 401 });
    }

    const { profile_image } = await req.json();

    if (!profile_image) {
      return NextResponse.json({ message: "Hiányzó kép" }, { status: 400 });
    }

    if (profile_image.length > 2_000_000) {
      return NextResponse.json({ message: "A kép túl nagy!" }, { status: 400 });
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        profile_image,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("PROFILE IMAGE ERROR:", err);
    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}