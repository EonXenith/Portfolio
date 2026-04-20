"use client";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";

interface Props {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  by?: "word" | "char";
  delay?: number;
  stagger?: number;
  className?: string;
}

export function AnimatedText({
  text,
  as: Tag = "span",
  by = "word",
  delay = 0,
  stagger = 0.08,
  className,
}: Props) {
  const reduced = useReducedMotion();
  if (reduced) return <Tag className={className}>{text}</Tag>;

  const units = by === "word" ? text.split(" ") : Array.from(text);

  return (
    <motion.div
      className={className}
      aria-label={text}
      role="text"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {units.map((u, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "120%" },
              visible: {
                y: "0%",
                transition: { duration: 0.9, ease: EASE.out },
              },
            }}
          >
            {u}
            {by === "word" && i < units.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
