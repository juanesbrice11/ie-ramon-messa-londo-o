# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

**Next.js 15 App Router** single-page educational website for IE Ramon Messa's web programming initiative (in collaboration with Universidad Autónoma de Manizales). The site is in Spanish.

### Structure

- `app/` — App Router root: `layout.tsx` (metadata, global HTML), `page.tsx` (composes all sections), `globals.css` (Tailwind directives + custom utility classes)
- `components/` — One file per page section, rendered in order in `page.tsx`: `Navbar`, `Hero`, `AboutProject`, `LearningSection`, `Gallery`, `StudentProjects`, `Partners`, `Impact`, `Footer`
- `lib/data.ts` — Data layer with TypeScript interfaces (`StudentProject`) and mock data arrays used by components
- `public/images/` — Static assets organized by section: `galeria/`, `hero/`, `logos/`, `proyectos/`

### Styling conventions

Custom Tailwind color palette defined in `tailwind.config.ts`:
- `primary` — blue scale
- `secondary` — green scale
- `accent` — amber scale

Reusable CSS component classes in `globals.css`: `.section-container`, `.section-padding`, `.section-title`, `.section-subtitle`, `.btn-primary`, `.btn-secondary`, `.card`.

### Key config

- `next.config.ts` — Allows SVG images and remote images from `placehold.co`
- Path alias `@/*` maps to the project root
- `Navbar.tsx` uses `"use client"` for scroll-aware behavior and mobile menu toggle; most other components are Server Components
