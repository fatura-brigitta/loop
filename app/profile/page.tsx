"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/app/components/navbar";

type Ticket = {
  id: string;
  price: number;
  screenings: {
    start: string;
    movies: { title: string };
    halls: { name: string };
    screening_types: { type: string };
  };
  qr_token: string;
  chairs: {
    row: number;
    column: number;
  };
  ticket_types: {
    type: string;
  };
};

type RankData = {
  points: number;
  progress: number;
  rank: {
    name: string;
    image: string;
    point_limit: number;
  } | null;
  nextRank?: {
    name: string;
    point_limit: number;
  } | null;
};

type Coupon = {
  id: string;
  used: boolean;
  qr_token: string;
  discounts: {
    name: string;
    percent: number;
    image: string;
  };
};

function formatGender(g?: string) {
  if (!g) return "Inkább nem adom meg";
  if (g === "MALE") return "Férfi";
  if (g === "FEMALE") return "Nő";
  return "Inkább nem adom meg";
}

export default function ProfilePage() {
  const router = useRouter();

  const [name, setUserName] = useState("");

  const [user, setUser] = useState<any>(null);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [history, setHistory] = useState<Ticket[]>([]);

  const [rankData, setRankData] = useState<RankData | null>(null);
  const [rankUp, setRankUp] = useState<null | { name: string; image: string }>(null);

  const [newName, setNewName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const [phone, setPhone] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const [gender, setGender] = useState<string>("RATHER_NOT_SAY");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const userRes = await fetch("/api/auth", { cache: "no-store" });

      if (userRes.status !== 200) {
        router.push("/login");
        return;
      }

      const active = await userRes.json();
      setUserName(active.name);

      const profileRes = await fetch("/api/profile", { cache: "no-store" });
      const profile = await profileRes.json();

      setUser(profile);
      setRankData(profile);
      const lastRank = localStorage.getItem("lastRankName");

      if (profile.rank && profile.rank.name !== lastRank) {
        setRankUp({
          name: profile.rank.name,
          image: profile.rank.image,
        });
        localStorage.setItem("lastRankName", profile.rank.name);
      }
      setNewName(profile.name);

      setPhone(profile.phone_number);
      setProfileImage(profile.profile_image);

      setGender(profile.gender || "RATHER_NOT_SAY");

      const ticketRes = await fetch("/api/profile", {
        method: "POST",
        credentials: "include",
        cache: "no-store",
      });

      if (ticketRes.ok) {
        const ticketData = await ticketRes.json();
        setTickets(ticketData.active);
        setHistory(ticketData.history);
      }
    };

    loadUser();
  }, [router]);

  useEffect(() => {
    if (!message && !error) return;

    const timer = setTimeout(() => {
      setMessage("");
      setError("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [message, error]);

  useEffect(() => {
    if (!rankUp) return;

    const t = setTimeout(() => {
      setRankUp(null);
    }, 6000);

    return () => clearTimeout(t);
  }, [rankUp]);

  const updateName = async () => {
    setError("");
    setMessage("");

    const res = await fetch("/api/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    });

    if (!res.ok) {
      setError("Hiba a név frissítése közben!");
      return;
    }

    setMessage("Név sikeresen frissítve!");
    setUserName(newName);

    setUser((prev: any) => (prev ? { ...prev, name: newName } : prev));
  };

  const changePassword = async () => {
    setError("");
    setMessage("");

    if (!oldPassword || !newPassword || !newPassword2) {
      setError("Kérlek töltse ki az összes jelszó mezőt!");
      return;
    }

    if (oldPassword.trim() === "" || newPassword.trim() === "" || newPassword2.trim() === "") {
      setError("Jelszó mezők nem lehetnek üresek!");
      return;
    }

    if (newPassword !== newPassword2) {
      setError("A két új jelszó nem egyezik meg!");
      return;
    }

    if (oldPassword === newPassword) {
      setError("Az új jelszó nem lehet ugyanaz, mint a régi jelszó.");
      return;
    }

    if (newPassword.length < 5) {
      setError("A jelszónak legalább 5 karakter hosszúnak kell lennie!");
      return;
    }

    if (oldPassword.length < 5) {
      setError("A jelszónak legalább 5 karakter hosszúnak kell lennie!");
      return;
    }

    const res = await fetch("/api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oldPassword,
        newPassword,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Hiba történt a jelszó módosítása során");
      return;
    }

    setOldPassword("");
    setNewPassword("");
    setNewPassword2("");

    setMessage("Jelszó sikeresen megváltoztatva!");
  };

  const updateProfileImage = async (base64: string) => {
    const res = await fetch("/api/profile-image", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profile_image: base64 }),
    });

    if (!res.ok) {
      setError("Hiba a profilkép frissítése közben!");
      return;
    }

    setMessage("Profilkép frissítve!");
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
      setProfileImage(base64);
      await updateProfileImage(base64);
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

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
        Betöltés...
      </div>
    );
  }

  const pointsNeeded =
    rankData?.nextRank && typeof rankData?.points === "number"
      ? Math.max(0, (rankData.nextRank?.point_limit || 0) - rankData.points)
      : 0;

  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100">
      <Navbar />
      {rankUp && (
        <div className="rank-overlay fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="rank-popup flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-[#060b14]/90 p-10 shadow-2xl">
            <div className="text-sm tracking-[0.3em] text-white/60">RANG LÉPÉS</div>

            <Image
              alt="rank up"
              className="h-40 w-40 object-contain drop-shadow-[0_0_70px_rgba(0,255,255,0.8)]"
              height={160}
              src={rankUp.image}
              width={160}
            />

            <div className="text-4xl font-extrabold text-cyan-300">{rankUp.name}</div>

            <div className="text-sm text-white/70">Gratulálunk! Új kuponokat oldottál fel.</div>

            <button
              className="mt-2 cursor-pointer rounded-lg bg-cyan-600 px-6 py-2 font-semibold text-white transition hover:bg-cyan-400"
              onClick={() => setRankUp(null)}
            >
              Folytatás
            </button>
          </div>
        </div>
      )}

      {rankData?.rank && (
        <div className="mx-auto max-w-5xl px-4 pt-12">
          <div className="mb-10 w-full rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
              <div className="flex items-center gap-5">
                <div className="relative h-24 w-24 shrink-0">
                  <Image
                    alt="rank"
                    className="h-full w-full object-contain drop-shadow-[0_0_35px_rgba(0,255,255,0.35)]"
                    height={128}
                    src={rankData.rank.image}
                    width={128}
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-cyan-300">{rankData.rank.name} rang</h2>

                  <div className="mt-1 text-sm text-white/70">
                    Összes pont: <span className="font-bold text-white">{rankData.points}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="mt-2 h-4 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan-400 transition-all duration-700"
                    style={{ width: `${rankData.progress ?? 0}%` }}
                  />
                </div>

                {rankData.nextRank ? (
                  <div className="mt-3 text-sm text-white/70">
                    Következő rang:{" "}
                    <span className="font-semibold text-cyan-300">{rankData.nextRank.name}</span> •
                    még <span className="font-bold text-white">{pointsNeeded}</span> pont
                  </div>
                ) : (
                  <div className="mt-3 text-sm font-semibold text-green-400">
                    Elérted a maximális rangot 🎉
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center py-16">
        <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 from-cyan-400 via-purple-500 to-pink-500 p-8 shadow-2xl backdrop-blur transition-all">
          <h1 className="mb-8 text-center text-3xl font-bold text-cyan-300">Profil</h1>

          <div className="mb-8">
            <label className="text-sm text-white/60">Profilkép</label>

            <div className="mt-3 flex flex-col items-center gap-4">
              <div
                className={`relative rounded-2xl border p-4 transition ${
                  isDragging ? "border-cyan-400 bg-cyan-500/10" : "border-white/10 bg-black/20"
                }`}
                onDragLeave={() => setIsDragging(false)}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDrop={onDrop}
              >
                <div className="flex items-center gap-4">
                  <div className="group relative h-32 w-32 overflow-hidden rounded-full border border-white/20">
                    <Image
                      alt="Profilkép"
                      className="object-cover"
                      fill
                      src={profileImage || "/profile/default.png"}
                    />

                    <label className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/60 opacity-0 transition group-hover:opacity-100">
                      <span className="text-sm text-white">Módosítás</span>
                      <input
                        accept="image/*"
                        className="hidden"
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
                    </label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="text-sm text-white/80">
                      Húzd ide a képet, vagy{" "}
                      <button
                        className="cursor-pointer text-cyan-300 underline hover:text-cyan-200"
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        válassz fájlt
                      </button>
                      .
                      {profileImage && profileImage !== "/profile/default.png" && (
                        <button
                          className="mt-3 w-fit cursor-pointer rounded-lg bg-white/10 px-3 py-1 text-xs hover:bg-white/15"
                          type="button"
                          onClick={async () => {
                            const defaultImg = "/profile/default.png";
                            setProfileImage(defaultImg);
                            await updateProfileImage(defaultImg);
                          }}
                        >
                          Vissza az alapértelmezettre
                        </button>
                      )}
                    </div>

                    <input
                      accept="image/*"
                      className="hidden"
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm text-white/60">Email</label>
            <input
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
              disabled
              value={user.email}
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-white/60">Telefonszám</label>
            <input
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
              disabled
              value={phone}
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-white/60">Nem</label>
            <input
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
              disabled
              value={formatGender(gender)}
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-white/60">Név</label>
            <input
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button
              className="mt-3 cursor-pointer rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white hover:bg-cyan-400"
              onClick={updateName}
            >
              Név frissítése
            </button>
          </div>

          {/* JELSZÓ MODOSÍTÁS - érintetlen */}
          <div className="border-t border-white/10 pt-6">
            <h2 className="mb-4 text-xl font-semibold text-cyan-300">Jelszó módosítása</h2>

            <input
              className="mb-3 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
              placeholder="Régi jelszó"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <input
              className="mb-3 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
              placeholder="Új jelszó"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              className="mb-3 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
              placeholder="Új jelszó megerősítése"
              type="password"
              value={newPassword2}
              onChange={(e) => setNewPassword2(e.target.value)}
            />

            <button
              className="mt-2 cursor-pointer rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white hover:bg-cyan-400"
              onClick={changePassword}
            >
              Jelszó módosítása
            </button>
          </div>

          <div className="mt-6 h-6 text-center">
            {error && <div className="text-red-400">{error}</div>}
            {message && <div className="text-green-400">{message}</div>}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-20">
        <h2 className="mb-6 text-2xl font-bold text-cyan-300">Jegyeim</h2>

        {tickets.length === 0 && <div className="text-white/60">Még nem vásároltál jegyet.</div>}

        <div className="grid gap-6">
          {tickets.map((ticket) => (
            <div
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
              key={ticket.id}
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-bold text-cyan-300">
                    {ticket.screenings.movies.title}
                  </h3>

                  <div className="mt-1 text-sm text-white/70">
                    {new Date(ticket.screenings.start).toLocaleString()}
                  </div>

                  <div className="mt-3 space-y-1 text-sm">
                    <div>Terem: {ticket.screenings.halls.name}</div>
                    <div>Típus: {ticket.screenings.screening_types.type}</div>
                    <div>
                      Szék: Sor {ticket.chairs.row} Szék {ticket.chairs.column}
                    </div>
                    <div>Jegy típusa: {ticket.ticket_types.type}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xl font-semibold text-cyan-300">{ticket.price} Ft</div>
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="qr"
                  className="mt-4 w-32 rounded-lg bg-white p-2"
                  src={`/api/qr/${ticket.qr_token}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-32">
        <h2 className="mb-6 text-2xl font-bold text-cyan-300">Vásárlási előzmények</h2>

        {history.length === 0 && <div className="text-white/60">Még nincs lezárt vetítésed.</div>}

        <div className="grid gap-4">
          {history.map((ticket) => (
            <div
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              key={ticket.id}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold text-white">
                    {ticket.screenings.movies.title}
                  </div>

                  <div className="mt-1 text-sm text-white/60">
                    {new Date(ticket.screenings.start).toLocaleString()}
                  </div>

                  <div className="text-sm text-white/60">Terem: {ticket.screenings.halls.name}</div>

                  <div className="text-sm text-white/60">Jegy: {ticket.ticket_types.type}</div>
                </div>

                <div className="text-right text-lg font-bold text-green-400">{ticket.price} Ft</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
