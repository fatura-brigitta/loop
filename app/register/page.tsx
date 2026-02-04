"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
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
        body: JSON.stringify({ name, email, phone_number, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Unknown error occurred");
        return;
      }

      router.push("/login");
    } catch (err) {
      setError("Network error occurred");
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

          {/* Username */}
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
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-500">
              Email
            </label>

            <input
              className="mt-1 w-full rounded border px-3 py-2"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@gmail.com"
            />
          </div>

          {/* Phone number */}
          <div>
            <label className="block text-sm text-gray-500">
              Phone number
            </label>

            <input
              className="mt-1 w-full rounded border px-3 py-2"
              required
              type="text"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="123-456-7890"
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
                placeholder="Your password"
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
