"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Unknown error occurred during login");
        return;
      }

      router.push("/");
    } catch (err) {
      setError("Network error occurred during login");
    }
  };

  //login felület
  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100">
      <header className="sticky top-0 z-50 h-14 border-b border-white/10 bg-[#060b14]/90 backdrop-blur">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
          <Link className="text-lg font-extrabold tracking-wide text-cyan-300" href="/">
            LOOP
          </Link>

          <nav className="flex items-center gap-5 text-sm">
            <a className="text-slate-200/90 hover:text-white transition" href="/movies">
              Movies
            </a>
            <a className="text-slate-200/90 hover:text-white transition" href="/screenings">
              Screenings
            </a>
            <a className="text-slate-200/90 hover:text-white transition" href="/forum">
              Forum
            </a>

            <a
              className="ml-2 rounded-full bg-blue-500 px-4 py-2 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:brightness-110"
              href="/login"
            >
              Login
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex min-h-screen items-center justify-center  bg-[#060b14]/90">
          <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">

            <h1 className="mb-6 text-center text-2xl font-bold text-gray-500">
              Login
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-gray-500">
                  Email
                </label>

                <input
                  className="mt-1 w-full text-black rounded border px-3 py-2 border-[#060b14]/90"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500">
                  Password
                </label>

                <div className="relative mt-1">
                  <input
                    className="w-full rounded text-black border px-3 py-2 pr-10  border-[#060b14]/90"
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-sm text-red-500 bg-red-100 p-2 rounded h-12 flex items-center">
                  {error}
                </p>
              )}

              <button
                className="w-full rounded bg-black py-2 text-white hover:bg-gray-800 cursor-pointer"
                type="submit"
              >
                Login
              </button>

            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <a
                className="underline cursor-pointer text-black"
                href="/register"
              >
                Register
              </a>
            </p>

          </div>
        </div>
      </main>
    </div>
  );
}