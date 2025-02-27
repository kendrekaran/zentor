"use client"
import React, { useEffect } from 'react';
import { Monitor, Paintbrush, Megaphone, Search, Share2, Bot } from "lucide-react";

const ScrollingBanner = () => {
  const services = [
    { icon: Monitor, text: "Website Development" },
    { icon: Search, text: "Search Engine Optimization" },
    { icon: Paintbrush, text: "Branding & Identity" },
    { icon: Megaphone, text: "Digital Advertising" },
    { icon: Share2, text: "Social Media Marketing" },
    { icon: Bot, text: "AI & Automation" },
  ];

  const doubledServices = [...services, ...services, ...services];

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="w-full py-4 bg-[#00EA6F] text-black overflow-hidden">
      <div className="relative whitespace-nowrap">
        <div className="inline-flex animate-marquee">
          {doubledServices.map((service, index) => (
            <div
              key={`${service.text}-${index}`}
              className="flex items-center px-4 gap-3 group transition-transform hover:scale-105 flex-shrink-0"
            >
              <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <service.icon className="h-6 w-6" />
              </div>
              <span className="text-sm sm:text-base font-medium whitespace-nowrap">
                {service.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;