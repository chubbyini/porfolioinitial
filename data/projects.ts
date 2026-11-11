import type { Project } from "@/types";

export const projectsData: readonly Project[] = [
  {
    id: "picckr-b2b",
    slug: "picckr-b2b",
    title: "Picckr B2B Web App",
    tagline: "Enterprise merchant logistics and bulk dispatch command portal",
    description:
      "A high-throughput web application engineered for enterprise merchants to orchestrate high-volume deliveries, bulk multi-stop dispatches, automated invoicing, and live package tracking across Nigeria.",
    category: "client",
    client: "Picckr / Vissionnaire Tech Solution",
    role: "Full-Stack Software Engineer",
    year: "2024 - 2025",
    featured: true,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "WebSockets", "Zod"],
    metrics: [
      { label: "Dispatch Speed", value: "+45% faster" },
      { label: "Daily Volume", value: "Hundreds of parcels" },
      { label: "Crash Rate", value: "< 0.01%" },
    ],
    liveUrl: "https://picckr.com",
    problem:
      "B2B logistics clients faced severe delays when batch-creating orders during peak hours. Legacy interfaces suffered from slow roundtrips, lack of batch validation, and lost state on sudden network dropouts.",
    architecture:
      "Architected an optimistic client state system with client-side batch validation (Zod), offline resilience, and WebSocket feeds that push rider assignment updates with sub-second latency.",
    results:
      "Reduced merchant dispatch creation time by 45%, eliminated order drop-offs during intermittent mobile connections, and scaled to handle peak holiday parcel volumes smoothly.",
  },
  {
    id: "picckr-logistics",
    slug: "picckr-logistics",
    title: "Picckr Logistics Dispatch Platform",
    tagline: "Core fleet dispatch and dual-provider routing engine",
    description:
      "The internal command platform powering operations dispatchers, real-time rider allocation, route optimization, and live delivery status milestones.",
    category: "client",
    client: "Picckr",
    role: "Software Engineer",
    year: "2024 - 2025",
    featured: true,
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Mapbox", "OpenStreetMap"],
    metrics: [
      { label: "Routing Uptime", value: "99.98%" },
      { label: "Dispatch Efficiency", value: "2.4x throughput" },
      { label: "Cost Savings", value: "30% on maps API" },
    ],
    liveUrl: "https://picckr.com",
    problem:
      "Dependency on a single commercial map provider resulted in crippling service disruptions and spiraling API costs when regional routing endpoints faced latency spikes.",
    architecture:
      "Engineered an abstract map adapter interface decoupling UI renderers from map providers, enabling seamless runtime failover between Mapbox and OpenStreetMap tiles with zero UI disruption.",
    results:
      "Published the architectural pattern in a viral Medium article; achieved 99.98% mapping uptime and reduced mapping API overhead by 30%.",
  },
  {
    id: "picckr-home",
    slug: "picckr-home",
    title: "Picckr Official Web Platform",
    tagline: "Public brand portal with instant waybill parcel tracking",
    description:
      "Modern brand and marketing web platform for Picckr showcasing logistics solutions, instant waybill parcel search, pricing calculators, and interactive coverage exploration.",
    category: "client",
    client: "Picckr",
    role: "Web Developer",
    year: "2024",
    featured: true,
    stack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { label: "Lighthouse Score", value: "98 / 100" },
      { label: "Mobile Bounce", value: "-22%" },
    ],
    liveUrl: "https://picckr.com",
    problem:
      "Prospective merchants and delivery recipients on low-bandwidth mobile connections experienced slow landing page loads and cumbersome package lookup flows.",
    architecture:
      "Built with Next.js App Router using streaming Server Components for static storytelling and lightweight client islands for the real-time waybill query widget.",
    results:
      "Delivered a 98+ Google Lighthouse performance score and increased organic web tracking inquiries by 60%.",
  },
  {
    id: "crimson-uplink",
    slug: "crimson-uplink",
    title: "Crimson Uplink",
    tagline: "High-frequency telemetry dashboard and operational incident console",
    description:
      "A mission-critical operations dashboard engineered for streaming server and IoT telemetry, live log aggregation, and real-time team incident dispatch.",
    category: "product",
    role: "Lead Engineer",
    year: "2024",
    featured: true,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Recharts"],
    metrics: [
      { label: "Stream Latency", value: "< 85ms" },
      { label: "FPS", value: "60 FPS rendering" },
    ],
    problem:
      "High-frequency telemetry dashboards frequently cause browser main-thread freezes and garbage-collection pauses during heavy message bursts.",
    architecture:
      "Designed a throttled buffer queue with requestAnimationFrame batched canvas updates, offloading data crunching to dedicated Web Workers.",
    results:
      "Maintained silky 60 FPS performance even during simulated bursts of 1,500 events per second.",
  },
  {
    id: "storedna",
    slug: "storedna",
    title: "StoreDNA / Product Store",
    tagline: "Zero-byte design and deterministic e-commerce architecture",
    description:
      "Innovative headless commerce proof-of-concept demonstrating how mathematical hashing can generate fully branded merchant storefronts with zero database overhead.",
    category: "product",
    role: "Architect & Creator",
    year: "2024",
    featured: true,
    stack: ["Next.js", "TypeScript", "Web Crypto API", "Tailwind CSS"],
    metrics: [
      { label: "DB Storage Cost", value: "$0.00" },
      { label: "Store Generation", value: "Instant (0ms)" },
    ],
    problem:
      "Millions of micro-sellers in emerging markets need online storefronts, but storing dormant database records for millions of inactive stores creates unsustainable cloud costs.",
    architecture:
      "Encoded store themes, catalog matrices, and contact routing into cryptographically signed URL hash fingerprints, rendering dynamic themes entirely client-side without databases.",
    results:
      "Featured on Medium in 'Zero-Byte Design' and 'StoreDNA', sparking vibrant discussions on lightweight architecture.",
  },
  {
    id: "sojourner-mark",
    slug: "sojourner-mark",
    title: "Sojourner Builds Mark (@sojournerbuilds/mark)",
    tagline: "Nautical waymark token, loading veil, and Next.js route veil on npm",
    description:
      "Production-ready nautical compass token and loading veil published on npm. Features clock-style nautical dial, Lagos → Kaduna → Cross River waypoints, and Next.js route tracking.",
    category: "open-source",
    role: "Author & Maintainer",
    year: "2024",
    featured: true,
    stack: ["TypeScript", "CSS Custom Properties", "SVG", "React 18+", "npm"],
    metrics: [
      { label: "Unpacked Size", value: "75.6 kB" },
      { label: "Runtime Dependencies", value: "0" },
      { label: "npm Version", value: "0.1.1" },
    ],
    liveUrl: "https://www.npmjs.com/package/@sojournerbuilds/mark",
    githubUrl: "https://github.com/chubbyini",
    problem:
      "Modern web apps rely on generic spinners that communicate zero personality and provide poor data-aware loading coverage.",
    architecture:
      "Engineered pure SVG geometry driven by scoped CSS variables (--sj-ink, --sj-ship), an idempotent promise tracker (track / trackAll), and streaming boundary hooks (<SojournerRelease />).",
    results:
      "Published on npm with zero runtime dependencies, providing high-polish loading states across web and React apps.",
  },
  {
    id: "cinemax",
    slug: "cinemax",
    title: "Cinemax",
    tagline: "Cinema ticket booking and discovery interface",
    description:
      "A cinematic exploration app featuring interactive seating maps, trailer previews, genre filtering, and instant seat reservations.",
    category: "product",
    role: "Frontend Engineer",
    year: "2024",
    featured: false,
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "TMDB API"],
    problem:
      "Movie reservation platforms are notoriously clunky on mobile devices with tiny seat targets and disruptive page refreshes.",
    architecture:
      "Built a touch-friendly SVG seat matrix with zoom/pan gesture controls and optimistic seat locking.",
    results:
      "Achieved sub-second screen transitions and frictionless seat selection on mobile viewports.",
  },
  {
    id: "stock-trader",
    slug: "stock-trader",
    title: "Stock Trader App",
    tagline: "Paper trading platform and portfolio analytics simulator",
    description:
      "Interactive financial platform allowing users to simulate equity trading with real-time candlestick charts, stop-loss orders, and asset allocation breakdowns.",
    category: "product",
    role: "Full-Stack Developer",
    year: "2024",
    featured: false,
    stack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Financial APIs"],
    problem:
      "Aspiring market participants needed a realistic paper trading interface that replicates live market depth and execution mechanics without complexity.",
    architecture:
      "Created a deterministic order-matching simulation engine with local storage persistence and automated portfolio recalculations.",
    results:
      "Delivered a fluid trading console with responsive order execution and portfolio health metrics.",
  },
  {
    id: "mern-thinkboard",
    slug: "mern-thinkboard",
    title: "MERN Thinkboard",
    tagline: "Collaborative whiteboard and markdown canvas for engineering teams",
    description:
      "Full-stack collaborative workspace allowing engineering teams to organize architectural ideas, pin markdown notes, and sketch diagrams in real time.",
    category: "open-source",
    role: "Creator",
    year: "2023",
    featured: false,
    stack: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://github.com/chubbyini",
    githubUrl: "https://github.com/chubbyini",
    problem:
      "Lightweight teams needed an unencumbered brainstorming tool that didn't require costly subscriptions or heavy enterprise software.",
    architecture:
      "Built with clean MERN stack architecture featuring resilient Socket.io room broadcasting and optimistic markdown card placement.",
    results:
      "Shared openly with the developer community as a reliable open-source starter for collaborative tools.",
  },
] as const;
