"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Trash2 } from "lucide-react";

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
    description: string;
  };
};

export default function ProfilePage() {
  const router = useRouter();

  const [name, setUserName] = useState("");
  const [consent, setConsent] = useState(false);

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
  const [imageMessage, setImageMessage] = useState("");
  const [imageError, setImageError] = useState("");

  const [gender, setGender] = useState<string>("RATHER_NOT_SAY");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [warning, setWarning] = useState(false);

  const [historyMessage, setHistoryMessage] = useState("");
  const [deleteTicketId, setDeleteTicketId] = useState<string | null>(null);
  const [confirmDeleteAll, setConfirmDeleteAll] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [theme, setTheme] = useState("dark");

  const loadUser = async () => {
    const userRes = await fetch("/api/auth", { cache: "no-store" });

    if (userRes.status !== 200) {
      router.push("/login");
      return;
    }

    const active = await userRes.json();
    setUserName(active.name);

    const profileRes = await fetch("/api/profile", {
      method: "GET",
      cache: "no-store",
      credentials: "include"
    });

    const profile = await profileRes.json();

    setUser(profile);
    setRankData(profile);

    setNewName(profile.name);
    setPhone(profile.phone_number);
    setProfileImage(profile.profile_image || "");
    setGender(profile.gender || "RATHER_NOT_SAY");
    setIsGoogleUser(!profile.hasPassword);
    setWarning(profile.inactivityWarning);
    setTheme(profile.theme || "dark");

    const lastRank = localStorage.getItem("lastRankName");

    if (profile.rank && profile.rank.name !== lastRank) {
      setRankUp({
        name: profile.rank.name,
        image: profile.rank.image,
      });

      localStorage.setItem("lastRankName", profile.rank.name);
    }

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

    const couponRes = await fetch("/api/profile/coupons", {
      cache: "no-store",
      credentials: "include",
    });

    if (couponRes.ok) {
      const couponData = await couponRes.json();
      setCoupons(couponData);
    }

    if (profile.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", profile.theme);
  };

  useEffect(() => {

    const init = async () => {
      await loadUser();
    };

    init();

  }, []);

  useEffect(() => {
    if (!message && !error) return;

    const timer = setTimeout(() => {
      setMessage("");
      setError("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [message, error]);

  useEffect(() => {
    if (!historyMessage) return;

    const timer = setTimeout(() => {
      setHistoryMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [historyMessage]);

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

  const readFileAsBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(String(reader.result || ""));
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handlePickFile = async (file?: File) => {

    if (!file) return;

    const base64 = await readFileAsBase64(file);

    const res = await fetch("/api/profile/profile-image", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        profile_image: base64
      })
    });

    const data = await res.json();

    if (!res.ok) {
      setImageError("Hiba a profilkép frissítése közben!");
      setImageMessage("");
      return;
    }

    setProfileImage(data.url);

    setImageMessage("Profilkép frissítve!");
    setImageError("");

    router.refresh();

    window.dispatchEvent(new Event("profile-updated"));

  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--bg-main)] text-[var(--text-main)]" data-cy="profile-loading">
        Betöltés...
      </div>
    );
  }

  const pointsNeeded =
    rankData?.nextRank && typeof rankData?.points === "number"
      ? Math.max(0, (rankData.nextRank?.point_limit || 0) - rankData.points)
      : 0;

  const deleteTicket = async (id: string) => {
    const res = await fetch("/api/ticket/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ticketId: id
      })
    });

    if (res.ok) {
      setHistory(prev => prev.filter(t => t.id !== id));
      setHistoryMessage("Jegy törölve az előzményekből.");
    } else {
      setHistoryMessage("Hiba történt a törlés során.");
    }

    setDeleteTicketId(null);
  };

  const deleteAllHistory = async () => {
    const res = await fetch("/api/ticket/delete-all", {
      method: "DELETE"
    });

    if (res.ok) {
      setHistory([]);
      setHistoryMessage("Az összes vásárlási előzmény törölve.");
    } else {
      setHistoryMessage("Hiba történt a törlés során.");
    }

    setConfirmDeleteAll(false);
  };

  const resetProfileImage = async () => {

    const res = await fetch("/api/profile/profile-image", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        profile_image: null
      })
    });

    if (!res.ok) {
      setImageMessage("Hiba történt.");
      setImageError("");
      return;
    }

    setProfileImage("");

    setImageMessage("Profilkép visszaállítva!");
    setImageError("");

    router.refresh();

    window.dispatchEvent(new Event("profile-updated"));

  };

  const changeTheme = async (newTheme: string) => {

    setTheme(newTheme);

    document.documentElement.classList.remove("dark");

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    }

    localStorage.setItem("theme", newTheme);

    await fetch("/api/profile/theme", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ theme: newTheme }),
    });

  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]" data-cy="profile-page">
      {rankUp && (
        <div className="rank-overlay fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm" data-cy="rank-up-modal">
          <div className="rank-popup flex flex-col items-center gap-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)]/90 p-10 shadow-2xl">
            <div className="text-sm tracking-[0.3em] text-[var(--text-main)]/60">RANG LÉPÉS</div>

            <Image
              alt="rank up"
              className="h-40 w-40 object-contain drop-shadow-[0_0_70px_rgba(0,255,255,0.8)]"
              height={160}
              src={rankUp.image}
              width={160}
            />

            <div className="text-4xl font-extrabold text-[var(--text-main2)]">{rankUp.name}</div>

            <div className="text-sm text-[var(--text-main)]/70">Gratulálunk! Új kuponokat oldottál fel.</div>

            <button className="mt-2 cursor-pointer rounded-lg bg-cyan-600 px-6 py-2 font-semibold text-[var(--text-main)] transition hover:bg-cyan-400"
              data-cy="rank-up-close"
              onClick={() => setRankUp(null)}
            >
              Folytatás
            </button>
          </div>
        </div>
      )}

      {rankData?.rank && (
        <div className="mx-auto max-w-5xl px-4 pt-12" data-cy="profile-rank-section">
          <div className="mb-10 w-full rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-8 shadow-2xl backdrop-blur">
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
                  <h2 className="text-2xl font-bold text-[var(--text-main2)]" data-cy="profile-rank-name">{rankData.rank.name} rang</h2>

                  <div className="mt-1 text-sm text-[var(--text-main)]/70">
                    Összes pont: <span className="font-bold text-[var(--text-main)]" data-cy="profile-rank-points">{rankData.points}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="mt-2 h-4 w-full overflow-hidden rounded-full border border-[var(--border-color)] bg-white/10">
                  <div className="h-full rounded-full bg-cyan-400 transition-all duration-700"
                    data-cy="profile-rank-progress"
                    style={{ width: `${rankData.progress ?? 0}%` }}
                  />
                </div>

                {rankData.nextRank ? (
                  <div className="mt-3 text-sm text-[var(--text-main)]/70">
                    Következő rang:{" "}
                    <span className="font-semibold text-[var(--text-main2)]">{rankData.nextRank.name}</span> •
                    még <span className="font-bold text-[var(--text-main)]">{pointsNeeded}</span> pont
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
          <div className="mb-6 rounded-lg border border-yellow-400/40 bg-yellow-500/20 p-4 text-yellow-300" data-cy="rank-warning">
            ⚠️ Ha 24 órán belül nem vásárolsz jegyet, visszaesel egy rangot.
          </div>
        )}
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="w-full rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-8 shadow-2xl backdrop-blur transition-all" data-cy="profile-info-section">
          <h1 className="mb-8 text-3xl font-bold text-[var(--text-main2)]">Profil adatok</h1>

          <div className="mb-8 flex items-center gap-6">

            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/20">
              <Image alt="Profilkép"
                className="object-cover"
                data-cy="profile-image"
                fill
                key={profileImage || "default"}
                priority
                sizes="96px"
                src={
                  profileImage
                    ? `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload/${profileImage}`
                    : "/profile/default.png"
                }
                unoptimized
              />
            </div>
            <div
              className="flex-1 rounded-xl border border-dashed border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-4 text-sm"
              onDragEnter={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={async (e) => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                await handlePickFile(file);
              }}
            >
              <div className="flex flex-col gap-2">

                <div className="text-[var(--text-main)]/80">
                  Húzd ide a képet vagy{" "}
                  <button className="text-[var(--text-main2)] underline hover:text-cyan-200 cursor-pointer"
                    data-cy="profile-image-upload-button"
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    válassz fájlt
                  </button>
                </div>

                <input
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    handlePickFile(file);
                  }}
                />

                {profileImage && (
                  <button className="w-fit rounded-lg bg-white/10 px-3 py-1 text-xs hover:bg-white/20"
                    data-cy="profile-image-reset"
                    type="button"
                    onClick={resetProfileImage}
                  >
                    Alapértelmezett kép
                  </button>
                )}

              </div>
            </div>
          </div>

          <div className="mt-2 h-5 text-sm mb-5">
              {imageError && <div className="text-red-400" data-cy="profile-image-error">{imageError}</div>}
              {imageMessage && <div className="text-green-400" data-cy="profile-image-success">{imageMessage}</div>}
          </div>

          <div className="mb-6">
            <label className="text-sm text-[var(--text-main)]/60">Email</label>
            <input className="mt-2 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-[var(--text-main)]"
              data-cy="profile-email"
              disabled
              value={user.email}
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-[var(--text-main)]/60">Név</label>
            <input className="mt-2 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-[var(--text-main)]"
              data-cy="profile-name-input"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-[var(--text-main)]/60">Telefonszám</label>
            <input className="mt-2 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-[var(--text-main)]"
              data-cy="profile-phone-input"
              placeholder="+36123456789"
              value={phone || ""}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-[var(--text-main)]/60">Nem</label>
            <select className="mt-2 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-[var(--text-main)]"
              data-cy="profile-gender-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="MALE">Férfi</option>
              <option value="FEMALE">Nő</option>
              <option value="RATHER_NOT_SAY">Inkább nem adom meg</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="text-sm text-[var(--text-main)]/60">Téma</label>

            <div className="flex items-center gap-3">

              <span className="text-sm text-[var(--text-soft)]">☀️</span>
              <button
                onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
                className={`relative h-7 w-14 rounded-full transition ${
                  theme === "dark" ? "bg-cyan-500" : "bg-gray-300"
                }`}
              >

              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                  theme === "dark" ? "left-8" : "left-1"
                }`}
              />

              </button>
              <span className="text-sm text-[var(--text-soft)]">🌙</span>

              </div>
          </div>

          <button className="mt-4 cursor-pointer rounded-lg bg-[var(--button-bg)] px-6 py-2 font-semibold text-[var(--text-light)] transition hover:bg-cyan-400"
            data-cy="profile-save-button"
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

          <div className="mt-12 border-t border-[var(--border-color)] pt-8">
            <h2 className="mb-4 text-xl font-semibold text-[var(--text-main2)]">
              {isGoogleUser ? "Jelszó beállítása" : "Jelszó módosítása"}
            </h2>

            {!isGoogleUser && (
              <input className="mb-3 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-[var(--text-main)]"
                data-cy="profile-old-password"
                placeholder="Régi jelszó"
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            )}

            <input className="mb-3 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-[var(--text-main)]"
              data-cy="profile-new-password"
              placeholder="Új jelszó"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <input className="mb-3 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-4 py-2 text-[var(--text-main)]"
              data-cy="profile-new-password-confirm"
              placeholder="Új jelszó megerősítése"
              type="password"
              value={newPassword2}
              onChange={(e) => setNewPassword2(e.target.value)}
            />

            <button className="mt-2 cursor-pointer rounded-lg bg-[var(--button-bg)] px-4 py-2 font-semibold text-[var(--text-light)] hover:bg-cyan-400"
              data-cy="profile-password-button"
              onClick={changePassword}
            >
              {isGoogleUser ? "Jelszó beállítása" : "Jelszó módosítása"}
            </button>
            <label className="flex items-center gap-3 mt-4">
              <input checked={consent}
                data-cy="profile-leaderboard-consent"
                type="checkbox"
                onChange={async (e) => {
                  const value = e.target.checked;

                  setConsent(value);

                  await fetch("/api/profile/consent", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ consent: value })
                  });
                }}
              />

              Megjelenek a ranglistán
            </label>
          </div>

          <div className="mt-6 h-6 text-center">
            {error && <div className="text-red-400" data-cy="profile-error-message">{error}</div>}
            {message && <div className="text-green-400" data-cy="profile-success-message">{message}</div>}
          </div>

        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-5xl">
          <button className="mb-6 flex w-full cursor-pointer items-center justify-between rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 text-left text-2xl font-bold text-[var(--text-main2)] shadow-xl backdrop-blur transition hover:bg-slate-100 dark:hover:bg-white/10"
            data-cy="profile-coupons-toggle"
            onClick={() => {
              setShowCoupons((v) => !v);
              setShowTickets(false);
              setShowHistory(false);
            }}
          >
            <span>Kuponjaim</span>

            <span className={`text-xl transition ${showCoupons ? "rotate-180" : ""}`}>▼</span>
          </button>

          <div className={`transition-all duration-500 ease-in-out ${
              showCoupons
                ? "mt-4 mb-4 max-h-[70vh] opacity-100 overflow-y-auto"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
            data-cy="profile-coupons-section"
          >
            <div>
              {coupons.length === 0 && (
                <div className="mb-6 text-[var(--text-main)]/60">
                  Még nincs kuponod. Szerezz pontokat jegyvásárlással!
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                {coupons.map((coupon) => (
                  <div className={`relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5 shadow-xl backdrop-blur ${
                      coupon.used ? "opacity-40" : ""
                    }`}
                    data-coupon-id={coupon.id}
                    data-cy="coupon-card"
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
                        <div className="text-xl font-bold text-[var(--text-main)]">
                          {coupon.discounts.name}
                        </div>

                        <div className="text-sm text-[var(--text-main)]/60 mt-1">
                          {coupon.discounts.description}
                        </div>

                        <div className="absolute top-3 right-3 bg-cyan-500 text-black text-xs font-bold px-2 py-1 rounded">
                          -{coupon.discounts.percent}%
                        </div>

                        {coupon.used && (
                          <div className="mt-2 font-semibold text-red-400">Felhasználva</div>
                        )}
                      </div>

                      {!coupon.used && (
                        <Image alt="qr"
                          className="w-28 rounded-lg bg-white p-2"
                          data-coupon-id={coupon.id}
                          data-cy="coupon-qr"
                          height={112}
                          src={`/api/email/qr/${coupon.qr_token}`}
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
        <button className="mb-6 flex w-full cursor-pointer items-center justify-between rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 text-left text-2xl font-bold text-[var(--text-main2)] shadow-xl backdrop-blur transition hover:bg-slate-100 dark:hover:bg-white/10"
          data-cy="profile-tickets-toggle"
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
          className={`transition-all duration-500 ease-in-out ${
            showTickets ? "mt-4 mb-4 max-h-[70vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"
          }`}
          data-cy="profile-tickets-section"
        >
          <div className="overflow-hidden">
            {tickets.length === 0 && (
              <div className="mb-6 text-[var(--text-main)]/60">Még nem vásároltál jegyet.</div>
            )}

            <div className="grid gap-6">
              {tickets.map((ticket) => (
                <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow-2xl backdrop-blur"
                  data-cy="active-ticket-card"
                  data-ticket-id={ticket.id}
                  key={ticket.id}
                >
                  <div className="flex flex-wrap justify-between gap-6 md:flex-nowrap">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-main2)]">
                        {ticket.screenings.movies.title}
                      </h3>

                      <div className="mt-1 text-sm text-[var(--text-main)]/70">
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
                      <div className="text-xl font-semibold text-[var(--text-main2)]">{(ticket.price / 100).toFixed(2)} €</div>

                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="qr"
                        className="w-32 rounded-lg bg-white p-2"
                        data-cy="ticket-qr"
                        data-ticket-id={ticket.id}
                        src={`/api/email/qr/${ticket.qr_token}`}
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
        <button className="mb-2 flex w-full cursor-pointer items-center justify-between rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 text-left text-2xl font-bold text-[var(--text-main2)] shadow-xl backdrop-blur transition hover:bg-slate-100 dark:hover:bg-white/10"
          data-cy="profile-history-toggle"
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

        <div className={`transition-all duration-500 ease-in-out ${
            showHistory
              ? "mt-4 max-h-[70vh] opacity-100 overflow-y-auto"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          data-cy="profile-history-section"
        >
          {history.length > 0 && (
            <div className="flex justify-end mb-4">
              <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-[var(--text-light)] hover:bg-red-500 transition cursor-pointer"
                data-cy="history-delete-all"
                onClick={() => setConfirmDeleteAll(true)}
              >
                Összes előzmény törlése
              </button>
            </div>
          )}
          {history.length === 0 && (
            <div className="mb-6 text-[var(--text-main)]/60">Még nincs lezárt vetítésed.</div>
          )}

          <div className="grid gap-4">
            {history.map((ticket) => (
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5 backdrop-blur transition hover:bg-slate-100 dark:hover:bg-white/10" 
                data-cy="history-ticket-card"
                data-ticket-id={ticket.id}
                key={ticket.id}
              >
                <div className="flex items-center justify-between">

                  <div>
                    <div className="text-lg font-semibold text-[var(--text-main)]">
                      {ticket.screenings.movies.title}
                    </div>

                    <div className="mt-1 text-sm text-[var(--text-main)]/60">
                      {new Date(ticket.screenings.start).toLocaleString()}
                    </div>

                    <div className="text-sm text-[var(--text-main)]/60">
                      Terem: {ticket.screenings.halls.name}
                    </div>

                    <div className="text-sm text-[var(--text-main)]/60">
                      Jegy: {ticket.ticket_types.type}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">

                    <div className="text-lg font-bold text-green-400">
                      {(ticket.price / 100).toFixed(2)} €
                    </div>

                    <button className="flex items-center justify-center rounded-lg bg-red-500/20 p-2 text-red-400 hover:bg-red-500/40 hover:text-red-300 transition cursor-pointer"
                      data-cy="history-delete-ticket"
                      onClick={() => setDeleteTicketId(ticket.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center text-sm h-5">
            {historyMessage && (
              <span className={historyMessage.includes("Hiba") ? "text-red-400" : "text-green-400"} data-cy="history-message">
                {historyMessage}
              </span>
            )}
          </div>

          {deleteTicketId && ( 
            <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm" data-cy="history-delete-modal">

              <div className="w-[380px] rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow-2xl">

                <h2 className="text-xl font-bold text-[var(--text-main)] mb-4">
                  Jegy törlése
                </h2>

                <p className="text-[var(--text-main)]/70 mb-6">
                  Biztos törölni szeretnéd ezt a jegyet a vásárlási előzményekből?
                </p>

                <div className="flex justify-end gap-3">

                  <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                    data-cy="history-delete-cancel"
                    onClick={() => setDeleteTicketId(null)}
                  >
                    Mégse
                  </button>

                  <button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition text-[var(--text-main)]"
                    data-cy="history-delete-confirm"
                    onClick={() => deleteTicket(deleteTicketId)}
                  >
                    Törlés
                  </button>

                </div>

              </div>

            </div>
          )}

          {confirmDeleteAll && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm" data-cy="history-delete-all-modal">

              <div className="w-[380px] rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow-2xl">

                <h2 className="text-xl font-bold text-[var(--text-main)] mb-4">
                  Összes előzmény törlése
                </h2>

                <p className="text-[var(--text-main)]/70 mb-6">
                  Biztos törölni szeretnéd az összes vásárlási előzményt?
                </p>

                <div className="flex justify-end gap-3">

                  <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                    data-cy="history-delete-all-cancel"
                    onClick={() => setConfirmDeleteAll(false)}
                  >
                    Mégse
                  </button>

                  <button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 transition text-[var(--text-main)]"
                    data-cy="history-delete-all-confirm"
                    onClick={deleteAllHistory}
                  >
                    Törlés
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}