"use client"
import React, { useEffect } from 'react';
import { Monitor, Palette, Share2, Search, Megaphone, Bot } from 'lucide-react';

const services = [
  {
    title: "Website Development & Ecommerce",
    description: "High-performing websites and online stores with custom designs and reliable hosting.",
    icon: Monitor,
    color: "from-[#00EA6F] to-teal-500"
  },
  {
    title: "Search Engine Optimization",
    description: "Boost online presence with SEO, business listings, and review management.",
    icon: Search,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Branding & Identity",
    description: "Compelling brand identities, from logos to business elements.",
    icon: Palette,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Digital Advertising",
    description: "Strategic marketing campaigns for maximum conversions.",
    icon: Megaphone,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Social Media Marketing",
    description: "Grow your brand with targeted content and partnerships.",
    icon: Share2,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "AI & Automation",
    description: "Enhanced customer interactions with AI solutions.",
    icon: Bot,
    color: "from-cyan-500 to-blue-500"
  }
];


const Services = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div id='services' className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#00121E] dark:to-[#00121E] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-lg font-semibold text-[#00EA6F] dark:text-[#00EA6F] mb-4">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Services We Deliver
          </h3>
          <div className="w-24 h-1 bg-[#00EA6F] mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-lg dark:bg-[#011420] rounded-2xl p-8 
                         hover:shadow-2xl transition-all duration-500 ease-out
                         border border-gray-100 dark:border-gray-700
                         hover:border-transparent dark:hover:border-transparent
                         transform hover:-translate-y-2"
            >
              {/* Gradient Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 
                            transition-opacity duration-500 rounded-2xl -z-10 blur-xl
                            group-hover:animate-pulse ${service.color}"></div>

              {/* Icon Container */}
              <div className="mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color}
                                flex items-center justify-center transform 
                                group-hover:rotate-6 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>


              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 
                            group-hover:text-[#00EA6F] group-hover:bg-clip-text 
                            group-hover:bg-gradient-to-r ${service.color}">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>


              <div className="mt-6 flex items-center text-sm font-medium
                            text-gray-600 dark:text-gray-400 group-hover:text-[#00EA6F] 
                            dark:group-hover:text-[#00EA6F] transition-colors duration-300">
                <a href="#contact"><span>Contact Us</span></a> 
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;