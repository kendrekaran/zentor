"use client"
import React, { useEffect } from 'react';

const Footer = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <footer className="w-full py-8 bg-gray-50 dark:bg-[#00121E] border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-center md:gap-44 items-center space-y-6 md:space-y-0">
         
          {/* Company logo and copyright */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 dark:text-gray-400 text-sm">© 2025</span>
            <a 
              href="#" 
              className="text-[#00EA6F] dark:text-[#00EA6F] font-bold text-lg hover:text-[#00EA6F] dark:hover:text-white transition-colors duration-200"
            >
              ZENTOR
            </a>
          </div>

          {/* Rights reserved */}
          <div className="text-gray-600 dark:text-gray-400 text-sm font-medium tracking-wide">
            ALL RIGHTS RESERVED
          </div>
        </div>

        {/* Additional footer links - Optional */}
       
      </div>
    </footer>
  );
};

export default Footer;