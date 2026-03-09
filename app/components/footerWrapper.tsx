"use client";

import Footer from "@/app/components/footer";
import { usePathname } from "next/navigation";

export default function FooterWrapper() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;
  if (pathname.startsWith("/register")) return null;
  if (pathname.startsWith("/login")) return null;
  if (pathname.startsWith("/payment")) return null;
  if (pathname.startsWith("/ticket")) return null;
  if (pathname.startsWith("/docs")) return null;

  return <Footer />;
}
