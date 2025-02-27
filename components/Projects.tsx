"use client"

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjecttModel';

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedProject, setSelectedProject] = useState<{
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    tags: string[];
  } | null>(null);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  const tabs = ['All', 'Web Dev', 'SEO', 'Branding', 'Advertising', 'Social Media', 'AI'];
  
  const allProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Dev',
      image: 'https://i.pinimg.com/736x/ed/7e/e2/ed7ee25b0ae42d7f436f3484468cdeca.jpg',
      description: 'Custom e-commerce platform with advanced features including inventory management, payment processing, and analytics dashboard.',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB']
    },
    {
      id: 2,
      title: 'Local Business SEO Campaign',
      category: 'SEO',
      image: 'https://i.pinimg.com/736x/93/63/4a/93634ab9dfe46f95561b88a182a97e3b.jpg',
      description: 'Comprehensive SEO strategy that improved search rankings by 200% and doubled organic traffic within 6 months.',
      tags: ['SEO', 'Analytics', 'Content Strategy']
    },
    {
      id: 3,
      title: 'Tech Startup Branding',
      category: 'Branding',
      image: 'https://i.pinimg.com/474x/3d/9b/1e/3d9b1e27680c75551cfe85d63d8e8e98.jpg',
      description: 'Complete brand identity design including logo, style guide, and marketing materials for an AI startup.',
      tags: ['Branding', 'Design', 'Identity']
    },
    {
      id: 4,
      title: 'Multi-Channel Ad Campaign',
      category: 'Advertising',
      image: 'https://i.pinimg.com/736x/51/04/cf/5104cf4b902d08cb7a0c38edd9beb096.jpg',
      description: 'Strategic advertising campaign across Google, Facebook, and LinkedIn that achieved 300% ROI.',
      tags: ['PPC', 'Social Ads', 'Analytics']
    },
    {
      id: 5,
      title: 'Social Media Growth',
      category: 'Social Media',
      image: 'https://i.pinimg.com/736x/41/cc/c6/41ccc64650a8bb96401f3ed01af0cb7e.jpg',
      description: 'Organic social media strategy that grew following by 50k and increased engagement by 400%.',
      tags: ['Content Strategy', 'Community Management', 'Analytics']
    },
    {
      id: 6,
      title: 'AI Customer Service Bot',
      category: 'AI',
      image: 'https://i.pinimg.com/736x/19/e6/7f/19e67faf986ec2ebf7eaf71c9e46cbe0.jpg',
      description: 'Custom AI chatbot that handles 70% of customer inquiries automatically and integrates with existing CRM.',
      tags: ['AI', 'Machine Learning', 'Natural Language Processing']
    },
    {
      id: 7,
      title: 'Restaurant Website',
      category: 'Web Dev',
      image: 'https://i.pinimg.com/736x/71/cc/fe/71ccfebd14fbb3b25dd00b01971610d1.jpg',
      description: 'Modern restaurant website with online ordering system, reservation management, and menu customization.',
      tags: ['React', 'Firebase', 'Stripe']
    },
    {
      id: 8,
      title: 'Influencer Marketing Campaign',
      category: 'Social Media',
      image: 'https://i.pinimg.com/736x/65/97/b9/6597b9c626293d6e19e1ac7b4d361816.jpg',
      description: 'Successful influencer partnership program that generated 2M+ impressions and 150k+ engagement.',
      tags: ['Influencer Marketing', 'Content Creation', 'Analytics']
    },
    {
      id: 9,
      title: 'AI Content Generator',
      category: 'AI',
      image: 'https://i.pinimg.com/474x/83/f8/71/83f871685c88c59ac76b02aa1ec9a0a0.jpg',
      description: 'Custom AI tool that generates SEO-optimized content and social media posts based on brand guidelines.',
      tags: ['AI', 'Content Generation', 'NLP']
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = activeTab === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeTab);

  const visibleProjectsList = filteredProjects.slice(0, visibleProjects);
  const hasMore = visibleProjects < filteredProjects.length;

  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisibleProjects(3);
  };

  return (
    <div id="portfolio" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#00121E] dark:to-[#00121E]">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-lg font-semibold text-[#00EA6F] dark:text-[#00EA6F] mb-4">
            Portfolio Showcase
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Creative Work & Projects
          </h3>
          <div className="w-24 h-1 bg-[#00EA6F] mx-auto rounded-full"></div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center py-4 gap-2 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {visibleProjectsList.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center text-sm font-semibold text-emerald-500 group/button">
                    View Project Details
                    <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={loadMore}
              className="group flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 text-emerald-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="font-semibold">View More Projects</span>
              <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            </button>
          </motion.div>
        )}

        {/* Display count */}
        <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          Showing {visibleProjectsList.length} of {filteredProjects.length} projects
        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
};

export default ProjectsPage;