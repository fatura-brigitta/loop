import QRCode from "qrcode";

export async function createTicketQr(token: string) {
  const url = `${process.env.NEXT_PUBLIC_APP_URL}/ticket/${token}`;
  return await QRCode.toDataURL(url);
}
