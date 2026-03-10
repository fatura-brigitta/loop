import { headers } from "next/headers";

export async function getLang() {
  const h = await headers();

  const lang = h.get("accept-language") || "";

  if (lang.startsWith("en")) return "en";
  return "hu";
}