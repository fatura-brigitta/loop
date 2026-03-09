"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
  const params = useSearchParams();
  const router = useRouter();

  const token = params.get("token");

  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [ok, setOk] = useState(false);

  const submit = async () => {
    setError("");

    if (!password || !password2) {
      setError("Add meg mindkét jelszót!");
      return;
    }

    if (password.length < 5) {
      setError("A jelszó legalább 5 karakter legyen!");
      return;
    }

    if (password !== password2) {
      setError("A jelszavak nem egyeznek!");
      return;
    }

    const res = await fetch("/api/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, password }),
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.message || "Hiba történt");
      return;
    }

    setOk(true);

    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--bg-main)] text-red-400" data-cy="reset-password-invalid-token">
        Érvénytelen link.
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-main)] text-[var(--text-main)]" data-cy="reset-password-page">
      <div className="w-full max-w-md rounded-xl bg-[var(--card-bg)] p-8 shadow-2xl" data-cy="reset-password-card">

        <h1 className="text-2xl font-bold text-[var(--text-main2)] text-center mb-6">
          Új jelszó beállítása
        </h1>

        <input className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-[var(--text-main)] mb-4"
          data-cy="reset-password-input"
          placeholder="Új jelszó"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-[var(--text-main)]"
          data-cy="reset-password-confirm-input"
          placeholder="Új jelszó újra"
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />

        <button className="mt-6 w-full rounded-lg bg-cyan-600 py-3 font-bold hover:bg-cyan-500"
          data-cy="reset-password-submit-button"
          onClick={submit}
        >
          Jelszó módosítása
        </button>

        {error && <div className="mt-4 text-red-400 text-center" data-cy="reset-password-error-message">{error}</div>}
        {ok && <div className="mt-4 text-green-400 text-center" data-cy="reset-password-success-message">Sikeres! Átirányítás...</div>}
      </div>
    </div>
  );
}