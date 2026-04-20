"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { GitFork, Globe, Link2, MessageCircle, Check } from "lucide-react";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { MagneticButton } from "@/components/primitives/MagneticButton";
import { site } from "@/data/site";
import { staggerContainer, fadeUpChild } from "@/lib/motion";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const socials = [
    { icon: GitFork, label: "GitHub", href: site.socials.github },
    { icon: Globe, label: "Twitter", href: site.socials.twitter },
    { icon: Link2, label: "LinkedIn", href: site.socials.linkedin },
    {
      icon: MessageCircle,
      label: "Discord",
      href: `https://discord.com/users/${site.socials.discord}`,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="text-center">
          <SectionHeading
            eyebrow="SAY HI"
            title="Let's build something."
            align="center"
          />
          <p className="mx-auto mt-4 max-w-md text-[length:var(--text-lg)] text-[var(--fg-1)]">
            I read every message. No bots, no auto-replies.
          </p>
        </div>

        <motion.div
          className="mt-16 grid gap-16 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15%" }}
        >
          {/* Form */}
          <motion.div variants={fadeUpChild}>
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-16">
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Check className="h-12 w-12 text-[var(--success)]" />
                </motion.div>
                <p className="mt-4 text-[length:var(--text-lg)] font-medium text-[var(--fg-0)]">
                  Message sent!
                </p>
                <p className="mt-2 text-[length:var(--text-sm)] text-[var(--fg-1)]">
                  I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-8">
                {[
                  { name: "name", label: "Name", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required
                      aria-required="true"
                      placeholder=" "
                      className="peer w-full border-b border-[var(--portfolio-border)] bg-transparent py-3 text-[length:var(--text-base)] text-[var(--fg-0)] outline-none transition-colors focus:border-[var(--portfolio-accent)]"
                    />
                    <label
                      htmlFor={field.name}
                      className="absolute top-3 left-0 text-[length:var(--text-sm)] text-[var(--fg-2)] transition-all peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[length:var(--text-xs)] peer-not-placeholder-shown:text-[var(--portfolio-accent)] peer-focus:-top-2 peer-focus:text-[length:var(--text-xs)] peer-focus:text-[var(--portfolio-accent)]"
                    >
                      {field.label}
                    </label>
                  </div>
                ))}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    placeholder=" "
                    rows={4}
                    className="peer w-full resize-none border-b border-[var(--portfolio-border)] bg-transparent py-3 text-[length:var(--text-base)] text-[var(--fg-0)] outline-none transition-colors focus:border-[var(--portfolio-accent)]"
                  />
                  <label
                    htmlFor="message"
                    className="absolute top-3 left-0 text-[length:var(--text-sm)] text-[var(--fg-2)] transition-all peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-[length:var(--text-xs)] peer-not-placeholder-shown:text-[var(--portfolio-accent)] peer-focus:-top-2 peer-focus:text-[length:var(--text-xs)] peer-focus:text-[var(--portfolio-accent)]"
                  >
                    Message
                  </label>
                </div>

                {status === "error" && (
                  <p role="alert" className="text-[length:var(--text-sm)] text-[var(--danger)]">
                    Something went wrong. Please try again.
                  </p>
                )}

                <MagneticButton
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  {status === "sending" ? "Sending..." : "Send message →"}
                </MagneticButton>
              </form>
            )}
          </motion.div>

          {/* Direct channels */}
          <motion.div variants={fadeUpChild} className="space-y-8">
            {/* Email */}
            <div>
              <p className="mb-2 font-mono text-[length:var(--text-xs)] uppercase tracking-wider text-[var(--fg-2)]">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="text-[length:var(--text-lg)] text-[var(--fg-0)] underline decoration-[var(--portfolio-border)] underline-offset-4 transition-colors hover:decoration-[var(--portfolio-accent)]"
              >
                {site.email}
              </a>
            </div>

            {/* Socials */}
            <div>
              <p className="mb-4 font-mono text-[length:var(--text-xs)] uppercase tracking-wider text-[var(--fg-2)]">
                Socials
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <MagneticButton
                    key={s.label}
                    href={s.href}
                    variant="ghost"
                    className="flex h-12 w-12 items-center justify-center rounded-full !p-0"
                    ariaLabel={s.label}
                  >
                    <s.icon className="h-5 w-5" />
                  </MagneticButton>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 font-mono text-[length:var(--text-sm)] text-[var(--fg-2)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--success)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
              </span>
              Currently in {site.location}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
