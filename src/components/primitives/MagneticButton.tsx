"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
}

const variantStyles = {
  primary:
    "bg-[var(--portfolio-accent)] text-[var(--bg-0)] hover:shadow-[var(--shadow-glow)]",
  ghost: "bg-transparent text-[var(--fg-0)] hover:bg-[var(--bg-2)]",
  outline:
    "bg-transparent text-[var(--fg-0)] border border-[var(--portfolio-border)] hover:border-[var(--portfolio-accent)]",
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  ariaLabel,
}: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 140, damping: 20 });
  const sy = useSpring(y, { stiffness: 140, damping: 20 });
  const isCoarse = useMediaQuery("(pointer: coarse)");

  function onMove(e: MouseEvent) {
    if (isCoarse) return;
    const el = (buttonRef.current || anchorRef.current) as HTMLElement | null;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.25);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] px-6 py-3 font-medium text-[length:var(--text-sm)] transition-colors duration-200 cursor-pointer",
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <motion.a
        ref={anchorRef}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ x: sx, y: sy }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cls}
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cls}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
