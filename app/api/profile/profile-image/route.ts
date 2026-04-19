import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import cloudinary from "@/lib/cloudinary";

export async function PUT(req: NextRequest) {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) {
    return NextResponse.json({ message: "Not logged in" }, { status: 401 });
  }

  const body = await req.json();
  const base64 = body.profile_image;

  if (!base64) {
    await prisma.user.update({
      where: { id: userId },
      data: { profile_image: null }
    });

    return NextResponse.json({
      ok: true,
      url: null
    });

  }

  const upload = await cloudinary.uploader.upload(base64, {
    folder: "loop/profile",
    public_id: `${userId}_${Date.now()}`,
    overwrite: false,
    transformation: [
      { width: 256, height: 256, crop: "fill" },
      { quality: "auto", fetch_format: "auto" }
    ]
  });

  await prisma.user.update({
    where: { id: userId },
    data: {
      profile_image: upload.public_id
    }
  });

  return NextResponse.json({
    ok: true,
    url: upload.public_id
  });
}