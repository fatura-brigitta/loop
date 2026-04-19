import nodemailer from "nodemailer";

export async function sendResetPasswordEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL!;
  const link = `${baseUrl}/reset-password?token=${token}`

  const html = `
  <div style="font-family:Arial;padding:20px">
    <h2>Jelszó visszaállítás</h2>

    <p>Valaki jelszócserét kért a Loop mozi fiókodhoz.</p>

    <p>Kattints az alábbi gombra új jelszó beállításához:</p>

    <a href="${link}"
       style="display:inline-block;margin-top:15px;padding:12px 20px;background:#06b6d4;color:white;text-decoration:none;border-radius:8px;">
       Új jelszó beállítása
    </a>

    <p style="margin-top:20px;color:#888;">
      A link 10 percig érvényes.
    </p>

    <p style="color:#888;">
      Ha nem te kérted, hagyd figyelmen kívül.
    </p>
  </div>
  `;

  await transporter.sendMail({
    from: `"Loop Mozi" <${process.env.MAIL_USER}>`,
    to: email,
    subject: "Loop mozi - Jelszó visszaállítás",
    html,
  });
}