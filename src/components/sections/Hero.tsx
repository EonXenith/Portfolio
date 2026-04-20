"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/primitives/AnimatedText";
import { MagneticButton } from "@/components/primitives/MagneticButton";
import { ScrollIndicator } from "@/components/primitives/ScrollIndicator";
import { AuroraBackground } from "@/components/primitives/AuroraBackground";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { site } from "@/data/site";
import { EASE } from "@/lib/motion";

const HeroCanvas = dynamic(
  () => import("@/components/three/HeroCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--portfolio-accent)]/20 via-transparent to-transparent blur-3xl" />
    ),
  }
);

export function Hero() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const reduced = useReducedMotion();
  const showWebGL = !isMobile && !reduced;

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background */}
      {showWebGL ? (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE.out }}
        >
          <HeroCanvas />
        </motion.div>
      ) : (
        <AuroraBackground />
      )}

      {/* Content */}
      <div className="relative z-[var(--z-content)] mx-auto max-w-[1400px] px-6 text-center md:px-10 lg:px-16">
        {/* Eyebrow */}
        <motion.p
          className="mb-6 font-mono text-[length:var(--text-xs)] uppercase tracking-[0.2em] text-[var(--fg-2)]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE.out }}
        >
          Portfolio / Class of {site.gradYear}
        </motion.p>

        {/* Display name */}
        <div className="mb-6">
          <AnimatedText
            text="Building with AI."
            as="h1"
            by="word"
            delay={0.3}
            stagger={0.08}
            className="block font-display font-black leading-[0.9] tracking-tight text-[var(--fg-0)]"
            // @ts-expect-error - style prop forwarded through motion component
            style={{ fontSize: "var(--display-lg)" }}
          />
          <AnimatedText
            text={site.name}
            as="h1"
            by="word"
            delay={0.55}
            stagger={0.08}
            className="mt-2 block text-gradient font-display font-black leading-[0.9] tracking-tight"
            // @ts-expect-error - style prop forwarded through motion component
            style={{ fontSize: "var(--display-lg)" }}
          />
        </div>

        {/* Tagline */}
        <motion.p
          className="mx-auto mb-10 max-w-xl text-[length:var(--text-lg)] text-[var(--fg-1)]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: EASE.out }}
        >
          {site.tagline}
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: EASE.out }}
        >
          <MagneticButton
            variant="primary"
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            See projects
          </MagneticButton>
          <MagneticButton
            variant="outline"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in touch
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
