import React, { useState } from 'react';
  import { ArrowUpRight } from 'lucide-react';
  import ProjectModal from './ProjecttModel';
  
  const ProjectsPage = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [selectedProject, setSelectedProject] = useState<{
      id: number;
      title: string;
      category: string;
      image: string;
      description: string;
      tags: string[];
    } | null>(null);

    
    
    const tabs = ['All', 'Websites', 'Apps', 'Advertising', 'Designs', 'Ads Campaign'];
    
    const allProjects = [
        {
          id: 1,
          title: 'Zenops Landing Page',
          category: 'Websites',
          image: 'https://i.pinimg.com/736x/c0/f4/bb/c0f4bb2d49afebdf1701f6e632ab9027.jpg',
          description: 'Zenops is an innovative and visually captivating landing page designed with a sleek, responsive, and modern user interface.',
          tags: ['React', 'Tailwind', 'TypeScript']
        },
        {
          id: 2,
          title: 'Fitness Tracker App',
          category: 'Apps',
          image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800',
          description: 'A modern mobile application with intuitive navigation and seamless user experience, built using the latest technologies.',
          tags: ['React Native', 'Redux', 'Node.js']
        },
        {
          id: 3,
          title: 'EcoLife Campaign',
          category: 'Advertising',
          image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
          description: 'Comprehensive digital marketing campaign that increased brand awareness and engagement across multiple platforms.',
          tags: ['Marketing', 'Social Media', 'Analytics']
        },
        {
          id: 4,
          title: 'TechFlow Branding',
          category: 'Designs',
          image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
          description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.',
          tags: ['Branding', 'UI/UX', 'Design System']
        },
        {
          id: 5,
          title: 'GlobalReach Ads',
          category: 'Ads Campaign',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
          description: 'Strategic social media advertising campaign that drove significant user acquisition and engagement.',
          tags: ['Social Media', 'Analytics', 'Growth']
        }
      ];
  
    const filteredProjects = activeTab === 'All' 
      ? allProjects 
      : allProjects.filter(project => project.category === activeTab);
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#00121E] dark:to-[#00121E]">
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
                onClick={() => setActiveTab(tab)}
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
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
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
              </div>
            ))}
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