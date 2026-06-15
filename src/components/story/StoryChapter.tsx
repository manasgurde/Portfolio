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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const setActiveChapter = useStore((state) => state.setActiveChapter);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !titleRef.current) return;

    // Trigger to update active chapter
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveChapter(index),
      onEnterBack: () => setActiveChapter(index),
    });

    // Parallax animations
    gsap.fromTo(titleRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'center center',
          scrub: 1,
        }
      }
    );

    gsap.fromTo(textRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
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
      className="relative w-full min-h-screen flex items-center justify-center snap-center py-20 px-6 md:px-16 lg:px-32"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Title Side */}
        <div className="lg:col-span-5 relative">
          <div className={`absolute -inset-10 opacity-30 blur-[100px] transition-opacity duration-1000 z-0 pointer-events-none rounded-full ${index === 1 ? 'bg-indigo-600' : 'bg-fuchsia-600'}`} />
          <h2 
            ref={titleRef}
            className={`relative z-10 text-6xl md:text-8xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-br ${index === 1 ? 'from-indigo-300 via-cyan-400 to-indigo-600' : 'from-fuchsia-300 via-pink-400 to-rose-600'}`}
          >
            {title.split(' ').map((word, i) => (
              <span key={i} className="block pb-2">{word}</span>
            ))}
          </h2>
          {/* Decorative Line */}
          <div className={`mt-8 h-1 w-24 rounded-full ${index === 1 ? 'bg-cyan-400' : 'bg-pink-400'} opacity-80`} />
        </div>

        {/* Content Side */}
        <div className="lg:col-span-7 relative">
          <div 
            ref={textRef} 
            className="relative z-10 p-8 md:p-12 lg:p-16 rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] hover:bg-white/10 transition-colors duration-500 group"
          >
            {/* Giant quote mark decoration */}
            <span className={`absolute -top-6 -left-2 md:-left-6 text-8xl md:text-9xl opacity-20 font-serif leading-none ${index === 1 ? 'text-cyan-400' : 'text-pink-400'} group-hover:scale-110 transition-transform duration-500`}>"</span>
            
            <p className="relative z-10 text-lg md:text-2xl text-gray-200 font-light leading-relaxed md:leading-loose">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
