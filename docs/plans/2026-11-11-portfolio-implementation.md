# Inioluwa Daniel Osibajo — Billion-Dollar Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premier, practitioner-first personal developer portfolio and studio site for Inioluwa Daniel Osibajo, blending iPortfolio (fixed left sidebar + scroll-spy), Lendex (editorial whitespace, typography, embedded video case studies), and Minimau (minimalist grid, gold accents, theme switching).

**Architecture:** Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + `@sojournerbuilds/mark` + MDX + `next-themes` + Sonner + Zod. Clean component separation across `/components/ui`, `/components/sidebar`, `/components/sections`, `/data`, and `/content/blog`.

**Tech Stack:** Next.js 15+, React 19, TypeScript 5.5+ (strict mode), Tailwind CSS 3.4+, Framer Motion 12+, `@sojournerbuilds/mark@0.1.1`, `@tailwindcss/typography`, Lucide React, Sonner, React Hook Form, Zod.

---

## Global Constraints & Craft Guidelines

1. **Practitioner Tone:** Confident, execution-first copy. Never use "aspiring", "junior trying to learn", or "passionate about coding". Lead with: *"I ship real products and write about how I build them."*
2. **Matt Pocock TypeScript Principles:**
   - Strict `tsconfig.json` (`strict: true`, `noUncheckedIndexedAccess: true`).
   - Discriminated Unions for all stateful entities (e.g. project categories, contact status, service tiers).
   - `as const` assertions for navigation links, design tokens, and theme settings.
   - Zero `any` or loose casts; runtime Zod schemas inferring compile-time types (`z.infer<T>`).
3. **Emil Kowalski Design Engineering Principles (`emil-design-eng`):**
   - **Easing:** Strictly use custom easing curves:
     ```css
     --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
     --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
     --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
     ```
   - **Press Feedback:** `transform: scale(0.97)` on `:active` with `160ms ease-out` on all clickable cards and buttons.
   - **Origin Awareness:** Tooltips and popovers originate from triggers (`transform-origin: var(--transform-origin)`).
   - **No Animation from `scale(0)`:** Always enter from `scale(0.95)` with `opacity: 0`.
   - **Timing Ceiling:** UI animations strictly under `250ms–300ms`.
   - **Hardware Acceleration:** Leverage CSS transforms and WAAPI for continuous transitions; Motion for physics/springs.
   - **Accessibility & Devices:** Gated behind `@media (hover: hover) and (pointer: fine)` and `@media (prefers-reduced-motion: reduce)`.
4. **Branding:** Seamless integration of `@sojournerbuilds/mark` nautical compass token and the custom gold gradient highlight (`#C9A227` → `#E6C766`).

---

## Review Focus

1. **Mobile Responsiveness (320px–1920px):** Sidebar smoothly collapses into a responsive sheet drawer without horizontal overflow or layout jitter.
2. **Touch vs. Pointer Discrimination:** Custom cursor and hover effects completely disabled on touch devices and small viewports.
3. **Theme Transition Smoothness:** Switching between dark (deep nautical obsidian `#080C14`) and light mode causes zero layout flashing or contrast clipping.
4. **Offline / Missing API Resiliency:** Contact form gracefully handles missing `RESEND_API_KEY` by logging locally and notifying the user via Sonner toasts without throwing runtime errors.
5. **SEO & Metadata Integrity:** OpenGraph images, Twitter cards, dynamic sitemap, robots.txt, and JSON-LD Person schema correctly generated.

---

## Phased Execution Plan

### Phase 1: Project Initialization & Foundation Setup
- [ ] **Task 1.1: Next.js App Scaffolding & Dependencies**
  - Initialize Next.js with TypeScript, Tailwind CSS, App Router, and ESLint.
  - Install dependencies: `@sojournerbuilds/mark`, `framer-motion`, `lucide-react`, `next-themes`, `sonner`, `zod`, `react-hook-form`, `clsx`, `tailwind-merge`, `@tailwindcss/typography`.
  - Configure `tsconfig.json` with strict type-checking flags (`noUncheckedIndexedAccess: true`).
  - Verify clean build with `npm run build`.
