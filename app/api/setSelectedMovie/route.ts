import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { movieId } = await req.json();

  const res = NextResponse.json({ ok: true });

  res.cookies.set("selectedMovieId", movieId, {
    path: "/",
    httpOnly: false,
  });

  return res;
}
