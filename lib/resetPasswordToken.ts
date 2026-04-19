import crypto from "crypto";

export function generateResetToken() {
  return crypto.randomBytes(32).toString("hex");
}

export function resetTokenExpiry() {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 10);
  return date;
}