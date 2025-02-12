import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun, Monitor, Smartphone, Paintbrush, Megaphone, Twitter, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollingBanner from "./ScrollingBanner";

export default function HeroSection() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "Services", "Testimonials", "Portfolio", "About"];
  
  const services = [
    { icon: Monitor, text: "Website Development" },
    { icon: Smartphone, text: "App Development" },
    { icon: Paintbrush, text: "Product Designing" },
    { icon: Megaphone, text: "Digital Advertising" },
  ];

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setIsDark(savedTheme === 'dark');
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return (
    <div className={`flex flex-col ${isDark ? ' bg-[#00121E]' : 'bg-gradient-to-b from-white to-purple-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 w-full px-4 sm:px-12 md:px-24 lg:px-48 border-b ${
        isDark ? 'bg-[#00121E]/80 border-gray-700' : 'bg-white/80 border-gray-200'
      } backdrop-blur-md`}>
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`rounded-full p-2.5 shadow-lg ${isDark ? 'shadow-purple-600/20' : 'shadow-purple-200'}`}>
              <Image
                src="/logo1.svg"
                alt="Analytics illustration"
                width={30}
                height={30}
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
            { isDark ? (
              <Image
              src="/logo4.svg"
              alt="Analytics illustration"
              width={130}
              height={130}
              className="object-contain drop-shadow-xl"
              priority
            />
            ) : (
              <Image
              src="/logo2.svg"
              alt="Analytics illustration"
              width={130}
              height={130}
              className="object-contain drop-shadow-xl"
              priority
            />
            )}
            
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-16">
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className={`text-base font-medium transition-colors hover:text-[#00EA6F] relative group ${
                    isDark ? 'text-white' : 'text-black'
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00EA6F] transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="text-black bg-[#00EA6F] rounded-full h-8 w-8 hover:bg-[#00EA6F]/80"
            >
              {isDark ? <Sun className="h-4 w-4 " /> : <Moon className="h-4 w-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${isDark ? 'text-white' : 'text-black'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden absolute left-0 right-0 ${
            isDark ? 'bg-[#00121E] border-t border-gray-700' : 'bg-white border-t'
          }`}>
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className={`py-2 text-base font-medium transition-colors hover:text-[#00EA6F] ${
                    isDark ? 'text-white' : 'text-black'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className={`flex-1 ${isDark ? 'text-white' : 'text-black'}`}>
        <section className="container relative">
          <div className="flex flex-col lg:flex-row items-center py-8 sm:py-16 px-4 sm:pl-12 md:pl-24 lg:pl-48 lg:pt-24 gap-8">
            {/* Content sections remain the same but with dark mode classes */}
            <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end relative w-full lg:w-[60vw]">
              <div className={`absolute flex justify-center items-center inset-0 ${
                isDark ? 'bg-gradient-to-r from-purple-900/20 to-purple-800/20' : 'bg-gradient-to-r from-purple-200 to-purple-100'
              } rounded-full blur-3xl opacity-20`} />
              <div className="relative w-full max-w-[400px] sm:w-[2000px] aspect-square">
                <Image
                  src="/Hero_Logo.svg"
                  alt="Analytics illustration"
                  width={700}
                  height={700}
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>

            <div className="order-2 lg:order-1 flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className={`inline-flex items-center leading-loose px-2 py-2 rounded-full ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  <h2 className="text-xl font-semibold">Hello There !</h2>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold">
                  <div className="flex space-x-6">
                    <div>We're</div>
                    <div className="mt-1">
                      <Image
                        src="/logo3.svg"
                        alt="Analytics illustration"
                        width={300}
                        height={300}
                        className="object-contain drop-shadow-xl"
                        priority
                      />
                    </div>
                  </div>
                  Freelance Agency
                  <br />
                  Based in India.
                </div>
                <p className={`text-sm pr-24 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Transforming your concepts into innovative, impactful, and visually captivating solutions that drive
                  results and bring your ideas to life in the most creative and meaningful ways.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
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

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-[#00EA6F] text-black rounded-full hover:bg-[#00EA6F]/90 shadow-lg  text-lg px-6 sm:px-8">
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  className={`text-lg px-6 sm:px-8 rounded-full hover:bg-purple-50 border-2 hover:border-[#00EA6F] ${
                    isDark ? 'border-gray-700 text-white hover:bg-gray-800' : ''
                  }`}
                >
                  About Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollingBanner />

    </div>
  );
}