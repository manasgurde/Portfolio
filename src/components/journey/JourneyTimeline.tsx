'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useStore } from '@/store/useStore';

gsap.registerPlugin(ScrollTrigger);

const TIMELINE_DATA = [
  { year: "2026", title: "Senior Creative Developer", company: "Awwwards Studio", description: "Leading the development of highly interactive web experiences." },
  { year: "2024", title: "Frontend Engineer", company: "Tech Innovators", description: "Built scalable React applications and migrated legacy systems to Next.js." },
  { year: "2022", title: "Web Developer", company: "Digital Agency", description: "Crafted pixel-perfect websites for high-profile clients." },
  { year: "2020", title: "Computer Science Degree", company: "University of Tech", description: "Graduated with honors, specializing in Human-Computer Interaction." }
];

export default function JourneyTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const setActiveChapter = useStore((state) => state.setActiveChapter);

  useEffect(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveChapter(5),
      onEnterBack: () => setActiveChapter(5),
    });

    const items = gsap.utils.toArray('.timeline-item');
    items.forEach((item: any, i) => {
      gsap.fromTo(item, 
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1, 
          x: 0, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          }
        }
      );
    });

    // Draw the central line
    gsap.fromTo('.timeline-line', 
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [setActiveChapter]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen py-24 px-8 md:px-32 flex flex-col justify-center snap-center bg-transparent z-10 overflow-hidden">
      <div className="mb-16 z-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">The Journey</h2>
      </div>
      
      <div className="relative w-full max-w-4xl mx-auto py-10">
        {/* The scroll-drawn line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-700 -translate-x-1/2 origin-top timeline-line"></div>
        
        {TIMELINE_DATA.map((item, idx) => (
          <div key={idx} className={`timeline-item flex w-full mb-16 ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
              <div className="text-[#ff5555] font-bold text-xl mb-1">{item.year}</div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <div className="text-gray-400 font-medium mb-3">{item.company}</div>
              <p className="text-gray-500">{item.description}</p>
            </div>
            {/* Center dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff5555] border-4 border-black mt-2"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
