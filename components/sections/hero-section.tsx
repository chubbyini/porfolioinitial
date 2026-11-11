"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BookOpen, Sparkles, Terminal } from "lucide-react";
import { SojournerToken } from "@sojournerbuilds/mark/tokens";
import { profileData } from "@/data/profile";

export function HeroSection() {
  const roles = React.useMemo(
    () => [
      "Web Developer at Vissionnaire Tech Solution Ltd",
      "Founder of Sojourner Builds Studio",
      "Published NLP Researcher (IJRIAS 2025)",
      "Logistics Dispatch Systems Architect",
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
      className="relative min-h-[92vh] flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-20 border-b border-border overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background gold glow */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-gold-500/10 via-gold-400/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl space-y-8 relative z-10">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 font-mono text-xs tracking-wider uppercase backdrop-blur-sm">
          <Terminal className="w-3.5 h-3.5 text-gold-400" />
          <span>Full-Stack Practitioner & Systems Builder</span>
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
              className="font-mono text-sm sm:text-base text-gold-400/90 tracking-wide font-medium animate-fade-in flex items-center gap-2"
            >
              <span className="text-gold-500 font-bold">&gt;</span>
              <span>{roles[currentRoleIndex]}</span>
            </p>
          </div>
        </div>

        {/* Practitioner Positioning Statement */}
        <p className="text-base sm:text-xl text-muted leading-relaxed max-w-2xl font-sans">
          I ship real, battle-tested software. At{" "}
          <strong className="text-foreground font-semibold">Vissionnaire Tech Solution</strong> and{" "}
          <strong className="text-foreground font-semibold">Picckr</strong>, I engineer core B2B
          logistics suites and multi-provider mapping architectures. Through{" "}
          <strong className="text-foreground font-semibold">Sojourner</strong>, I build tailored
          digital systems and publish open-source web tokens.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Primary CTA */}
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-nautical-950 font-display font-bold text-sm tracking-wide flex items-center gap-2.5 shadow-gold-md hover:shadow-gold-lg transition-all duration-200 press-feedback"
          >
            <span>View Shipped Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          {/* Secondary CTA */}
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="px-6 py-3.5 rounded-xl border border-border bg-card/80 backdrop-blur-sm text-foreground hover:border-gold-500/50 hover:text-gold-400 font-display font-semibold text-sm tracking-wide flex items-center gap-2 transition-all duration-200 press-feedback"
          >
            <span>Hire Sojourner Studio</span>
            <ArrowUpRight className="w-4 h-4 text-gold-400" />
          </button>

          {/* Research Quick Link */}
          <button
            type="button"
            onClick={() => scrollTo("research")}
            className="px-4 py-3 rounded-xl text-muted hover:text-foreground font-mono text-xs flex items-center gap-2 transition-colors press-feedback"
          >
            <BookOpen className="w-3.5 h-3.5 text-gold-400" />
            <span>Read IJRIAS NLP Paper</span>
          </button>
        </div>

        {/* Credibility & Highlights Strip */}
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border/70">
          {profileData.stats.map((stat) => (
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
      <div className="hidden xl:block absolute right-12 bottom-12 p-3 rounded-full border border-gold-500/20 bg-card/40 backdrop-blur-md opacity-80 hover:opacity-100 transition-opacity">
        <SojournerToken size={84} spinning={true} speed="slow" variant="waymark" />
      </div>
    </section>
  );
}
