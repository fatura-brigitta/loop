"use client";

import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { profileImageUrl } from "@/lib/profileImage";

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
          profile_image: data.profile_image,
        });

        if (data.theme) {

          document.documentElement.classList.remove("dark");

          if (data.theme === "dark") {
            document.documentElement.classList.add("dark");
          }

          localStorage.setItem("theme", data.theme);

        }
      } catch {
        setUser(null);
      }

      setLoading(false);
    };

    loadUser();
  }, [pathname]);

  const handleLogout = async () => {

    await fetch("/api/auth", { method: "DELETE" });

    setUser(null);
    setLoading(false);

    localStorage.removeItem("theme");
    document.documentElement.classList.add("dark");

    router.refresh();
    router.push("/");
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
         ? "text-[var(--text-main2)] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[var(--text-main2)]"
         : "text-[var(--text-soft)] hover:text-[var(--text-main2)]"
     }`;

  useEffect(() => {
    const reload = async () => {

      const profileRes = await fetch("/api/profile", {
        credentials: "include",
        cache: "no-store",
      });

      if (!profileRes.ok) return;

      const data = await profileRes.json();

      setUser({
        name: data.name,
        profile_image: data.profile_image ? data.profile_image : "/profile/default.png"
      });

    };

    window.addEventListener("profile-updated", reload);

    return () => window.removeEventListener("profile-updated", reload);

  }, []);

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-sm transition-colors" data-cy="navbar">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <Link className="flex items-center gap-2" data-cy="navbar-logo" href="/">
          <Image alt="Logo" height={40} src="/favicon.ico" width={40} />
          <span className="text-lg font-extrabold tracking-wide text-[var(--text-main2)]">Loop</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm" data-cy="navbar-links">
          <Link className={navLinkClass(isActive("/movies"))} data-cy="navbar-movies" href="/movies">
            Filmek
          </Link>

          <Link className={navLinkClass(isActive("/screenings"))} data-cy="navbar-screenings" href="/screenings">
            Vetítések
          </Link>

          <Link className={navLinkClass(isActive("/forum"))} data-cy="navbar-forum" href="/forum">
            Fórum
          </Link>

          {!loading && (
            <>
              {user ? (
                <div className="flex items-center gap-4">
                  <Link className={`flex items-center gap-2 ${navLinkClass(isActive("/profile"))}`}
                    data-cy="navbar-profile"
                    href="/profile"
                  >
                    <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[var(--border-color)]">
                      <Image
                        alt="Profil"
                        className="object-cover"
                        data-cy="navbar-profile-image"
                        fill
                        key={user.profile_image || "/profile/default.png"}
                        src={profileImageUrl(user.profile_image, 96)}
                        unoptimized
                      />
                    </div>
                    <span data-cy="navbar-username">{user.name}</span>
                  </Link>

                  <button className="cursor-pointer text-[var(--text-soft)] transition hover:text-[var(--text-main2)]"
                    data-cy="navbar-logout"
                    onClick={handleLogout}
                  >
                    <LogOut size={22} />
                  </button>
                </div>
              ) : (
                <button className="cursor-pointer rounded-full bg-[var(--text-main2)] px-4 py-2 text-[var(--text-light)] shadow-lg shadow-[var(--text-main2)]/30 transition hover:-translate-y-0.5 hover:brightness-110"
                  data-cy="navbar-login"
                  onClick={handleLogin}
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
