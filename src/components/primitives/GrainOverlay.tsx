"use client";

export function GrainOverlay({ opacity = 0.035 }: { opacity?: number }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 mix-blend-overlay"
      style={{
        backgroundImage: "url(/noise.png)",
        backgroundRepeat: "repeat",
        opacity,
        zIndex: "var(--z-grain)",
      }}
    />
  );
}
