"use client";

import * as React from "react";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ExternalLink } from "lucide-react";
import { articlesData } from "@/data/articles";
import { profileData } from "@/data/profile";

export function BlogSection() {
  return (
    <section
      id="blog"
      className="px-6 sm:px-12 lg:px-16 py-20 border-b border-border bg-card/20 relative"
    >
      <div className="max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="font-mono text-xs text-gold-400 tracking-widest uppercase">
              08 // ENGINEERING ARTICLES
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Architecture teardowns. <span className="gold-gradient-text">Lessons from the field.</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl font-sans">
              I document architectural decisions, performance benchmarks, and real-world trade-offs
              on Dev.to and Medium.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={profileData.socials.devto}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg border border-border bg-card/60 text-xs font-mono text-muted hover:text-foreground hover:border-gold-500/40 transition-colors press-feedback flex items-center gap-1.5"
            >
              <span>Follow on DEV</span>
              <ExternalLink className="w-3 h-3 text-gold-400" />
            </Link>
            <Link
              href={profileData.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg border border-border bg-card/60 text-xs font-mono text-muted hover:text-foreground hover:border-gold-500/40 transition-colors press-feedback flex items-center gap-1.5"
            >
              <span>Follow on Medium</span>
              <ExternalLink className="w-3 h-3 text-gold-400" />
            </Link>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesData.map((article) => (
            <Link
              key={article.slug}
              href={article.canonicalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-sm gold-card-glow flex flex-col justify-between space-y-4 transition-all duration-200 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-gold-md"
            >
              <div className="space-y-3">
                {/* Platform Badge & Read Time */}
                <div className="flex items-center justify-between text-[11px] font-mono text-muted">
                  <span className="px-2 py-0.5 rounded-md border border-border bg-muted/10 font-bold uppercase text-gold-400">
                    {article.platform}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base text-foreground tracking-tight group-hover:text-gold-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted leading-relaxed font-sans line-clamp-3">
                  {article.description}
                </p>
              </div>

              {/* Tags & Date */}
              <div className="pt-3 border-t border-border/60 space-y-2">
                <div className="flex flex-wrap gap-1">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-1.5 py-0.2 rounded border border-border/50 text-muted/80"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-muted/70">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <ExternalLink className="w-3 h-3 text-gold-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
