"use client";

import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import {
  Clock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  ShieldCheck,
} from "lucide-react";
import { profileData } from "@/data/profile";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  projectType: z.string().min(2, "Please choose or specify an inquiry type"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

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
      budget: "Project Collaboration",
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
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.8 },
          colors: ["#B45309", "#D97706", "#F59E0B", "#18181B"],
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
      <div className="max-w-7xl 2xl:max-w-[1600px] w-full space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="font-mono text-xs text-amber-700 dark:text-amber-400 font-semibold tracking-widest uppercase">
            10 // INITIATE CONTACT
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            Let&apos;s build something <span className="gold-gradient-text">exceptional.</span>
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-xl font-sans">
            Have a project in mind, a question about my work, or an engineering role to discuss?
            Send a message below or email directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-5">
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm space-y-5">
              <h3 className="font-display font-bold text-lg text-foreground">
                Direct Channels & Availability
              </h3>

              <div className="space-y-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">
                <div className="flex items-start gap-3 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40">
                  <Mail className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground block font-bold">Email Address</span>
                    <a
                      href={`mailto:${profileData.socials.email}`}
                      className="text-amber-700 dark:text-amber-300 hover:underline font-semibold"
                    >
                      {profileData.socials.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40">
                  <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground block font-bold">Response Cadence</span>
                    <span>Usually within 24 hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40">
                  <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground block font-bold">Base Location</span>
                    <span>Nigeria (Available for Global Remote)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground block font-bold">Engineering Availability</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Open for Web Roles & Projects</span>
                  </div>
                </div>
              </div>

              {/* Socials Link Row */}
              <div className="pt-2 flex items-center gap-2">
                <Link
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono text-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors press-feedback flex items-center justify-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </Link>
                <Link
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-xs font-mono text-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors press-feedback flex items-center justify-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 xl:col-span-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm space-y-4"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 text-foreground text-xs font-sans placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-amber-600 dark:focus:border-amber-400 focus:ring-1 focus:ring-amber-600 dark:focus:ring-amber-400 transition-all shadow-sm"
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 text-foreground text-xs font-sans placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-amber-600 dark:focus:border-amber-400 focus:ring-1 focus:ring-amber-600 dark:focus:ring-amber-400 transition-all shadow-sm"
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
                    Inquiry Type *
                  </label>
                  <select
                    id="projectType"
                    {...register("projectType")}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 text-foreground text-xs font-sans focus:outline-none focus:border-amber-600 dark:focus:border-amber-400 focus:ring-1 focus:ring-amber-600 dark:focus:ring-amber-400 transition-all shadow-sm"
                  >
                    <option value="Full-Stack Web Application">Frontend / Web Application</option>
                    <option value="UI Engineering & Design Systems">UI Engineering & Design Systems</option>
                    <option value="Logistics & Dispatch System">Logistics & Dispatch Interface</option>
                    <option value="Applied NLP Pipeline">Applied NLP & AI Pipeline</option>
                    <option value="Software Engineer Role">Software Engineer Role / Contract</option>
                    <option value="General Collaboration">General Collaboration</option>
                  </select>
                  {errors.projectType && (
                    <p className="font-mono text-[11px] text-rose-500">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>

                {/* Scope */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="budget"
                    className="font-mono text-xs font-semibold text-foreground"
                  >
                    Scope / Engagement
                  </label>
                  <select
                    id="budget"
                    {...register("budget")}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 text-foreground text-xs font-sans focus:outline-none focus:border-amber-600 dark:focus:border-amber-400 focus:ring-1 focus:ring-amber-600 dark:focus:ring-amber-400 transition-all shadow-sm"
                  >
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                    <option value="Contract Engineering">Contract / Part-Time</option>
                    <option value="Open Source Tooling">Open Source / Sojourner Builds</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="font-mono text-xs font-semibold text-foreground">
                  Message Details *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about what you're building, key requirements, or what problem needs solving..."
                  {...register("message")}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 text-foreground text-xs font-sans placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-amber-600 dark:focus:border-amber-400 focus:ring-1 focus:ring-amber-600 dark:focus:ring-amber-400 transition-all shadow-sm"
                />
                {errors.message && (
                  <p className="font-mono text-[11px] text-rose-500">{errors.message.message}</p>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300 font-display font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm disabled:opacity-60 transition-all duration-150 press-feedback"
              >
                {isSubmitting ? (
                  <span>Dispatching Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
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
