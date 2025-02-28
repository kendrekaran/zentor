"use client";

import { useCallback, useEffect } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsPage from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), [])

  useEffect(() => {
    window.onbeforeunload = function () {
      resetWindowScrollPosition()
    }
  }, [resetWindowScrollPosition])


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