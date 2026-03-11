function normalizeOrigin(value?: string | null) {
  if (!value) return null;

  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

export function checkOrigin(req: Request) {
  const origin = req.headers.get("origin");
  if (!origin) {
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
    throw new Error("CSRF");
  }
}