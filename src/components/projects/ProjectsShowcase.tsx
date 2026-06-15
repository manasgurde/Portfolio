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
    image: "/job-portal.png",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "AI Integration"],
    color: "#ff3366",
    link: "https://github.com/manasgurde",
    metrics: [
      { label: "Response Time", value: "<200ms" },
      { label: "Accuracy", value: "98.5%" }
    ]
  },
  {
    id: 2,
    title: "Fraud Detection System",
    subtitle: "Machine learning for secure transactions",
    description: "Built a machine learning model to identify fraudulent credit card transactions using Python. Conducted data preprocessing, model training, and evaluation to optimize fraud detection accuracy.",
    image: "/fraud-detection.png",
    stack: ["Python", "Machine Learning", "Data Science", "Scikit-Learn"],
    color: "#00ffcc",
    link: "https://github.com/manasgurde",
    metrics: [
      { label: "Precision Score", value: "96%" },
      { label: "Processing Time", value: "<50ms" }
    ]
  },
  {
    id: 3,
    title: "AI SaaS Application",
    subtitle: "Scalable AI-powered SaaS platform",
    description: "Developed a scalable AI-powered SaaS platform utilizing a modern full-stack framework and high-concurrency backend infrastructure.",
    image: "/nexus-ai.png",
    stack: ["React.js", "Node.js", "PostgreSQL", "Supabase", "AI"],
    color: "#aa00ff",
    link: "https://github.com/manasgurde/NexusAI",
    liveLink: "https://nexus-ai-frontend-df7t.vercel.app",
    metrics: [
      { label: "API Latency", value: "<100ms" },
      { label: "Uptime", value: "99.9%" }
    ]
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
      
      <div className="relative w-full max-w-6xl mx-auto pb-32">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx} 
            className="w-full sticky mb-32 transition-transform duration-500"
            style={{ top: `calc(10vh + ${idx * 3}rem)` }}
          >
            <ProjectCard {...project} isReversed={idx % 2 !== 0} />
          </div>
        ))}
      </div>
    </section>
  );
}
