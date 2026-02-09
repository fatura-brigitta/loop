import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ message: "Missing id" }, { status: 400 });
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set("screeningId", id, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return res;
}