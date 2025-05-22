// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, Twitter, Linkedin, ArrowRight, X, Instagram, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion, AnimatePresence } from "framer-motion";
// import { Meteors } from "./magicui/meteors";
// import "./hero.css";
// import StarryBackground from "./magicui/StarryBackground";

// export default function HeroSection() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "Services", href: "#services" },
//     { name: "Portfolio", href: "#portfolio" },
//     { name: "Testimonials", href: "#testimonials" },
//     { name: "Contact", href: "#contact" }
//   ];

  
//   useEffect(() => {
//     document.documentElement.classList.add('dark');
//     localStorage.setItem('theme', 'dark');
//   }, []);

  
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
      
      
//       const sections = navItems.map(item => item.href.substring(1));
      
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
          
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [navItems]);

  
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsMenuOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

  
//   useEffect(() => {
//     const handleClickOutside = (event: { target: any; }) => {
//       const target = event.target;
//       if (isMenuOpen && !target.closest('header')) {
//         setIsMenuOpen(false);
//       }
//     };

//     if (isMenuOpen) {
//       document.addEventListener('click', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [isMenuOpen]);

//   const handleNavClick = (href: string) => {
//     setIsMenuOpen(false);
//     const targetId = href.substring(1);
//     const element = document.getElementById(targetId);
    
//     if (element) {
      
//       const yOffset = -80; 
//       const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
//       window.scrollTo({
//         top: y,
//         behavior: 'smooth'
//       });
      
//       setActiveSection(targetId);
//     }
//   };

//   const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), []);

//   useEffect(() => {
//     window.onbeforeunload = function () {
//       resetWindowScrollPosition();
//     };
//   }, [resetWindowScrollPosition]);

  
//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: 20 }
//   };

//   const staggerContainer = {
//     animate: {
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

  
//   const bgAnimation = {
//     animate: {
//       scale: [1, 1.05, 1],
//       opacity: [0.8, 0.85, 0.8],
//       transition: {
//         duration: 8,
//         ease: "easeInOut",
//         repeat: Infinity,
//         repeatType: "reverse"
//       }
//     }
//   };

  
//   const glowAnimation = {
//     animate: {
//       opacity: [0.3, 0.5, 0.3],
//       transition: {
//         duration: 5,
//         ease: "easeInOut",
//         repeat: Infinity,
//         repeatType: "reverse"
//       }
//     }
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       id="home"
//       className="flex flex-col min-h-screen bg-[#00121E]  relative text-white" 
//     >
      
//       <div
//         className="absolute inset-0 z-0  pointer-events-none"
//       >
//         <StarryBackground />
//       </div>
      
