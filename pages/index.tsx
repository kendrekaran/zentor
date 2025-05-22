"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Hero2 } from "@/components/Hero2";
import ProjectsPage from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";


export default function Home() {

  return (
   <div className="overflow-x-hidden">
    <Hero2 />
    <Services />
    <Stats />
    <ProjectsPage />
    <Testimonials />
    <Contact />
    <Footer/>
   </div>
  );
}