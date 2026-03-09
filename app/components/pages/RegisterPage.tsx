"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, UserPlus } from "lucide-react";

type Gender = "MALE" | "FEMALE" | "RATHER_NOT_SAY";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [consent, setConsent] = useState(false);

  const [gender, setGender] = useState<Gender>("RATHER_NOT_SAY");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [profileImageBase64, setProfileImageBase64] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);


  const previewSrc = useMemo(() => {
    return profileImageBase64 || "/profile/default.png";
  }, [profileImageBase64]);

  useEffect(() => {
    if (!error) return;
    const t = setTimeout(() => setError(""), 5000);
    return () => clearTimeout(t);
  }, [error]);

  const validate = () => {
    if (!name || !email || !phone_number || !password) {
      return "Kérjük töltse ki az összes mezőt!";
    }
    if (!email.includes("@")) {
      return "Érvénytelen email cím!";
    }
    if (password.length < 5) {
      return "A jelszónak legalább 5 karakter hosszúnak kell lennie!";
    }
    return "";
  };

  const readFileAsBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(String(reader.result || ""));
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handlePickFile = async (file?: File) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Csak képfájl tölthető fel!");
      return;
    }

    const maxBytes = 2 * 1024 * 1024;
    if (file.size > maxBytes) {
      setError("A kép túl nagy (max 2MB)!");
      return;
    }

    try {
      const base64 = await readFileAsBase64(file);
      setProfileImageBase64(base64);
    } catch {
      setError("Nem sikerült beolvasni a képet.");
    }
  };

  const onDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    await handlePickFile(file);
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
          password,
          gender,
          consent,
          profile_image: profileImageBase64 || undefined,
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
    } catch {
      setError("Szerver hiba, próbáld újra később!");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]" data-cy="register-page">
      <header className="sticky top-0 z-50 h-14 border-b border-[var(--border-color)] bg-[var(--bg-main)]/90 backdrop-blur">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
          <Link className="flex items-center gap-2" href="/">
            <Image alt="Logo" height={28} src="/favicon.ico" width={28} />
            <span className="text-lg font-extrabold tracking-wide text-cyan-300">Loop</span>
          </Link>

          <nav className="flex items-center gap-5 text-sm">
            <Link
              className="ml-2 rounded-full bg-blue-500 px-4 py-2 text-[var(--text-main)] shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:brightness-110"
              href="/login"
            >
              Bejelentkezés
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex items-center justify-center py-20">
        <div className="w-full max-w-md rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-8 shadow-2xl backdrop-blur">
          <h1 className="mb-8 text-center text-3xl font-bold text-cyan-300">Fiók létrehozása</h1>

          <form className="space-y-5" data-cy="register-form" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm text-[var(--text-main)]/60">Profilkép</label>

              <div className="mt-2 flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border border-[var(--border-color)]">
                  <Image alt="Profilkép előnézet"
                    className="object-cover"
                    data-cy="register-profile-image"
                    fill
                    src={previewSrc}
                    unoptimized
                  />
                </div>

                <div
                  className={`flex-1 rounded-xl border border-dashed px-4 py-4 text-sm transition ${
                    isDragging
                      ? "border-cyan-400 bg-cyan-500/10"
                      : "border-[var(--border-color)] bg-[var(--card-bg)]"
                  }`}
                  onDragLeave={() => setIsDragging(false)}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDrop={onDrop}
                >
                  <div className="flex flex-col gap-2">
                    <div className="text-[var(--text-main)]/80">
                      Húzd ide a képet, vagy{" "}
                      <button className="text-cyan-300 underline hover:text-cyan-200 cursor-pointer"
                        data-cy="register-image-upload-button"
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        válassz fájlt
                      </button>
                      .
                    </div>

                    <input
                      accept="image/*"
                      className="hidden"
                      data-cy="register-image-input"
                      ref={fileInputRef}
                      type="file"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;

                        await handlePickFile(file);

                        if (fileInputRef.current) {
                          fileInputRef.current.value = "";
                        }
                      }}
                    />

                    {profileImageBase64 && (
                      <button className="w-fit rounded-lg bg-white/10 px-3 py-1 text-xs hover:bg-white/15 cursor-pointer"
                        data-cy="register-image-reset"
                        type="button"
                        onClick={() => setProfileImageBase64("")}
                      >
                        Vissza az alapértelmezettre
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm text-[var(--text-main)]/60">Név</label>
              <input className="mt-2 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-[var(--text-main)] outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                data-cy="register-name-input"
                placeholder="John Doe"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-[var(--text-main)]/60">Email</label>
              <input className="mt-2 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-[var(--text-main)] outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                data-cy="register-email-input"
                placeholder="johndoe@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-[var(--text-main)]/60">Telefonszám</label>
              <input className="mt-2 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-[var(--text-main)] outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                data-cy="register-phone-input"
                placeholder="+36 30 123 4567"
                type="text"
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-[var(--text-main)]/60">Nem (opcionális)</label>
              <div className="mt-2 grid grid-cols-1 gap-2">
                {[
                  { value: "MALE", label: "Férfi" },
                  { value: "FEMALE", label: "Nő" },
                  { value: "RATHER_NOT_SAY", label: "Inkább nem adom meg" },
                ].map((opt) => (
                  <label
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-2 transition ${
                      gender === opt.value
                        ? "border-cyan-400 bg-cyan-500/10"
                        : "border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--card-bg)]"
                    }`}
                    key={opt.value}
                  >
                    <input checked={gender === (opt.value as Gender)} 
                      className="h-4 w-4"
                      data-cy={`register-gender-${opt.value}`}
                      name="gender"
                      type="radio"
                      value={opt.value}
                      onChange={() => setGender(opt.value as Gender)}
                    />
                    <span className="text-sm text-[var(--text-main)]/80">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm text-[var(--text-main)]/60">Jelszó</label>
              <div className="relative mt-2">
                <input className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 pr-11 text-[var(--text-main)] outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  data-cy="register-password-input"
                  placeholder="Válasszon jelszót"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-main)]/60 hover:text-[var(--text-main)] cursor-pointer"
                  data-cy="register-password-toggle"
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-[var(--border-color)] bg-black/30 p-3 text-sm">
              <input checked={consent}
                className="mt-1 h-4 w-4"
                data-cy="register-leaderboard-consent"
                type="checkbox"
                onChange={(e) => setConsent(e.target.checked)}
              />

              <span className="text-[var(--text-main)]/80">
                Hozzájárulok, hogy a nevem és profilképem megjelenjen a nyilvános
                ranglistán (leaderboard).
              </span>
            </div>

            {error && (
              <div className="rounded-lg border border-red-500/40 bg-red-500/20 px-4 py-2 text-center text-sm text-red-300" data-cy="register-error-message">
                {error}
              </div>
            )}

            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600 py-3 font-semibold text-[var(--text-main)] transition hover:bg-cyan-500 disabled:opacity-50 cursor-pointer"
              data-cy="register-submit-button"
              disabled={loading}
              type="submit"
            >
              <UserPlus className="cursor-pointer"  size={18}/>
              {loading ? "Fiók létrehozása..." : "Regisztráció"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[var(--text-main)]/60">
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