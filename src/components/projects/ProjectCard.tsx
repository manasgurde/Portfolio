import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  link?: string;
}

export default function ProjectCard({ title, description, stack, link }: ProjectCardProps) {
  return (
    <div className="flex-shrink-0 w-[85vw] md:w-[60vw] h-[70vh] flex flex-col justify-end p-8 md:p-12 mr-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden group">
      {/* Premium Placeholder Image Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-black/80 z-0 transition-transform duration-700 group-hover:scale-105"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4">
        <h3 className="text-3xl md:text-5xl font-bold text-white">{title}</h3>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-3 mt-4">
          {stack.map((tech, idx) => (
            <span key={idx} className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium w-fit"
          >
            View Project <span className="ml-2">→</span>
          </a>
        )}
      </div>
    </div>
  );
}
