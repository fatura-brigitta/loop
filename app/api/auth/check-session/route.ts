import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {

  const cookieStore = await cookies();

  const browserSession = cookieStore.get("browserSession")?.value;

  if (!browserSession) {

    cookieStore.delete("userId");

    cookieStore.set("browserSession", "true", {
      httpOnly: true,
      sameSite: "lax",
      path: "/"
    });

    return NextResponse.json({ loggedOut: true });

  }

  return NextResponse.json({ ok: true });
}