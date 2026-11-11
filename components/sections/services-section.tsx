"use client";

import * as React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layout,
  Server,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/data/services";

const ICON_MAP: Record<string, React.ElementType> = {
  Layout,
  Sparkles,
  Server,
  Cpu,
};

export function ServicesSection() {
  const scrollToContact = (title: string) => {
    const el = document.getElementById("contact");
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({ top: topOffset, behavior: "smooth" });

      const subjectInput = document.getElementById("projectType") as HTMLSelectElement | null;
      if (subjectInput) {
        subjectInput.value = title;
      }
    }
  };

  return (
    <section
      id="services"
      className="px-6 sm:px-12 lg:px-16 py-20 border-b border-border bg-card/10 relative"
    >
      <div className="max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold tracking-widest uppercase">
            07 // CORE CAPABILITIES
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Engineering Focus. <span className="gold-gradient-text">What I build.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-2xl font-sans">
            Specialized engineering competencies I bring to software products, user interfaces,
            and collaborative initiatives.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service) => {
            const Icon = ICON_MAP[service.icon] || Layout;
            return (
              <div
                key={service.id}
                className="group p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm hover:shadow-md flex flex-col justify-between space-y-6 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl border border-zinc-200 dark:border-amber-500/30 bg-zinc-100 dark:bg-amber-500/10 flex items-center justify-center text-amber-700 dark:text-amber-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground tracking-tight">
                      {service.title}
                    </h3>
                    <p className="font-mono text-xs text-amber-700 dark:text-amber-300/90 mt-0.5 font-medium">{service.tagline}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold block">
                      Scope of Work:
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-foreground/90 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                    <span className="text-amber-700 dark:text-amber-300 font-semibold">Ideal for: </span>
                    <span>{service.idealFor}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => scrollToContact(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-800 dark:hover:text-white font-display font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-colors press-feedback"
                  >
                    <span>Discuss this with Inioluwa</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
