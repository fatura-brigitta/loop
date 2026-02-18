import { NextResponse, NextRequest } from "next/server";
import QRCode from "qrcode";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ token: string }> }
) {
  // Next.js 16 dynamic params
  const { token } = await context.params;

  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const url = `${baseUrl}/ticket/${token}`;

  const pngBuffer = await QRCode.toBuffer(url);

  const body = new Uint8Array(pngBuffer);

  return new NextResponse(body, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
