"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 50], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
    >
      <span className="font-mono text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-[var(--fg-2)]">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-5 w-5 text-[var(--fg-2)]" />
      </motion.div>
    </motion.div>
  );
}
