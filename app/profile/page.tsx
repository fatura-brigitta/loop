"use client";

import { useEffect, useRef, useState } from "react";
import AssetsSection from "@/app/components/profile/assetsSection";
import ProfileInfoSection from "@/app/components/profile/profileInfoSection";
import RankSection from "@/app/components/profile/rankSection";

export default function ProfilePage() {

  const [user, setUser] = useState<any>(null);

  const [rankData, setRankData] = useState<any>(null);
  const [warning, setWarning] = useState(false);

  const [coupons, setCoupons] = useState<any[]>([]);
  const [tickets, setTickets] = useState<any[]>([]);
  const [history, setHistory] = useState<any[]>([]);

  const [showCoupons, setShowCoupons] = useState(false);
  const [showTickets, setShowTickets] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");

  const [gender, setGender] = useState("RATHER_NOT_SAY");

  const [theme, setTheme] = useState("dark");

  const [profileImage, setProfileImage] = useState("");

  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [imageError, setImageError] = useState("");
  const [imageMessage, setImageMessage] = useState("");

  const [isGoogleUser, setIsGoogleUser] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const [profileMessage, setProfileMessage] = useState("");
  const [profileError, setProfileError] = useState("");

  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [historyMessage, setHistoryMessage] = useState("");

  const [consent, setConsent] = useState(false);
  const [deleteTicketId, setDeleteTicketId] = useState<string | null>(null);
  const [confirmDeleteAll, setConfirmDeleteAll] = useState(false);
  const [rankUp, setRankUp] = useState<null | { name: string; image: string }>(null);

  const loadUser = async () => {
    const res = await fetch("/api/profile", { cache: "no-store" });
    const data = await res.json();

    setUser(data);
    setRankData(data);

    setNewName(data.name);
    setPhone(data.phone_number || "");
    setGender(data.gender || "RATHER_NOT_SAY");

    setProfileImage(data.profile_image || "");
    setTheme(data.theme || "dark");
    setConsent(data.consent);

    setIsGoogleUser(!data.hasPassword);
    setWarning(data.inactivityWarning);

    if (data.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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
  };

  useEffect(() => {
    const stored = sessionStorage.getItem("rankUp");

    if (stored) {

      const rank = JSON.parse(stored);

      queueMicrotask(() => {
        setRankUp(rank);
      });

      sessionStorage.removeItem("rankUp");
    }

    const load = async () => {
      await loadUser()
    }

    load()
  }, [])

  useEffect(() => {
    if (!rankUp) return;
    const t = setTimeout(() => {
      setRankUp(null);
    }, 6000);
    return () => clearTimeout(t);
  }, [rankUp]);

  if (!user) {
    return <div className="flex min-h-screen items-center justify-center">Betöltés...</div>;
  }

  const pointsNeeded = rankData?.nextRank
    ? Math.max(0, (rankData.nextRank.point_limit || 0) - rankData.points)
    : 0;

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
        profile_image: base64,
      }),
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

    await loadUser();

    window.dispatchEvent(new Event("profile-updated"));
  };

  const resetProfileImage = async () => {
    const res = await fetch("/api/profile/profile-image", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        profile_image: null,
      }),
    });

    if (!res.ok) {
      setImageMessage("Hiba történt.");
      setImageError("");
      return;
    }

    setProfileImage("");

    setImageMessage("Profilkép visszaállítva!");

    await loadUser();

    window.dispatchEvent(new Event("profile-updated"));
  };

  const changePassword = async () => {
    setPasswordError("");
    setPasswordMessage("");

    if (!newPassword || !newPassword2) {
      setPasswordError("Kérlek töltsd ki az új jelszó mezőket!");
      return;
    }

    if (newPassword !== newPassword2) {
      setPasswordError("A két új jelszó nem egyezik meg!");
      return;
    }

    if (!isGoogleUser && !oldPassword) {
      setPasswordError("Add meg a régi jelszót!");
      return;
    }

    if (newPassword.length < 5) {
      setPasswordError("A jelszónak legalább 5 karakter hosszúnak kell lennie!");
      return;
    }

    const res = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...(isGoogleUser ? {} : { oldPassword }),
        newPassword
      })
    });

    const data = await res.json();

    if (!res.ok) {
      setPasswordError(data.message || "Hiba történt");
      return;
    }

    setOldPassword("");
    setNewPassword("");
    setNewPassword2("");

    setPasswordMessage(isGoogleUser ? "Jelszó sikeresen beállítva!" : "Jelszó sikeresen megváltoztatva!");

    setIsGoogleUser(false);
  };

  const deleteTicket = async (id: string) => {
    const res = await fetch("/api/ticket/delete",{
    method:"DELETE",
    headers:{ "Content-Type":"application/json" },
    body:JSON.stringify({ticketId:id})
    })

    if(res.ok){

    setHistory(prev => prev.filter(t=>t.id !== id))

    setHistoryMessage("Jegy törölve")

    setTimeout(()=>{
    setHistoryMessage("")
    },3000)

    }

    setDeleteTicketId(null)

  }

  const deleteAllHistory = async () => {

    const res = await fetch("/api/ticket/delete-all",{
    method:"DELETE"
    })

    if(res.ok){

    setHistory([])

    setHistoryMessage("Előzmények törölve")

    setTimeout(()=>{
    setHistoryMessage("")
    },3000)

    }

    setConfirmDeleteAll(false)

  }

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)]">
      {rankUp && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          data-cy="rank-up-modal"
        >
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-main)]/90 p-10 shadow-2xl animate-[rankPop_0.45s_ease]">

            <div className="text-sm tracking-[0.3em] text-[var(--text-main)]/60">
              RANG LÉPÉS
            </div>

            <img
              className="h-40 w-40 object-contain animate-[glowPulse_2s_ease-in-out_infinite]"
              src={rankUp.image}
            />

            <div className="text-4xl font-extrabold text-[var(--text-main2)]">
              {rankUp.name}
            </div>

            <div className="text-sm text-[var(--text-main)]/70">
              Gratulálunk! Új kuponokat oldottál fel.
            </div>

            <button
              className="mt-2 cursor-pointer rounded-lg bg-cyan-600 px-6 py-2 font-semibold text-[var(--text-main)] transition hover:bg-cyan-400"
              onClick={() => setRankUp(null)}
            >
              Folytatás
            </button>

          </div>
        </div>
      )}
      <RankSection pointsNeeded={pointsNeeded} rankData={rankData} warning={warning} />

      <ProfileInfoSection
        changePassword={changePassword}
        changeTheme={changeTheme}
        consent={consent}
        fileInputRef={fileInputRef}
        gender={gender}
        handlePickFile={handlePickFile}
        imageError={imageError}
        imageMessage={imageMessage}
        isDragging={isDragging}
        isGoogleUser={isGoogleUser}
        newName={newName}
        newPassword={newPassword}
        newPassword2={newPassword2}
        oldPassword={oldPassword}
        passwordError={passwordError}
        passwordMessage={passwordMessage}
        phone={phone}
        profileError={profileError}
        profileImage={profileImage}
        profileMessage={profileMessage}
        resetProfileImage={resetProfileImage}
        setConsent={setConsent}
        setGender={setGender}
        setIsDragging={setIsDragging}
        setNewName={setNewName}
        setNewPassword={setNewPassword}
        setNewPassword2={setNewPassword2}
        setOldPassword={setOldPassword}
        setPasswordError={setPasswordError}
        setPasswordMessage={setPasswordMessage}
        setPhone={setPhone}
        setProfileError={setProfileError}
        setProfileMessage={setProfileMessage}
        theme={theme}
        user={user}
      />

      <AssetsSection
        confirmDeleteAll={confirmDeleteAll}
        coupons={coupons}
        deleteAllHistory={deleteAllHistory}
        deleteTicket={deleteTicket}
        deleteTicketId={deleteTicketId}
        history={history}
        historyMessage={historyMessage}
        setConfirmDeleteAll={setConfirmDeleteAll}
        setDeleteTicketId={setDeleteTicketId}
        setHistoryMessage={setHistoryMessage}
        setShowCoupons={setShowCoupons}
        setShowHistory={setShowHistory}
        setShowTickets={setShowTickets}
        showCoupons={showCoupons}
        showHistory={showHistory}
        showTickets={showTickets}
        tickets={tickets}
      />
    </div>
  );
}
