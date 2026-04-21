// ═════════════════════════════════════════════════════════════
//  HOW TO EDIT — projects.ts
//
//  This array holds your 6 project cards. To swap in a real
//  project, replace the placeholder values:
//
//    title       → the project's name
//    summary     → one sentence, max ~100 chars
//    description → longer write-up shown in the modal (use \n\n for paragraphs)
//    tech        → array of tech tag strings, e.g. ["Next.js", "OpenAI API"]
//    status      → "LIVE" | "WIP" | "ARCHIVED"
//    image       → path to screenshot in /public/projects/ (1600x1000 recommended)
//    liveUrl     → full URL to the live demo (or null if none)
//    githubUrl   → full URL to the GitHub repo (or null if none)
//    caseStudy   → optional long-form URL (or null)
//    year        → 4-digit year, e.g. "2025"
//
//  To REPLACE AN IMAGE:
//    1. Drop your PNG/JPG into /public/projects/ (name it project-1.png, etc.)
//    2. Update the `image` field below to match the filename
//
//  Do NOT change the number of projects — the grid is designed for exactly 6.
//  If you need fewer, leave the extra slots with status "WIP" + a teaser.
// ═════════════════════════════════════════════════════════════

import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "01",
    title: "Galaxy Simulation",
    summary: "Interactive 3D gravity sandbox with real-time N-body physics and orbital mechanics.",
    description:
      "A browser-based celestial sandbox where users create stars, planets, black holes, and asteroids, then watch them interact under real gravitational forces. Features include save/load, undo/redo, time reversal with collision unmerging, trajectory prediction, and eight scenario presets ranging from binary stars to galaxy collisions.\n\nThe physics engine uses a Barnes-Hut octree for O(n log n) gravity computation above 50 bodies and Velocity Verlet integration for stable orbits. Rendering is handled by Three.js with LOD geometry swapping, accretion disk animations, temperature-based star coloring, and collision particle effects — all running in a single HTML file with no build step.",
    tech: ["Three.js", "WebGL", "JavaScript", "HTML5 Canvas"],
    status: "LIVE",
    image: "/projects/galaxy-simulation.png",
    liveUrl: "https://eonxenith.github.io/Galaxy-Simulation/",
    githubUrl: "https://github.com/eonxenith/Galaxy-Simulation",
    caseStudy: null,
    year: "2025",
  },
  {
    id: "02",
    title: "Syllabus Sync",
    summary: "Upload a class syllabus and get every due date on a calendar automatically.",
    description:
      "Syllabus Sync lets students upload their class syllabi as PDFs, Word docs, or images, and instantly extracts every assignment, exam, and deadline into an interactive calendar. Students can review and edit AI-extracted events before saving, filter by course with color-coded labels, and export everything as an ICS file compatible with Google Calendar, Apple Calendar, or Outlook.\n\nThe app uses a dual extraction pipeline: text-based PDFs go through pdf-parse and then Gemini, while scanned or image-heavy documents fall back automatically to Gemini's multimodal vision API when the extracted word count drops below a threshold. After extraction, a deduplication pass catches near-duplicates using fuzzy title matching and a two-day date proximity window. The stack runs on Next.js 16 with the App Router, React 19, Supabase for auth and file storage, and FullCalendar for the interactive calendar UI.",
    tech: ["Next.js", "TypeScript", "Supabase", "Google Gemini API", "Tailwind CSS"],
    status: "LIVE",
    image: "/projects/syllabus-sync.png",
    liveUrl: "https://syllabus-sync-henna.vercel.app/",
    githubUrl: "https://github.com/EonXenith/SyllabusSync",
    caseStudy: null,
    year: "2026",
  },
  {
    id: "03",
    title: "StellaForge",
    summary: "Browser-based 3D planet sculpting sandbox with real-time terrain editing.",
    description:
      "StellaForge lets you create planets from scratch in the browser. Generate procedural terrain from a seed, then sculpt it with five tools — raise/lower, smooth, flatten, biome paint, and meteor impact. Eight biomes auto-assign by elevation and can be recolored or painted manually. Customize the star color and atmosphere, pick from six planet templates (Earth-like, Desert, Ocean, Ice, Volcanic, Barren), and export screenshots. Full undo/redo and keyboard shortcuts make the editing workflow fast.\n\nI built the rendering pipeline on vanilla Three.js with custom GLSL shaders — a vertex shader displaces a 40,962-vertex icosphere along surface normals using a Float32Array heightmap, while the fragment shader samples biome colors from a 1D DataTexture and applies diffuse + rim lighting. Terrain generation uses layered simplex noise with a ridged multifractal algorithm seeded via alea PRNG. Sculpting tools collect affected vertices through BFS on a precomputed adjacency list for geodesic-aware brushes, and raycasting runs at O(log n) via three-mesh-bvh. The heightmap and biome arrays live outside React/Zustand as raw typed arrays mutated per-frame, with dirty flags triggering GPU attribute uploads in the render loop — keeping the hot path away from React reconciliation entirely.",
    tech: ["Three.js", "GLSL", "TypeScript", "React", "Zustand", "Vite"],
    status: "LIVE",
    image: "/projects/stellaforge.png",
    liveUrl: "https://stella-forge.vercel.app/",
    githubUrl: "https://github.com/EonXenith/StellaForge",
    caseStudy: null,
    year: "2026",
  },
  {
    id: "04",
    title: "DebateBot",
    summary: "Practice debate rounds against an AI that argues back intelligently.",
    description:
      "DebateBot simulates a debate opponent for competitive speech & debate practice. Pick a resolution, choose your side, and the AI argues the opposing position with sourced evidence.\n\nBuilt with streaming responses for real-time back-and-forth. The AI adapts its argumentation style based on the debate format (Lincoln-Douglas, Public Forum, Policy).\n\nUsed by our school's debate team for practice rounds.",
    tech: ["Next.js", "GPT-4", "Vercel AI SDK", "Postgres"],
    status: "LIVE",
    image: "/placeholders/project-4.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    caseStudy: null,
    year: "2025",
  },
  {
    id: "05",
    title: "GitViz",
    summary: "Visualize any GitHub repo's commit history as an interactive 3D graph.",
    description:
      "GitViz fetches a repo's commit graph via the GitHub API and renders it as a 3D force-directed network using Three.js.\n\nEach node is a commit, edges show parent relationships, and branch colors distinguish parallel development streams. Hover to see commit messages, click to open on GitHub.\n\nAn early project — rough around the edges but taught me a lot about WebGL and graph algorithms.",
    tech: ["Three.js", "GitHub API", "D3-force", "React"],
    status: "ARCHIVED",
    image: "/placeholders/project-5.svg",
    liveUrl: null,
    githubUrl: "https://github.com",
    caseStudy: null,
    year: "2024",
  },
  {
    id: "06",
    title: "QuickFeed",
    summary: "Drop a URL, get an AI-generated summary and sentiment analysis.",
    description:
      "QuickFeed scrapes article content from any URL, generates a concise summary, extracts key points, and runs sentiment analysis — all in under 10 seconds.\n\nBuilt as a tool for our school newspaper team to quickly process press releases and source articles. The summarization quality is surprisingly good for a weekend project.\n\nProcesses about 50 articles per week for the team.",
    tech: ["Python", "FastAPI", "Claude API", "BeautifulSoup"],
    status: "LIVE",
    image: "/placeholders/project-6.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    caseStudy: null,
    year: "2025",
  },
];
