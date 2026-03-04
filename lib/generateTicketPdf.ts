import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import QRCode from "qrcode";
import fs from "fs";
import path from "path";

export async function generateTicketsPdf(tickets: any[]): Promise<Buffer> {

  const pdfDoc = await PDFDocument.create();
  pdfDoc.registerFontkit(fontkit);

  const fontPath = path.join(process.cwd(), "public/fonts/Roboto-Regular.ttf");
  const fontBytes = fs.readFileSync(fontPath);

  const font = await pdfDoc.embedFont(fontBytes);

  for (const t of tickets) {

    const page = pdfDoc.addPage([400, 600]);
    const { width, height } = page.getSize();

    const screening = t.screenings;

    const movie = screening.movies.title;
    const hall = screening.halls.name;
    const date = new Date(screening.start).toLocaleString("hu-HU");
    const screeningType = screening.screening_types.type;

    const qrContent = `LOOP-TICKET:${t.qr_token}`;

    const qrDataUrl = await QRCode.toDataURL(qrContent);

    const qrImageBytes = Buffer.from(
      qrDataUrl.replace(/^data:image\/png;base64,/, ""),
      "base64"
    );

    const qrImage = await pdfDoc.embedPng(qrImageBytes);

    page.drawRectangle({
      x: 10,
      y: 10,
      width: width - 20,
      height: height - 20,
      borderWidth: 2,
      borderColor: rgb(0, 0.8, 0.8)
    });

    page.drawText("LOOP CINEMA", {
      x: 120,
      y: height - 60,
      size: 22,
      font,
      color: rgb(0, 0.7, 0.7)
    });

    page.drawLine({
      start: { x: 30, y: height - 80 },
      end: { x: width - 30, y: height - 80 },
      thickness: 1
    });

    let y = height - 130;

    const line = (text: string) => {
      page.drawText(text, {
        x: 40,
        y,
        size: 14,
        font
      });
      y -= 30;
    };

    line(`FILM: ${movie}`);
    line(`TEREM: ${hall}`);
    line(`IDŐ: ${date}`);
    line(`TÍPUS: ${screeningType}`);

    y -= 20;

    page.drawText(`SOR: ${t.chairs.row}`, {
      x: 40,
      y,
      size: 16,
      font
    });

    page.drawText(`SZÉK: ${t.chairs.column}`, {
      x: 200,
      y,
      size: 16,
      font
    });

    y -= 40;

    line(`JEGY: ${t.ticket_types.type}`);

    page.drawImage(qrImage, {
      x: width / 2 - 75,
      y: 120,
      width: 150,
      height: 150
    });

    page.drawText("Érkezzen legalább 15 perccel korábban!", {
      x: 40,
      y: 80,
      size: 10,
      font
    });

    page.drawText("Jó szórakozást kíván a Loop Mozi!", {
      x: 70,
      y: 50,
      size: 12,
      font,
      color: rgb(0, 0.7, 0.7)
    });

  }

  const pdfBytes = await pdfDoc.save();

  return Buffer.from(pdfBytes);
}