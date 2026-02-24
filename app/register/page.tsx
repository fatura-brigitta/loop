"use client";

import { Eye, EyeOff, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!error) return;
    const t = setTimeout(() => setError(""), 5000);
    return () => clearTimeout(t);
  }, [error]);

  const validate = () => {
    if (!name || !email || !password) {
      return "Kérjük töltse ki az összes mezőt!";
    }

    if (password.length < 5) {
      return "A jelszónak legalább 5 karakter hosszúnak kell lennie!";
    }

    if (!email.includes("@")) {
      return "Érvénytelen email cím!";
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
          password,
          phone_number: phone,
          profile_image: profileImage,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Hiba történt a regisztráció során");
        setLoading(false);
        return;
      }

      if (data.needsVerification) {
        router.push(`/verify-email?email=${encodeURIComponent(data.email)}`);
        return;
      }

      router.push("/login");

      router.push("/login");
    } catch (err: any) {
      if (err.code === "P2002") {
        if (err.meta?.target?.includes("phone_number")) {
          return NextResponse.json(
            { message: "Ez a telefonszám már regisztrálva van!" },
            { status: 409 }
          );
        }
      }
      setError("Szerver hiba, próbáld újra később!");
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
              Filmek
            </a>
            <a className="text-slate-200/90 transition hover:text-white" href="/screenings">
              Vetítések
            </a>
            <a className="text-slate-200/90 transition hover:text-white" href="/forum">
              Fórum
            </a>

            <Link
              className="ml-2 rounded-full bg-blue-500 px-4 py-2 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:brightness-110"
              href="/login"
            >
              Bejelentkezés
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex items-center justify-center py-20">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <h1 className="mb-8 text-center text-3xl font-bold text-cyan-300">Fiók létrehozása</h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center gap-3">
              <label className="text-sm text-white/60 text-center">
                Profilkép
              </label>

              <div className="relative">
                <Image
                  alt="Profilkép"
                  className="h-24 w-24 rounded-full object-cover border border-white/20"
                  height={96}
                  src={profileImage || "/profile/default.png"}
                  width={96}
                />

                <label className="absolute inset-0 flex items-center justify-center rounded-full bg-black/60 opacity-0 hover:opacity-100 cursor-pointer transition">
                  <span className="text-xs text-white">Módosítás</span>
                  <input
                    accept="image/*"
                    className="hidden"
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setProfileImage(reader.result as string);
                      };
                      reader.readAsDataURL(file);
                    }}
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="text-sm text-white/60">Név</label>
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
              <label className="text-sm text-white/60">Telefonszám</label>
              <input
                className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                placeholder="+36 30 123 4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-white/60">Jelszó</label>

              <div className="relative mt-2">
                <input
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 pr-11 text-white transition outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  placeholder="Válasszon jelszót"
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
            Már van fiókod?{" "}
            <Link className="text-cyan-300 hover:underline" href="/login">
              Bejelentkezés
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
