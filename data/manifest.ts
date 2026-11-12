/**
 * Updated Curriculum Vitae / Service Manifest data for Inioluwa Daniel Osibajo.
 * Transcribed verbatim from the latest 2026 concise CV.
 */

export interface ManifestExperience {
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly location: string;
  readonly bullets: readonly string[];
  readonly stack?: readonly string[];
}

export interface ManifestProject {
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly stack: readonly string[];
}

export interface ManifestEducation {
  readonly title: string;
  readonly institution: string;
  readonly date: string;
  readonly details?: string;
  readonly bullets?: readonly string[];
}

export interface ManifestData {
  readonly header: {
    readonly name: string;
    readonly title: string;
    readonly location: string;
    readonly email: string;
    readonly phone: string;
    readonly github: string;
    readonly linkedin: string;
  };
  readonly summary: string;
  readonly experiences: readonly ManifestExperience[];
  readonly projects: readonly ManifestProject[];
  readonly writing: readonly {
    readonly title: string;
    readonly platform: string;
    readonly url: string;
  }[];
  readonly education: readonly ManifestEducation[];
  readonly skills: {
    readonly languages: string;
    readonly frontend: string;
    readonly backend: string;
    readonly architecture: string;
    readonly tooling: string;
    readonly nlp: string;
  };
}

export const manifestData: ManifestData = {
  header: {
    name: "Inioluwa Daniel Osibajo",
    title: "Software Engineer, Frontend and Full-Stack",
    location: "Lagos, Nigeria",
    email: "inioluwaosibajo@gmail.com",
    phone: "+234 907 123 0347",
    github: "https://github.com/chubbyini",
    linkedin: "https://www.linkedin.com/in/inioluwa-osibajo-b02231235/",
  },
  summary:
    "Software engineer building admin platforms, dashboards and mobile-first commerce products with React, Next.js, TypeScript and Node.js. Experience with real-time features, server-side data grids, access control and geospatial APIs. B.Sc. Computer Science, with a peer-reviewed NLP publication and technical writing on Medium.",
  experiences: [
    {
      role: "Junior Software Engineer",
      company: "PicckR",
      location: "Lagos, Nigeria (Remote)",
      period: "Jun 2026 – Present",
      bullets: [
        "Maintain the admin portal behind a logistics network: booking lifecycles, manual and automated rider assignment, pricing configuration and geospatial zoning.",
        "Built transaction dashboards with previous-balance to ledger-balance audit trails, so finance teams can trace wallet mutations and reconcile accounts.",
        "Refactored role-based access control into a dynamic row-and-column permission matrix, replacing brittle conditional rendering and centralizing route-level access.",
        "Integrated WebSockets for live rider tracking and migrated the Mapbox Geocoding API from v5 to v6 across web apps, with a 95% QA pass rate at go-live.",
      ],
      stack: ["React", "Next.js", "TypeScript", "WebSockets", "Mapbox"],
    },
    {
      role: "Software Engineering Intern",
      company: "PicckR",
      location: "Lagos, Nigeria (Remote)",
      period: "Dec 2025 – Jun 2026",
      bullets: [
        "Developed frontend modules for the logistics portal, replacing static client lists with server-side search and paginated data grids.",
        "Wrote API documentation and worked with cross-functional engineers to standardize UI state machines and fix production edge cases.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Carteefy",
      location: "Lagos, Nigeria (Hybrid)",
      period: "Mar 2025 – Oct 2026",
      bullets: [
        "Built mobile-first e-commerce and affiliate storefront infrastructure connecting digital product vendors with content creators.",
        "Designed catalog browsing, tracking-link generation and seller performance dashboards for mobile web.",
      ],
    },
    {
      role: "Web Designer and Frontend Intern",
      company: "STOCBASE",
      location: "Lagos, Nigeria (Remote, seasonal)",
      period: "Nov 2025 – Sep 2026",
      bullets: [
        "Built modular web storefronts, service portfolios and client landing pages with clean component structure and fast renders.",
      ],
    },
    {
      role: "Web Designer Intern",
      company: "Ayomih",
      location: "Lagos, Nigeria (Hybrid)",
      period: "Aug 2024 – Nov 2024",
      bullets: [
        "Built WordPress e-commerce sites and sales analytics dashboards showing revenue and lead conversion.",
      ],
    },
  ],
  projects: [
    {
      title: "Shopa",
      subtitle: "WhatsApp Commerce Platform",
      description:
        "Built commerce infrastructure for informal markets: merchants generate WhatsApp storefronts, dynamic QR codes and sales analytics from a phone.",
      stack: ["TypeScript", "Next.js", "QR generation", "realtime analytics"],
    },
    {
      title: "Crimson Uplink",
      subtitle: "Automated Content Engine",
      description:
        "Built a pipeline that ingests technical signals, scores relevance with zero-shot NLP models and publishes approved content across channels.",
      stack: ["Python", "Hugging Face"],
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
  education: [
    {
      title: "B.Sc. Computer Science, Second Class Upper Division",
      institution: "Air Force Institute of Technology (AFIT), Kaduna, Nigeria",
      date: "Graduated Sep 2025",
    },
    {
      title: "National Youth Service Corps (NYSC)",
      institution: "Corps Member and Secondary Educator, Economics and Business Studies",
      date: "2026",
    },
    {
      title: "Hybrid Zero-Shot NLP Pipeline for Text Summarization and Question Generation",
      institution:
        "International Journal of Research and Innovation in Applied Science (IJRIAS), peer-reviewed",
      date: "Aug 2025",
      bullets: [
        "Built a BERT (TextRank), BART and T5 pipeline that runs on a single 12 GB GPU without fine-tuning, reaching 0.87 BERTScore F1 and 80% human-rated MCQ relevance.",
      ],
    },
  ],
  skills: {
    languages: "TypeScript, JavaScript (ES6+), Python, SQL, HTML5, CSS3",
    frontend: "React 19, Next.js (App Router), Tailwind CSS, shadcn/ui, TanStack Query, TanStack Table, Zustand",
    backend: "Node.js, Express.js, REST APIs, WebSockets (Socket.io), Mapbox Geocoding API",
    architecture: "Role-based access control (RBAC), audit trails, server-side pagination, composable filters",
    tooling: "Cypress (E2E), Git, GitHub, Vite, Vercel, Cloudflare, WordPress",
    nlp: "Hugging Face Transformers (BERT, BART, T5), SpaCy, NLTK, Sentence Transformers, TextRank",
  },
};
