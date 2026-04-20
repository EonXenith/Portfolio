"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).lenis = lenis;
    let raf: number;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).lenis = null;
    };
  }, []);
  return <>{children}</>;
}
