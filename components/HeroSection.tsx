"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Moon, Sun, Twitter, Linkedin, ArrowRight, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollingBanner from "./ScrollingBanner";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="home"
      className={`flex flex-col min-h-screen ${isDark ? 'bg-[#00121E]' : 'bg-gradient-to-b from-gray-50 to-white'}`}
    >
      {/* Header */}
      <header className={`fixed top-0 z-50 w-full p-4 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-[#00121E]/90' : 'bg-white/90'
      } backdrop-blur-md`}>
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto  px-0 md:px-16 flex h-14 sm:h-16 items-center justify-between"
        >
          {/* Logo section */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className={`rounded-full p-2 sm:p-2.5 shadow-lg ${isDark ? 'shadow-purple-400/20' : 'shadow-purple-200'}`}>
              <Image
                src="/logo1.svg"
                alt="Logo icon"
                width={24}
                height={24}
                className="sm:w-[26px] sm:h-[26px] object-contain"
                priority
              />
            </div>
            <Image
              src={isDark ? "/logo4.svg" : "/logo2.svg"}
              alt="Logo text"
              width={100}
              height={100}
              className="w-[90px] sm:w-[110px] object-contain"
              priority
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm lg:text-base font-medium transition-colors hover:text-[#00EA6F] relative group ${
                    isDark ? 'text-white' : 'text-black'
                  }`}
                >
                  {item.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-[#00EA6F]"
                    whileHover={{ width: "100%" }}
                    initial={{ width: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className={`flex items-center justify-center rounded-full h-9 w-9 transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white hover:scale-110' 
                    : 'bg-gray-100 hover:bg-gray-200 text-black hover:scale-110'
                }`}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle theme</span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="md:hidden flex items-center justify-center rounded-full h-9 w-9 transition-all duration-300 bg-[#00EA6F] text-black hover:bg-[#00EA6F]/90 hover:scale-110"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-x-0 top-[72px] bg-white/90 dark:bg-[#00121E]/90 backdrop-blur-md"
            >
              <motion.nav 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                exit="exit"
                className="max-w-7xl mx-auto py-6 px-6 flex flex-col space-y-6"
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    variants={fadeInUp}
                    whileHover={{ x: 10, color: "#00EA6F" }}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-base font-medium transition-all duration-300 ${
                      isDark ? 'text-white' : 'text-black'
                    } text-left`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      
      {/* Main Content */}
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`flex-1 ${isDark ? 'text-white' : 'text-black'} pt-24 sm:pt-28`}
      >
        <motion.section className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center py-8 sm:py-12 lg:py-20 gap-8 lg:gap-12 lg:px-8">
            {/* Mobile-only heading */}
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="lg:hidden order-1 w-full space-y-6"
            >
              <div className="space-y-4 text-center">
                <h2 className="text-sm sm:text-base font-semibold text-gray-600 dark:text-gray-400">
                  Hello There, We&apos;re
                </h2>
                <motion.div className="space-y-4">
                  <div className="flex justify-center">
                    <Image
                      src="/logo3.svg"
                      alt="Logo"
                      width={200}
                      height={200}
                      className="w-[180px] sm:w-[200px] object-contain hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold">
                    Digital Solution Agency
                  </h1>
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              className="order-2 lg:order-2 w-full lg:w-1/2"
            >
              <div className="relative group">
                <motion.div 
                 
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute -inset-1 -mt-8 md:-mt-12 bg-gradient-to-r from-[#00EA6F]/10 to-[#53fba2]/10 w-[35w] h-[50vh] md:h-[55vh] rounded-full blur"
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/Hero_Logo.svg"
                    alt="Hero illustration"
                    width={600}
                    height={600}
                    className="relative w-full max-w-[320px] sm:max-w-[450px] mx-auto object-contain"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="order-3 lg:order-1 w-full lg:w-1/2 space-y-8"
            >              
            {/* Desktop-only heading */}
              <div className="hidden lg:block space-y-6">
                <h2 className="text-lg font-semibold ml-1 text-gray-600 dark:text-gray-400 animate-fade-in">
                  Hello There, We&apos;re
                </h2>
                <div className="space-y-5">
                  <div>
                    <Image
                      src="/logo3.svg"
                      alt="Logo"
                      width={400}
                      height={400}
                      className="w-[280px] xl:w-[375px] object-contain hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                  <div className="space-y-3 ">
                    <h1 className="text-4xl xl:text-4xl font-bold text-black dark:text-gray-200">
                      Digital Solution Agency
                    </h1>
                    <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
                      Elevating Brands with Web & Marketing Solutions
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="flex gap-4 justify-center lg:justify-start"
              >
                {[
                  { Icon: Twitter, href: "https://x.com/ZentorHQ" },
                  { Icon: Instagram, href: "https://www.instagram.com/zentor.in/" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/zentorhq/" },
                ].map(({ Icon, href }, index) => (
                  <Link
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className={`transition-all duration-300 rounded-full group-hover:bg-[#00EA6F] group-hover:text-black group-hover:border-[#00EA6F] group-hover:scale-110 ${
                        isDark ? 'border-gray-800 text-white' : 'border-gray-200 text-gray-700'
                      }`}
                    >
                      <Icon className="h-5 w-5" /> {/* Slightly larger icons for better visibility */}
                    </Button>
                  </Link>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div 
                variants={fadeInUp}
                className="flex justify-center lg:justify-start pt-2"
              >
                <a href="https://forms.gle/oqfxoDubNU8UMSwv9">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden bg-[#00EA6F] text-black rounded-full px-6 sm:px-8 py-3 shadow-lg hover:shadow-xl hover:shadow-[#00EA6F]/20 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00EA6F]/0 via-white/20 to-[#00EA6F]/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-full animate-ping bg-[#00EA6F]/20" />
                  </div>
                  <div className="relative flex items-center justify-center gap-2 font-semibold">
                   <span className="text-base">Book a meet</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </motion.button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </motion.main>

      <ScrollingBanner />
    </motion.div>
  );
}