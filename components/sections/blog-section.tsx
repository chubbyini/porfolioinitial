"use client";

import * as React from "react";
import Link from "next/link";
import { Calendar, Clock, ExternalLink } from "lucide-react";
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
            <div className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold tracking-widest uppercase">
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

          <div className="flex items-center gap-2.5">
            <Link
              href={profileData.socials.devto}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors press-feedback flex items-center gap-1.5 shadow-sm"
            >
              <span>Follow on DEV</span>
              <ExternalLink className="w-3 h-3 text-muted" />
            </Link>
            <Link
              href={profileData.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors press-feedback flex items-center gap-1.5 shadow-sm"
            >
              <span>Follow on Medium</span>
              <ExternalLink className="w-3 h-3 text-muted" />
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
              className="group p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm hover:shadow-md flex flex-col justify-between space-y-4 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              <div className="space-y-3">
                {/* Platform Badge & Read Time */}
                <div className="flex items-center justify-between text-[11px] font-mono text-muted">
                  <span className="px-2 py-0.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/60 font-semibold uppercase text-zinc-700 dark:text-amber-300">
                    {article.platform}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-zinc-400" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base text-foreground tracking-tight group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted leading-relaxed font-sans line-clamp-3">
                  {article.description}
                </p>
              </div>

              {/* Tags & Date */}
              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 space-y-2">
                <div className="flex flex-wrap gap-1">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                    {article.date}
                  </span>
                  <ExternalLink className="w-3 h-3 text-muted group-hover:text-foreground transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
