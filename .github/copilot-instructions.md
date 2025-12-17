# Copilot / AI Agent Instructions for computer-store

Purpose
- Help AI coding agents be immediately productive in this Next.js + Tailwind + TypeScript app.

Big picture (what matters)
- This is a Next.js app using the App Router (`app/` dir) and TypeScript. Key entry points:
  - `app/layout.tsx` — root layout, global fonts and `globals.css`.
  - `app/page.tsx` — default home page (server component).
- Build system and scripts are standard Next.js: see `package.json` for `dev`, `build`, `start`, and `lint`.
- Styling: Tailwind v4 with `globals.css` (imported in `layout.tsx`). Static assets live in `public/` (e.g., `/next.svg`, `/vercel.svg`).

How to run (developer workflows)
- Local dev: `npm run dev` — runs `next dev` (App Router hot reloads).
- Production build: `npm run build` then `npm run start`.
- Lint: `npm run lint` (project uses `eslint` + `eslint-config-next`).

Project-specific conventions and patterns
- App Router (server components by default). Add UI pages under `app/` as folders with `page.tsx`.
- Keep global styles and fonts in `app/globals.css` and `app/layout.tsx` respectively.
- Images and small static assets: place in `public/` and reference with absolute path (e.g., `/next.svg`).
- TypeScript is enabled; prefer typed props for components. Project uses React 19 and Next 16.

Integration points & external deps
- Next.js (16.x) handles routing, SSR/SSG and app-level config in `next.config.ts`.
- Tailwind is used via `tailwindcss` + `@tailwindcss/postcss` in dev deps — keep class-based styling patterns.

When editing or adding code — practical examples
- Add a new page: create `app/shop/page.tsx` exporting a default React component. Use server components for data access unless client interactivity is required.
- Add client interactivity: include 'use client' at the top of the file and type props explicitly.
- Use public images: `<Image src="/my.png" width={100} height={100} />` and ensure files are in `public/`.

What not to change without confirmation
- Don't upgrade major framework versions (Next, React, TypeScript) in the same change as a feature — keep upgrades separate.
- Avoid changing `next.config.ts` or `tsconfig.json` without a clear need; these control routing and build.

Files to consult for common tasks
- `package.json` — scripts and dependency versions.
- `app/layout.tsx` — fonts and global wrappers.
- `app/globals.css` — Tailwind base utilities and custom globals.
- `public/` — static assets referenced by UI.

If you need more context
- Ask for recent commit messages or PRs if behavior seems surprising (config changes or dependency bumps are often documented there).
- If adding tests or a new build step, request permission to update `package.json` and CI configuration.

Feedback
- If anything here is unclear or you'd like more examples (e.g., component patterns, state management approach), please tell me which area to expand.
