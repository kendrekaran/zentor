"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X,  } from "lucide-react"; 
import Image from "next/image";

const navLinks = [
  { name: "Process", href: "/process" },
  { name: "Services", href: "/services" },
  { name: "Plans", href: "/plans" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: { key: string; }) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-3 px-4 max-w-6xl mx-auto my-4 rounded-xl md:px-6 h-16 bg-[#0D0D0F] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo21.svg" 
            width={120} 
            height={120} 
            alt="logo"
            priority
          />
        </Link>

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

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact" 
            className="bg-[#00EA6F] hover:bg-[#00684D] text-black px-5 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0D0D0F] border border-neutral-700 rounded-b-xl shadow-lg">
          <div className="flex flex-col space-y-2 p-4">
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
              className="bg-[#00EA6F] hover:bg-[#00684D] text-black px-5 py-2.5 rounded-lg text-center transition-colors duration-200 text-sm font-medium mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};