//       {/* <header className="fixed top-0 z-50 w-full transition-all duration-300">
//         <motion.div 
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-14 items-center justify-between"
//         >
          
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//             className="flex items-center gap-2"
//           >
//             <div className="rounded-full p-2 shadow-lg bg-[#00EA6F]/20 shadow-[#00EA6F]/20">
//               <Image
//                 src="/logo1.svg"
//                 alt="Logo icon"
//                 width={24}
//                 height={24}
//                 className="object-contain"
//                 priority
//               />
//             </div>
//             <span className="font-semibold text-lg text-white">Zentor</span>
//           </motion.div>

          
//           <div className="flex items-center space-x-4 md:space-x-6">
//             <nav className="hidden md:flex items-center space-x-1 lg:space-x-6">
//               {navItems.map((item) => (
//                 <motion.button
//                   key={item.name}
//                   whileHover={{ scale: 1.05 }}
//                   onClick={() => handleNavClick(item.href)}
//                   className={`relative px-2 py-1 text-sm lg:text-base font-medium transition-colors ${
//                     activeSection === item.href.substring(1)
//                       ? 'text-[#00EA6F]'
//                       : 'text-gray-300 hover:text-white'
//                   }`}
//                 >
//                   {item.name}
//                   {activeSection === item.href.substring(1) && (
//                     <motion.span
//                       layoutId="activeSection"
//                       className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00EA6F]"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   )}
//                 </motion.button>
//               ))}
//             </nav>

            
//             <div className="flex items-center gap-3">
              
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setIsMenuOpen(!isMenuOpen);
//                 }}
//                 className="md:hidden flex items-center justify-center rounded-full h-9 w-9 transition-all duration-300 bg-gray-800 text-white"
//               >
//                 {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//                 <span className="sr-only">Toggle menu</span>
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>

        
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div 
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden fixed inset-x-0 top-[72px] overflow-hidden backdrop-blur-md bg-[#00121E]/95 border-b border-gray-800/50"
//             >
//               <motion.nav 
//                 variants={staggerContainer}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 className="max-w-7xl mx-auto py-4 px-6 flex flex-col space-y-4"
//               >
//                 {navItems.map((item) => (
//                   <motion.button
//                     key={item.name}
//                     variants={fadeInUp}
//                     whileHover={{ x: 5 }}
//                     onClick={() => handleNavClick(item.href)}
//                     className={`flex justify-between items-center py-2 text-base font-medium transition-all duration-300 text-left ${
//                       activeSection === item.href.substring(1)
//                         ? 'text-[#00EA6F]'
//                         : 'text-gray-300'
//                     }`}
//                   >
//                     {item.name}
//                     {activeSection === item.href.substring(1) && (
//                       <ChevronDown className="h-4 w-4" />
//                     )}
//                   </motion.button>
//                 ))}

                
//                 <div className="flex gap-4 pt-4 border-t border-gray-700/30 mt-2">
//                   {[
//                     { Icon: Twitter, href: "https://x.com/ZentorHQ", label: "Twitter" },
//                     { Icon: Instagram, href: "https://www.instagram.com/zentor.in/", label: "Instagram" },
//                     { Icon: Linkedin, href: "https://www.linkedin.com/company/zentorhq/", label: "LinkedIn" },
//                   ].map(({ Icon, href, label }, index) => (
//                     <Link
//                       key={index}
//                       href={href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={label}
//                     >
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         className="rounded-full h-8 w-8 border-gray-700 text-gray-300 hover:bg-[#00EA6F]/20 hover:border-[#00EA6F]/50 hover:text-[#00EA6F] transition-all duration-300"
//                       >
//                         <Icon className="h-4 w-4" />
//                       </Button>
//                     </Link>
//                   ))}
//                 </div>
//               </motion.nav>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header> */}

      
//       <motion.main 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//         className="flex-1 pt-28 sm:pt-32 relative z-10 container mx-auto px-4 text-center max-w-6xl"
//       >
        
//         <motion.div 
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//           className="flex justify-center items-center mb-6 sm:mb-12 mt-4 sm:mt-8"
//         >
//           <div className="relative px-6 py-2 rounded-full bg-gray-800/50 text-gray-300 backdrop-blur-sm">
//             <motion.span 
//               animate={{
//                 opacity: [0.2, 0.5, 0.2],
//                 background: [
//                   "linear-gradient(90deg, rgba(0,234,111,0.2) 0%, rgba(0,0,0,0) 50%, rgba(0,234,111,0.2) 100%)",
//                   "linear-gradient(90deg, rgba(0,234,111,0.3) 0%, rgba(0,0,0,0) 50%, rgba(0,234,111,0.3) 100%)",
//                   "linear-gradient(90deg, rgba(0,234,111,0.2) 0%, rgba(0,0,0,0) 50%, rgba(0,234,111,0.2) 100%)"
//                 ]
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 repeatType: "reverse"
//               }}
//               className="absolute inset-0 rounded-full"
//             ></motion.span>
//             <div className="relative flex items-center text-sm">
//               <span className="text-gray-300">Hello There </span>
//               <span className="mx-2 inline-block w-1.5 h-1.5 rounded-full bg-[#00EA6F]"></span>
//               <span className="hidden sm:inline text-[#00EA6F]">Welcome to our digital solution agency</span>
//             </div>
//           </div>
//         </motion.div>

        
//         <div className="space-y-6 sm:space-y-8 relative">
//           <motion.div
//             animate={{
//               opacity: [0.3, 0.5, 0.3],
//               scale: [1, 1.1, 1],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               repeatType: "reverse"
//             }}
//             className="absolute -inset-10 sm:-inset-20 bg-gradient-radial from-[#00EA6F]/10 to-transparent rounded-full blur-3xl z-0"
//           />
          
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white relative z-10"
//           >
//             <span className="flex flex-row items-center justify-center gap-2 sm:gap-4">
//               <span>We're</span>
//               <motion.div 
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 8 }}
//               >
//                 <Image
//                   src="/logo3.svg"
//                   alt="Logo"
//                   width={200}
//                   height={80}
//                   className="w-[150px] sm:w-[200px] md:w-[300px] object-contain"
//                   priority
//                 /> 
//               </motion.div>
//             </span>
//             <motion.span 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="block mt-4 sm:mt-6"
//             >
//               <span className="relative">
//                 <span className="text-[#00EA6F]">Digital</span>
//               </span>{" "}
//               Solution Agency
//             </motion.span>
//           </motion.h1>
          
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7, duration: 0.5 }}
//             className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 relative z-10 backdrop-blur-sm py-2"
//           >
//             Elevating Brands with Innovative Web Development & Strategic Marketing Solutions
//           </motion.p>
          
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.5 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:pt-8 relative z-10"
//           >
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full sm:w-auto"
//             >
//               <a href="https://forms.gle/oqfxoDubNU8UMSwv9" target="_blank" rel="noopener noreferrer" className="block w-full">
//                 <Button className="w-auto sm:w-auto bg-[#00EA6F] text-black hover:bg-[#00EA6F]/90 hover:shadow-lg hover:shadow-[#00EA6F]/20 rounded-md px-4 sm:px-8 py-3 text-base sm:text-lg font-medium group transition-all duration-300">
//                   <span>Book a Consultation</span>
//                   <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
//                 </Button>
//               </a>
//             </motion.div>
            
//             <div className="flex gap-4 justify-center">
//               {[
//                 { Icon: Twitter, href: "https://x.com/ZentorHQ", label: "Twitter" },
//                 { Icon: Instagram, href: "https://www.instagram.com/zentor.in/", label: "Instagram" },
//                 { Icon: Linkedin, href: "https://www.linkedin.com/company/zentorhq/", label: "LinkedIn" },
//               ].map(({ Icon, href, label }, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Link
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={label}
//                   >
//                     <Button
//                       variant="outline"
//                       size="icon"
//                       className="rounded-full border-gray-800 text-white hover:bg-[#00EA6F]/20 hover:border-[#00EA6F] hover:text-[#00EA6F] transition-all duration-300"
//                     >
//                       <Icon className="h-5 w-5" />
//                     </Button>
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </motion.main>
//     </motion.div>
//   );
// }