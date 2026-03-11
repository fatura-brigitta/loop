export const dynamic = "force-dynamic";

import { NextResponse, NextRequest } from "next/server";
import QRCode from "qrcode";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

import { rateLimit } from "@/lib/rateLimit";
import { getClientIp } from "@/lib/getClientIp";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ token: string }> }
) {

  const lang = await getLang();
  const t = messages[lang];

  try {

    const ip = getClientIp(req);
    rateLimit(`qr-${ip}`, 60, 60_000);

    const { token } = await context.params;

    if (!token) {
      return NextResponse.json(
        { message: t.missingToken },
        { status: 400 }
      );
    }

    if (!/^[a-zA-Z0-9-_]{10,200}$/.test(token)) {
      return NextResponse.json(
        { message: t.invalidData },
        { status: 400 }
      );
    }

    const qrContent = `LOOP-TICKET:${token}`;

    const pngBuffer = await QRCode.toBuffer(qrContent);

    return new NextResponse(new Uint8Array(pngBuffer), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store",
        "Content-Disposition": "inline; filename=qr.png",
      },
    });

  } catch (err) {

    console.error("QR GENERATION ERROR:", err);

    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}