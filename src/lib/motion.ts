type CubicBezier = [number, number, number, number];

export const EASE = {
  out: [0.16, 1, 0.3, 1] as CubicBezier,
  inOut: [0.87, 0, 0.13, 1] as CubicBezier,
  soft: [0.22, 1, 0.36, 1] as CubicBezier,
  spring: { type: "spring" as const, stiffness: 220, damping: 24, mass: 0.9 },
  springSoft: { type: "spring" as const, stiffness: 140, damping: 20 },
  springSnap: { type: "spring" as const, stiffness: 400, damping: 30 },
};

export const DURATION = { fast: 0.25, base: 0.6, slow: 1.0, cinema: 1.4 };

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const fadeUpChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE.out },
  },
};
