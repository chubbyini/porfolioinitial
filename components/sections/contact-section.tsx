"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import {
  ArrowRight,
  Clock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { profileData } from "@/data/profile";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  projectType: z.string().min(2, "Please choose or specify a project type"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

// Native Zod resolver for React Hook Form (zero peer dependency issues)
const createZodResolver =
  (schema: typeof contactFormSchema) => async (values: Record<string, unknown>) => {
    const result = schema.safeParse(values);
    if (result.success) {
      return { values: result.data, errors: {} };
    }
    const errors: Record<string, { type: string; message: string }> = {};
    for (const issue of result.error.issues) {
      const field = String(issue.path[0] || "");
      if (field && !errors[field]) {
        errors[field] = { type: issue.code, message: issue.message };
      }
    }
    return { values: {}, errors };
  };

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: createZodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "Full-Stack Web Application",
      budget: "$2,000 - $5,000",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        // Trigger celebratory confetti
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.8 },
          colors: ["#C9A227", "#E6C766", "#FAF7EE", "#38BDF8"],
        });

        toast.success("Message dispatched successfully!", {
          description: "Thank you for reaching out. Inioluwa will reply within 24 hours.",
        });

        reset();
      } else {
        toast.error("Dispatch error", {
          description: result.error || "Could not send your message. Please try emailing directly.",
        });
      }
    } catch {
      toast.error("Network error", {
        description: "Please email inioluwaosibajo@gmail.com directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-6 sm:px-12 lg:px-16 py-20 border-b border-border bg-card/20 relative"
    >
      <div className="max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-gold-400 tracking-widest uppercase">
            10 // INITIATE CONTACT
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Let&apos;s build something <span className="gold-gradient-text">exceptional.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl font-sans">
            Have a product to ship, a logistics platform to architect, or an NLP pipeline to deploy?
            Send a brief below or email directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl border border-border bg-card/70 backdrop-blur-sm gold-card-glow shadow-sm space-y-5">
              <h3 className="font-display font-bold text-lg text-foreground">
                Direct Channels & Availability
              </h3>

              <div className="space-y-3 font-mono text-xs text-muted">
                <div className="flex items-start gap-3 p-3 rounded-xl border border-border bg-nautical-950/30">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground block font-bold">Email Address</span>
                    <a
                      href={`mailto:${profileData.socials.email}`}
                      className="text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      {profileData.socials.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl border border-border bg-nautical-950/30">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground block font-bold">Response Cadence</span>
                    <span>Within 24 hours guaranteed</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl border border-border bg-nautical-950/30">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground block font-bold">Base Location</span>
                    <span>Kaduna, Nigeria (Remote Worldwide)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl border border-border bg-nautical-950/30">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground block font-bold">Sojourner Studio Status</span>
                    <span className="text-emerald-400">Available for Q1 / Q2 Projects</span>
                  </div>
                </div>
              </div>

              {/* Socials Link Row */}
              <div className="pt-2 flex items-center gap-2">
                <Link
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl border border-border bg-card/60 text-xs font-mono text-center hover:border-gold-500/40 hover:text-gold-400 transition-colors press-feedback flex items-center justify-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl border border-border bg-card/60 text-xs font-mono text-center hover:border-gold-500/40 hover:text-gold-400 transition-colors press-feedback flex items-center justify-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 sm:p-8 rounded-2xl border border-border bg-card/70 backdrop-blur-sm gold-card-glow shadow-sm space-y-4"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-mono text-xs font-semibold text-foreground">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Ada Lovelace"
                    {...register("name")}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-nautical-950/40 text-foreground text-xs font-sans placeholder:text-muted/60 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  />
                  {errors.name && (
                    <p className="font-mono text-[11px] text-rose-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-mono text-xs font-semibold text-foreground">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="ada@example.com"
                    {...register("email")}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-nautical-950/40 text-foreground text-xs font-sans placeholder:text-muted/60 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  />
                  {errors.email && (
                    <p className="font-mono text-[11px] text-rose-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Project Type */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="projectType"
                    className="font-mono text-xs font-semibold text-foreground"
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    {...register("projectType")}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-nautical-950/40 text-foreground text-xs font-sans focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  >
                    <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                    <option value="Logistics & Dispatch System">Logistics & Dispatch System</option>
                    <option value="Applied AI & NLP Pipeline">Applied AI & NLP Pipeline</option>
                    <option value="Performance Audit & Architecture">
                      Performance Audit & Architecture
                    </option>
                    <option value="Contract / Senior Web Role">Contract / Senior Web Role</option>
                    <option value="Other Project Inquiry">Other Project Inquiry</option>
                  </select>
                  {errors.projectType && (
                    <p className="font-mono text-[11px] text-rose-500">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                {/* Estimated Budget */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="budget"
                    className="font-mono text-xs font-semibold text-foreground"
                  >
                    Estimated Scope / Budget
                  </label>
                  <select
                    id="budget"
                    {...register("budget")}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-nautical-950/40 text-foreground text-xs font-sans focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                  >
                    <option value="< $2,000">Sprint (&lt; $2,000)</option>
                    <option value="$2,000 - $5,000">Standard Project ($2,000 - $5,000)</option>
                    <option value="$5,000 - $15,000">Enterprise System ($5,000 - $15,000)</option>
                    <option value="Ongoing Retainer">Ongoing Studio Retainer</option>
                    <option value="To be discussed">To be discussed</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="font-mono text-xs font-semibold text-foreground">
                  Project Details / Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Outline your timeline, current architecture, and what problem you need solved..."
                  {...register("message")}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-nautical-950/40 text-foreground text-xs font-sans placeholder:text-muted/60 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                />
                {errors.message && (
                  <p className="font-mono text-[11px] text-rose-500">{errors.message.message}</p>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-nautical-950 font-display font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-gold-sm hover:shadow-gold-md disabled:opacity-60 transition-all duration-150 press-feedback"
              >
                {isSubmitting ? (
                  <span>Dispatching Message...</span>
                ) : (
                  <>
                    <span>Dispatch Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
