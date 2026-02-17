"use client";

import { Eye, EyeOff, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [birth_date, setBirthDate] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* hiba eltűnik 5 mp után */
  useEffect(() => {
    if (!error) return;
    const t = setTimeout(() => setError(""), 5000);
    return () => clearTimeout(t);
  }, [error]);

  const validate = () => {
    if (!name || !email || !phone_number || !birth_date || !password) {
      return "Please fill in all fields!";
    }

    if (password.length < 5) {
      return "Password must be at least 5 characters long!";
    }

    const age = new Date().getFullYear() - new Date(birth_date).getFullYear();

    if (age < 3) {
      return "Are you sure about your birth date? 🤔";
    }

    if(age > 150){
      return "Are you sure about your birth date? 🤔";
    }

    if (!email.includes("@")) {
      return "Invalid email address!";
    }

    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone_number,
          birth_date,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      router.push("/login");
    } catch {
      setError("Network error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100">
      <header className="sticky top-0 z-50 h-14 border-b border-white/10 bg-[#060b14]/90 backdrop-blur">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
          <Link className="flex items-center gap-2" href="/">
            <Image alt="Logo" height={28} src="/favicon.ico" width={28} />
            <span className="text-lg font-extrabold tracking-wide text-cyan-300">Loop</span>
          </Link>

          <nav className="flex items-center gap-5 text-sm">
            <a className="text-slate-200/90 transition hover:text-white" href="/movies">
              Movies
            </a>
            <a className="text-slate-200/90 transition hover:text-white" href="/screenings">
              Screenings
            </a>
            <a className="text-slate-200/90 transition hover:text-white" href="/forum">
              Forum
            </a>

            <Link
              className="ml-2 rounded-full bg-blue-500 px-4 py-2 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:brightness-110"
              href="/login"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex items-center justify-center py-20">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <h1 className="mb-8 text-center text-3xl font-bold text-cyan-300">Create Account</h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm text-white/60">Name</label>
              <input
                className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white transition outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                placeholder="John Doe"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-white/60">Email</label>
              <input
                className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white transition outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                placeholder="johndoe@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-white/60">Phone number</label>
              <input
                className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white transition outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                placeholder="+36 30 123 4567"
                type="text"
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-white/60">Birth date</label>
              <input
                className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white transition outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                type="date"
                value={birth_date}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-white/60">Password</label>

              <div className="relative mt-2">
                <input
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 pr-11 text-white transition outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  placeholder="Choose a password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-white/60 transition hover:text-white"
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
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
              <UserPlus size={18} />
              {loading ? "Creating account..." : "Register"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-white/60">
            Already have an account?{" "}
            <Link className="text-cyan-300 hover:underline" href="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
