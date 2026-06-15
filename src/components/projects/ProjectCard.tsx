import React from 'react';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  image: string;
  color: string;
  link?: string;
}

export default function ProjectCard({ title, subtitle, description, stack, image, color, link }: ProjectCardProps) {
  return (
    <div className="w-full min-h-[60vh] flex flex-col md:flex-row items-center gap-12 p-8 md:p-12 rounded-[2.5rem] bg-[#050510]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
      {/* Dynamic Background Glow */}
      <div 
        className="absolute -inset-20 opacity-20 blur-3xl transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-40 z-0 pointer-events-none" 
        style={{ background: `radial-gradient(circle at 80% 20%, ${color || '#ffffff'} 0%, transparent 50%)` }}
      />
      
      {/* Image Side */}
      <div className="w-full md:w-1/2 h-[30vh] md:h-[45vh] relative rounded-2xl overflow-hidden border border-white/5 z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 relative z-10 flex flex-col gap-6">
        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{title}</h3>
          <h4 className="text-xl md:text-2xl mt-2 font-light" style={{ color }}>{subtitle}</h4>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-3 mt-2">
          {stack.map((tech, idx) => (
            <span key={idx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 text-sm font-medium backdrop-blur-md">
              {tech}
            </span>
          ))}
        </div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all font-medium w-fit border border-white/10 hover:border-white/30"
          >
            View Project <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        )}
      </div>
    </div>
  );
}
