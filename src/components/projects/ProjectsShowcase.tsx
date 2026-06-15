'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useStore } from '@/store/useStore';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 1,
    title: "AI-Based Job Portal",
    subtitle: "Intelligent job matching & recommendations",
    description: "An AI-powered job portal featuring intelligent job matching and resume-based recommendations. Built a responsive frontend using React.js and Tailwind CSS; implemented backend APIs with Node.js and Express.js.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "AI Integration"],
    color: "#ff3366",
    link: "https://github.com/manasgurde21"
  },
  {
    id: 2,
    title: "Fraud Detection System",
    subtitle: "Machine learning for secure transactions",
    description: "Built a machine learning model to identify fraudulent credit card transactions using Python. Conducted data preprocessing, model training, and evaluation to optimize fraud detection accuracy.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
    stack: ["Python", "Machine Learning", "Data Science", "Scikit-Learn"],
    color: "#00ffcc",
    link: "https://github.com/manasgurde21"
  },
  {
    id: 3,
    title: "AI SaaS Application",
    subtitle: "Scalable AI-powered SaaS platform",
    description: "Developed a scalable AI-powered SaaS platform utilizing a modern full-stack framework and high-concurrency backend infrastructure.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    stack: ["React.js", "Node.js", "PostgreSQL", "Supabase", "AI"],
    color: "#aa00ff",
    link: "https://github.com/manasgurde21"
  }
];

export default function ProjectsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const setActiveChapter = useStore((state) => state.setActiveChapter);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Trigger to update active chapter for 3D background (index 4)
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveChapter(4),
      onEnterBack: () => setActiveChapter(4),
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [setActiveChapter]);

  return (
    <section ref={sectionRef} className="relative w-full py-32 px-8 md:px-32 flex flex-col justify-start bg-transparent">
      <div className="mb-24 z-20 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight text-gradient">Selected Works</h2>
        <p className="mt-4 text-xl text-gray-400">Scroll to explore</p>
      </div>
      
      <div className="relative w-full max-w-5xl mx-auto pb-32">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx} 
            className="w-full sticky mb-24 transition-transform duration-500"
            style={{ top: `calc(15vh + ${idx * 2}rem)` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
