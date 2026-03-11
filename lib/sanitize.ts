import sanitizeHtml from "sanitize-html";

export function sanitizeText(input: string) {
  return sanitizeHtml(String(input ?? ""), {
    allowedTags: [],
    allowedAttributes: {},
  }).trim();
}