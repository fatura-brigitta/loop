"use client";

import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type User = {
  name: string;
  profile_image: string;
};

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const authRes = await fetch("/api/auth", {
          credentials: "include",
          cache: "no-store",
        });

        if (!authRes.ok) {
          setUser(null);
          setLoading(false);
          return;
        }

        const profileRes = await fetch("/api/profile", {
          credentials: "include",
          cache: "no-store",
        });

        if (!profileRes.ok) {
          setUser(null);
          setLoading(false);
          return;
        }

        const data = await profileRes.json();

        setUser({
          name: data.name,
          profile_image: data.profile_image || "/profile/default.png",
        });
      } catch {
        setUser(null);
      }

      setLoading(false);
    };

    loadUser();
  }, [pathname]);

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/login");
    router.refresh();
  };

  const handleLogin = () => {
    router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
  };

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  };

  const navLinkClass = (active: boolean) =>
    `relative pb-1 transition cursor-pointer
     ${
       active
         ? "text-cyan-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-cyan-400"
         : "text-slate-300 hover:text-white"
     }`;

  return (
    <header className="sticky top-0 z-50 h-14 border-b border-white/10 bg-[#060b14]/90 backdrop-blur">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">

        <Link href="/" className="flex items-center gap-2">
          <Image alt="Logo" height={40} src="/favicon.ico" width={40} />
          <span className="text-lg font-extrabold tracking-wide text-cyan-300">
            Loop
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">

          <Link href="/movies" className={navLinkClass(isActive("/movies"))}>
            Filmek
          </Link>

          <Link href="/screenings" className={navLinkClass(isActive("/screenings"))}>
            Vetítések
          </Link>

          <Link href="/forum" className={navLinkClass(isActive("/forum"))}>
            Fórum
          </Link>

          {!loading && (
            <>
              {user ? (
                <div className="flex items-center gap-4">

                  <Link
                    href="/profile"
                    className={`flex items-center gap-2 ${navLinkClass(
                      isActive("/profile")
                    )}`}
                  >
                    <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/20">
                      <Image
                        alt="Profil"
                        fill
                        src={user.profile_image}
                        className="object-cover"
                      />
                    </div>
                    <span>{user.name}</span>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="text-slate-300 hover:text-white transition cursor-pointer"
                  >
                    <LogOut size={22} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  className="rounded-full bg-blue-500 px-4 py-2 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:brightness-110 cursor-pointer"
                >
                  Bejelentkezés
                </button>
              )}
            </>
          )}
        </nav>
      </div>
    </header>
  );
}