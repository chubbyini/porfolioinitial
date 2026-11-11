import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ResearchSection } from "@/components/sections/research-section";
import { ServicesSection } from "@/components/sections/services-section";
import { BlogSection } from "@/components/sections/blog-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ResearchSection />
      <ServicesSection />
      <BlogSection />
      <TestimonialsSection />
      <ContactSection />

      {/* Global Footer */}
      <footer className="px-6 sm:px-12 lg:px-16 py-12 border-t border-border bg-card/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
        <div>
          <span>© {new Date().getFullYear()} Inioluwa Daniel Osibajo.</span>
          <span className="text-gold-400/90 ml-2">Built with Sojourner craft.</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/chubbyini"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/inioluwa-osibajo-b23531238/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="https://dev.to/osibajo_inioluwa_74301be0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors"
          >
            Dev.to
          </a>
          <span>•</span>
          <a
            href="https://medium.com/@inioluwaosibajo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors"
          >
            Medium
          </a>
        </div>
      </footer>
    </div>
  );
}
