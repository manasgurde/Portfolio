'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOPICS = [
  { name: "LLM Development", color: "#6366f1", icon: "🧠" },
  { name: "RAG Systems", color: "#ec4899", icon: "📚" },
  { name: "AI Agents", color: "#14b8a6", icon: "🤖" },
];

export default function CurrentlyLearning() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(".learning-card", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-24 px-8 flex flex-col items-center justify-center bg-transparent z-10 pointer-events-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Currently Learning</h2>
        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
          Pushing the boundaries of my knowledge in the rapidly evolving world of Artificial Intelligence.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
        {TOPICS.map((topic, idx) => (
          <div 
            key={idx} 
            className="learning-card flex items-center gap-4 px-8 py-6 rounded-3xl bg-[#050510]/60 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300 group cursor-default"
          >
            <div className="text-4xl" style={{ textShadow: `0 0 20px ${topic.color}` }}>
              {topic.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold tracking-wide text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, #ffffff, ${topic.color})` }}>
              {topic.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
