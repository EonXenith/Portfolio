"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { EASE } from "@/lib/motion";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[var(--bg-2)]"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE.soft }}
          >
            <Moon className="h-[18px] w-[18px] text-[var(--fg-1)]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE.soft }}
          >
            <Sun className="h-[18px] w-[18px] text-[var(--fg-1)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
