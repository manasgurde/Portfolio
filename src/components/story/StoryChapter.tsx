'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useStore } from '@/store/useStore';

gsap.registerPlugin(ScrollTrigger);

interface StoryChapterProps {
  index: number;
  title: string;
  content: string;
}

export default function StoryChapter({ index, title, content }: StoryChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const setActiveChapter = useStore((state) => state.setActiveChapter);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    // Trigger to update active chapter
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveChapter(index),
      onEnterBack: () => setActiveChapter(index),
    });

    // Parallax text animation
    gsap.fromTo(textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'center center',
          scrub: 1,
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [index, setActiveChapter]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center snap-center"
    >
      <div 
        ref={textRef} 
        className="max-w-4xl px-12 py-16 z-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle dynamic glow behind the text inside the card */}
        <div className={`absolute -inset-20 opacity-20 blur-3xl transition-opacity duration-1000 z-0 pointer-events-none ${index === 1 ? 'bg-indigo-500' : 'bg-fuchsia-500'}`} />
        
        <div className="relative z-10">
          <h2 className={`text-4xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${index === 1 ? 'from-indigo-400 to-cyan-400' : 'from-fuchsia-400 to-pink-400'}`}>
            {title}
          </h2>
          <p className="text-xl md:text-3xl text-gray-200 font-light leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
}
