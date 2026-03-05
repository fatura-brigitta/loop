import type { Metadata } from "next";
import "./globals.css";
import NavbarWrapper from "@/app/components/navbarWrapper";
import FooterWrapper from "@/app/components/footerWrapper";

export const metadata: Metadata = {
  title: "Loop",
  description: "Loop Cinema",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className="flex min-h-screen flex-col bg-[#060b14] text-slate-100">
        <NavbarWrapper />

        <main className="flex-1">
          {children}
        </main>

        <FooterWrapper />
      </body>
    </html>
  );
}