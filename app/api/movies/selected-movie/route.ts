import { NextResponse } from "next/server";
import { getLang } from "@/lib/lang";
import { messages } from "@/lib/messages";

export async function POST(req: Request) {
  const lang = await getLang();
  const t = messages[lang];

  try {
    const { movieId } = await req.json();

    if (!movieId) {
      return NextResponse.json(
        { message: t.missingMovie },
        { status: 400 }
      );
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
    return NextResponse.json(
      { message: t.serverError },
      { status: 500 }
    );
  }
}