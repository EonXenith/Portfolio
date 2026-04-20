# Portfolio

A cinematic, dark-mode-first personal portfolio website built with Next.js, Three.js, and Framer Motion.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI:** shadcn/ui
- **Animation:** Framer Motion
- **3D:** Three.js, React Three Fiber, Drei
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm run start
```

### Deploy to Vercel

Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new). Vercel auto-detects Next.js and deploys.

Or via CLI:

```bash
npx vercel --prod
```

## How to Edit

### 1. Your name, tagline, and socials

Edit `src/data/site.ts`. Replace the placeholder values with your own info. Each field has a comment explaining what to put.

### 2. Your six projects

Edit `src/data/projects.ts`. Each object in the array is one project card. The file has a detailed HOW TO EDIT comment block at the top.

### 3. Project screenshots

Drop PNG/JPG files into `public/projects/` (1600x1000 recommended). Update the `image` field in `projects.ts` to point to your file, e.g. `"/projects/project-1.png"`.

### 4. Your portrait

Drop an image at `public/portrait.png` (aspect 4:5 ideal). In `src/components/sections/About.tsx`, replace the gradient placeholder div with an `<Image>` component.

### 5. Skills

Edit `src/data/skills.ts`. Three arrays: `frameworks`, `aiTools`, `design`. Add or remove strings freely.

### 6. Favicon

Open `public/favicon.svg` and replace "AC" with your initials.

### 7. OG image

Replace `public/og-image.png` with a 1200x630 image for social media previews.

## Things NOT to Edit (Unless You Know What You're Doing)

- `src/components/` — the building blocks
- `src/app/globals.css` — design tokens
- `src/app/layout.tsx`, `page.tsx` — page structure

## Previewing Changes

Run `npm run dev` and keep the terminal open. Every save auto-reloads the browser. If something breaks, check the terminal for error messages.

## Deploying Changes

If deployed via Vercel + GitHub:

```bash
git add . && git commit -m "update projects" && git push
```

Vercel redeploys automatically within 60 seconds.

---

Built with Claude Code.
