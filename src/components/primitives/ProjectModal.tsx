"use client";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { ExternalLink, GitFork } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const statusColor: Record<string, string> = {
  LIVE: "bg-[var(--success)]/20 text-[var(--success)]",
  WIP: "bg-[var(--portfolio-accent)]/20 text-[var(--portfolio-accent)]",
  ARCHIVED: "bg-[var(--fg-2)]/20 text-[var(--fg-2)]",
};

interface Props {
  project: Project | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

export function ProjectModal({ project, open, onOpenChange }: Props) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).lenis;
    if (!lenis) return;
    if (open) {
      lenis.stop();
    } else {
      lenis.start();
    }
    return () => {
      lenis.start();
    };
  }, [open]);

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent data-lenis-prevent className="max-w-3xl max-h-[85vh] overflow-y-auto overscroll-contain rounded-[var(--radius-xl)] border border-[var(--portfolio-border)] bg-[var(--bg-1)] p-0">
        <div className="relative aspect-video w-full shrink-0 overflow-hidden">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
        <div className="p-8">
          <DialogHeader>
            <div className="mb-3 flex items-center gap-3">
              <span
                className={cn(
                  "rounded-full px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider",
                  statusColor[project.status]
                )}
              >
                {project.status}
              </span>
              <span className="font-mono text-[length:var(--text-xs)] text-[var(--fg-2)]">
                {project.id} &middot; {project.year}
              </span>
            </div>
            <DialogTitle className="text-[length:var(--text-3xl)] font-bold text-[var(--fg-0)]">
              {project.title}
            </DialogTitle>
            <DialogDescription className="mt-2 text-[length:var(--text-lg)] text-[var(--fg-1)]">
              {project.summary}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-[var(--radius-sm)] bg-[var(--bg-2)] px-2.5 py-1 text-[11px] font-medium text-[var(--fg-2)]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 whitespace-pre-line text-[length:var(--text-base)] leading-relaxed text-[var(--fg-1)]">
            {project.description}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <MagneticButton
                href={project.liveUrl}
                variant="primary"
                className="gap-2"
              >
                Live Demo <ExternalLink className="h-4 w-4" />
              </MagneticButton>
            )}
            {project.githubUrl && (
              <MagneticButton
                href={project.githubUrl}
                variant="outline"
                className="gap-2"
              >
                GitHub <GitFork className="h-4 w-4" />
              </MagneticButton>
            )}
            {project.caseStudy && (
              <MagneticButton
                href={project.caseStudy}
                variant="ghost"
              >
                Case Study
              </MagneticButton>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
