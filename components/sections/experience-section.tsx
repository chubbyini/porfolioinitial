"use client";

import * as React from "react";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { experienceData } from "@/data/experience";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="px-6 sm:px-12 lg:px-16 py-20 border-b border-border bg-card/10 relative"
    >
      <div className="max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold tracking-widest uppercase">
            05 // PROFESSIONAL TIMELINE
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Work History & Experience. <span className="gold-gradient-text">Measured in delivery.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-2xl font-sans">
            Hands-on software development across logistics products at PicckR, web applications at
            Vissionnaire, open-source tooling under Sojourner Builds, and published NLP research.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-10">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node */}
              <div
                className={cn(
                  "absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125",
                  exp.current
                    ? "border-amber-600 bg-amber-600 dark:border-amber-400 dark:bg-amber-400 shadow-sm"
                    : "border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
                )}
              />

              <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 space-y-4 shadow-sm transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700">
                {/* Role Header & Metadata */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-display font-bold text-xl text-foreground tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 font-semibold uppercase">
                          Current Role
                        </span>
                      )}
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-amber-700 dark:text-amber-300">
                      <span>{exp.company}</span>
                      {exp.companyUrl && (
                        <Link
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-amber-800 dark:hover:text-amber-200 transition-colors"
                          title="Visit Company"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      {exp.period}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                  {exp.summary}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 pt-1 border-t border-zinc-100 dark:border-zinc-800/80">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block font-semibold">
                    Key Deliverables & Responsibilities
                  </span>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
