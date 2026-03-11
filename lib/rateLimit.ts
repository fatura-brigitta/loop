const requests = new Map<string, number[]>();

export function rateLimit(key: string, limit = 20, windowMs = 60_000) {
  const now = Date.now();

  const existing = requests.get(key) ?? [];
  const timestamps = existing.filter((t) => now - t < windowMs);

  if (timestamps.length >= limit) {
    throw new Error("RATE_LIMIT");
  }

  timestamps.push(now);
  requests.set(key, timestamps);
}