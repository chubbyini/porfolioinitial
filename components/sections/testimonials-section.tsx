"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const EASE_DRAWER = [0.32, 0.72, 0, 1] as const;

export function TestimonialsSection() {
  const [[currentIndex, direction], setPage] = React.useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const total = testimonialsData.length;

  const paginate = React.useCallback(
    (newDirection: number, directIndex?: number) => {
      setPage(([prev]) => {
        if (typeof directIndex === "number") {
          return [directIndex, directIndex > prev ? 1 : -1];
        }
        const nextIdx = (prev + newDirection + total) % total;
        return [nextIdx, newDirection];
      });
    },
    [total]
  );

  const prev = () => paginate(-1);
  const next = React.useCallback(() => paginate(1), [paginate]);

  // Auto-advance with hover pause
  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      next();
    }, 8500);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Keyboard navigation when focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  const activeTestimonial = testimonialsData[currentIndex] ?? testimonialsData[0]!;

  // Emil Kowalski Design Engineering: Directional Kinetic Typography with Blur Masking
  const contentVariants: Variants = {
    enter: (dir: number) => ({
      y: shouldReduceMotion ? 0 : dir >= 0 ? 16 : -16,
      opacity: 0,
      filter: shouldReduceMotion ? "none" : "blur(4px)",
      scale: shouldReduceMotion ? 1 : 0.985,
    }),
    center: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.28,
        ease: EASE_OUT,
      },
    },
    exit: (dir: number) => ({
      y: shouldReduceMotion ? 0 : dir >= 0 ? -16 : 16,
      opacity: 0,
      filter: shouldReduceMotion ? "none" : "blur(4px)",
      scale: shouldReduceMotion ? 1 : 0.985,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.18,
        ease: EASE_DRAWER,
      },
    }),
  };

  return (
    <section
      id="testimonials"
      className="px-6 sm:px-12 lg:px-16 py-20 border-b border-border bg-card/10 relative select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Testimonials & Endorsements Carousel"
    >
      <div className="max-w-6xl 2xl:max-w-7xl w-full space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold tracking-widest uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>10 // RECOMMENDATIONS & ENDORSEMENTS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Peer & Manager Reviews. <span className="gold-gradient-text">Verified Collaboration.</span>
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl font-sans">
              Direct feedback from product managers, engineering colleagues, and academic supervisors.
            </p>
          </div>

          {/* Slide Progress / Counter */}
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-zinc-400 dark:text-zinc-500 pb-1">
            <span className="text-foreground font-semibold">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span>{String(total).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Stacked Deck Physical Container */}
        <div className="relative pt-2 pb-4">
          {/* Decorative Deck Silhouette 2 (Bottom layer) */}
          <div
            className="absolute inset-x-8 -bottom-1.5 h-full rounded-2xl border border-zinc-200/50 dark:border-zinc-800/40 bg-zinc-100/60 dark:bg-zinc-900/30 transform scale-[0.97] pointer-events-none transition-transform duration-300"
            aria-hidden="true"
          />

          {/* Decorative Deck Silhouette 1 (Middle layer) */}
          <div
            className="absolute inset-x-4 -bottom-0.5 h-full rounded-2xl border border-zinc-200/80 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/50 transform scale-[0.985] pointer-events-none transition-transform duration-300 shadow-xs"
            aria-hidden="true"
          />

          {/* Interactive Top Card */}
          <motion.div
            layout
            transition={{
              layout: { duration: 0.35, ease: [0.32, 0.72, 0, 1] },
            }}
            drag={shouldReduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              const swipe = info.offset.x;
              const velocity = info.velocity.x;
              if (swipe < -40 || velocity < -350) {
                next();
              } else if (swipe > 40 || velocity > 350) {
                prev();
              }
            }}
            className="relative p-6 sm:p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0A0F1A] shadow-md dark:shadow-xl min-h-[300px] flex flex-col justify-between overflow-hidden cursor-grab active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40"
          >
            {/* Reactive Kinetic Watermark Quote Icon */}
            <motion.div
              key={`quote-icon-${currentIndex}`}
              initial={shouldReduceMotion ? {} : { rotate: direction >= 0 ? 12 : -12, scale: 0.9, opacity: 0.2 }}
              animate={{ rotate: 0, scale: 1, opacity: 0.5 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="absolute top-6 right-6 pointer-events-none select-none"
              aria-hidden="true"
            >
              <Quote className="w-12 h-12 text-zinc-200 dark:text-zinc-800/70" />
            </motion.div>

            {/* Dynamic Quote Body with Staggered Kinetic Blur */}
            <div className="relative z-10 flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeTestimonial.id}
                  custom={direction}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-4"
                >
                  {activeTestimonial.verifiedLinkedIn && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-300 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 font-mono text-[11px] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Verified LinkedIn Recommendation</span>
                    </div>
                  )}

                  <blockquote className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 font-sans leading-relaxed whitespace-pre-line">
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Author info & Navigation Controls */}
            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              {/* Dynamic Author Metadata */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`meta-${activeTestimonial.id}`}
                  custom={direction}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-0.5"
                >
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
                  <p className="font-mono text-[11px] text-muted">
                    {activeTestimonial.relation}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Tactile Carousel Controls */}
              <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={prev}
                  className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-800 dark:hover:text-white transition-colors press-feedback focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Liquid Spring Pill Navigation */}
                <div className="flex items-center gap-1.5 px-2" role="tablist" aria-label="Testimonial slides">
                  {testimonialsData.map((_, idx) => {
                    const isActive = currentIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => paginate(idx > currentIndex ? 1 : -1, idx)}
                        className="relative h-4 flex items-center justify-center p-0.5 focus-visible:outline-none"
                        role="tab"
                        aria-selected={isActive}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      >
                        <div
                          className={`h-1.5 rounded-full transition-colors duration-200 ${
                            isActive
                              ? "w-7 bg-transparent"
                              : "w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-500"
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="active-testimonial-pill"
                              className="w-7 h-1.5 rounded-full bg-zinc-950 dark:bg-amber-400 shadow-xs"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 28,
                              }}
                            />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={next}
                  className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-800 dark:hover:text-white transition-colors press-feedback focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
