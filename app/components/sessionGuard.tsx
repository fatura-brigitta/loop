"use client";

import { useEffect } from "react";

export default function SessionGuard() {
  useEffect(() => {
    const tab = sessionStorage.getItem("tab-active");
    const browser = localStorage.getItem("browser-active");

    if (!tab && browser) {
      fetch("/api/auth", {
        method: "DELETE",
        credentials: "include"
      });
    }
    sessionStorage.setItem("tab-active", "true");
    localStorage.setItem("browser-active", "true");

  }, []);
  return null;
}