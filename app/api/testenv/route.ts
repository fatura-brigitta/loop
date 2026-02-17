export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    mailUser: process.env.MAIL_USER,
    mailPass: process.env.MAIL_PASS,
    db: process.env.DATABASE_URL ? "OK" : "MISSING",
  });
}
