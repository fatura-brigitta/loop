"use client";

import { Eye, EyeOff, LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
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

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, []);

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

      const safeRedirect =
        redirect === "/login" || redirect === "/register"
          ? "/"
          : redirect;

      router.replace(safeRedirect);
      router.refresh();
    } catch {
      setError("Hiba történt a bejelentkezés során. Kérem próbálja újra.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]" data-cy="login-page">
      <div className="flex items-center justify-center px-4 py-12 sm:py-20">
        <div className="w-full max-w-md rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 sm:p-8 shadow-2xl">
          <h1 className="mb-6 text-center text-2xl sm:text-3xl font-bold text-[var(--text-main2)]">Bejelentkezés</h1>

          <form className="space-y-5" data-cy="login-form" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm text-[var(--text-main)]/60">Email</label>
              <input
                className="mt-2 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-[var(--text-main)] transition outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                data-cy="login-email-input"
                placeholder="email@valami.hu"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-[var(--text-main)]/60">Jelszó</label>

              <div className="relative mt-2">
                <input
                  className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 pr-11 text-[var(--text-main)] transition outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  data-cy="login-password-input"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-[var(--text-main)]/60 transition hover:text-[var(--text-main)]"
                  data-cy="login-password-toggle"
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="mt-2 text-right text-sm">
                <Link
                  className="text-[var(--text-main2)] hover:underline"
                  data-cy="login-forgot-password"
                  href="/forgot-password"
                >
                  Elfelejtetted a jelszavad?
                </Link>
              </div>
            </div>

            {error && (
              <div
                className="animate-pulse rounded-lg border border-red-500/40 bg-red-500/20 px-4 py-2 text-center text-sm text-red-300"
                data-cy="login-error"
              >
                {error}
              </div>
            )}

            <button
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[var(--text-main2)] py-3 font-semibold text-[var(--text-light)] transition hover:bg-cyan-500 disabled:opacity-50"
              data-cy="login-submit"
              disabled={loading}
              type="submit"
            >
              <LogIn size={18} />
              {loading ? "Bejelentkezés..." : "Bejelentkezés"}
            </button>
            <div className="mt-6 flex flex-col gap-3 sm:gap-4">
              <button
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-[var(--border-color)] bg-white px-4 py-3 text-sm sm:text-base font-semibold text-black hover:bg-gray-100"
                data-cy="login-google"
                type="button"
                onClick={() => signIn("google", { callbackUrl: "/" })}
              >
                <img alt="Google" height={22} src="/google.svg" width={22} />
                Bejelentkezés Google fiókkal
              </button>
              <button
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-[#1877F2] px-4 py-3 text-sm sm:text-base font-semibold text-[var(--text-light)] hover:bg-[#166fe5]"
                data-cy="login-facebook"
                type="button"
                onClick={() => signIn("facebook", { callbackUrl: "/" })}
              >
                <img alt="Facebook" height={16} src="/facebook.svg" width={16} />
                Bejelentkezés Facebook fiókkal
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-xs sm:text-sm text-[var(--text-main)]/60">
            Nincs még fiókod?{" "}
            <Link
              className="text-[var(--text-main2)] hover:underline"
              data-cy="login-register-link"
              href="/register"
            >
              Regisztráció
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
