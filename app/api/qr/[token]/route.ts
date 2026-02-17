import { NextResponse } from "next/server";
import QRCode from "qrcode";

export async function GET(
  req: Request,
  { params }: { params: { token: string } }
) {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/ticket/${params.token}`;

  const pngBuffer = await QRCode.toBuffer(url);

  const body = new Uint8Array(pngBuffer);

  return new NextResponse(body, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}