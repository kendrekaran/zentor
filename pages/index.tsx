import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import ProjectsPage from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
   <div>
    <HeroSection />
    <Services />
    <ProjectsPage />
    <Testimonials />
    <Contact />
   </div>
  );
}
