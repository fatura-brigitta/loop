"use client";

import Navbar from "@/app/components/navbar";
import { Eye, EyeOff, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!error) return;
    const t = setTimeout(() => setError(""), 3500);
    return () => clearTimeout(t);
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    setError("");

    if (!email || !password) {
      setError("Kérjük töltse ki az összes mezőt");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {

        if (data.needsVerification) {
          router.push(`/verify-email?email=${encodeURIComponent(data.email)}`);
          return;
        }

        setError(data.message || "Érvénytelen email vagy jelszó");
        setLoading(false);
        return;
      }

      router.replace(redirect);
      router.refresh();

    } catch {
      setError("Hiba történt a bejelentkezés során. Kérem próbálja újra.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100">
      <div className="flex items-center justify-center py-20">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <h1 className="mb-8 text-center text-3xl font-bold text-cyan-300">
            Bejelentkezés
          </h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm text-white/60">Email</label>
              <input
                className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white transition outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                placeholder="email@valami.hu"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-white/60">Jelszó</label>

              <div className="relative mt-2">
                <input
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 pr-11 text-white transition outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-white/60 transition hover:text-white cursor-pointer"
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="mt-2 text-right text-sm">
                <Link
                  className="text-cyan-300 hover:underline"
                  href="/forgot-password"
                >
                  Elfelejtetted a jelszavad?
                </Link>
              </div>
            </div>

            {error && (
              <div className="animate-pulse rounded-lg border border-red-500/40 bg-red-500/20 px-4 py-2 text-center text-sm text-red-300">
                {error}
              </div>
            )}

            <button
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600 py-3 font-semibold text-white transition hover:bg-cyan-500 disabled:opacity-50 cursor-pointer"
              disabled={loading}
              type="submit"
            >
              <LogIn size={18}/>
              {loading ? "Bejelentkezés..." : "Bejelentkezés"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-white/60">
            Nincs még fiókod?{" "}
            <Link className="text-cyan-300 hover:underline" href="/register">
              Regisztráció
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}