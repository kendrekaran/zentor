import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/zentorhq/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/ZentorHQ", label: "Twitter" }
  ];

  return (
    <footer className="w-full py-8 bg-gray-50 dark:bg-[#00121E] border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Social links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transform transition-transform hover:scale-110"
              >
                <Icon size={24} className="hover:rotate-12 transition-transform duration-200" />
              </a>
            ))}
          </div>

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