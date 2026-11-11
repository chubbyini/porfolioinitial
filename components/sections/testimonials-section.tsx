"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MessageSquareQuote, Quote } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const next = React.useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  }, []);

  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const activeTestimonial = testimonialsData[currentIndex] ?? testimonialsData[0]!;

  return (
    <section
      id="testimonials"
      className="px-6 sm:px-12 lg:px-16 py-20 border-b border-border bg-card/10 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-gold-400 tracking-widest uppercase">
            09 // TESTIMONIALS
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Endorsements from the field. <span className="gold-gradient-text">Real collaboration.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl font-sans">
            Feedback from operations leads, academic research supervisors, and client partners.
          </p>
        </div>

        {/* Testimonial Feature Card */}
        <div className="relative p-6 sm:p-10 rounded-2xl border border-border bg-card/70 backdrop-blur-sm gold-card-glow shadow-gold-sm min-h-[260px] flex flex-col justify-between">
          <Quote className="w-10 h-10 text-gold-500/20 absolute top-6 right-6 pointer-events-none" />

          {/* Quote */}
          <blockquote className="relative z-10 text-base sm:text-lg text-foreground/90 font-sans leading-relaxed italic">
            &ldquo;{activeTestimonial.quote}&rdquo;
          </blockquote>

          {/* Author info & Navigation Controls */}
          <div className="pt-6 mt-6 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div>
              <h4 className="font-display font-bold text-base text-foreground">
                {activeTestimonial.author}
              </h4>
              <p className="font-mono text-xs text-gold-400">
                {activeTestimonial.role} — {activeTestimonial.company}
              </p>
              <p className="font-mono text-[11px] text-muted/70 mt-0.5">
                {activeTestimonial.relation}
              </p>
            </div>

            {/* Carousel Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="p-2.5 rounded-xl border border-border bg-card hover:border-gold-500/50 hover:text-gold-400 text-foreground transition-colors press-feedback"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5 px-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      currentIndex === idx ? "w-6 bg-gold-400" : "w-1.5 bg-muted/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="p-2.5 rounded-xl border border-border bg-card hover:border-gold-500/50 hover:text-gold-400 text-foreground transition-colors press-feedback"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
