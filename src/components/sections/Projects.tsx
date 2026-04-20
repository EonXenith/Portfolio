"use client";
import { useState } from "react";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { ProjectCard } from "@/components/primitives/ProjectCard";
import { ProjectModal } from "@/components/primitives/ProjectModal";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* Heading row */}
        <div className="mb-16 flex items-end justify-between">
          <SectionHeading
            eyebrow="SELECTED WORK / 2024–2026"
            title="Things I've built."
          />
          <span className="hidden font-mono text-[length:var(--text-sm)] text-[var(--fg-2)] md:block">
            {projects.length} PROJECTS
          </span>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selected}
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      />
    </section>
  );
}
