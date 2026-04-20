"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { site } from "@/data/site";
import { staggerContainer, fadeUpChild } from "@/lib/motion";

function HoverReveal({
  children,
  reveal,
}: {
  children: React.ReactNode;
  reveal: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger className="cursor-help underline decoration-dotted underline-offset-4 decoration-[var(--fg-2)]">
        {children}
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-sm">{reveal}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <motion.div
          className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
        >
          {/* Left column */}
          <div>
            <SectionHeading
              eyebrow="ABOUT"
              title={site.about.heading}
            />

            <motion.div
              className="mt-8 space-y-5 text-[length:var(--text-lg)] leading-relaxed text-[var(--fg-1)]"
              variants={fadeUpChild}
            >
              <p>
                {site.about.p1.includes("coffee")
                  ? site.about.p1.split("coffee").map((part, i, arr) =>
                      i < arr.length - 1 ? (
                        <span key={i}>
                          {part}
                          <HoverReveal reveal="exclusively iced, exclusively too much">
                            coffee
                          </HoverReveal>
                        </span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )
                  : site.about.p1}
              </p>
              <p>
                {site.about.p2}
              </p>
              <p>
                {site.about.p3.includes("shipped")
                  ? site.about.p3.split("shipped").map((part, i, arr) =>
                      i < arr.length - 1 ? (
                        <span key={i}>
                          {part}
                          <HoverReveal reveal="or more accurately, 'deployed to Vercel at 2am'">
                            shipped
                          </HoverReveal>
                        </span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )
                  : site.about.p3}
              </p>
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div variants={fadeUpChild}>
            {/* Portrait */}
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--portfolio-border)] transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/profile.png"
                alt={site.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-[var(--bg-1)]/80 px-3 py-1 font-mono text-[length:var(--text-xs)] text-[var(--fg-2)] opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                {site.location}
              </div>
            </div>

            {/* Now items */}
            <motion.div
              className="mt-8 space-y-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { label: "Reading", value: site.about.now.reading },
                { label: "Listening", value: site.about.now.listening },
                { label: "Building", value: site.about.now.building },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUpChild}
                  className="flex items-baseline gap-3 font-mono text-[length:var(--text-sm)]"
                >
                  <span className="uppercase tracking-wider text-[var(--fg-2)]">
                    {item.label}
                  </span>
                  <span className="text-[var(--fg-1)]">→</span>
                  <span className="text-[var(--fg-0)]">{item.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
