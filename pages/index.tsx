"use client";

import { useEffect, useLayoutEffect } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsPage from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

// Create a custom hook that works like useLayoutEffect in the browser and useEffect during SSR
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Home() {
  // First pass - handle immediate scroll on mount
  useIsomorphicLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Second pass - handle scroll after everything is loaded
  useEffect(() => {
    // This ensures the scroll happens after all resources are loaded
    if (document.readyState === 'complete') {
      window.scrollTo(0, 0);
    } else {
      const handleLoad = () => window.scrollTo(0, 0);
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
    
    // Also handle route changes if you're using Next.js router
    const handleRouteChange = () => window.scrollTo(0, 0);
    
    // If you're using Next.js App Router
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