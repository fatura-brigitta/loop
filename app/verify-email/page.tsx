"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyEmailPage() {
  const router = useRouter();
  const params = useSearchParams();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const [cooldown, setCooldown] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    const e = params.get("email");
    if (e) setEmail(e);
  }, [params]);

  useEffect(() => {
    if (cooldown <= 0) {
        setCanResend(true);
        return;
    }

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

    setCanResend(false);
    setCooldown(30);

    await fetch("/api/resend-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
      <div className="w-full max-w-md rounded-xl bg-[#0b1220] p-8 shadow-2xl">
        <h1 className="text-2xl font-bold text-cyan-300 text-center mb-2">
          Email megerősítés
        </h1>

        <p className="text-center text-sm text-white/60 mb-6">
          Küldtünk egy 4 jegyű kódot erre az email címre:
        </p>

        <div className="mb-6 text-center font-semibold text-cyan-300">
          {email}
        </div>

        <label className="text-sm text-white/70">4 jegyű kód</label>
        <input
          className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-center text-2xl tracking-widest text-white outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          value={code}
          onChange={(e) => {
            const onlyNums = e.target.value.replace(/\D/g, "");
            if (onlyNums.length <= 4) setCode(onlyNums);
          }}
          placeholder="1234"
          inputMode="numeric"
          maxLength={4}
        />

        <button
          className="mt-6 w-full rounded-lg bg-cyan-600 py-3 font-bold transition hover:bg-cyan-500 disabled:opacity-50"
          onClick={submit}
          disabled={loading}
        >
          {loading ? "Ellenőrzés..." : "Megerősítés"}
        </button>

        {error && (
          <div className="mt-4 text-red-400 text-center animate-pulse">
            {error}
          </div>
        )}

        {ok && (
          <div className="mt-4 text-green-400 text-center">
            Sikeres megerősítés! Átirányítás...
          </div>
        )}

        <div className="mt-6 text-center text-sm text-white/70">
        Nem kaptad meg a kódot?
        </div>

        <button
        className={`mt-2 w-full rounded-lg py-2 font-semibold transition ${
            canResend
            ? "bg-orange-500 hover:bg-orange-400 text-white"
            : "bg-gray-600 text-gray-300 cursor-not-allowed"
        }`}
        disabled={!canResend}
        onClick={resend}
        >
        {canResend ? "Kód újraküldése" : `Újraküldés ${cooldown}s`}
        </button>
      </div>
    </div>
  );
}