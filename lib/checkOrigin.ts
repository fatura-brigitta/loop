function normalizeOrigin(value?: string | null) {
  if (!value) return null;

  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

export function checkOrigin(req: Request) {

  const url = new URL(req.url);
  const isAdminLogin = url.pathname === "/api/admin/adminLogin";

  const origin = req.headers.get("origin") || req.headers.get("referer");

  if (!origin) {

    if (isAdminLogin) {
      return;
    }

    throw new Error("CSRF");
  }

  const requestUrl = new URL(req.url);

  const allowed = new Set(
    [
      requestUrl.origin,
      normalizeOrigin(process.env.NEXT_PUBLIC_URL),
      normalizeOrigin(process.env.NEXT_PUBLIC_APP_URL),
    ].filter(Boolean) as string[]
  );

  if (!allowed.has(origin)) {

    if (isAdminLogin) {
      return;
    }

    throw new Error("CSRF");
  }
}