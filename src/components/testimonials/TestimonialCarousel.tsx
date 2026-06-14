'use client';

import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useStore } from '@/store/useStore';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  { name: "Sarah Connor", role: "Design Director", quote: "The level of polish and attention to detail is simply unmatched. A true creative partner." },
  { name: "John Smith", role: "CEO at TechCorp", quote: "Delivered a website that not only looks like a movie but converts like a machine." },
  { name: "Elena Rodriguez", role: "Product Manager", quote: "Working together was a breeze. The final product exceeded all our expectations." },
  { name: "David Chen", role: "Startup Founder", quote: "They brought our vision to life with 3D interactions we didn't even know were possible on the web." }
];

export default function TestimonialCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const setActiveChapter = useStore((state) => state.setActiveChapter);

  useEffect(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveChapter(7),
      onEnterBack: () => setActiveChapter(7),
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [setActiveChapter]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen py-24 flex flex-col justify-center snap-center bg-transparent z-10">
      <div className="mb-16 z-20 text-center px-8 md:px-32">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">What People Say</h2>
      </div>
      
      {/* Native horizontal scrolling carousel */}
      <div className="w-full overflow-x-auto flex gap-8 px-8 md:px-32 pb-12 snap-x snap-mandatory hide-scrollbar">
        {TESTIMONIALS.map((test, idx) => (
          <div key={idx} className="min-w-[300px] md:min-w-[400px] snap-center bg-gradient-to-br from-white/10 to-transparent backdrop-blur-lg border border-[#00ccff]/20 p-10 rounded-3xl flex-shrink-0">
            <svg className="w-10 h-10 text-[#00ccff] mb-6 opacity-50" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-xl md:text-2xl font-light text-white leading-relaxed mb-8">"{test.quote}"</p>
            <div>
              <div className="font-bold text-white text-lg">{test.name}</div>
              <div className="text-[#00ccff] font-medium">{test.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
