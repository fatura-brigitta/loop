import { NextResponse, NextRequest } from "next/server";
import QRCode from "qrcode";

import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ token: string }> }
) {

  const lang = await getLang();
  const t = messages[lang];

  const { token } = await context.params;

  if (!token) {
    return NextResponse.json(
      { message: t.missingToken },
      { status: 400 }
    );
  }

  const qrContent = `LOOP-TICKET:${token}`;

  const pngBuffer = await QRCode.toBuffer(qrContent);

  return new NextResponse(new Uint8Array(pngBuffer), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "no-store",
    },
  });
}