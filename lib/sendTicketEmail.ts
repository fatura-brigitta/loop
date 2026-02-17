import dns from "dns";
dns.setDefaultResultOrder("ipv4first");
import nodemailer from "nodemailer";

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

  let seatsHtml = "";
  let total = 0;

  tickets.forEach((t) => {
    seatsHtml += `<li>Sor ${t.chairs.row} - Szék ${t.chairs.column} (${t.ticket_types.type}) - ${t.price} Ft</li>`;
    total += t.price;
  });

  const html = `
  <div style="font-family:Arial;padding:20px">
    <h2>Köszönjük a vásárlást, ${name}!</h2>

    <p><b>Film:</b> ${movie}</p>
    <p><b>Terem:</b> ${hall}</p>
    <p><b>Időpont:</b> ${date}</p>

    <h3>Jegyek:</h3>
    <ul>
      ${seatsHtml}
    </ul>

    <h2>Összesen: ${total} Ft</h2>

    <p>Jó szórakozást kíván a Loop mozi! 🎬</p>
  </div>
  `;

  await transporter.sendMail({
    from: `"Loop Mozi" <${process.env.MAIL_USER}>`,
    to,
    subject: "Loop mozijegyek 🎟",
    html,
  });
}