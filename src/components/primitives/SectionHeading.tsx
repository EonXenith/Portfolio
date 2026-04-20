"use client";
import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion";

interface Props {
  eyebrow: string;
  title: string;
  kicker?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, kicker, align = "left" }: Props) {
  return (
    <motion.div
      className={align === "center" ? "text-center" : ""}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: DURATION.slow, ease: EASE.out }}
    >
      <p className="mb-4 font-mono text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-[var(--fg-2)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-[length:var(--display-sm)] font-bold leading-[0.9] tracking-tight text-[var(--fg-0)]">
        {title}
      </h2>
      {kicker && (
        <p className="mt-4 max-w-xl text-[length:var(--text-lg)] text-[var(--fg-1)]">
          {kicker}
        </p>
      )}
    </motion.div>
  );
}
