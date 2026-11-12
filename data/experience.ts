import type { ExperienceItem } from "@/types";

export const experienceData: readonly ExperienceItem[] = [
  {
    id: "picckr",
    role: "Junior Software Engineer",
    company: "PicckR",
    parentCompany: "Subsidiary of Vissionnaire Tech Solution Ltd",
    companyUrl: "https://picckr.com",
    location: "Lagos State, Nigeria (Remote)",
    period: "Jun 2026 — Present",
    current: true,
    type: "Full-time",
    summary:
      "Engineering core web features, client dashboards, and dispatch platforms at PicckR (subsidiary of Vissionnaire Tech Solution Ltd), focusing on frontend architecture, responsive merchant portals, and resilient logistics interfaces.",
    achievements: [
      "Architecting interactive web applications, client dashboards, and high-volume merchant order creation flows.",
      "Delivering production-grade logistics platforms with focus on responsiveness, accessible navigation, and fast page loads.",
      "Collaborating closely with cross-functional product and engineering teams under tight timelines.",
      "Engineering resilient frontend state management with strict TypeScript typings and clean tactile micro-interactions.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Map Services", "Zod", "WebSockets"],
  },
  {
    id: "sojourner",
    role: "Creator & Founder",
    company: "Sojourner Builds",
    companyUrl: "https://www.npmjs.com/package/@sojournerbuilds/mark",
    location: "Independent / Open Source",
    period: "2024 — Present",
    current: true,
    type: "Studio / Agency",
    summary:
      "Personal development initiative and open-source lab, authoring reusable developer tools, UI tokens, and exploratory web applications.",
    achievements: [
      "Created and published @sojournerbuilds/mark on npm — a zero-dependency SVG waymark token and Next.js route veil.",
      "Built experimental web apps and prototypes exploring tactile micro-interactions and zero-byte architectures.",
    ],
    stack: ["TypeScript", "Next.js", "SVG Engineering", "npm", "Tailwind CSS"],
  },
  {
    id: "picckr-intern",
    role: "Software Engineering Intern",
    company: "PicckR",
    companyUrl: "https://picckr.com",
    location: "Lagos, Nigeria",
    period: "Dec 2025 — Jun 2026",
    current: false,
    type: "Internship",
    summary:
      "Contributed to dispatch operations tooling, interactive tracking widgets, and frontend performance optimizations.",
    achievements: [
      "Built public tracking lookup components with instant status resolution.",
      "Worked with senior engineers on internal administrative screens and parcel management interfaces.",
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
  },
  {
    id: "carteefy-intern",
    role: "Software Intern",
    company: "carteefy",
    location: "Lagos, Nigeria (Hybrid)",
    period: "Mar 2025 — Oct 2026",
    current: false,
    type: "Internship",
    summary:
      "Supported web application development and responsive interface implementation across client-facing web projects.",
    achievements: [
      "Implemented modular UI components with JavaScript and responsive CSS.",
      "Collaborated on feature bug fixes and cross-browser testing across desktop and mobile viewports.",
    ],
    stack: ["JavaScript", "HTML/CSS", "Problem Solving", "Git"],
  },
  {
    id: "stocbase-intern",
    role: "Web Designer Intern",
    company: "stocbase",
    location: "Lagos, Nigeria (Remote)",
    period: "Nov 2025 — Sep 2026",
    current: false,
    type: "Internship",
    summary:
      "Designed and refined seasonal web layouts, marketing pages, and responsive UI components.",
    achievements: [
      "Created clean website wireframes and implemented mobile-first responsive web pages.",
      "Optimized assets and page speed for marketing campaigns.",
    ],
    stack: ["Web Design", "HTML/CSS", "Responsive Layouts"],
  },
  {
    id: "ayomih-intern",
    role: "Web Designer Intern",
    company: "Ayomih",
    location: "Lagos, Nigeria (Hybrid)",
    period: "Aug 2024 — Nov 2024",
    current: false,
    type: "Internship",
    summary:
      "Designed functional web portals to convert leads for sales and built data dashboards for users to easily monitor sales metrics and gain actionable insights.",
    achievements: [
      "Built conversion-focused product landing pages and lead capture funnels.",
      "Created clear dashboards enabling non-technical stakeholders to inspect sales performance at a glance.",
    ],
    stack: ["WordPress", "JavaScript", "Lead Generation", "UI Design"],
  },
  {
    id: "nnpc-hospital-intern",
    role: "Network & IT Intern",
    company: "NNPC Multispecialty Hospital (NMSH)",
    location: "Lagos, Nigeria (On-site)",
    period: "Aug 2023 — Feb 2024",
    current: false,
    type: "Internship",
    summary:
      "Provided enterprise IT networking, infrastructure diagnostics, and hardware/software problem-solving in a healthcare facility.",
    achievements: [
      "Maintained network switches, workstation routing, and intranet connectivity across hospital departments.",
      "Diagnosed and resolved critical hardware and network connectivity issues with zero hospital downtime.",
    ],
    stack: ["IT Networking", "Hardware Troubleshooting", "Network Diagnostics"],
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
      "Conducted academic research into zero-shot learning pipelines for automated educational text summarization and question generation, culminating in a published paper in IJRIAS.",
    achievements: [
      "Formulated a dual-stage zero-shot pipeline combining transformer summarization with question generation.",
      "Published in the International Journal of Research and Innovation in Applied Science (IJRIAS), Vol. 10, Issue 7, July 2025.",
    ],
    stack: ["Python", "Hugging Face", "PyTorch", "NLP", "ROUGE"],
  },
] as const;
