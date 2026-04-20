"use client";
import { site } from "@/data/site";
import { Marquee } from "@/components/primitives/Marquee";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--portfolio-border)]">
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-10 lg:px-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left: monogram + tagline */}
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--portfolio-accent)] font-display text-sm font-bold text-[var(--bg-0)]">
              {site.monogram}
            </span>
            <p className="mt-3 max-w-xs text-[length:var(--text-sm)] text-[var(--fg-2)]">
              {site.tagline}
            </p>
          </div>

          {/* Middle: sitemap */}
          <div className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[length:var(--text-sm)] text-[var(--fg-1)] transition-colors hover:text-[var(--fg-0)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: credit */}
          <div className="text-right max-md:text-left">
            <p className="text-[length:var(--text-sm)] text-[var(--fg-2)]">
              &copy; {new Date().getFullYear()} {site.name}
            </p>
            <p className="mt-1 text-[length:var(--text-sm)] text-[var(--fg-2)]">
              Built with Claude Code. Hosted on Vercel.
            </p>
          </div>
        </div>
      </div>

      {/* Giant kinetic wordmark */}
      <div className="overflow-hidden pb-8">
        <Marquee speed={120} pauseOnHover={false}>
          <span
            className="whitespace-nowrap font-display font-black leading-none tracking-tight text-[var(--fg-2)]"
            style={{
              fontSize: "var(--display-lg)",
              opacity: 0.08,
            }}
          >
            {site.name} &mdash;
          </span>
        </Marquee>
      </div>
    </footer>
  );
}
