"use client";

import * as React from "react";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  ArrowRight,
  TrendingUp,
  Layers,
  Sparkles,
  Package,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

const CATEGORIES: readonly { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "client", label: "Client Systems" },
  { id: "product", label: "Products & Apps" },
  { id: "open-source", label: "Open Source" },
] as const;

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState<ProjectCategory>("all");

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "all") return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="px-6 sm:px-12 lg:px-16 py-20 border-b border-border bg-card/20 relative"
    >
      <div className="max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="font-mono text-xs text-gold-400 tracking-widest uppercase">
              04 // FEATURED WORK
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Real software. <span className="gold-gradient-text">Shipped to production.</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl font-sans">
              Enterprise logistics platforms, high-frequency telemetry dashboards, and zero-byte
              e-commerce systems.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-border bg-card/80 backdrop-blur-sm">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 press-feedback",
                  activeCategory === cat.id
                    ? "bg-gold-500/20 text-gold-400 font-bold border border-gold-500/40 shadow-sm"
                    : "text-muted hover:text-foreground hover:bg-muted/10 border border-transparent"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between p-6 rounded-2xl border border-border bg-card/70 backdrop-blur-sm gold-card-glow transition-all duration-200 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-gold-md"
            >
              {/* Card Header & Metadata */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 font-semibold uppercase">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-muted/70">{project.year}</span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-foreground tracking-tight group-hover:text-gold-400 transition-colors">
                    <Link href={`/projects/${project.slug}`} className="focus:outline-none">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="font-mono text-xs text-gold-400/80 mt-0.5">{project.tagline}</p>
                </div>

                <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Key Metric Highlights (if present) */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-border/60">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="p-2 rounded-lg bg-nautical-950/40 border border-border/50">
                        <span className="font-display font-bold text-xs text-gold-400 block">
                          {m.value}
                        </span>
                        <span className="font-mono text-[10px] text-muted block truncate">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-0.5 rounded-md border border-border bg-muted/10 text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer / Action Links */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-border/60">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-gold-400 hover:text-gold-300 font-semibold press-feedback"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border bg-card/60 text-muted hover:text-foreground hover:border-gold-500/40 transition-colors press-feedback"
                      aria-label={`${project.title} GitHub Source`}
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </Link>
                  )}

                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border bg-card/60 text-muted hover:text-gold-400 hover:border-gold-500/40 transition-colors press-feedback"
                      aria-label={`${project.title} Live URL`}
                      title="Live Product"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
