"use client";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function SpotlightCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(pointer: fine) and (min-width: 1024px)");
  const reduced = useReducedMotion();
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    if (!isDesktop || reduced) return;

    function onMove(e: MouseEvent) {
      pos.current.tx = e.clientX;
      pos.current.ty = e.clientY;
    }
    window.addEventListener("mousemove", onMove);

    let raf: number;
    function loop() {
      const p = pos.current;
      p.x += (p.tx - p.x) * 0.12;
      p.y += (p.ty - p.y) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate(${p.x - 300}px, ${p.y - 300}px)`;
      }
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [isDesktop, reduced]);

  if (!isDesktop || reduced) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 h-[600px] w-[600px] rounded-full opacity-[0.08]"
      style={{
        background:
          "radial-gradient(circle, var(--portfolio-accent) 0%, transparent 70%)",
        zIndex: "var(--z-base)",
      }}
    />
  );
}
