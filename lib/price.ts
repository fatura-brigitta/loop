export const BASE_PRICE = 1500;

export function calculateAge(birthDate: Date): number {
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export function getTicketTypeByAge(age: number): "child" | "student" | "normal" | "senior" {
  if (age <= 13) return "child";
  if (age <= 25) return "student";
  if (age >= 65) return "senior";
  return "normal";
}

/**
 * Végső jegyár kiszámítása
 *
 * @param screeningPercent pl. 200 (VIP)
 * @param ticketDiscount pl. 30 (senior)
 */
export function calculateTicketPrice(
  screeningPercent: number,
  ticketDiscount: number
): number {
  // terem szorzó
  let price = BASE_PRICE * (screeningPercent / 100);

  // kedvezmény
  price = price * (1 - ticketDiscount / 100);

  return Math.round(price);
}