- [ ] **Task 1.2: Design Tokens & Global CSS Architecture**
  - Setup `tailwind.config.ts` with custom gold palette (`#C9A227`, `#E6C766`, `#1A1608`), nautical dark backgrounds (`#080C14`, `#0F1626`), typography families (`Space Grotesk`, `Inter`, `JetBrains Mono`).
  - Add Emil Kowalski easing variables (`--ease-out`, `--ease-drawer`, `--ease-in-out`) and tactile active state classes in `app/globals.css`.
  - Import `@sojournerbuilds/mark/token.css` and `veil.css`.
- [ ] **Task 1.3: Asset Extraction & Avatar Setup**
  - Extract high-resolution avatar image from LinkedIn profile and save as `/public/avatar.png`.
  - Configure Next.js font optimization using `next/font/google`.

### Phase 2: Type Contracts & Structured Data Stores (Matt Pocock Spec)
- [ ] **Task 2.1: Strict TypeScript Interfaces (`/types/index.ts`)**
  - Define `Project`, `ProjectCategory` ('all' | 'client' | 'product' | 'open-source'), `Experience`, `SkillGroup`, `ResearchPaper`, `Service`, `BlogPost`, and `ContactFormData`.
- [ ] **Task 2.2: Structured Data Files (`/data/*.ts`)**
  - Create `/data/profile.ts`: Inioluwa Daniel Osibajo, Vissionnaire Tech Solution Ltd, Sojourner studio, stats (2+ years, 10+ shipped apps, 1 published NLP paper), social links.
  - Create `/data/projects.ts`: Picckr B2B Web App, Picckr Logistics Web App, Picckr Home Page, Crimson Uplink, StoreDNA / Product Store, Cinemax, Stock Trader, MERN Thinkboard.
  - Create `/data/experience.ts`: Picckr (Full-time Junior Software Engineer & Intern), Vissionnaire Tech Solution, Sojourner Founder, AFIT Research.
  - Create `/data/research.ts`: "Hybrid Zero-Shot NLP Pipeline for Text Summarization and Question Generation" (IJRIAS 2025).
  - Create `/data/skills.ts`: Frontend, Backend, AI/NLP, Tooling & Architecture.
  - Create `/data/services.ts`: Web Applications, API & Cloud Systems, AI/NLP Integration, Technical Architecture.
  - Create `/data/testimonials.ts`: Realistic client and collaborator testimonials.

### Phase 3: The Layout Shell & Micro-Interaction Engine
- [ ] **Task 3.1: Sojourner Preloader Veil (`/components/preloader/sojourner-preloader.tsx`)**
  - Implement full-screen entry veil with `@sojournerbuilds/mark` waymark rotating clockwise and ship sailing counter-clockwise.
  - Display gold beacon glow with status *"SOJOURNER BUILDS — Seeking knowledge..."*.
  - Animate elegant lift using `framer-motion` and custom cubic-bezier curves; preserve dismiss in session storage.
- [ ] **Task 3.2: Desktop Command-Center Sidebar (`/components/sidebar/sidebar.tsx`)**
  - Left fixed sidebar (280px) with `@sojournerbuilds/mark` token, circular avatar, name, and live status pill (*"Shipping in Production"*).
  - Anchor navigation with active scroll-spy indicator tracking visible sections.
  - Social icon links (GitHub, LinkedIn, Dev.to, Medium, X) and Theme Toggle switch (`next-themes`).
- [ ] **Task 3.3: Mobile Navigation Drawer (`/components/sidebar/mobile-nav.tsx`)**
  - Compact sticky top bar (< 1024px) with brand mark and hamburger toggle.
  - Sliding backdrop drawer with gesture dismiss and quick anchor navigation.
- [ ] **Task 3.4: Adaptive Custom Cursor (`/components/ui/custom-cursor.tsx`)**
  - Smooth spring cursor (`useSpring({ stiffness: 120, damping: 14 })`) with amber halo.
  - Automatically disabled on touch devices (`pointer: coarse`) and when `prefers-reduced-motion` is active.
- [ ] **Task 3.5: Root Layout Assembly (`app/layout.tsx`)**
  - Assemble `ThemeProvider`, `SojournerPreloader`, `CustomCursor`, `Sidebar`, `MobileNav`, and `Toaster`.

### Phase 4: Core Portfolio Sections Engineering
- [ ] **Task 4.1: Hero Section (`/components/sections/hero-section.tsx`)**
  - Striking typography with gold gradient headline.
  - Practitioner statement: *"I ship real products and write about how I build them."*
  - Animated rotating role badge (Full-Stack Engineer, Systems Architect, NLP Researcher, Sojourner Founder).
  - CTAs: Primary *"View Shipped Work"* (scrolls to projects) and Secondary *"Hire Sojourner Studio"* (scrolls to contact).
