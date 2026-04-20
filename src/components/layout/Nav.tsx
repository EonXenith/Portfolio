"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/primitives/ThemeToggle";
import { site } from "@/data/site";
import { EASE } from "@/lib/motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick(href: string) {
    setActiveLink(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <motion.nav
        className="fixed top-6 right-0 left-0 z-[var(--z-nav)] mx-auto flex w-fit items-center gap-1 rounded-full px-2 py-1.5 glass max-md:hidden"
        animate={scrolled ? { scale: 0.96 } : { scale: 1 }}
        transition={EASE.springSoft}
      >
        {/* Monogram */}
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--portfolio-accent)] font-display text-xs font-bold text-[var(--bg-0)]">
          {site.monogram}
        </span>

        {/* Links */}
        <div className="flex items-center gap-0.5 px-2">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="relative rounded-full px-4 py-1.5 text-sm font-medium text-[var(--fg-1)] transition-colors hover:text-[var(--fg-0)]"
            >
              {activeLink === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-0 rounded-full bg-[var(--bg-2)]"
                  transition={EASE.springSoft}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}
        </div>

        <ThemeToggle />
      </motion.nav>

      {/* Mobile nav */}
      <div className="fixed top-4 right-4 z-[var(--z-nav)] md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full glass"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-[var(--fg-0)]" />
          ) : (
            <Menu className="h-5 w-5 text-[var(--fg-0)]" />
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[calc(var(--z-nav)-1)] flex flex-col items-center justify-center bg-[var(--bg-0)]/95 backdrop-blur-lg md:hidden"
          >
            {links.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, ease: EASE.out }}
                onClick={() => handleClick(link.href)}
                className="py-4 font-display text-[length:var(--text-2xl)] font-bold text-[var(--fg-0)]"
              >
                {link.label}
              </motion.button>
            ))}
            <div className="mt-8">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
