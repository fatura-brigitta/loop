import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const adminAuth = req.cookies.get("admin-auth");
  const userAuth = req.cookies.get("userId");

  const isAdmin = pathname.toLowerCase().includes("admin");
  const isLogin = pathname === "/adminLogin";

  const protectedUserRoutes = ["/profile"];
  const isUserRoute = protectedUserRoutes.includes(pathname);

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  if (!adminAuth && isAdmin && !isLogin) {
    return NextResponse.redirect(new URL("/adminLogin", req.url));
  }

  if (adminAuth && isLogin) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  if (adminAuth && !isAdmin) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  if (!userAuth && isUserRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}