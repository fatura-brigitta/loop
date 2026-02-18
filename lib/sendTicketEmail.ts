import dns from "dns";
dns.setDefaultResultOrder("ipv4first");
import QRCode from "qrcode";
import nodemailer from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer";

type TicketEmailData = {
  to: string;
  name: string;
  tickets: any[];
};

export async function sendTicketEmail(data: TicketEmailData) {
  const { to, name, tickets } = data;

  if (!tickets || tickets.length === 0) return;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const screening = tickets[0].screenings;

  const movie = screening.movies.title;
  const hall = screening.halls.name;
  const date = new Date(screening.start).toLocaleString("hu-HU");
  const screeningType = screening.screening_types.type;


  const attachments: Attachment[] = [];
  let index = 0;
  let seatsHtml = "";
  let total = 0;

  for (const t of tickets) {

    const qrContent = `LOOP-TICKET:${t.qr_token}`;
    const qrUint8 = await QRCode.toBuffer(qrContent);
    const qrBuffer = Buffer.from(qrUint8);

    const cid = `qr${index}@loop`;

    attachments.push({
      filename: `ticket-${index}.png`,
      content: qrBuffer,
      cid: cid,
      contentType: "image/png",
    });

    seatsHtml += `
      <tr>
        <td style="padding:15px;border:1px solid #ddd;border-radius:8px;">
          <div style="font-size:16px;font-weight:bold;margin-bottom:6px;">
            Sor ${t.chairs.row} - Szék ${t.chairs.column}
          </div>

          <div style="margin-bottom:4px;">
            Jegytípus: <b>${t.ticket_types.type}</b>
          </div>

          <div style="margin-bottom:10px;">
            Ár: <b>${t.price} Ft</b>
          </div>

          <img src="cid:${cid}" width="220" style="display:block;margin:10px auto;" />
        </td>
      </tr>
    `;

    total += t.price;
    index++;
  }

  const html = `
  <div style="font-family:Arial;padding:20px">
    <h2>Köszönjük a vásárlást, ${name}!</h2>

    <p><b>Film:</b> ${movie}</p>
    <p><b>Terem:</b> ${hall}</p>
    <p><b>Vetítés típusa:</b> ${screeningType}</p>
    <p><b>Időpont:</b> ${date}</p>

    <h3>Jegyek:</h3>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${seatsHtml}
    </table>

    <h2>Összesen: ${total} Ft</h2>

    <p>Jó szórakozást kíván a Loop mozi! 🎬</p>
  </div>
  `;

  await transporter.sendMail({
    from: `"Loop Mozi" <${process.env.MAIL_USER}>`,
    to,
    subject: "Loop mozijegyek 🎟",
    html,
    attachments,
  });
}