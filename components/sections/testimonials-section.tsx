"use client";

import * as React from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, Quote } from "lucide-react";
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
    }, 8000);
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
          <div className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold tracking-widest uppercase">
            09 // RECOMMENDATIONS & ENDORSEMENTS
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Peer & Manager Reviews. <span className="gold-gradient-text">Verified Collaboration.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl font-sans">
            Direct feedback from product managers, engineering colleagues, and academic supervisors.
          </p>
        </div>

        {/* Testimonial Feature Card */}
        <div className="relative p-6 sm:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm dark:shadow-md min-h-[280px] flex flex-col justify-between">
          <Quote className="w-10 h-10 text-zinc-300 dark:text-zinc-700 absolute top-6 right-6 pointer-events-none" />

          {/* Quote Body */}
          <div className="relative z-10 space-y-4">
            {activeTestimonial.verifiedLinkedIn && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 font-mono text-[11px] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Verified LinkedIn Recommendation</span>
              </div>
            )}

            <blockquote className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 font-sans leading-relaxed whitespace-pre-line">
              &ldquo;{activeTestimonial.quote}&rdquo;
            </blockquote>
          </div>

          {/* Author info & Navigation Controls */}
          <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-display font-bold text-base text-foreground">
                  {activeTestimonial.author}
                </h4>
                {activeTestimonial.date && (
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                    ({activeTestimonial.date})
                  </span>
                )}
              </div>
              <p className="font-mono text-xs text-amber-700 dark:text-amber-300 font-medium">
                {activeTestimonial.role}
              </p>
              <p className="font-mono text-[11px] text-muted mt-0.5">
                {activeTestimonial.relation}
              </p>
            </div>

            {/* Carousel Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-800 dark:hover:text-white transition-colors press-feedback"
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
                      currentIndex === idx
                        ? "w-6 bg-zinc-900 dark:bg-amber-400"
                        : "w-1.5 bg-zinc-300 dark:bg-zinc-700"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-800 dark:hover:text-white transition-colors press-feedback"
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
