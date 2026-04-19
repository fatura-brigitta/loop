"use client";

import Navbar from "@/app/components/navbar";
import { usePathname } from "next/navigation";

export default function NavbarWrapper() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;
  if (pathname.startsWith("/payment")) return null;
  if (pathname.startsWith("/docs")) return null;

  return <Navbar />;
}