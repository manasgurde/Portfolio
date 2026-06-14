'use client';

import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useStore } from '@/store/useStore';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const setActiveChapter = useStore((state) => state.setActiveChapter);

  useEffect(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveChapter(3),
      onEnterBack: () => setActiveChapter(3),
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [setActiveChapter]);

  return (
    <section ref={sectionRef} className="relative w-full h-screen flex items-center justify-center snap-center pointer-events-none">
      <div className="z-10 text-center pointer-events-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">My Arsenal</h2>
        <p className="text-xl text-gray-400">Watch the ecosystem of skills around you.</p>
      </div>
    </section>
  );
}
