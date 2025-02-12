import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollingBanner from "./ScrollingBanner";

export default function HeroSection() {
  const [isDark, setIsDark] = useState(false);

  const navItems = ["Home", "Services", "Testimonials", "Portfolio", "About"];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDark(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', 'dark');
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDark ? 'bg-[#00121E]' : 'bg-gradient-to-b from-white to-purple-50'}`}>
      {/* Header - Improved mobile padding */}
      <header className={`top-0 z-50 w-full p-4   px-8 sm:px-6 lg:px-8 ${
        isDark ? 'bg-[#00121E]/80 ' : 'bg-white/80 '
      } backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto flex h-16  md:px-24 sm:h-20 items-center justify-between">
          {/* Logo section - Responsive sizes */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className={`rounded-full p-2 sm:p-2.5 shadow-lg ${isDark ? 'shadow-purple-600/20' : 'shadow-purple-200'}`}>
              <Image
                src="/logo1.svg"
                alt="Analytics illustration"
                width={24}
                height={24}
                className="sm:w-[30px] sm:h-[30px] object-contain drop-shadow-xl"
                priority
              />
            </div>
            <Image
              src={isDark ? "/logo4.svg" : "/logo2.svg"}
              alt="Analytics illustration"
              width={100}
              height={100}
              className="w-[100px] sm:w-[130px] object-contain drop-shadow-xl"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className={`text-sm lg:text-base font-medium transition-colors hover:text-[#00EA6F] relative group ${
                    isDark ? 'text-white' : 'text-black'
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00EA6F] transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="text-black bg-[#00EA6F] flex items-center justify-center rounded-full h-10 w-10 hover:bg-[#00EA6F]/80"
              >
                {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                <span className="sr-only">Toggle theme</span>
              </button>

              
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Improved animation */}
        
      </header>

      {/* Main Content - Improved responsive layout */}
      <main className={`flex-1 ${isDark ? 'text-white' : 'text-black'}`}>
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center py-8 sm:py-12 lg:py-20 gap-8 lg:px-24 lg:gap-12">
            {/* Mobile-only heading */}
            <div className="lg:hidden order-1 w-full space-y-6 flex flex-col py-4">
              <div className="space-y-4 text-center">
                <div className={`inline-flex items-center px-2  rounded-full ${isDark ? 'text-white' : 'text-black'}`}>
                  <h2 className="text-sm sm:text-xl font-semibold">Hello There, <span>We&apos;re</span></h2>
                </div>
                <div className="text-2xl md:text-4xl font-extrabold space-y-4 ">
                  <div className="flex justify-center items-center gap-2">
                    
                    <Image
                      src="/logo3.svg"
                      alt="Analytics illustration"
                      width={200}
                      height={200}
                      className="w-[200px] sm:w-[200px] object-contain drop-shadow-xl"
                      priority
                    />
                  </div>
                  <div>Digital Solution Agency</div>
                </div>
              </div>
            </div>

            {/* Hero Image - Responsive sizing */}
            <div className="order-2 lg:order-2 w-full lg:w-1/2">
              <div>
                <Image
                  src="/Hero_Logo.svg"
                  alt="Analytics illustration"
                  width={600}
                  height={600}
                  className="w-full max-w-[350px] sm:max-w-[500px] mx-auto object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>

            {/* Content Section - Responsive text and spacing */}
            <div className="order-3 lg:order-1 w-full lg:w-1/2 space-y-6">
              {/* Desktop-only heading */}
              <div className="hidden lg:block space-y-4 text-center sm:text-start">
                <div className={`inline-flex items-center px-2  rounded-full ${isDark ? 'text-white' : 'text-black'}`}>
                  <h2 className="text-lg sm:text-xl font-normal">Hello There, We&apos;re</h2>
                </div>
                <div className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold space-y-2">
                  <div className="flex justify-center pb-2 sm:justify-start items-center">
                    <Image
                      src="/logo3.svg"
                      alt="Analytics illustration"
                      width={200}
                      height={200}
                      className="w-[180px] sm:w-[200px] lg:w-[400px] object-contain drop-shadow-xl"
                      priority
                    />
                  </div>
                  <div className="text-4xl py-2">Digital Solution Agency</div>
                  <div className="text-lg font-medium ">Elevating Brands with Web & Marketing Solutions</div>
                </div>
              </div>

              {/* Social Links - Responsive spacing */}
              <div className="flex gap-3 justify-center sm:justify-start sm:gap-4">
                {[
                  { Icon: Twitter, href: "https://twitter.com" },
                  { Icon: () => (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335 .157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ), href: "https://wa.me/" },
                  { Icon: Linkedin, href: "https://linkedin.com" },
                ].map(({ Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className={`transition-all duration-300 rounded-full group-hover:bg-[#00EA6F] group-hover:text-black group-hover:border-[#00EA6F] ${
                        isDark ? 'border-gray-700 text-white' : ''
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </Button>
                  </a>
                ))}
              </div>

              {/* CTA Buttons - Responsive sizing */}
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start sm:gap-4 pt-4">
              <div
              
              >
                <button className="group relative overflow-hidden bg-[#00EA6F] text-black rounded-full px-6 sm:px-8 lg:px-10 py-3 shadow-lg hover:shadow-xl hover:shadow-[#00EA6F]/20 transition-shadow duration-300">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00EA6F]/0 via-white/20 to-[#00EA6F]/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-full animate-ping bg-[#00EA6F]/20" />
                  </div>
                  
                  {/* Content wrapper */}
                  <div className="relative flex items-center justify-center gap-2 font-bold">
                    <span className="text-base sm:text-lg">Book a meet</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                  
                  {/* Background glow effect */}
                  <div className="absolute inset-0 -z-10 bg-[#00EA6F] rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                </button>
              </div>
            </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollingBanner />
    </div>
  );
}