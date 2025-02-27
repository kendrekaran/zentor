"use client";

import { useEffect, useLayoutEffect } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsPage from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Home() {
  useIsomorphicLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {

    if (document.readyState === 'complete') {
      window.scrollTo(0, 0);
    } else {
      const handleLoad = () => window.scrollTo(0, 0);
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
    

    const handleRouteChange = () => window.scrollTo(0, 0);
    

    if (window.history) {
      window.addEventListener('popstate', handleRouteChange);
      return () => window.removeEventListener('popstate', handleRouteChange);
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