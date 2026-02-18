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

export function getTicketTypeByAge(age: number): "Gyerek" | "Diák" | "Normál" | "Senior" {
  if (age <= 13) return "Gyerek";
  if (age <= 25) return "Diák";
  if (age >= 65) return "Senior";
  return "Normál";
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