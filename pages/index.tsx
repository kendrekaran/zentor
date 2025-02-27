"use client";

import { useEffect } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsPage from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  // Handle scroll to top on page load/refresh
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== "undefined") {
      // Use requestAnimationFrame to ensure the browser has painted before scrolling
      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto' // Using 'auto' instead of 'smooth' for immediate effect
        });
      });
    }
  }, []);

  return (
   <div>
    <HeroSection />
    <Services />
    <Stats />
    <ProjectsPage />
    <Testimonials />
    <Contact />
    <Footer/>
   </div>
  );
}