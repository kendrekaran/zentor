"use client";

import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Hero2 } from "@/components/Hero2";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import { MarqueeDemo } from "@/components/Test";


export default function Home() {

  return (
   <div className="overflow-x-hidden">
    <Hero2 />
    <Services />
    <Stats />
    <CTA />
    <MarqueeDemo />
    <Contact />
    <Footer/>
   </div>
  );
}