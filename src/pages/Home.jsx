import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { EducationSection } from "../components/EducationSection";
import { CertificationsSection } from "../components/CertificationsSection";
import { ResearchSection } from "../components/ResearchSection";
import { ExperienceSection } from "../components/ExperienceSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme & Background */}
      <ThemeToggle />
      <StarBackground />

      {/* Sidebar Navbar */}
      <Navbar />

      {/* Main Content with left padding for sidebar */}
      <div className="md:pl-56">
        <main>
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <CertificationsSection />
          <ResearchSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};
