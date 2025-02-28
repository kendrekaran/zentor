import React from 'react';
import { X, TagIcon, Calendar, Globe } from 'lucide-react';

interface ProjectType {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

interface ProjectModalProps {
  project?: ProjectType | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur effect */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-5xl mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform">
        {/* Close button */}
        <div className="absolute right-4 top-4 z-10">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-64 md:h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 z-10">
              <span className="px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-full">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 flex flex-col h-full">
            <div className="mb-6 flex-1">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h3>
              
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">Client Project</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="border-l-4 border-emerald-500 pl-4 py-2 bg-gray-50 dark:bg-gray-700/50 italic text-gray-600 dark:text-gray-300">
                  This project increased customer engagement by 45% and improved conversion rates significantly.
                </div>
              </div>
            </div>

            <div className="space-y-6 mt-auto">
              {/* Tags */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <TagIcon className="w-4 h-4 mr-2 text-emerald-500" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;