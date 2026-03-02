"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -140px 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform =
    direction === "left"
      ? "-translate-x-24"
      : direction === "right"
        ? "translate-x-24"
        : "translate-y-24";

  return (
    <div
      className={`reveal-parent ${visible ? "reveal-visible" : ""} ${className} transform-gpu transition-all duration-[1000ms] ease-[cubic-bezier(.16,1,.3,1)] ${visible ? "blur-0 translate-y-0 scale-100 opacity-100" : `opacity-0 ${hiddenTransform} scale-95 blur-md`} `}
      ref={ref}
    >
      {children}{" "}
    </div>
  );
}
