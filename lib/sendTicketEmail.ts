import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

import nodemailer from "nodemailer";
import { generateTicketsPdf } from "@/lib/generateTicketPdf";

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

  const total = tickets.reduce((sum, t) => sum + t.price, 0);

  const pdfBuffer = await generateTicketsPdf(tickets);

  const html = `
  <div style="font-family:Arial;padding:20px">
  
    <h2>Köszönjük a vásárlást, ${name}! 🎬</h2>

    <p>A mozijegyeid csatolva találod PDF formátumban.</p>

    <h3>Összesen fizetve: ${total} Ft</h3>

    <p>Jó szórakozást kíván a Loop mozi! 🍿</p>

  </div>
  `;

  await transporter.sendMail({
    from: `"Loop Mozi" <${process.env.MAIL_USER}>`,
    to,
    subject: "Loop mozijegyek 🎟",
    html,
    attachments: [
      {
        filename: "loop-mozijegyek.pdf",
        content: pdfBuffer,
        contentType: "application/pdf",
      },
    ],
  });
}