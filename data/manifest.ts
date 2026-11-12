/**
 * Official Curriculum Vitae / Service Manifest data for Inioluwa Daniel Osibajo.
 * Transcribed verbatim from official 2026 Curriculum Vitae.
 */

export interface ManifestExperience {
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly location: string;
  readonly type: string;
  readonly bullets: readonly string[];
}

export interface ManifestResearch {
  readonly title: string;
  readonly journal: string;
  readonly date: string;
  readonly description: string;
  readonly metrics: readonly { readonly label: string; readonly value: string }[];
  readonly highlights: readonly { readonly label: string; readonly value: string }[];
}

export interface ManifestProduct {
  readonly title: string;
  readonly subtitle: string;
  readonly tags: readonly string[];
  readonly description: string;
}

export interface ManifestEducation {
  readonly institution: string;
  readonly degree: string;
  readonly honors?: string;
  readonly date: string;
  readonly details?: string;
}

export interface ManifestData {
  readonly header: {
    readonly name: string;
    readonly title: string;
    readonly degrees: string;
    readonly location: string;
    readonly email: string;
    readonly phone: string;
    readonly links: readonly { readonly label: string; readonly url: string }[];
  };
  readonly executiveSummary: string;
  readonly technicalSkills: readonly {
    readonly category: string;
    readonly skills: string;
  }[];
  readonly experiences: readonly ManifestExperience[];
  readonly research: ManifestResearch;
  readonly products: readonly ManifestProduct[];
  readonly writing: readonly {
    readonly title: string;
    readonly platform: string;
    readonly url: string;
  }[];
  readonly educationAndService: readonly ManifestEducation[];
}

