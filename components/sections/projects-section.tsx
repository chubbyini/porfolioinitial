"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  ArrowRight,
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

  const getHostname = (url?: string) => {
    if (!url) return "";
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  };

  return (
    <section
      id="projects"
      className="px-6 sm:px-12 lg:px-16 py-20 border-b border-border bg-card/20 relative"
    >
      <div className="max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold tracking-widest uppercase">
              04 // FEATURED WORK
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Real software. <span className="gold-gradient-text">Shipped to production.</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl font-sans">
              Logistics platforms, client web applications, merchant portals, and open-source packages.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-sm">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 press-feedback",
                  activeCategory === cat.id
                    ? "bg-zinc-900 text-white dark:bg-amber-400 dark:text-zinc-950 font-semibold shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
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
              className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              <div className="space-y-4">
                {/* Visual Browser Preview Screenshot */}
                {project.image && (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950/70 overflow-hidden group/img mb-3"
                  >
                    {/* Browser Address Bar Header */}
                    <div className="flex items-center justify-between px-3 py-1.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-[10px] font-mono text-zinc-500">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500/70 inline-block" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/70 inline-block" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/70 inline-block" />
                      </div>
                      <span className="truncate max-w-[200px] text-zinc-600 dark:text-zinc-400 font-medium">
                        {getHostname(project.liveUrl) || project.title}
                      </span>
                      <div className="w-6" />
                    </div>

                    {/* Screenshot Frame */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-300 group-hover/img:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 480px"
                      />
                    </div>
                  </Link>
                )}

                {/* Card Header & Metadata */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-zinc-200 dark:border-amber-500/30 bg-zinc-100 dark:bg-amber-500/10 text-zinc-800 dark:text-amber-300 font-semibold uppercase">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{project.year}</span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-foreground tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    <Link href={`/projects/${project.slug}`} className="focus:outline-none">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="font-mono text-xs text-amber-700 dark:text-amber-400/90 mt-0.5 font-medium">{project.tagline}</p>
                </div>

                <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Key Metric Highlights (if present) */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 pt-1 border-t border-zinc-100 dark:border-zinc-800/80">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800/60">
                        <span className="font-display font-bold text-xs text-zinc-900 dark:text-amber-300 block">
                          {m.value}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 block truncate">
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
                      className="font-mono text-[11px] px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer / Action Links */}
              <div className="flex items-center justify-between pt-5 mt-5 border-t border-zinc-100 dark:border-zinc-800/80">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-900 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold press-feedback"
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
                      className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors press-feedback"
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
                      className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors press-feedback"
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
