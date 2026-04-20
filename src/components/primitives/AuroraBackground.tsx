"use client";
import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-40 dark:opacity-60"
    >
      <motion.div
        className="absolute -top-1/4 -left-1/4 h-[60%] w-[60%] rounded-full blur-[120px]"
        style={{ background: "var(--portfolio-accent)" }}
        animate={{ x: ["0%", "15%", "-5%"], y: ["0%", "-10%", "8%"], scale: [1, 1.1, 0.95] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/4 -right-1/4 h-[50%] w-[50%] rounded-full blur-[120px]"
        style={{ background: "var(--accent-2)" }}
        animate={{ x: ["0%", "-12%", "8%"], y: ["0%", "15%", "-5%"], scale: [1, 0.95, 1.1] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-1/4 left-1/3 h-[45%] w-[45%] rounded-full blur-[120px]"
        style={{ background: "var(--accent-3)" }}
        animate={{ x: ["0%", "10%", "-8%"], y: ["0%", "-8%", "12%"], scale: [1, 1.05, 0.9] }}
        transition={{ duration: 35, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
      />
    </div>
  );
}
