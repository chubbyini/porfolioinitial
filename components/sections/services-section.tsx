"use client";

import * as React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Gauge,
  Layout,
  Navigation,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/data/services";

const ICON_MAP: Record<string, React.ElementType> = {
  Layout,
  Navigation,
  Cpu,
  Gauge,
};

export function ServicesSection() {
  const scrollToContact = (serviceTitle: string) => {
    const el = document.getElementById("contact");
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({ top: topOffset, behavior: "smooth" });

      // If contact form has a subject or service select, prefill it
      const subjectInput = document.getElementById("projectType") as HTMLSelectElement | null;
      if (subjectInput) {
        subjectInput.value = serviceTitle;
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
          <div className="font-mono text-xs text-gold-400 tracking-widest uppercase">
            07 // SOJOURNER STUDIO SERVICES
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            High-craft software. <span className="gold-gradient-text">Shipped for clients.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-2xl font-sans">
            Through Sojourner, my independent engineering studio, I design, architect, and ship
            bespoke web products, high-throughput logistics platforms, and applied AI systems.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service) => {
            const Icon = ICON_MAP[service.icon] || Layout;
            return (
              <div
                key={service.id}
                className="group p-6 rounded-2xl border border-border bg-card/70 backdrop-blur-sm gold-card-glow flex flex-col justify-between space-y-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-gold-md"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl border border-gold-500/30 bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground tracking-tight">
                      {service.title}
                    </h3>
                    <p className="font-mono text-xs text-gold-400 mt-0.5">{service.tagline}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2 border-t border-border/60">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted/70 block">
                      Scope of Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-foreground/90 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div className="p-3 rounded-lg bg-nautical-950/40 border border-border/50 text-[11px] font-mono text-muted">
                    <span className="text-gold-400/90 font-semibold">Ideal for: </span>
                    <span>{service.idealFor}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => scrollToContact(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl border border-border bg-card/60 text-foreground hover:border-gold-500/50 hover:text-gold-400 font-display font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-colors press-feedback"
                  >
                    <span>Request Scope for this Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
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
