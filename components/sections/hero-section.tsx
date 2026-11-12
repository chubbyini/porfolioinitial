"use client";

import * as React from "react";
import { ArrowDown, ArrowUpRight, BookOpen, Terminal, FileBadge } from "lucide-react";
import { SojournerToken } from "@sojournerbuilds/mark/tokens";
import { profileData } from "@/data/profile";
import { calculateYearsInTech } from "@/lib/utils";

export function HeroSection() {
  // Dynamically compute Years in Tech based on April 2025 start date
  const [yearsInTech, setYearsInTech] = React.useState<string>(() =>
    calculateYearsInTech("2025-04-01")
  );

  React.useEffect(() => {
    setYearsInTech(calculateYearsInTech("2025-04-01"));
  }, []);

  const stats = React.useMemo(() => {
    return profileData.stats.map((stat) => {
      if (stat.label === "Years in Tech" || stat.label === "Started in Tech") {
        return {
          ...stat,
          value: yearsInTech,
          label: "Years in Tech",
        };
      }
      return stat;
    });
  }, [yearsInTech]);

  const roles = React.useMemo(
    () => [
      "Junior Software Engineer at PicckR",
      "Web Developer at Vissionnaire Tech Solution",
      "Creator of Sojourner Builds (@sojournerbuilds/mark)",
      "Published NLP Researcher (IJRIAS 2025)",
    ],
    []
  );

  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-20 border-b border-border overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-amber-500/10 dark:from-amber-400/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl 2xl:max-w-7xl w-full space-y-8 relative z-10">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-amber-500/30 bg-zinc-100 dark:bg-amber-500/10 text-zinc-800 dark:text-amber-300 font-mono text-xs tracking-wider uppercase backdrop-blur-sm">
          <Terminal className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          <span>Software Engineer & Web Developer</span>
        </div>

        {/* Primary Headline */}
        <div className="space-y-3">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-foreground leading-[1.08]">
            Inioluwa Daniel <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Osibajo</span>
          </h1>

          {/* Dynamic Rotating Role Shuffler */}
          <div className="h-8 sm:h-9 flex items-center overflow-hidden">
            <p
              key={currentRoleIndex}
              className="font-mono text-sm sm:text-base text-zinc-700 dark:text-amber-300 tracking-wide font-medium animate-fade-in flex items-center gap-2"
            >
              <span className="text-amber-600 dark:text-amber-400 font-bold">&gt;</span>
              <span>{roles[currentRoleIndex]}</span>
            </p>
          </div>
        </div>

        {/* Practitioner Positioning Statement */}
        <p className="text-base sm:text-xl text-muted leading-relaxed max-w-3xl 2xl:max-w-4xl font-sans">
          I build responsive web applications, merchant portals, and interactive interfaces. Currently engineering at{" "}
          <strong className="text-foreground font-semibold">PicckR</strong> (subsidiary of{" "}
          <strong className="text-foreground font-semibold">Vissionnaire Tech Solution Ltd</strong>), while authoring open-source tooling and UI components under{" "}
          <strong className="text-foreground font-semibold">Sojourner Builds</strong>.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Primary CTA */}
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="px-6 py-3.5 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300 font-display font-semibold text-sm tracking-wide flex items-center gap-2.5 shadow-sm transition-all duration-150 press-feedback"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          {/* Secondary CTA */}
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="px-6 py-3.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white font-display font-semibold text-sm tracking-wide flex items-center gap-2 transition-all duration-150 press-feedback"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </button>

          {/* Manifest (CV) Quick Link */}
          <button
            type="button"
            onClick={() => scrollTo("manifest")}
            className="px-4 py-3 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 font-mono text-xs flex items-center gap-2 transition-colors press-feedback"
          >
            <FileBadge className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Service Manifest (CV)</span>
          </button>

          {/* Research Quick Link */}
          <button
            type="button"
            onClick={() => scrollTo("research")}
            className="px-4 py-3 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 font-mono text-xs flex items-center gap-2 transition-colors press-feedback"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Read NLP Paper</span>
          </button>
        </div>

        {/* Credibility & Highlights Strip */}
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border/70">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-0.5">
              <span className="font-display font-bold text-2xl sm:text-3xl text-foreground gold-gradient-text block">
                {stat.value}
              </span>
              <span className="font-mono text-xs font-semibold text-foreground block">
                {stat.label}
              </span>
              <p className="text-[11px] text-muted line-clamp-1">{stat.helper}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Interactive Sojourner Token in background */}
      <div className="hidden xl:block absolute right-12 bottom-12 p-3 rounded-full border border-zinc-200 dark:border-amber-500/20 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md opacity-80 hover:opacity-100 transition-opacity">
        <SojournerToken size={84} spinning={true} speed="slow" variant="waymark" />
      </div>
    </section>
  );
}
