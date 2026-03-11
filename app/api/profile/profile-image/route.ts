import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

import fs from "fs/promises";
import path from "path";

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

    if (!profile_image) {

      await prisma.user.update({
        where: { id: userId },
        data: { profile_image: null }
      });

      return NextResponse.json({ ok: true });
    }

    if (profile_image.length > 10_000_000) {
      return NextResponse.json({ message: t.imageTooLarge }, { status: 400 });
    }

    const base64 = profile_image.split(",")[1];
    const buffer = Buffer.from(base64, "base64");

    const uploadsDir = path.join(process.cwd(), "public/uploads");

    await fs.mkdir(uploadsDir, { recursive: true });

    const fileName = `${userId}.jpg`;
    const filePath = path.join(uploadsDir, fileName);

    await fs.writeFile(filePath, buffer);

    const imagePath = `/uploads/${fileName}`;

    await prisma.user.update({
      where: { id: userId },
      data: {
        profile_image: imagePath
      }
    });

    return NextResponse.json({
      ok: true,
      url: imagePath
    });

  } catch (err) {

    console.error("PROFILE IMAGE ERROR:", err);

    return NextResponse.json({ message: t.serverError }, { status: 500 });

  }

}