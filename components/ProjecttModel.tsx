import React from 'react';
import { X, ArrowUpRight, TagIcon } from 'lucide-react';

interface ProjectType {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

interface ProjectModalProps {
  project?: ProjectType | null; // Make project optional and allow null
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#00121E] backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl mx-4 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="absolute right-4 top-4 z-10">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Section */}
          <div className="relative h-[300px] md:h-full">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                <TagIcon className="w-4 h-4" />
                <span className="text-sm">{project.category}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-6">
              {/* Tags */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <button className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2">
                View Live Project
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;