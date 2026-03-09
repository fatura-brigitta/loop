"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const submit = async () => {
    setError("");
    if (!emailRegex.test(email)) {
        setError("Érvénytelen email formátum!");
        return;
    }

    const res = await fetch("/api/password/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      setError("Hiba történt.");
      return;
    }

    setSent(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-main)] text-[var(--text-main)]" data-cy="forgot-password-page">
      <div data-cy="forgot-password-form" className="w-full max-w-md rounded-xl bg-[var(--card-bg)] p-8 shadow-2xl">

        <h1 className="text-2xl font-bold text-[var(--text-main2)] text-center mb-6">
          Elfelejtett jelszó
        </h1>

        {!sent ? (
          <>
            <p className="text-sm text-[var(--text-main)]/70 text-center mb-4">
              Kérjük add meg a fiókhoz tartozó email címet, és küldünk egy jelszócsere linket.
            </p>

            <input className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-[var(--text-main)]"
              data-cy="forgot-password-email"
              placeholder="email@valami.hu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="mt-6 w-full rounded-lg bg-[var(--text-main2)] py-3 text-[var(--text-light)] font-bold hover:bg-cyan-500"
              data-cy="forgot-password-submit"
              onClick={submit}
            >
              Küldés
            </button>

            {error && (
              <div data-cy="forgot-password-error" className="mt-4 text-red-400 text-center">{error}</div>
            )}
          </>
        ) : (
          <div className="text-center text-green-400" data-cy="forgot-password-success">
            Ha létezik fiók ehhez az emailhez, küldtünk egy levelet.
          </div>
        )}
      </div>
    </div>
  );
}