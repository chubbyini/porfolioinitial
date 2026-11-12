"use client";

import * as React from "react";
import Link from "next/link";
import {
  ExternalLink,
  FileText,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";
import { researchPaper } from "@/data/research";

export function ResearchSection() {
  const [showFullAbstract, setShowFullAbstract] = React.useState(false);

  return (
    <section
      id="research"
      className="px-6 sm:px-12 lg:px-16 py-20 border-b border-border bg-card/20 relative"
    >
      <div className="max-w-6xl 2xl:max-w-7xl w-full space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold tracking-widest uppercase">
            06 // ACADEMIC & APPLIED RESEARCH
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Peer-reviewed NLP. <span className="gold-gradient-text">Zero-shot synthesis.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-2xl font-sans">
            Rigorous applied research bridging pre-trained transformer pipelines with educational
            content synthesis and question generation.
          </p>
        </div>

        {/* Highlighted Research Card */}
        <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm dark:shadow-md space-y-6">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2.5 py-1 rounded-md border border-zinc-200 dark:border-amber-500/30 bg-zinc-100 dark:bg-amber-500/10 text-zinc-800 dark:text-amber-300 font-semibold uppercase">
                {researchPaper.category}
              </span>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{researchPaper.date}</span>
            </div>

            <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              <span>{researchPaper.journal}</span>
            </div>
          </div>

          {/* Paper Title & Authors */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
              {researchPaper.title}
            </h3>

            <div className="flex items-start gap-2 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-mono">
              <Users className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
              <span>
                <strong>Inioluwa Daniel Osibajo</strong>, Oluwaseyi Ezekiel Olorunshola, Fatimah
                Adamu-Fika, Tsentob Joy Samson
              </span>
            </div>

            <div className="flex items-start gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              <GraduationCap className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
              <span>{researchPaper.affiliation}</span>
            </div>
          </div>

          {/* Abstract */}
          <div className="p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase text-zinc-800 dark:text-amber-300 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Abstract & Methodology</span>
              </span>
              <button
                type="button"
                onClick={() => setShowFullAbstract(!showFullAbstract)}
                className="font-mono text-[11px] text-amber-700 dark:text-amber-400 hover:underline font-semibold"
              >
                {showFullAbstract ? "Show Summary" : "Expand Abstract"}
              </button>
            </div>

            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
              {showFullAbstract
                ? researchPaper.abstract
                : `${researchPaper.abstract.slice(0, 280)}...`}
            </p>
          </div>

          {/* Key Contributions Strip */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold block">
              Core Technical Contributions:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {researchPaper.keyHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 flex items-start gap-2.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-700 dark:text-zinc-300 leading-normal">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Link to RePEc */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              {researchPaper.publicationDetails}
            </span>

            <Link
              href={researchPaper.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300 font-display font-semibold text-xs tracking-wide shadow-sm transition-all duration-150 press-feedback"
            >
              <span>Read Published Article (RePEc / IDEAS)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
