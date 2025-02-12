import React from 'react';
import { Monitor, Smartphone, Paintbrush, Megaphone } from "lucide-react";

const ScrollingBanner = () => {
  const services = [
    { icon: Monitor, text: "Website Development" },
    { icon: Smartphone, text: "App Development" },
    { icon: Paintbrush, text: "Product Designing" },
    { icon: Megaphone, text: "Digital Advertising" },
  ];

  const doubledServices = [...services, ...services, ...services];

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