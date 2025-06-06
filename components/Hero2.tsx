"use client";

import { StarsBackground } from "./magicui/stars-background";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "./magicui/navbar";

export const Hero2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      <Navbar />

      <motion.div
        className="absolute h-screen inset-0 z-0"
        initial={{ 
          opacity: 0, 
          scale: 1.1,
          background: `
            radial-gradient(ellipse at -5% 0%, rgba(0, 234, 111, 0.2) 0%, rgba(0, 18, 30, 0.8) 30%),
            radial-gradient(ellipse at 100% 100%, rgba(0, 234, 111, 0.3) 0%, rgba(0, 18, 30, 0.8) 30%),
            radial-gradient(ellipse at center, rgba(0, 18, 30, 0.5) 0%, rgba(0, 18, 30, 0.95) 50%),
            #004d38
          `
        }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          background: `
            radial-gradient(ellipse at -5% 0%, rgba(0, 234, 111, 0.4) 0%, rgba(0, 18, 30, 0.6) 25%),
            radial-gradient(ellipse at 100% 100%, rgba(0, 234, 111, 0.5) 0%, rgba(0, 18, 30, 0.6) 25%),
            radial-gradient(ellipse at center, rgba(0, 18, 30, 0.3) 0%, rgba(0, 18, 30, 0.9) 50%),
            #00684d
          `
        }}
        transition={{
          duration: 2,
          ease: "easeOut"
        }}
      />

      {/* Top fade mask */}
      <div 
        className="absolute -top-8 left-0 right-0 h-48 z-5 bg-gradient-to-t from-transparent to-[#00121E]"
      />

      {/* Stars animation */}
      <StarsBackground />

      {/* Bottom fade mask */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 z-5 bg-gradient-to-t from-[#00121E] via-[#00121E]/80 to-transparent"
      />

      {/* Content container */}
      <div className={cn(
        "relative z-10 max-w-5xl mx-auto px-4 md:pt-24 text-center transition-all duration-1000 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-white/20 bg-black/30 backdrop-blur-sm px-4 py-2 mb-8">
          <div className="mr-2 flex">
            <Image src="/logo1.svg" alt="logo1" width={16} height={16} />
          </div>
          <span className="text-sm text-white/90">Welcome to our digital solution agency</span>
        </div>

        {/* Main heading */}
       <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-loose mb-4">
        Innovative Web, Marketing & AI
        </h1>
        <div className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-loose mb-6">
        Automation for <span className="font-normal italic">Modern Brands</span>
        </div>

        {/* Subtext */}
        <p className="text-lg md:text-lg text-white/80 max-w-xl mx-auto mb-10">
          We craft high-impact digital experiences through cutting-edge web development and results-driven marketing strategies.
        </p>

              {/* Partner logos */}
        <div className="flex gap-4 justify-center mb-8">
            {[
            { Icon: Twitter, href: "https://x.com/ZentorHQ", label: "Twitter" },
            { Icon: Instagram, href: "https://www.instagram.com/zentor.in/", label: "Instagram" },
            { Icon: Linkedin, href: "https://www.linkedin.com/company/zentorhq/", label: "LinkedIn" },
            ].map(({ Icon, href, label }, index) => (
            <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                >
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[#00684D] text-white hover:bg-[#00EA6F]/20 hover:border-[#00EA6F] hover:text-[#00EA6F] transition-all duration-300"
                >
                    <Icon className="h-5 w-5" />
                </Button>
                </Link>
            </motion.div>
            ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/contact" 
            className="bg-[#00EA6F] hover:bg-[#00684D] text-black px-5 py-3 rounded-lg flex items-center transition-colors duration-200 text-sm font-medium"
          >
            Get in touch <ArrowUpRight size={18} className="ml-1.5" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </div>
  );
};