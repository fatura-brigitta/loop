"use client";

import Image from "next/image";
import { profileImageUrl } from "@/lib/profileImage";

export default function ProfileInfoSection({
  user,
  newName,
  setNewName,
  phone,
  setPhone,
  gender,
  setGender,
  theme,
  changeTheme,
  profileImage,
  isDragging,
  setIsDragging,
  fileInputRef,
  handlePickFile,
  resetProfileImage,
  imageError,
  imageMessage,
  isGoogleUser,
  oldPassword,
  setOldPassword,
  newPassword,
  setNewPassword,
  newPassword2,
  setNewPassword2,
  changePassword,
  consent,
  setConsent,
  profileMessage,
  profileError,
  setProfileMessage,
  setProfileError,

  passwordMessage,
  passwordError,
  setPasswordMessage,
  setPasswordError,
}: any) {
  const saveProfile = async () => {
    setProfileMessage("");
    setProfileError("");

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
      setProfileError(data.message || "Hiba az adatok mentésekor");
      return;
    }

    setProfileMessage("Profil adatok frissítve");
    window.dispatchEvent(new Event("profile-updated"));

    setTimeout(() => {
      setProfileMessage("");
    }, 3000);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="w-full rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-5 sm:p-6 md:p-8 shadow-2xl">
        <h1 className="mb-8 text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-main2)]">Profil adatok</h1>

        <div className="mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">

          <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 overflow-hidden rounded-full border border-white/20">
            <Image
              alt="Profilkép"
              className="object-cover"
              fill
              priority
              sizes="96px"
              src={profileImageUrl(profileImage, 96)}
              unoptimized
            />
          </div>

          <div
            className={`w-full sm:flex-1 rounded-xl border border-dashed px-4 py-3 text-sm transition ${
              isDragging
                ? "border-cyan-400 bg-cyan-500/10"
                : "border-[var(--border-color)] bg-[var(--card-bg)]"
            }`}
            onDragEnter={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setIsDragging(false);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDrop={async (e) => {
              e.preventDefault();
              setIsDragging(false);
              const file = e.dataTransfer.files?.[0];
              await handlePickFile(file);
            }}
          >
            <div className="flex flex-col gap-2">
              <div className="text-[var(--text-main)]/80">
                Húzd ide a képet vagy{" "}
                <button
                  className="cursor-pointer text-[var(--text-main2)] underline hover:text-cyan-200"
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
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
              />

              {profileImage && (
                <button
                  className="w-fit rounded-lg bg-white/10 px-3 py-1 text-xs text-[var(--text-main)] transition hover:bg-white/20 cursor-pointer"
                  onClick={resetProfileImage}
                >
                  Alapértelmezett kép
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-2 mb-5 h-5 text-sm">
          {imageError && <div className="text-red-400">{imageError}</div>}

          {imageMessage && <div className="text-green-400">{imageMessage}</div>}
        </div>

        <div className="mb-4 sm:mb-6">
          <label className="text-sm text-[var(--text-main)]/60">Email</label>

          <input
            className="mt-2 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-sm px-3 py-2 sm:px-4 text-[var(--text-main)] opacity-70"
            disabled
            value={user.email}
          />
        </div>

        <div className="mb-6">
          <label className="text-sm text-[var(--text-main)]/60">Név</label>

          <input
            className="mt-2 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-sm px-3 py-2 sm:px-4 text-[var(--text-main)]"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="text-sm text-[var(--text-main)]/60">Telefonszám</label>

          <input
            className="mt-2 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-sm px-3 py-2 sm:px-4 text-[var(--text-main)]"
            value={phone || ""}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="text-sm text-[var(--text-main)]/60">Nem</label>

          <select
            className="mt-2 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-sm px-3 py-2 sm:px-4 text-[var(--text-main)] cursor-pointer"
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

          <div className="flex items-center gap-2 sm:gap-3">
            <span>☀️</span>

            <button
              className={`relative h-7 w-14 cursor-pointer rounded-full transition ${
                theme === "dark" ? "bg-cyan-500" : "bg-gray-300"
              }`}
              onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                  theme === "dark" ? "left-8" : "left-1"
                }`}
              />
            </button>

            <span>🌙</span>
          </div>
        </div>

        <button
          className="mt-4 cursor-pointer rounded-lg bg-[var(--button-bg)] w-full sm:w-auto px-4 sm:px-6 py-2 text-sm sm:text-base font-medium text-[var(--text-light)] transition hover:bg-cyan-400"
          onClick={saveProfile}
        >
          Adatok mentése
        </button>

        <div className="mt-3 h-5 text-sm">
          {profileError && <div className="text-red-400">{profileError}</div>}

          {profileMessage && <div className="text-green-400">{profileMessage}</div>}
        </div>

        <div className="mt-8 pt-6 sm:mt-12 sm:pt-8 border-t border-[var(--border-color)]">
          <h2 className="mb-4 text-xl text-sm sm:text-base font-medium text-[var(--text-main2)]">
            {isGoogleUser ? "Jelszó beállítása" : "Jelszó módosítása"}
          </h2>

          {!isGoogleUser && (
            <input
              className="mb-3 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-sm px-3 py-2 sm:px-4 text-[var(--text-main)]"
              placeholder="Régi jelszó"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          )}

          <input
            className="mb-3 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-sm px-3 py-2 sm:px-4 text-[var(--text-main)]"
            placeholder="Új jelszó"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <input
            className="mb-3 w-full rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-sm px-3 py-2 sm:px-4 text-[var(--text-main)]"
            placeholder="Új jelszó megerősítése"
            type="password"
            value={newPassword2}
            onChange={(e) => setNewPassword2(e.target.value)}
          />

          <button
            className="mt-2 cursor-pointer rounded-lg bg-[var(--button-bg)] px-3 py-2 sm:px-4 text-sm sm:text-base font-medium text-[var(--text-light)] transition hover:bg-cyan-400"
            onClick={changePassword}
          >
            {isGoogleUser ? "Jelszó beállítása" : "Jelszó módosítása"}
          </button>

          <label className="mt-6 flex items-center text-sm gap-3 text-[var(--text-main)]">
            <input
              checked={consent}
              type="checkbox"
              className="h-4 w-4 accent-cyan-500"
              onChange={async (e) => {
                const value = e.target.checked;

                setConsent(value);

                await fetch("/api/profile/consent", {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ consent: value }),
                });
              }}
            />
            Megjelenek a ranglistán
          </label>
        </div>

        <div className="mt-6 h-6 text-center text-sm">
          {passwordError && <div className="text-red-400">{passwordError}</div>}

          {passwordMessage && <div className="text-green-400">{passwordMessage}</div>}
        </div>
      </div>
    </div>
  );
}
