"use client";

import * as React from "react";
import Link from "next/link";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Sparkles,
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
          <div className="font-mono text-xs text-gold-400 tracking-widest uppercase">
            05 // PROFESSIONAL TIMELINE
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Battle-tested in production. <span className="gold-gradient-text">Measured in uptime.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-2xl font-sans">
            From architecting core B2B dispatch platforms at Vissionnaire to founding Sojourner and
            conducting academic NLP research at AFIT.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-border/80 space-y-12">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Gold Node */}
              <div
                className={cn(
                  "absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125",
                  exp.current
                    ? "border-gold-400 bg-gold-400 shadow-gold-sm"
                    : "border-gold-500/50 bg-[var(--background)]"
                )}
              />

              <div className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm gold-card-glow space-y-4 shadow-sm transition-all duration-200 hover:border-gold-500/30 hover:shadow-gold-md">
                {/* Role Header & Metadata */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-display font-bold text-xl text-foreground tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-semibold uppercase">
                          Current Role
                        </span>
                      )}
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-md border border-border bg-muted/10 text-muted">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-sm font-medium text-gold-400">
                      <span>{exp.company}</span>
                      {exp.companyUrl && (
                        <Link
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gold-300 transition-colors"
                          title="Visit Company"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-muted/80">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold-500/80" />
                      {exp.period}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold-500/80" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                  {exp.summary}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 pt-1 border-t border-border/60">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted/70 block">
                    Key Deliverables & Impact
                  </span>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
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
                      className="font-mono text-[11px] px-2 py-0.5 rounded-md border border-border bg-muted/10 text-muted"
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
