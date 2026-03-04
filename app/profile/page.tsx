"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Footer from "@/app/components/footer";

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

export default function ProfilePage() {
  const router = useRouter();

  const [name, setUserName] = useState("");

  const [user, setUser] = useState<any>(null);
  const [isGoogleUser, setIsGoogleUser] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [showTickets, setShowTickets] = useState(false);
  const [history, setHistory] = useState<Ticket[]>([]);

  const [rankData, setRankData] = useState<RankData | null>(null);
  const [rankUp, setRankUp] = useState<null | { name: string; image: string }>(null);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [showCoupons, setShowCoupons] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const [newName, setNewName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const [phone, setPhone] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const [gender, setGender] = useState<string>("RATHER_NOT_SAY");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [warning, setWarning] = useState(false);

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

      setIsGoogleUser(!profile.hasPassword);
      setWarning(profile.inactivityWarning);

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

      const couponRes = await fetch("/api/coupons", {
        cache: "no-store",
        credentials: "include",
      });

      if (couponRes.ok) {
        const couponData = await couponRes.json();
        setCoupons(couponData);
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

  const changePassword = async () => {
    setError("");
    setMessage("");

    if (!newPassword || !newPassword2) {
      setError("Kérlek töltsd ki az új jelszó mezőket!");
      return;
    }

    if (newPassword !== newPassword2) {
      setError("A két új jelszó nem egyezik meg!");
      return;
    }

    if (!isGoogleUser && !oldPassword) {
      setError("Add meg a régi jelszót!");
      return;
    }

    if (newPassword.length < 5) {
      setError("A jelszónak legalább 5 karakter hosszúnak kell lennie!");
      return;
    }

    const res = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        oldPassword: isGoogleUser ? null : oldPassword,
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

    setMessage(
      isGoogleUser
        ? "Jelszó sikeresen beállítva!"
        : "Jelszó sikeresen megváltoztatva!"
    );

    setIsGoogleUser(false);
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

      <div className="mx-auto max-w-5xl px-4 py-2">
        {warning && (
          <div className="mb-6 rounded-lg border border-yellow-400/40 bg-yellow-500/20 p-4 text-yellow-300">
            ⚠️ Ha 24 órán belül nem vásárolsz jegyet, visszaesel egy rangot.
          </div>
        )}
      </div>


      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur transition-all">
          <h1 className="mb-8 text-3xl font-bold text-cyan-300">Profil adatok</h1>

          <div className="mb-6">
            <label className="text-sm text-white/60">Email</label>
            <input
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
              disabled
              value={user.email}
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-white/60">Név</label>
            <input
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-white/60">Telefonszám</label>
            <input
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
              placeholder="+36123456789"
              value={phone || ""}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-white/60">Nem</label>
            <select
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="MALE">Férfi</option>
              <option value="FEMALE">Nő</option>
              <option value="RATHER_NOT_SAY">Inkább nem adom meg</option>
            </select>
          </div>

          <button
            className="mt-4 cursor-pointer rounded-lg bg-cyan-600 px-6 py-2 font-semibold text-white transition hover:bg-cyan-400"
            onClick={async () => {
              setError("");
              setMessage("");

              const res = await fetch("/api/profile", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: newName,
                  phone_number: phone,
                  gender,
                }),
              });

              const data = await res.json();

              if (!res.ok) {
                setError(data.message || "Hiba az adatok mentésekor!");
                return;
              }

              setMessage("Profil adatok sikeresen frissítve!");

              setUser(data.updatedUser);
              setNewName(data.updatedUser.name);
              setPhone(data.updatedUser.phone_number);
              setGender(data.updatedUser.gender);
            }}
          >
            Adatok mentése
          </button>

          <div className="mt-12 border-t border-white/10 pt-8">
            <h2 className="mb-4 text-xl font-semibold text-cyan-300">
              {isGoogleUser ? "Jelszó beállítása" : "Jelszó módosítása"}
            </h2>

            {!isGoogleUser && (
              <input
                className="mb-3 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
                placeholder="Régi jelszó"
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            )}

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
              {isGoogleUser ? "Jelszó beállítása" : "Jelszó módosítása"}
            </button>
          </div>

          <div className="mt-6 h-6 text-center">
            {error && <div className="text-red-400">{error}</div>}
            {message && <div className="text-green-400">{message}</div>}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-5xl">
          <button
            className="mb-6 flex w-full cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-left text-2xl font-bold text-cyan-300 shadow-xl backdrop-blur transition hover:bg-white/10"
            onClick={() => {
              setShowCoupons((v) => !v);
              setShowTickets(false);
              setShowHistory(false);
            }}
          >
            <span>Kuponjaim</span>

            <span className={`text-xl transition ${showCoupons ? "rotate-180" : ""}`}>▼</span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              showCoupons ? "mt-4 mb-4 max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div>
              {coupons.length === 0 && (
                <div className="mb-6 text-white/60">
                  Még nincs kuponod. Szerezz pontokat jegyvásárlással!
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                {coupons.map((coupon) => (
                  <div
                    className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur ${
                      coupon.used ? "opacity-40" : ""
                    }`}
                    key={coupon.id}
                  >
                    <div className="flex items-center gap-5">
                      <Image
                        alt="discount"
                        className="h-24 w-24 object-contain"
                        height={112}
                        src={coupon.discounts.image}
                        width={112}
                      />

                      <div className="flex-1">
                        <div className="text-xl font-bold text-white">{coupon.discounts.name}</div>

                        <div className="font-semibold text-cyan-300">
                          -{coupon.discounts.percent}%
                        </div>

                        {coupon.used && (
                          <div className="mt-2 font-semibold text-red-400">Felhasználva</div>
                        )}
                      </div>

                      {!coupon.used && (
                        <Image
                          alt="qr"
                          className="w-28 rounded-lg bg-white p-2"
                          height={112}
                          src={`/api/qr/${coupon.qr_token}`}
                          width={112}
                        />
                      )}
                    </div>

                    {coupon.used && (
                      <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-red-500/70">
                        FELHASZNÁLVA
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <button
          className="mb-6 flex w-full cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-left text-2xl font-bold text-cyan-300 shadow-xl backdrop-blur transition hover:bg-white/10"
          onClick={() => {
            setShowTickets((v) => !v);
            setShowCoupons(false);
            setShowHistory(false);
          }}
        >
          <span>Jegyeim</span>
          <span className={`text-xl transition ${showTickets ? "rotate-180" : ""}`}>▼</span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showTickets ? "mt-4 mb-4 max-h-[1400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            {tickets.length === 0 && (
              <div className="mb-6 text-white/60">Még nem vásároltál jegyet.</div>
            )}

            <div className="grid gap-6">
              {tickets.map((ticket) => (
                <div
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
                  key={ticket.id}
                >
                  <div className="flex flex-wrap justify-between gap-6 md:flex-nowrap">
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

                    <div className="flex flex-col items-end gap-3">
                      <div className="text-xl font-semibold text-cyan-300">{ticket.price} Ft</div>

                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt="qr"
                        className="w-32 rounded-lg bg-white p-2"
                        src={`/api/qr/${ticket.qr_token}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-32">
        <button
          className="mb-2 flex w-full cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-left text-2xl font-bold text-cyan-300 shadow-xl backdrop-blur transition hover:bg-white/10"
          onClick={() => {
            setShowHistory((v) => !v);
            setShowCoupons(false);
            setShowTickets(false);
          }}
        >
          <span>Vásárlási előzmények</span>
          <span
            className={`text-xl transition-transform duration-300 ${
              showHistory ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showHistory ? "mt-4 max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {history.length === 0 && (
            <div className="mb-6 text-white/60">Még nincs lezárt vetítésed.</div>
          )}

          <div className="grid gap-4">
            {history.map((ticket) => (
              <div
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
                key={ticket.id}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold text-white">
                      {ticket.screenings.movies.title}
                    </div>

                    <div className="mt-1 text-sm text-white/60">
                      {new Date(ticket.screenings.start).toLocaleString()}
                    </div>

                    <div className="text-sm text-white/60">
                      Terem: {ticket.screenings.halls.name}
                    </div>

                    <div className="text-sm text-white/60">Jegy: {ticket.ticket_types.type}</div>
                  </div>

                  <div className="text-right text-lg font-bold text-green-400">
                    {ticket.price} Ft
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}