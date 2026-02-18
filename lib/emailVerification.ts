export function generate4DigitCode(): string {
  return String(Math.floor(1000 + Math.random() * 9000));
}

export function codeExpiry(minutes = 10): Date {
  return new Date(Date.now() + minutes * 60 * 1000);
}
