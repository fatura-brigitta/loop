import type { Metadata } from "next";
import "./globals.css";
import NavbarWrapper from "@/app/components/navbarWrapper";
import FooterWrapper from "@/app/components/footerWrapper";
import Script from "next/script";

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
    <html lang="hu" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            const theme = localStorage.getItem("theme");
            if(theme === "dark"){
              document.documentElement.classList.add("dark");
            }
          `,
        }}
      />
        <NavbarWrapper />

        <main className="flex-1">
          {children}
        </main>

        <FooterWrapper />
      </body>
    </html>
  );
}