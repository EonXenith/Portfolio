// ─────────────────────────────────────────────────────────────
//  HOW TO EDIT — site.ts
//  This file holds top-level identity info (name, tagline, socials, meta).
//  Swap the ALL_CAPS values below with your own. Do not change the
//  variable names or types. Save the file and the site hot-reloads.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Edward Xiong",
  monogram: "EX",
  tagline:
    "High school junior. Self-taught builder. Shipping small, strange things with LLMs and taste.",
  location: "Diamond Bar, CA",
  gradYear: "2027",
  email: "edwardxiong2008@gmail.com",
  socials: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    discord: "alexchen",
  },
  about: {
    heading:
      "I make stuff with AI before I learn to make it without.",
    p1: "I started building things the way most people start: by Googling everything. Then I found Claude, shipped my first app in a weekend, and never looked back. Now I'm part of a vibe-coding club where we build projects together and see what sticks.",
    p2: "When I'm not pushing to main at 2 a.m., I'm probably reading about design systems, drinking too much coffee, or deep in a rabbit hole about some framework I'll forget by next week.",
    p3: "I've shipped six projects in the past year — some useful, some weird, all mine. Every one was built with an AI copilot, a lot of taste, and not nearly enough sleep.",
    now: {
      reading: "Designing Data-Intensive Applications",
      listening: "Blonde — Frank Ocean",
      building: "A local-first note-taking app",
    },
  },
  meta: {
    title: "Edward Xiong — Portfolio",
    description:
      "Portfolio of Edward Xiong — a high school junior building AI-assisted projects and shipping things that look like they came from a real studio.",
    ogImage: "/og-image.png",
    url: "https://edward-xiong.vercel.app",
  },
} as const;
