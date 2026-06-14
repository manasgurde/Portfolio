'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useStore } from '@/store/useStore';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: "AI-Based Job Portal",
    description: "An automated matching system using AI similarity scoring to pair resumes with job descriptions. Features a high-performance responsive frontend.",
    stack: ["React", "Node.js", "Express", "Tailwind"],
    link: "https://ai-based-job-portal-iota.vercel.app"
  },
  {
    title: "Credit Card Fraud Detection System",
    description: "End-to-end ML pipeline using Python to detect fraudulent transactions with high accuracy.",
    stack: ["Python", "Machine Learning", "Pandas", "Scikit-Learn"]
  },
  {
    title: "AI-Based Mock Interview App",
    description: "A practice platform with dynamic AI-driven question flows for technical interview preparation.",
    stack: ["React", "GenAI", "Node.js"]
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
    <section ref={sectionRef} className="relative w-full min-h-screen py-24 px-8 md:px-32 flex flex-col justify-center snap-center bg-transparent">
      <div className="mb-16 z-20">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Selected Works</h2>
      </div>
      
      <div className="flex flex-col gap-12 w-full max-w-5xl mx-auto">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="w-full">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