export const manifestData: ManifestData = {
  header: {
    name: "INIOLUWA DANIEL OSIBAJO",
    title: "Software Engineer & Systems Architect",
    degrees: "Computer Science B.Sc. (Hons)",
    location: "Lagos, Nigeria",
    email: "inioluwaosibajo@gmail.com",
    phone: "+234 907 123 0347",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/inioluwa-osibajo-b23531238/" },
      { label: "GitHub", url: "https://github.com/chubbyini" },
      { label: "Medium", url: "https://medium.com/@inioluwaosibajo" },
    ],
  },
  executiveSummary:
    "Software Engineer and published Computer Science researcher specializing in React, Next.js, TypeScript, and Node.js. Proven track record of architecting the operational backbone for logistics networks—building high-density B2B administrative portals, automated driver assignment systems, and auditable financial reconciliation dashboards. Driven by systems architecture, operational scaling, and AI research, with a commitment to clean code, modular permissions, and project-based technical mentorship.",
  technicalSkills: [
    {
      category: "Languages",
      skills: "TypeScript, JavaScript (ES6+), Python, SQL, HTML5, CSS3",
    },
    {
      category: "Frontend & State",
      skills: "React 19, Next.js (App Router), Tailwind CSS, shadcn/ui, TanStack Query/Table, Zustand",
    },
    {
      category: "Backend & Realtime",
      skills: "Node.js, Express.js, RESTful APIs, WebSockets (Socket.io), Mapbox Geocoding API (v5/v6)",
    },
    {
      category: "AI & NLP Research",
      skills: "Hugging Face Transformers (BERT, BART, T5), SpaCy, NLTK, Sentence Transformers, TextRank",
    },
    {
      category: "Architecture & Security",
      skills: "Dynamic RBAC Permission Matrices, Composable Filters, Server-Side Pagination, Audit Trails",
    },
    {
      category: "Developer Tooling",
      skills: "Git, GitHub, Cypress (E2E), Vite, Vercel, Cloudflare, WordPress",
    },
  ],
  experiences: [
    {
      role: "Junior Software Engineer",
      company: "PicckR",
      period: "Jun 2026 – Present",
      location: "Lagos State, Nigeria (Remote)",
      type: "Full-time",
      bullets: [
        "Architect and maintain the ops layer behind PicckR’s logistics network, engineering administrative tools for end-to-end booking lifecycles, manual/automated rider assignments, pricing configuration, and geospatial zoning.",
        "Engineered high-density transaction dashboards featuring previous-balance-to-ledger-balance audit trails, enabling finance teams to trace wallet mutations and reconcile accounts with zero support escalations.",
        "Refactored Role-Based Access Control (RBAC) into a dynamic row-and-column permission matrix, eliminating brittle conditional rendering and centralizing route-level security for admin roles.",
        "Integrated real-time WebSockets for live rider tracking and executed the migration of Mapbox Geocoding API from v5 to v6 across web applications, achieving a 95% QA Go-Live pass rate.",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "PicckR",
      period: "Dec 2025 – Jun 2026",
      location: "Lagos State, Nigeria (Remote)",
      type: "Internship",
      bullets: [
        "Developed core frontend modules for the enterprise logistics portal, replacing static client lists with server-side assignment search and paginated data grids.",
        "Authored comprehensive API documentation and collaborated across cross-functional engineering teams to standardize UI state machines and resolve production edge cases.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Carteefy",
      period: "Mar 2025 – Oct 2026",
      location: "Lagos State, Nigeria (Hybrid)",
      type: "Internship",
      bullets: [
        "Engineered mobile-first e-commerce and affiliate storefront infrastructure connecting digital product vendors with content creators and influencers.",
        "Designed responsive catalog browsing interfaces, tracking link generation workflows, and seller performance dashboards optimized for mobile web users.",
      ],
    },
    {
      role: "Web Designer & Frontend Intern",
      company: "STOCBASE",
      period: "Nov 2025 – Sep 2026",
      location: "Lagos State, Nigeria (Remote)",
      type: "Seasonal",
      bullets: [
        "Built modular web storefronts, interactive service portfolios, and client landing pages focusing on clean component breakdown and fast page render times.",
      ],
    },
    {
      role: "Web Designer Intern",
      company: "Ayomih",
      period: "Aug 2024 – Nov 2024",
      location: "Lagos State, Nigeria (Hybrid)",
      type: "Internship",
      bullets: [
        "Designed conversion-focused WordPress e-commerce websites and custom sales analytics dashboards, providing business owners with actionable revenue and lead conversion insights.",
      ],
    },
    {
      role: "Network Intern",
      company: "NNPC Multispecialty Hospital (NMSH)",
      period: "Aug 2023 – Feb 2024",
      location: "Lagos State, Nigeria (On-site)",
      type: "Internship",
      bullets: [
        "Maintained enterprise LAN/WAN network infrastructure, configured switch/router routing tables, and managed endpoint connectivity across clinical departments.",
      ],
    },
  ],
  research: {
    title: "Hybrid Zero-Shot NLP Pipeline for Text Summarization and Question Generation",
    journal: "International Journal of Research and Innovation in Applied Science (IJRIAS)",
    date: "Published Aug 2, 2025",
    description:
      "Architected a zero-shot NLP pipeline combining BERT (with TextRank graph ranking) for extractive summarization, BART for abstractive summarization, and T5 for contextual Multiple-Choice Question (MCQ) generation. Designed specifically for resource-constrained environments to execute on a single 12 GB GPU without model fine-tuning.",
    metrics: [
      { label: "BERTScore F1", value: "0.87" },
      { label: "ROUGE-1/L", value: "0.54" },
      { label: "METEOR", value: "0.35" },
      { label: "BLEU", value: "0.20" },
    ],
    highlights: [
      { label: "Human MCQ Relevance", value: "80% (Outperforming GPT-3)" },
      { label: "Student Study", value: "85% Proficiency (>60%)" },
    ],
  },
  products: [
    {
      title: "Shopa",
      subtitle: "Mobile-First WhatsApp Commerce Infrastructure",
      tags: ["TypeScript", "Next.js", "QR Generation", "Realtime Analytics"],
      description:
        "Engineered e-commerce infrastructure tailored for Nigeria’s informal markets, enabling merchants to generate WhatsApp storefronts, dynamic QR codes, and sales analytics directly from mobile devices.",
    },
    {
      title: "Crimson Uplink",
      subtitle: "Automated NLP Content Engine",
      tags: ["Python", "Hugging Face", "NLP Signal Scoring", "Multi-Platform Publishing"],
      description:
        "Built an automated content pipeline that ingests technical signals, scores relevance using zero-shot NLP models, and automatically syndicates approved content across publishing channels.",
    },
    {
      title: "The Khal System",
      subtitle: "Project-Based Pedagogical Framework",
      tags: ["Engineering Mentorship", "System Architecture"],
      description:
        "Created a developer curriculum designed to teach engineers system fundamentals beneath abstraction layers and position AI as an aligned research collaborator rather than a shortcut.",
    },
  ],
  writing: [
    {
      title: "The WhatsApp Economy: Re-Engineering E-Commerce for Nigeria's Informal Markets",
      platform: "Medium",
      url: "https://medium.com/@inioluwaosibajo/the-whatsapp-economy-re-engineering-e-commerce-for-nigerias-informal-markets",
    },
    {
      title: "The Permission Matrix: Rows, Columns, and the Cheat Code for Admin Roles",
      platform: "Medium",
      url: "https://medium.com/@inioluwaosibajo/the-permission-matrix-rows-columns-and-the-cheat-code-for-admin-roles",
    },
  ],
  educationAndService: [
    {
      institution: "Air Force Institute of Technology (AFIT)",
      degree: "Bachelor of Science (B.Sc.) in Computer Science",
      honors: "Second Class Upper Division",
      date: "Graduated Sept 9, 2025",
    },
    {
      institution: "National Youth Service Corps (NYSC)",
      degree: "Corps Member & Secondary Educator",
      honors: "Economics & Business Studies",
      date: "2026",
    },
  ],
};
