import type { StudioService } from "@/types";

export const servicesData: readonly StudioService[] = [
  {
    id: "web-applications",
    title: "Full-Stack Web Applications",
    tagline: "High-craft, production-grade web software tailored for scale",
    description:
      "End-to-end development of modern web applications using Next.js App Router, TypeScript, and clean modular backends. Built with zero-compromise performance, accessible UX, and strict type safety.",
    deliverables: [
      "Custom responsive web application (mobile-first)",
      "Strict TypeScript codebase with full type contracts",
      "API integrations & relational database setup",
      "Core Web Vitals 95+ performance optimization",
    ],
    idealFor: "Startups, growth companies, and businesses launching modern digital products.",
    icon: "Layout",
  },
  {
    id: "logistics-dispatch",
    title: "Logistics & Dispatch Systems",
    tagline: "Mission-critical operations portals and real-time dispatch consoles",
    description:
      "Specialized engineering for logistics platforms, delivery services, and field operations. Includes live map tracking, rider management, multi-provider map failovers, and offline synchronization.",
    deliverables: [
      "Real-time dispatch board with live order queues",
      "Dual-provider map routing (Mapbox + OpenStreetMap)",
      "WebSocket-driven order lifecycle tracking",
      "Automated manifest generation & merchant portals",
    ],
    idealFor: "Logistics companies, delivery fleets, and on-demand field service operators.",
    icon: "Navigation",
  },
  {
    id: "ai-nlp-integration",
    title: "Applied AI & NLP Pipelines",
    tagline: "Zero-shot content intelligence, summarization, and LLM systems",
    description:
      "Transforming messy unstructured text into actionable business intelligence. Leveraging zero-shot learning frameworks and transformer pipelines to summarize text, extract entities, and generate evaluative queries without expensive model fine-tuning.",
    deliverables: [
      "Zero-shot automated text summarization engine",
      "Context-aware question & answer generation pipeline",
      "LLM agent orchestration & deterministic guardrails",
      "Comprehensive accuracy & factual consistency benchmarks",
    ],
    idealFor: "EdTech platforms, research institutions, and enterprises with heavy document workflows.",
    icon: "Cpu",
  },
  {
    id: "performance-architecture",
    title: "Performance Audits & Zero-Byte Architecture",
    tagline: "Lighthouse 95+ optimization, fluid micro-interactions, and lean systems",
    description:
      "Deep audits of existing React/Next.js codebases to eradicate memory leaks, eliminate render bottlenecks, streamline data payloads, and implement Emil Kowalski-grade interaction polish.",
    deliverables: [
      "Full performance and Core Web Vitals audit",
      "Bundle size compression & code-splitting architecture",
      "Emil Kowalski tactile motion & custom bezier curve integration",
      "Zero-database / stateless architectural refactoring",
    ],
    idealFor: "Teams suffering from slow dashboards, high cloud infrastructure costs, or clunky user interfaces.",
    icon: "Gauge",
  },
] as const;