- [ ] **Task 4.2: About Section (`/components/sections/about-section.tsx`)**
  - Narrative bio highlighting real experience at Vissionnaire and Picckr, Nigeria-wide logistics software, and AI systems.
  - Key metrics counter cards (2+ Years Experience, 10+ Shipped Products, 1 Published NLP Paper, 99.9% Production Uptime).
- [ ] **Task 4.3: Skills Section (`/components/sections/skills-section.tsx`)**
  - Grouped into Frontend, Backend, AI/NLP & Data, Dev & Architecture.
  - Tactile interactive chips with icon, proficiency indicator, and Emil Kowalski `:active` scale(0.97) feedback.
- [ ] **Task 4.4: Projects Grid Section (`/components/sections/projects-section.tsx`)**
  - Category filter tabs (All, Client, Product, Open Source) with animated pill indicator.
  - High-impact project cards with tech tags, live links, GitHub links, and links to deep case-study pages (`/projects/[slug]`).
- [ ] **Task 4.5: Experience & Research Timelines (`/components/sections/experience-section.tsx` & `research-section.tsx`)**
  - Vertical timeline with glowing gold nodes, date badges, responsibilities, and key achievements.
  - Dedicated Academic & NLP Research Card highlighting the IJRIAS paper with abstract preview and direct RePEc link.
- [ ] **Task 4.6: Sojourner Services Section (`/components/sections/services-section.tsx`)**
  - Agency/Studio service cards (SaaS Development, High-Volume Logistics, AI Agents & NLP, Systems Optimization).
  - Interactive "Start a Project" CTA routing to the contact form with prefilled scope.
- [ ] **Task 4.7: Blog Section (`/components/sections/blog-section.tsx`)**
  - Card grid featuring real published articles from Dev.to and Medium (RSC Performance, The WhatsApp Economy, StoreDNA, Map Architecture).
  - Reading time badges, publication dates, and tags.
- [ ] **Task 4.8: Testimonials Carousel (`/components/sections/testimonials-section.tsx`)**
  - Fluid drag-and-swipe carousel with autoplay pause on hover and visible navigation dots.
- [ ] **Task 4.9: Contact Section & Email Route Handler (`/components/sections/contact-section.tsx` & `/app/api/contact/route.ts`)**
  - Form built with `react-hook-form` and `zod` schema.
  - Inputs for Name, Email, Project Type / Subject, and Message.
  - Route handler supporting Resend with seamless local fallback logger when `RESEND_API_KEY` is not provided.
  - Sonner feedback on submit (*"Message dispatched. I'll get back to you within 24 hours."*).

### Phase 5: Deep Case Studies, MDX Blog & Feeds
- [ ] **Task 5.1: Dynamic Project Case Study Pages (`/app/projects/[slug]/page.tsx`)**
  - Comprehensive case-study template (Overview, The Problem, Architecture & Decisions, Video Demo Embed, Shipped Results).
- [ ] **Task 5.2: MDX Blog Architecture & Reader (`/app/blog/[slug]/page.tsx` & `/content/blog/*.mdx`)**
  - Setup MDX parsing, frontmatter extraction, syntax-highlighted code blocks, and table of contents.
- [ ] **Task 5.3: RSS Feed & Dynamic Sitemap (`/app/feed.xml/route.ts` & `/app/sitemap.ts`)**
  - Generate standards-compliant RSS XML feed for blog posts.
  - Dynamic sitemap indexing all static and dynamic project/blog routes.

### Phase 6: Performance, Accessibility, SEO & Deployment
- [ ] **Task 6.1: SEO, Open Graph & JSON-LD Person Schema**
  - Configure root metadata, Twitter card tags, favicon, and structured Person schema.
- [ ] **Task 6.2: Accessibility & Performance Audit**
  - Verify WCAG AA contrast ratios in dark and light modes.
  - Audit keyboard focus outlines and aria attributes.
  - Optimize `next/image` sizing and priority flags for 95+ Lighthouse metrics.
- [ ] **Task 6.3: Comprehensive Documentation & Git Commits**
  - Write detailed `README.md` covering setup, how to edit data files, and Vercel/Cloudflare deployment.
  - Ensure all milestones are cleanly committed to git.
