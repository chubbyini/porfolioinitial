# Inioluwa Daniel Osibajo — Portfolio & Studio

> **Full-Stack Web Developer & Founder of Sojourner Builds**  
> *"I ship real products, architect resilient web systems, and write about how I build them."*

A premier personal portfolio and studio web application built from scratch with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and the official **`@sojournerbuilds/mark`** brand design system.

---

## 🌟 Architecture & Design Direction

The site blends three architectural philosophies:
1. **iPortfolio:** Command-center desktop sidebar with circular portrait, embedded live Sojourner waymark badge, status beacon (*"Shipping in Production"*), anchor navigation with scroll-spy, and persistent theme switching.
2. **Lendex:** Refined typography (`Space Grotesk` display + `Inter` body + `JetBrains Mono` code), generous whitespace, dynamic case study pages with embedded video demo containers, and reading-time blog integrations.
3. **Minimau:** Modular filterable project cards, persistent dark mode with signature gold accents (`#C9A227` → `#E6C766`), and accessible cross-browser clean code.

### Emil Kowalski Design Engineering (`emil-design-eng`)
- **Custom Easing Curves:**
  ```css
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  ```
- **Tactile Active Feedback:** `transform: scale(0.97)` on `:active` with `160ms ease-out` for all buttons, cards, and interactive chips.
- **Never Animate from `scale(0)`:** Entrances start from `scale(0.95)` with `opacity: 0`.
- **Spring Cursor:** Dynamic spring physics (`useSpring`) on desktop, automatically disabled on touch devices (`pointer: coarse`) and when `prefers-reduced-motion` is active.
- **Sojourner Preloader Veil:** Full-screen beaming waymark that lifts after initial assets hydrate (session-cached).

---

## 🚀 Tech Stack

- **Framework:** Next.js 15.5+ (App Router, Server Components & Streaming)
- **Language:** TypeScript 5.6+ (Strict mode: `noUncheckedIndexedAccess: true`)
- **Styling:** Tailwind CSS 3.4+ & `@tailwindcss/typography`
- **Animation:** Framer Motion 12+
- **Brand Tokens:** `@sojournerbuilds/mark@0.1.1`
- **Theme:** `next-themes` (Dark mode default with gold accent + clean Light mode)
- **Forms & Validation:** `react-hook-form` + `zod`
- **Notifications:** `sonner` + `canvas-confetti`
- **Content:** MDX (file-based in `/content/blog`) + `gray-matter`
- **Feeds & SEO:** Dynamic `/feed.xml` RSS, `/sitemap.xml`, and `/robots.txt`

---

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx             # Root layout with fonts, ThemeProvider, Preloader, Sidebar
│   ├── page.tsx               # Main portfolio canvas (10 core sections)
│   ├── not-found.tsx          # Branded 404 page with Sojourner token
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx       # Dynamic case study route (problem, architecture, video demo)
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx       # Dynamic MDX blog post reader
│   ├── feed.xml/
│   │   └── route.ts           # Dynamic RSS 2.0 XML feed generator
│   ├── sitemap.ts             # Dynamic search engine sitemap
│   ├── robots.ts              # Robots.txt configuration
│   └── api/
│       └── contact/
│           └── route.ts       # Validated API route with Resend & local dev logger
├── components/
│   ├── preloader/             # @sojournerbuilds/mark loading veil
│   ├── sidebar/               # Desktop sidebar & mobile navigation drawer
│   ├── ui/                    # Custom spring cursor, theme toggle
│   └── sections/              # 10 modular sections:
│       ├── hero-section.tsx
│       ├── about-section.tsx
│       ├── skills-section.tsx
│       ├── projects-section.tsx
│       ├── experience-section.tsx
│       ├── research-section.tsx
│       ├── services-section.tsx
│       ├── blog-section.tsx
│       ├── testimonials-section.tsx
│       └── contact-section.tsx
├── content/
│   └── blog/                  # MDX blog posts with frontmatter
├── data/                      # Strongly-typed data files (edit content here)
│   ├── profile.ts             # Bio, headline, stats, social links
│   ├── projects.ts            # Picckr B2B, Logistics, StoreDNA, etc.
│   ├── experience.ts          # Vissionnaire, Sojourner, Picckr, AFIT timeline
│   ├── research.ts            # Published IJRIAS zero-shot NLP paper details
│   ├── skills.ts              # Grouped skills matrix (Frontend, Backend, AI/NLP, Tools)
│   ├── services.ts            # Studio service offerings & client scope
│   ├── articles.ts            # Published Dev.to & Medium articles
│   └── testimonials.ts        # Client & collaborator endorsements
├── lib/
│   ├── mdx.ts                 # MDX reader & frontmatter parser
│   └── utils.ts               # cn helper, date formatters
├── public/
│   └── avatar.png             # Circular portrait
└── tailwind.config.ts         # Gold & nautical token definitions
```

---

## 🛠️ Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/chubbyini/porfolioinitial.git
   cd porfolioinitial
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied).

4. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📝 How to Update Content

You never need to edit JSX components to change your bio, projects, or experience. All content lives in strongly-typed files inside `/data`:

- **Update personal bio, headline, and stats:** Edit [`data/profile.ts`](data/profile.ts).
- **Add or edit projects:** Edit [`data/projects.ts`](data/projects.ts). Adding a project automatically creates its case study page at `/projects/[slug]`.
- **Add or edit career timeline:** Edit [`data/experience.ts`](data/experience.ts).
- **Update published research paper:** Edit [`data/research.ts`](data/research.ts).
- **Add skills:** Edit [`data/skills.ts`](data/skills.ts).
- **Add studio services:** Edit [`data/services.ts`](data/services.ts).
- **Add MDX blog posts:** Create a new `.mdx` file in [`content/blog/<slug>.mdx`](content/blog) with frontmatter:
  ```markdown
  ---
  title: "Your Post Title"
  date: "Nov 20, 2026"
  readTime: "5 min read"
  tags: ["Next.js", "Architecture"]
  description: "Brief summary of the article."
  ---
  ```

---

## 📬 Contact Form & Email Setup

The contact form sends requests to `/api/contact`.

1. To receive submissions directly to your email, sign up for [Resend](https://resend.com) (free tier includes 3,000 emails/month).
2. Create a `.env.local` file in the project root:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=inioluwaosibajo@gmail.com
   ```
3. **Local Testing Without API Keys:** If `RESEND_API_KEY` is omitted, the API route automatically falls back to logging the submission to the local terminal, returns a simulated success response, and triggers the confetti celebration without throwing errors.

---

## ☁️ Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub (`chubbyini/porfolioinitial`).
2. Go to [Vercel](https://vercel.com/new) and import the repository.
3. Next.js App Router is automatically detected.
4. Add environment variables (`RESEND_API_KEY`, `CONTACT_EMAIL`) under **Project Settings > Environment Variables**.
5. Click **Deploy**. Your site will be live on a global CDN edge with automatic SSL.

---

## 📄 License

MIT © [Inioluwa Daniel Osibajo](https://github.com/chubbyini) & Sojourner Builds.
