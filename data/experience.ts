import type { ExperienceItem } from "@/types";

export const experienceData: readonly ExperienceItem[] = [
  {
    id: "vissionnaire",
    role: "Web Developer / Software Engineer",
    company: "Vissionnaire Tech Solution Ltd",
    companyUrl: "https://picckr.com",
    location: "Kaduna, Nigeria",
    period: "2024 — Present",
    current: true,
    type: "Full-time",
    summary:
      "Engineering core enterprise web applications and logistics platforms (including Picckr), leading frontend architecture, real-time dispatch systems, and API integrations.",
    achievements: [
      "Architected the Picckr B2B portal, speeding up high-volume merchant order creation by 45%.",
      "Engineered an abstract map provider interface with live failover between Mapbox and OpenStreetMap, securing 99.98% routing uptime.",
      "Implemented resilient WebSocket connections for real-time rider tracking and instant milestone updates.",
      "Spearheaded component library refactoring with strict TypeScript types and zero regression defects.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "WebSockets", "Mapbox", "PostgreSQL"],
  },
  {
    id: "sojourner",
    role: "Founder & Lead Developer",
    company: "Sojourner Builds",
    companyUrl: "https://www.npmjs.com/package/@sojournerbuilds/mark",
    location: "Remote / Kaduna, Nigeria",
    period: "2023 — Present",
    current: true,
    type: "Studio / Agency",
    summary:
      "Directing an independent web engineering studio focused on bespoke client products, high-performance web applications, and publishing open-source tooling.",
    achievements: [
      "Authored and published @sojournerbuilds/mark on npm, providing a zero-dependency nautical waymark token and data-aware Next.js route veil.",
      "Developed deterministic zero-byte e-commerce architectures (StoreDNA), eliminating database storage overhead for micro-merchants.",
      "Delivered production web products for early-stage clients with 100% on-time milestone completions.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "npm", "Cloudflare", "Vercel"],
  },
  {
    id: "picckr-intern",
    role: "Junior Software Engineer Intern",
    company: "Picckr",
    companyUrl: "https://picckr.com",
    location: "Kaduna, Nigeria",
    period: "Sep 2024 — Dec 2024",
    current: false,
    type: "Internship",
    summary:
      "Contributed to dispatch operations tooling, interactive tracking widgets, and frontend performance optimizations.",
    achievements: [
      "Built the public parcel tracking lookup widget with instant status resolution.",
      "Collaborated on internal rider dispatch management screens and administrative dashboards.",
      "Wrote comprehensive unit tests and type definitions for logistics data models.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Zod"],
  },
  {
    id: "afit-nlp-research",
    role: "NLP Research Contributor",
    company: "Air Force Institute of Technology (AFIT)",
    companyUrl: "https://ideas.repec.org/a/bjf/journl/v10y2025i7p342-354.html",
    location: "Kaduna, Nigeria",
    period: "2023 — 2024",
    current: false,
    type: "Research",
    summary:
      "Conducted research into zero-shot learning pipelines for automated educational text summarization and dynamic question generation.",
    achievements: [
      "Co-authored peer-reviewed paper published in IJRIAS (Vol. 10, Issue 7, pp. 342-354, July 2025).",
      "Constructed a zero-shot model evaluation harness benchmarking ROUGE and BLEU scores across multi-domain texts.",
      "Demonstrated that hybrid pipelines achieve high contextual fidelity without costly domain fine-tuning.",
    ],
    stack: ["Python", "Hugging Face", "PyTorch", "NLP", "Zero-Shot Learning", "ROUGE / BLEU"],
  },
  {
    id: "prior-internships",
    role: "Web & Network Engineering Intern",
    company: "Technology Services & Infrastructure",
    location: "Kaduna, Nigeria",
    period: "2022 — 2023",
    current: false,
    type: "Internship",
    summary:
      "Delivered client website designs, server maintenance, and local area network configuration during initial technical internship years.",
    achievements: [
      "Built responsive corporate websites and landing pages for local commercial clients.",
      "Managed DNS, server firewalls, and network routing for office infrastructure.",
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "PHP", "Linux", "Networking"],
  },
] as const;
