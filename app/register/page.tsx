"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Hiba történt");
        return;
      }

      router.push("/login");
    } catch {
      setError("Hálózati hiba");
    }
  };

  //register felület
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">

        <h1 className="mb-6 text-center text-2xl font-bold">
          Register
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* felhasználónév */}
          <div>
            <label className="block text-sm text-gray-500">
              Name
            </label>

            <input
              className="mt-1 w-full rounded border px-3 py-2"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* jelszó kezelés felülete  */}
          <div>
            <label className="block text-sm text-gray-500">
              Password
            </label>

            <div className="relative mt-1">
              <input
                className="w-full rounded border px-3 py-2 pr-10"
                required
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}

          <button
            className="w-full rounded bg-black py-2 text-white hover:bg-gray-800 cursor-pointer"
            type="submit"
          >
            Create Account
          </button>

        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            className="underline cursor-pointer text-black"
            href="/login"
          >
            Login
          </a>
        </p>

      </div>
    </div>
  );
}
