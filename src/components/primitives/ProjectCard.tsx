"use client";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { EASE } from "@/lib/motion";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const statusColor: Record<string, string> = {
  LIVE: "bg-[var(--success)]/20 text-[var(--success)]",
  WIP: "bg-[var(--portfolio-accent)]/20 text-[var(--portfolio-accent)]",
  ARCHIVED: "bg-[var(--fg-2)]/20 text-[var(--fg-2)]",
};

interface Props {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{
        duration: 0.7,
        ease: EASE.out,
        delay: index * 0.08,
      }}
    >
      <motion.button
        onClick={onClick}
        onMouseMove={onMouseMove}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: EASE.soft }}
        className="group relative w-full cursor-pointer overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--portfolio-border)] bg-[var(--bg-1)] text-left transition-shadow hover:shadow-[var(--shadow-lg)] hover:border-[var(--portfolio-accent)]/20 focus-visible:outline-2 focus-visible:outline-[var(--portfolio-accent)] focus-visible:outline-offset-2"
        aria-label={`View project: ${project.title}`}
        aria-haspopup="dialog"
      >
        {/* Spotlight overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(14, 165, 233, 0.06), transparent 60%)",
          }}
        />

        {/* Image area */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <div className="h-[60%] overflow-hidden">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.12] group-hover:saturate-[1.1]"
              style={{ transform: "scale(1.05)", objectPosition: project.imagePosition || "center" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Hover overlay with buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="relative z-20 rounded-[var(--radius-md)] bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                Live Demo ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="relative z-20 rounded-[var(--radius-md)] bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>

        {/* Content area */}
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[length:var(--text-xs)] text-[var(--fg-2)]">
              {project.id}
            </span>
            <span
              className={cn(
                "rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider",
                statusColor[project.status]
              )}
            >
              {project.status}
            </span>
          </div>
          <h3 className="mb-1 text-[length:var(--text-xl)] font-semibold text-[var(--fg-0)]">
            {project.title}
          </h3>
          <p className="mb-3 line-clamp-2 text-[length:var(--text-sm)] text-[var(--fg-1)]">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-[var(--radius-sm)] bg-[var(--bg-2)] px-2.5 py-1 text-[11px] font-medium text-[var(--fg-2)]"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="rounded-[var(--radius-sm)] bg-[var(--bg-2)] px-2.5 py-1 text-[11px] font-medium text-[var(--fg-2)]">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.button>
    </motion.article>
  );
}
