"use client";

import { useState, useEffect } from "react";
import { Logo } from "./logo"; 
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react"; 

const navLinks = [
  { name: "Process", href: "/process" },
  { name: "Services", href: "/services" },
  { name: "Plans", href: "/plans" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 max-w-6xl mx-auto my-4 rounded-xl  md:px-6",
        "bg-[#0D0D0F] border-b border-neutral-800", 
        isScrolled ? "backdrop-blur-sm" : "" 
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact" 
            className="bg-[#00EA6F] hover:bg-[#00684D] text-black px-5 py-2 rounded-lg flex items-center transition-colors duration-200 text-sm font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0D0D0F]/95 backdrop-blur-md border-b border-neutral-700 py-4 shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors py-2 text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[#00684D] hover:bg-[#003526] text-white px-5 py-2.5 rounded-lg inline-flex items-center justify-center transition-colors duration-200 text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in touch <ArrowUpRight size={18} className="ml-1.5" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        )}
    </nav>
  );
};
