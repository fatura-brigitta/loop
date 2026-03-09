"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const router = useRouter();
  const params = useSearchParams();

  const email = params.get("email") || "";

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const [cooldown, setCooldown] = useState(30);

  const canResend = cooldown <= 0;

  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setTimeout(() => {
      setCooldown((c) => c - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [cooldown]);

  const submit = async () => {
    if (code.length !== 4) {
      setError("A kód 4 számjegyű!");
      return;
    }

    setError("");
    setOk(false);
    setLoading(true);

    try {
      const res = await fetch("/api/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.message || "Hibás kód");
        setLoading(false);
        return;
      }

      setOk(true);

      setTimeout(() => {
        router.push("/login");
      }, 1200);
    } catch {
      setError("Hálózati hiba történt");
      setLoading(false);
    }
  };

  const resend = async () => {
    if (!canResend) return;

    setCooldown(30);

    await fetch("/api/resend-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[var(--bg-main)] text-[var(--text-main)]"
      data-cy="verify-email-page"
    >
      <div
        className="w-full max-w-md rounded-xl bg-[var(--card-bg)] p-8 shadow-2xl"
        data-cy="verify-email-card"
      >
        <h1
          className="mb-2 text-center text-2xl font-bold text-cyan-300"
          data-cy="verify-email-title"
        >
          Email megerősítés
        </h1>

        <p className="mb-6 text-center text-sm text-[var(--text-main)]/60">
          Küldtünk egy 4 jegyű kódot erre az email címre:
        </p>

        <div
          className="mb-6 text-center font-semibold text-cyan-300"
          data-cy="verify-email-address"
        >
          {email}
        </div>

        <label className="text-sm text-[var(--text-main)]/70">4 jegyű kód</label>

        <input
          className="mt-2 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-3 text-center text-2xl tracking-widest text-[var(--text-main)] outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          data-cy="verify-email-code-input"
          inputMode="numeric"
          maxLength={4}
          placeholder="1234"
          value={code}
          onChange={(e) => {
            const onlyNums = e.target.value.replace(/\D/g, "");
            if (onlyNums.length <= 4) setCode(onlyNums);
          }}
        />

        <button
          className="mt-6 w-full rounded-lg bg-cyan-600 py-3 font-bold transition hover:bg-cyan-500 disabled:opacity-50 cursor-pointer"
          data-cy="verify-email-submit-button"
          disabled={loading}
          onClick={submit}
        >
          {loading ? "Ellenőrzés..." : "Megerősítés"}
        </button>

        {error && (
          <div
            className="mt-4 animate-pulse text-center text-red-400"
            data-cy="verify-email-error-message"
          >
            {error}
          </div>
        )}

        {ok && (
          <div
            className="mt-4 text-center text-green-400"
            data-cy="verify-email-success-message"
          >
            Sikeres megerősítés! Átirányítás...
          </div>
        )}

        <div className="mt-6 text-center text-sm text-[var(--text-main)]/70">
          Nem kaptad meg a kódot?
        </div>

        <button
          className={`mt-2 w-full rounded-lg py-2 font-semibold transition cursor-pointer ${
            canResend
              ? "bg-orange-500 text-[var(--text-main)] hover:bg-orange-400"
              : "cursor-not-allowed bg-gray-600 text-gray-300"
          }`}
          data-cy="verify-email-resend-button"
          disabled={!canResend}
          onClick={resend}
        >
          {canResend ? "Kód újraküldése" : `Újraküldés ${cooldown}s`}
        </button>
      </div>
    </div>
  );
}