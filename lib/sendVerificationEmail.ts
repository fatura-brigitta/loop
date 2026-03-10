import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendVerificationEmail(
  to: string,
  name: string,
  code: string
) {
  const safeName = name?.trim() || "Felhasználó";

  const html = `
  <div style="font-family:Arial;padding:20px">
    <h2>Szia ${safeName}!</h2>
    <p>Köszönjük, hogy regisztrált a <b>Loop Moziba</b> 🎬</p>

    <p>Az email címed megerősítéséhez írd be ezt a kódot:</p>

    <div style="font-size:32px;font-weight:bold;letter-spacing:6px;margin:16px 0;">
      ${code}
    </div>

    <p>A kód 10 percig érvényes.</p>
  </div>
  `;

  await transporter.sendMail({
    from: `"Loop Mozi" <${process.env.MAIL_USER}>`,
    to,
    subject: "Email megerősítés – Loop 🎟",
    html,
  });
}