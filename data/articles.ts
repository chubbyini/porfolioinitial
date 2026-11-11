import type { BlogPost } from "@/types";

export const articlesData: readonly BlogPost[] = [
  {
    slug: "optimizing-performance-without-rsc-hype",
    title: "Optimizing Performance Without Falling for the RSC Hype",
    description:
      "A pragmatic look at React Server Components: where they genuinely cut client bundle costs, and where simple browser caching and streaming deliver 90% of the gains with zero complexity.",
    date: "Sep 21, 2026",
    readTime: "6 min read",
    tags: ["Next.js", "Performance", "React", "Architecture"],
    platform: "devto",
    canonicalUrl:
      "https://dev.to/osibajo_inioluwa_74301be0/optimizing-performance-without-falling-for-the-rsc-hype-46oo",
    featured: true,
  },
  {
    slug: "whatsapp-economy-ecommerce-nigeria",
    title: "The WhatsApp Economy: Re-engineering E-commerce for Nigeria's Informal Markets",
    description:
      "Why traditional cart-and-checkout flows fail Nigerian merchants, and how building conversational checkout layers over WhatsApp drove dramatic completion rates.",
    date: "Mar 21, 2026",
    readTime: "7 min read",
    tags: ["Product", "E-commerce", "Emerging Markets", "UX"],
    platform: "medium",
    canonicalUrl:
      "https://medium.com/@inioluwaosibajo/the-whatsapp-economy-re-engineering-e-commerce-for-nigerias-informal-markets-70d2feb9c379",
    featured: true,
  },
  {
    slug: "zero-byte-design-math-storefronts",
    title: "Zero-Byte Design: How I Use Math to Generate Unique Storefronts Without a DB",
    description:
      "How deterministic hashing and parametric algorithms allow us to generate hundreds of thousands of distinct storefront designs client-side without storing a single byte of CSS in a database.",
    date: "Mar 29, 2026",
    readTime: "8 min read",
    tags: ["Architecture", "Algorithms", "Next.js", "Design"],
    platform: "medium",
    canonicalUrl:
      "https://medium.com/@inioluwaosibajo/zero-byte-design-how-i-use-math-to-generate-unique-storefronts-without-a-db-47685cedce18",
    featured: true,
  },
  {
    slug: "storedna-deterministic-hashing-database-bloat",
    title: "StoreDNA: Using Deterministic Hashing to Eliminate Database Bloat",
    description:
      "A deep dive into compression algorithms and cryptographic tokens to eliminate cold-storage database costs for millions of inactive e-commerce merchant profiles.",
    date: "Mar 21, 2026",
    readTime: "5 min read",
    tags: ["Databases", "Hashing", "Systems", "Scalability"],
    platform: "medium",
    canonicalUrl:
      "https://medium.com/@inioluwaosibajo/storedna-using-deterministic-hashing-to-eliminate-database-bloat-53ec58b2d752",
    featured: false,
  },
  {
    slug: "dual-map-provider-architecture",
    title: "I Refused to Pick a Map Provider. Here's the Architecture That Lets Me Use Both.",
    description:
      "When mapping APIs go down, logistics stops. Here is how I architected a dual-provider abstraction layer with runtime health checks and instant Mapbox-OSM failovers.",
    date: "Mar 11, 2026",
    readTime: "6 min read",
    tags: ["Logistics", "Architecture", "Maps", "Fault Tolerance"],
    platform: "medium",
    canonicalUrl:
      "https://medium.com/@inioluwaosibajo/i-refused-to-pick-a-map-provider-heres-the-architecture-that-lets-me-use-both-0b966c2aa2cc",
    featured: true,
  },
  {
    slug: "permission-matrix-admin-roles",
    title: "The Permission Matrix: Rows, Columns, and the Cheat Code for Admin Roles",
    description:
      "Managing complex hierarchical roles in enterprise admin dashboards without falling into the nested boolean trap. Bitwise permissions and matrix grids demystified.",
    date: "Aug 11, 2026",
    readTime: "5 min read",
    tags: ["Security", "RBAC", "Frontend", "Enterprise"],
    platform: "medium",
    canonicalUrl:
      "https://medium.com/@inioluwaosibajo/the-permission-matrix-rows-columns-and-the-cheat-code-for-admin-roles-16995bca32bb",
    featured: false,
  },
] as const;
