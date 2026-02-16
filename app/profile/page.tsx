"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {

  const router = useRouter();

  const [name, setUserName] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const [user, setUser] = useState<any>(null);

  const [newName, setNewName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      const userRes = await fetch("/api/activeUser", { cache: "no-store" });

      if (userRes.status !== 200) {
        setShowLogin(false);
        router.push("/login");
        return;
      }

      const active = await userRes.json();
      setUserName(active.name);
      setShowLogin(true);

      // betöltjük a profile adatokat
      const profileRes = await fetch("/api/profile", { cache: "no-store" });
      const profile = await profileRes.json();

      setUser(profile);
      setNewName(profile.name);
    };

    loadUser();
  }, [router]);

  useEffect(() => {
    if (!message && !error) return;

    const timer = setTimeout(() => {
        setMessage("");
        setError("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [message, error]);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setShowLogin(false);
    setUser(null);
    router.push("/login");
  };

  const updateName = async () => {
    setError("");
    setMessage("");

    const res = await fetch("/api/profile/update", {
      method: "POST",
      body: JSON.stringify({ name: newName }),
    });

    if (!res.ok) {
      setError("Failed to update name");
      return;
    }

    setMessage("Name successfully updated!");
    setUserName(newName);
  };

  const changePassword = async () => {
    setError("");
    setMessage("");

    if (newPassword !== newPassword2) {
      setError("The new passwords do not match!");
      return;
    }

    if (oldPassword === newPassword) {
        setError("The new password cannot be the same as the old password.");
        return;
    }

    if (newPassword.length < 5) {
      setError("The password must be at least 5 characters long!");
      return;
    }

    const res = await fetch("/api/profile/password", {
      method: "POST",
      body: JSON.stringify({
        oldPassword,
        newPassword,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Error occurred while changing password");
      return;
    }

    setOldPassword("");
    setNewPassword("");
    setNewPassword2("");

    setMessage("Password successfully changed!");
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#060b14] text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100">

      <header className="sticky top-0 z-50 h-14 border-b border-white/10 bg-[#060b14]/90 backdrop-blur">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
          <Link className="flex items-center gap-2" href="/">
            <Image alt="Logo" height={28} src="/favicon.ico" width={28} />
            <span className="text-lg font-extrabold tracking-wide text-cyan-300">
              Loop
            </span>
          </Link>

          <nav className="flex items-center gap-5 text-sm">
            <a className="text-slate-200/90 hover:text-white transition" href="/movies">
              Movies
            </a>

            <a
              className="text-slate-200/90 hover:text-white transition"
              href="/screenings"
              onClick={async () => {
                await fetch("/api/clearSelectedMovie", { method: "POST" });
              }}
            >
              Screenings
            </a>

            <a className="text-slate-200/90 hover:text-white transition" href="/forum">
              Forum
            </a>

            {showLogin ? (
              <div className="flex items-center gap-2">
                <a className="text-slate-200/90" href="/profile">
                  Hello, {name} !
                </a>
                <button
                  className="text-slate-200/90 hover:text-white transition cursor-pointer"
                  onClick={handleLogout}
                >
                  <LogOut size={25} />
                </button>
              </div>
            ) : (
              <a
                className="ml-2 rounded-full bg-blue-500 px-4 py-2 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:brightness-110"
                href="/login"
              >
                Login
              </a>
            )}
          </nav>
        </div>
      </header>

      <div className="flex items-center justify-center py-16">
        <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">

          <h1 className="mb-8 text-center text-3xl font-bold text-cyan-300">
            Profile
          </h1>

          <div className="mb-6">
            <label className="text-sm text-white/60">Email</label>
            <input
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white outline-none"
              value={user.email}
              disabled
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-white/60">Name</label>
            <input
              className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white outline-none focus:border-cyan-400"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button
              onClick={updateName}
              className="mt-3 rounded-lg bg-cyan-600 px-4 py-2 font-semibold hover:bg-cyan-400 text-white"
            >
               Update name
            </button>
          </div>

          <div className="border-t border-white/10 pt-6">

            <h2 className="mb-4 text-xl font-semibold text-cyan-300">
              Change password
            </h2>

            <label className="text-sm text-white/60">Password</label>
            <input
              type="password"
              placeholder="Old password"
              className="mb-3 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />

            <label className="text-sm text-white/60">New password</label>
            <input
              type="password"
              placeholder="New password"
              className="mb-3 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <label className="text-sm text-white/60">Confirm new password</label>
            <input
              type="password"
              placeholder="New password again"
              className="mb-3 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-white"
              value={newPassword2}
              onChange={(e) => setNewPassword2(e.target.value)}
            />

            <button
              onClick={changePassword}
              className="mt-2 rounded-lg  bg-cyan-600 px-4 py-2 font-semibold hover:bg-cyan-400 text-white"
            >
              Change password
            </button>

          </div>

          <div className="mt-6 h-6 text-center">
            {error && (
                <div className="text-red-400 animate-fadeIn">
                {error}
                </div>
            )}

            {message && (
                <div className="text-green-400 animate-fadeIn">
                {message}
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}