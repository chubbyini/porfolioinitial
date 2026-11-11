import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
