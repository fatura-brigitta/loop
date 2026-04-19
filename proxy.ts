import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  res.headers.set("X-Frame-Options", "DENY");

  res.headers.set("X-Content-Type-Options", "nosniff");

  res.headers.set(
    "Referrer-Policy",
    "strict-origin-when-cross-origin"
  );

  res.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  res.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );

  res.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "img-src 'self' data: https: https://image.tmdb.org https://i.ytimg.com https://ytimg.com",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com",
      "style-src 'self' 'unsafe-inline'",
      "connect-src 'self' https://api.stripe.com https://r.stripe.com https:",
      "font-src 'self' https:",
      "frame-src https://www.youtube.com https://youtube.com https://www.youtube-nocookie.com https://js.stripe.com https://hooks.stripe.com",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self' https://checkout.stripe.com",
      "upgrade-insecure-requests"
    ].join("; ")
  );

  return res;
}

export const config = {
  matcher: "/:path*",
};