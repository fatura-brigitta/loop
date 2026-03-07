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

    const res = await fetch("/api/forgot-password", {
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
    <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white" data-cy="forgot-password-page">
      <div data-cy="forgot-password-form" className="w-full max-w-md rounded-xl bg-[#0b1220] p-8 shadow-2xl">

        <h1 className="text-2xl font-bold text-cyan-300 text-center mb-6">
          Elfelejtett jelszó
        </h1>

        {!sent ? (
          <>
            <p className="text-sm text-white/70 text-center mb-4">
              Kérjük add meg a fiókhoz tartozó email címet, és küldünk egy jelszócsere linket.
            </p>

            <input className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
              data-cy="forgot-password-email"
              placeholder="email@valami.hu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="mt-6 w-full rounded-lg bg-cyan-600 py-3 font-bold hover:bg-cyan-500"
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