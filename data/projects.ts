import type { Project } from "@/types";

export const projectsData: readonly Project[] = [
  {
    id: "picckr-b2b",
    slug: "picckr-b2b",
    title: "PicckR Business B2B Web App",
    tagline: "Enterprise merchant logistics and bulk dispatch command portal",
    description:
      "A high-throughput web application engineered for enterprise merchants to orchestrate high-volume deliveries, bulk multi-stop dispatches, automated invoicing, and live package tracking across Nigeria.",
    category: "client",
    client: "PicckR / Vissionnaire Tech Solution",
    role: "Software Engineer",
    year: "2024 — Present",
    featured: true,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Zod", "WebSockets"],
    metrics: [
      { label: "Dispatch Speed", value: "+45% faster" },
      { label: "Order Volume", value: "Hundreds daily" },
      { label: "Crash Rate", value: "< 0.01%" },
    ],
    liveUrl: "https://business.picckr.com/",
    image: "/projects/picckr-b2b.png",
    problem:
      "B2B logistics clients faced severe delays when batch-creating orders during peak hours. Legacy interfaces suffered from slow roundtrips, lack of batch validation, and lost state on sudden network dropouts.",
    architecture:
      "Architected an optimistic client state system with client-side batch validation (Zod), offline resilience, and WebSocket feeds that push rider assignment updates with sub-second latency.",
    results:
      "Reduced merchant dispatch creation time by 45%, eliminated order drop-offs during intermittent mobile connections, and scaled to handle peak parcel volumes smoothly.",
  },
  {
    id: "picckr-logistics",
    slug: "picckr-logistics",
    title: "PicckR Logistics Partner Platform",
    tagline: "Core fleet partner dispatch and operations management platform",
    description:
      "The dedicated command platform powering operations dispatchers, delivery partners, real-time rider allocation, route optimization, and live delivery status milestones.",
    category: "client",
    client: "PicckR",
    role: "Software Engineer",
    year: "2024 — Present",
    featured: true,
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Map Services", "REST APIs"],
    metrics: [
      { label: "Dispatch Throughput", value: "2.4x increase" },
      { label: "Live Tracking", value: "Sub-second updates" },
      { label: "Partner Uptime", value: "99.98%" },
    ],
    liveUrl: "https://partners.picckr.com/",
    image: "/projects/picckr-logistics.png",
    problem:
      "Dispatch partners needed a unified, responsive interface to manage rider capacity, assign incoming merchant orders, and monitor transit routes in real time without screen lag.",
    architecture:
      "Built a modular React operations dashboard featuring live order queues, map visualization, responsive mobile drawer navigation, and optimistic status updates.",
    results:
      "Delivered a resilient dispatch tool used daily by PicckR logistics partners to orchestrate city-wide parcel delivery.",
  },
  {
    id: "crimson-uplink",
    slug: "crimson-uplink",
    title: "Crimson Uplink",
    tagline: "High-frequency telemetry dashboard and systems communications console",
    description:
      "A dark-mode telemetry and communications console designed for real-time channel feeds, mission status reporting, and diagnostic signal streams.",
    category: "product",
    role: "Frontend Engineer & UI Designer",
    year: "2024",
    featured: true,
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { label: "Frame Rate", value: "Solid 60fps" },
      { label: "Lighthouse Score", value: "98/100" },
    ],
    liveUrl: "https://crimsonuplink.vercel.app/",
    githubUrl: "https://github.com/chubbyini",
    image: "/projects/crimson-uplink.png",
    problem:
      "Creating an immersive tactical UI with high data density that remains readable, accessible, and fast on all viewport sizes.",
    architecture:
      "Designed with a focused palette, modular HUD cards, hardware-accelerated SVG signal gauges, and zero layout shift on live data stream updates.",
    results:
      "Shipped a lightning-fast responsive telemetry showcase demonstrating complex frontend micro-interactions and high-craft UI.",
  },
  {
    id: "shopa",
    slug: "shopa",
    title: "Shopa Modern Store",
    tagline: "Responsive e-commerce storefront with dynamic cart and catalog browsing",
    description:
      "A fast, modern e-commerce application featuring category filtering, instant product search, dynamic cart drawer, and seamless mobile checkout flows.",
    category: "product",
    role: "Full-Stack Developer",
    year: "2024",
    featured: true,
    stack: ["React", "TypeScript", "Tailwind CSS", "State Management", "Vercel"],
    metrics: [
      { label: "Mobile Speed", value: "Instant TTI" },
      { label: "Cart Persistence", value: "LocalSync" },
    ],
    liveUrl: "https://shopa-gamma.vercel.app/",
    githubUrl: "https://github.com/chubbyini",
    image: "/projects/shopa.png",
    problem:
      "Traditional web storefronts are often bogged down by heavy third-party scripts, laggy cart drawers, and non-responsive product grids.",
    architecture:
      "Built with component-level lazy loading, persistent client cart state, snappy filter transitions, and responsive grid layouts.",
    results:
      "Delivered an e-commerce storefront prototype with sub-second page transitions and smooth cart interactions.",
  },
  {
    id: "nature-nurture",
    slug: "nature-nurture",
    title: "Nature & Nurture NGO Platform",
    tagline: "Advocacy and community impact platform for an environmental NGO",
    description:
      "A clean, empathetic web portal built for Nature & Nurture NGO to showcase environmental conservation programs, community outreach initiatives, and donor engagement.",
    category: "client",
    client: "Nature & Nurture Organization",
    role: "Web Developer & Designer",
    year: "2024",
    featured: true,
    stack: ["JavaScript", "HTML5", "CSS3 / Tailwind", "Netlify", "Responsive Layouts"],
    metrics: [
      { label: "Accessibility", value: "WCAG AA" },
      { label: "Page Weight", value: "< 500kB" },
    ],
    liveUrl: "https://naturennurture.netlify.app/",
    image: "/projects/nature-nurture.png",
    problem:
      "The organization required an accessible, credible web presence to present initiatives to international donors and mobilize local community volunteers.",
    architecture:
      "Constructed a high-contrast editorial layout with accessible typography, responsive imagery, and clear call-to-action funnels for volunteer recruitment.",
    results:
      "Empowered the NGO to showcase community initiatives with a mobile-friendly portal that loads fast even on 3G connections.",
  },
  {
    id: "showroom-cms",
    slug: "showroom-cms",
    title: "Product Showroom with Dynamic CMS",
    tagline: "Interactive product display portal connected to a custom CMS backend",
    description:
      "A digital showroom platform designed to highlight high-value products with dynamic specifications, multi-angle media galleries, and live catalog updates.",
    category: "client",
    role: "Full-Stack Developer",
    year: "2024",
    featured: false,
    stack: ["React", "JavaScript", "REST APIs", "Tailwind CSS", "Netlify"],
    metrics: [
      { label: "Catalog Rendering", value: "Dynamic REST" },
      { label: "Media Handling", value: "Responsive lazy-load" },
    ],
    liveUrl: "https://chipper-quokka-a37295.netlify.app/",
    image: "/projects/showroom-cms.png",
    problem:
      "Sales teams needed a lightweight online showroom that non-technical managers could update on the fly without touching code or redeploying.",
    architecture:
      "Decoupled the customer-facing showroom frontend from an administrative CMS backend via structured JSON APIs.",
    results:
      "Enabled instant product catalog updates and smooth multi-category showroom browsing.",
  },
  {
    id: "showroom-admin",
    slug: "showroom-admin",
    title: "Showroom CMS Admin App",
    tagline: "Administrative content management dashboard for catalog managers",
    description:
      "The authenticated backend management console for the showroom platform, enabling administrators to create, edit, reorder, and remove product listings in real time (default login: admin).",
    category: "product",
    role: "Frontend Engineer",
    year: "2024",
    featured: false,
    stack: ["React", "JavaScript", "REST APIs", "Authentication", "Tailwind CSS"],
    metrics: [
      { label: "Admin Auth", value: "Session / Password Gate" },
      { label: "CRUD Operations", value: "Instant JSON update" },
    ],
    liveUrl: "https://boisterous-smakager-7e0169.netlify.app/",
    image: "/projects/showroom-admin.png",
    problem:
      "Catalog administrators needed an intuitive interface to manage inventory and toggle featured product statuses without complex database queries.",
    architecture:
      "Engineered an administrative dashboard with form validation, image URL linking, inventory status controls, and session authentication.",
    results:
      "Allowed non-technical staff to manage product showcases seamlessly with zero training required.",
  },
  {
    id: "ikom-chat",
    slug: "ikom-chat",
    title: "Ikom Real-Time Chat App",
    tagline: "Real-time messaging application with live WebSocket channels",
    description:
      "A full-stack messaging platform featuring instant multi-user messaging, online user status indicators, chat rooms, and persistent message logs.",
    category: "product",
    role: "Full-Stack Developer",
    year: "2024",
    featured: true,
    stack: ["Node.js", "Express", "Socket.io", "React", "Render"],
    metrics: [
      { label: "Latency", value: "< 100ms" },
      { label: "Protocols", value: "WebSockets + HTTP" },
    ],
    liveUrl: "https://ikomrealtimechatapps.onrender.com",
    githubUrl: "https://github.com/chubbyini",
    image: "/projects/ikom-chat.png",
    problem:
      "Building a reliable real-time communication interface with instant message synchronization and automatic reconnection on dropped connections.",
    architecture:
      "Implemented bidirectional WebSocket event emitters with Socket.io on Node.js, tied to a responsive chat UI with scroll-to-latest pinning.",
    results:
      "Delivered a working real-time chat app deployed on Render with live messaging and typing status.",
  },
  {
    id: "zustand-store",
    slug: "zustand-store",
    title: "Zustand State CRUD Store",
    tagline: "Predictable client-side state architecture and optimistic CRUD operations",
    description:
      "A focused application demonstrating state management patterns with Zustand: immutable state transitions, optimistic local updates, persistent cache, and category filtering.",
    category: "product",
    role: "Frontend Engineer",
    year: "2024",
    featured: false,
    stack: ["React", "Zustand", "TypeScript", "Tailwind CSS", "Render"],
    metrics: [
      { label: "Bundle Overhead", value: "< 3kB Zustand" },
      { label: "State Sync", value: "Optimistic" },
    ],
    liveUrl: "https://zustandstatescrudproductsstore.onrender.com",
    githubUrl: "https://github.com/chubbyini",
    image: "/projects/zustand-store.png",
    problem:
      "Complex Redux boilerplates often introduce unnecessary bundle bloat and friction for medium-sized web applications.",
    architecture:
      "Utilized Zustand's lightweight store pattern with custom selectors, persistent middleware, and decoupled UI actions for zero unnecessary re-renders.",
    results:
      "Demonstrated clean state architecture with instant UI feedback and predictable state mutation.",
  },
  {
    id: "thinkboard",
    slug: "thinkboard",
    title: "Full-Stack Thinkboard",
    tagline: "Collaborative ideation and technical thought organization board",
    description:
      "A full-stack web application where developers and product teams capture, categorize, and prioritize engineering ideas, architecture proposals, and task notes.",
    category: "product",
    role: "Full-Stack Developer",
    year: "2024",
    featured: false,
    stack: ["MongoDB", "Express", "React", "Node.js", "Render"],
    metrics: [
      { label: "Stack", value: "MERN Full-Stack" },
      { label: "Architecture", value: "RESTful CRUD" },
    ],
    liveUrl: "https://fullstackthinkboard.onrender.com",
    githubUrl: "https://github.com/chubbyini",
    image: "/projects/thinkboard.png",
    problem:
      "Teams often lose technical notes and sprint ideas scattered across disparate messaging channels.",
    architecture:
      "Created a full MERN architecture with Express API endpoints, MongoDB document persistence, and an interactive grid interface.",
    results:
      "Shipped a deployed collaborative board on Render providing intuitive technical ideation capture.",
  },
  {
    id: "codebooks-api",
    slug: "codebooks-api",
    title: "Codebooks Mock Server API",
    tagline: "Mock REST API backend for frontend prototyping and automated testing",
    description:
      "A mock server providing realistic book catalog endpoints, filtering, simulated network latency, and JSON responses for frontend developers building client apps.",
    category: "open-source",
    role: "Backend Developer",
    year: "2024",
    featured: false,
    stack: ["Node.js", "Express", "REST APIs", "JSON Server", "Render"],
    metrics: [
      { label: "Response Format", value: "JSON:API standards" },
      { label: "Uptime", value: "Render hosted" },
    ],
    liveUrl: "https://codebooks-mock-server-u0jp.onrender.com/",
    githubUrl: "https://github.com/chubbyini",
    image: "/projects/codebooks-api.png",
    problem:
      "Frontend teams frequently get blocked during sprint cycles waiting for backend API endpoints to be finalized.",
    architecture:
      "Built a lightweight Express mock server simulating database models, search queries, pagination, and error state handling.",
    results:
      "Provided an active public mock API enabling rapid frontend prototyping without waiting on database migrations.",
  },
  {
    id: "sojourner-mark",
    slug: "sojourner-mark",
    title: "@sojournerbuilds/mark",
    tagline: "Nautical waymark token and data-aware Next.js route veil",
    description:
      "A zero-dependency React SVG token suite featuring a clockwise nautical degree dial with a ship sailing counter-clockwise, and an automatic Next.js route transition veil.",
    category: "open-source",
    role: "Author & Maintainer",
    year: "2024",
    featured: true,
    stack: ["React", "Next.js", "TypeScript", "SVG Engineering", "CSS3", "npm"],
    metrics: [
      { label: "Runtime Deps", value: "Zero (0)" },
      { label: "CSS Overhead", value: "< 4kB" },
      { label: "Registry", value: "npm public" },
    ],
    liveUrl: "https://www.npmjs.com/package/@sojournerbuilds/mark",
    githubUrl: "https://github.com/chubbyini",
    problem:
      "Traditional spinner libraries rely on heavy CSS or Lottie runtimes, washing out on custom brand themes and ignoring prefers-reduced-motion.",
    architecture:
      "Engineered with pure math-driven SVG arcs, CSS keyframe orbits, palette-locking theme attributes, and an event-driven pending counter for Next.js App Router.",
    results:
      "Published on npm registry under @sojournerbuilds/mark; deployed as the signature brand token across this portfolio.",
  },
] as const;
