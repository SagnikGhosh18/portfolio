import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ApproachSection />
        <ContactSection />
      </main>
    </>
  );
}
