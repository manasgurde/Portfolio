'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroIntro() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 2500);
    const t2 = setTimeout(() => setStage(2), 5000);
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen z-10 pointer-events-none relative">
      <div className="absolute top-8 w-full px-8 md:px-16 flex justify-end gap-6 pointer-events-auto z-50">
        <a 
          href="https://github.com/manasgurde" 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#24292e]/80 border border-white/10 hover:border-[#24292e] hover:bg-[#24292e] text-white transition-all shadow-[0_0_15px_rgba(36,41,46,0.5)] backdrop-blur-md text-sm font-medium"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          GitHub
        </a>
        <a 
          href="https://linkedin.com/in/manas-gurdeb39596408" 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0077b5]/80 border border-white/10 hover:border-[#0077b5] hover:bg-[#0077b5] text-white transition-all shadow-[0_0_15px_rgba(0,119,181,0.5)] backdrop-blur-md text-sm font-medium"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          LinkedIn
        </a>
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600/80 border border-emerald-500/50 hover:bg-emerald-500 text-white transition-all shadow-[0_0_15px_rgba(16,185,129,0.5)] backdrop-blur-md text-sm font-medium ml-4"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          Resume
        </a>
      </div>
      <AnimatePresence mode="wait">
        {stage === 0 && (
          <motion.h1
            key="hello"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-light text-white tracking-widest"
          >
            Hello
          </motion.h1>
        )}
        
        {stage >= 1 && (
          <motion.div
            key="name-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter text-gradient leading-tight">
              I&apos;m Manas
            </h1>
            
            {stage === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-6 text-xl md:text-3xl text-gray-400 font-light tracking-wide text-center max-w-2xl"
              >
                Full Stack Developer Specializing in AI, SaaS & Intelligent Systems
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-xs tracking-[0.3em] text-gray-500 uppercase mb-4">Discover</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a 
        href="#contact"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: stage >= 2 ? 1 : 0, x: stage >= 2 ? 0 : 20 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 right-8 pointer-events-auto flex items-center gap-3 px-6 py-3 rounded-full bg-indigo-600/20 border border-indigo-500/50 hover:bg-indigo-600 text-white transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.8)] backdrop-blur-md group"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="font-semibold tracking-wide">Let's Talk</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </motion.a>
    </div>
  );
}
