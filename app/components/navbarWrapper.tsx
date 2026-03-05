"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;
  if (pathname.startsWith("/register")) return null;  
  if (pathname.startsWith("/payment")) return null;

  return <Navbar />;
}