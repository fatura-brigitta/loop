import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { movieId } = await req.json();

    if (!movieId) {
      return NextResponse.json({ message: "Hiányzó film" }, { status: 400 });
    }

    const res = NextResponse.json({ ok: true });

    res.cookies.set("selectedMovie", movieId, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 15,
    });

    return res;
  } catch {
    return NextResponse.json({ message: "Szerver hiba" }, { status: 500 });
  }
}