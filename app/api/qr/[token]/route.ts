import { NextResponse, NextRequest } from "next/server";
import QRCode from "qrcode";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ token: string }> }
) {
  const { token } = await context.params;

  if (!token) {
    return NextResponse.json({ error: "Hiányzó token" }, { status: 400 });
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