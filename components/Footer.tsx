import React from 'react';
import { Button } from './ui/button';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {

  return (
    <footer className="w-full py-8 bg-[#00121E] border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-center md:gap-44 items-center space-y-6 md:space-y-0">
         
          {/* Company logo and copyright */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">© 2025</span>
            <a 
              href="#" 
              className="text-[#00EA6F] dark:text-[#00EA6F] font-bold text-lg hover:text-[#00EA6F] dark:hover:text-white transition-colors duration-200"
            >
              ZENTOR
            </a>
          </div>

           {/* Social Links */}
        <div className="">
          <div className="flex justify-center items-center space-x-6">
            <span className="text-gray-400 text-sm">Follow us:</span>
            {[
              { Icon: Twitter, href: "https://x.com/ZentorHQ", label: "Twitter" },
              { Icon: Instagram, href: "https://www.instagram.com/zentor.in/", label: "Instagram" },
              { Icon: Linkedin, href: "https://www.linkedin.com/company/zentorhq/", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="transition-all duration-300 rounded-full 
                       group-hover:bg-[#00EA6F] group-hover:text-black 
                       group-hover:border-[#00EA6F] group-hover:scale-110 
                       border-gray-800 
                       text-white"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              </a>
            ))}
          </div>
        </div>

          {/* Rights reserved */}
          <div className="text-gray-400 text-sm font-medium tracking-wide">
            ALL RIGHTS RESERVED
          </div>
        </div>

        {/* Additional footer links - Optional */}
       
      </div>
    </footer>
  );
};

export default Footer;