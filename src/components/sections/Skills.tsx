"use client";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Marquee } from "@/components/primitives/Marquee";
import { skills } from "@/data/skills";

function SkillChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[var(--portfolio-border)] bg-[var(--bg-1)] px-4 py-2 text-[length:var(--text-sm)] font-medium text-[var(--fg-1)] transition-colors hover:border-[var(--portfolio-accent)]/30 hover:text-[var(--fg-0)]">
      {name}
    </span>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto mb-16 max-w-[1400px] px-6 md:px-10 lg:px-16">
        <SectionHeading
          eyebrow="STACK"
          title="The tools on the bench."
        />
      </div>

      <div className="space-y-4">
        {/* Row 1: Frameworks — left to right */}
        <Marquee speed={40} direction="left">
          {skills.frameworks.map((s) => (
            <SkillChip key={s} name={s} />
          ))}
        </Marquee>

        {/* Row 2: AI Tools — right to left */}
        <Marquee speed={50} direction="right">
          {skills.aiTools.map((s) => (
            <SkillChip key={s} name={s} />
          ))}
        </Marquee>

        {/* Row 3: Design/misc — left to right */}
        <Marquee speed={60} direction="left">
          {skills.design.map((s) => (
            <SkillChip key={s} name={s} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
