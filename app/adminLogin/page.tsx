"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/adminLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Érvénytelen adatok");
        setLoading(false);
        return;
      }

      router.push("/admin");
    } catch (err) {
      setError("Hálózati hiba történt");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060b14] text-white flex items-center justify-center px-4" data-cy="admin-login-page">

      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl" data-cy="admin-login-card">

        <h1 className="mb-8 text-center text-3xl font-bold text-cyan-300">
          Admin Bejelentkezés
        </h1>

        <form className="space-y-5" data-cy="admin-login-form" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm text-white/60">Admin név</label>

            <input
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white outline-none transition
              focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              data-cy="admin-name-input"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-white/60">Jelszó</label>

            <div className="relative mt-2">
              <input
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 pr-11 text-white outline-none transition
                focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                data-cy="admin-password-input"
                required
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition cursor-pointer"
                data-cy="admin-password-toggle"
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="animate-pulse rounded-lg border border-red-500/40 bg-red-500/20 px-4 py-2 text-center text-sm text-red-300" data-cy="admin-login-error">
              {error}
            </div>
          )}

          <button
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600 py-3 font-semibold text-white transition
            hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
            data-cy="admin-login-submit"
            disabled={loading}
            type="submit"
          >
            <LogIn size={18} />
            {loading ? "Bejelentkezés folyamatban..." : "Bejelentkezés"}
          </button>

        </form>
      </div>
    </div>
  );
}