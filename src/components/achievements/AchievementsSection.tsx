'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useStore } from '@/store/useStore';

gsap.registerPlugin(ScrollTrigger);

const ACHIEVEMENTS = [
  { title: "Generative AI Certification", year: "2024", desc: "LinkedIn Learning certification on the fundamentals and applications of Generative AI." },
  { title: "Prompt Engineering Certification", year: "2024", desc: "IBM certification covering advanced prompt engineering techniques for LLMs." },
  { title: "Fundamentals of Deep Learning", year: "2023", desc: "NVIDIA Deep Learning Institute certification." },
  { title: "SQL (Advanced) & NPTEL HCI", year: "2023", desc: "HackerRank certification demonstrating advanced SQL querying, alongside NPTEL User-Centric Computing certification." }
];

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const setActiveChapter = useStore((state) => state.setActiveChapter);

  useEffect(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveChapter(6),
      onEnterBack: () => setActiveChapter(6),
    });

    const cards = gsap.utils.toArray('.achievement-card');
    gsap.fromTo(cards, 
      { opacity: 0, y: 100, scale: 0.9 },
      {
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [setActiveChapter]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen py-24 px-8 md:px-32 flex flex-col justify-center snap-center bg-transparent z-10">
      <div className="mb-16 z-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Recognitions</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        {ACHIEVEMENTS.map((ach, idx) => (
          <div key={idx} className="achievement-card bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
            <div className="text-[#ffcc00] font-bold text-lg mb-2">{ach.year}</div>
            <h3 className="text-2xl font-bold text-white mb-4">{ach.title}</h3>
            <p className="text-gray-400 leading-relaxed">{ach.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
