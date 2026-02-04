import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const auth = req.cookies.get("admin-auth");
  const isAdmin = pathname.toLowerCase().includes("admin");
  const isLogin = pathname === "/adminLogin";

  // allow internals + api
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // nincs auth + admin oldal → login
  if (!auth && isAdmin && !isLogin) {
    return NextResponse.redirect(new URL("/adminLogin", req.url));
  }

  // van auth + login → admin
  if (auth && isLogin) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // VAN AUTH, DE NEM ADMIN OLDAL → vissza adminra
  if (auth && !isAdmin) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}
