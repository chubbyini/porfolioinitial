"use client";

import * as React from "react";
import Link from "next/link";
import {
  BookOpen,
  Cpu,
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
      <div className="max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-gold-400 tracking-widest uppercase">
            06 // ACADEMIC & APPLIED RESEARCH
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Peer-reviewed NLP. <span className="gold-gradient-text">Zero-shot synthesis.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-2xl font-sans">
            Rigorous applied research bridging pre-trained transformer pipelines with production
            content synthesis in computing education.
          </p>
        </div>

        {/* Highlighted Research Card */}
        <div className="p-6 sm:p-8 rounded-2xl border border-gold-500/30 bg-card/80 backdrop-blur-sm gold-card-glow shadow-gold-sm space-y-6">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2.5 py-1 rounded-md border border-gold-500/40 bg-gold-500/10 text-gold-400 font-bold uppercase">
                {researchPaper.category}
              </span>
              <span className="font-mono text-xs text-muted/70">{researchPaper.date}</span>
            </div>

            <div className="font-mono text-xs text-muted">
              <span>{researchPaper.journal}</span>
            </div>
          </div>

          {/* Paper Title & Authors */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
              {researchPaper.title}
            </h3>

            <div className="flex items-start gap-2 text-xs sm:text-sm text-gold-400/90 font-mono">
              <Users className="w-4 h-4 shrink-0 mt-0.5 text-gold-400" />
              <span>
                <strong>Inioluwa Daniel Osibajo</strong>, Oluwaseyi Ezekiel Olorunshola, Fatimah
                Adamu-Fika, Tsentob Joy Samson
              </span>
            </div>

            <div className="flex items-start gap-2 text-xs text-muted font-mono">
              <GraduationCap className="w-4 h-4 shrink-0 mt-0.5 text-gold-500/70" />
              <span>{researchPaper.affiliation}</span>
            </div>
          </div>

          {/* Abstract */}
          <div className="p-4 sm:p-5 rounded-xl border border-border/80 bg-nautical-950/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold uppercase text-gold-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Abstract & Methodology</span>
              </span>
              <button
                type="button"
                onClick={() => setShowFullAbstract(!showFullAbstract)}
                className="font-mono text-[11px] text-gold-400 hover:text-gold-300 underline"
              >
                {showFullAbstract ? "Show Summary" : "Expand Abstract"}
              </button>
            </div>

            <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
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
                  className="p-3 rounded-lg border border-border bg-card/40 flex items-start gap-2.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-muted leading-normal">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Link to RePEc */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/70">
            <span className="font-mono text-xs text-muted/70">
              {researchPaper.publicationDetails}
            </span>

            <Link
              href={researchPaper.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-nautical-950 font-display font-semibold text-xs tracking-wide shadow-gold-sm hover:shadow-gold-md transition-all duration-150 press-feedback"
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
