export const BASE_PRICE = 5;
/**
 * @param screeningPercent
 * @param ticketDiscount
 */
const BASE_PRICE_CENTS = 500;

export function calculateTicketPrice(
  screeningPercent: number,
  ticketDiscount: number
): number {
  let price = BASE_PRICE_CENTS * (screeningPercent / 100);
  price = price * (1 - ticketDiscount / 100);

  return Math.round(price);
}