'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroIntro() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: "Hello"
    // Stage 1: "I'm [Name]"
    // Stage 2: Intro done, show subtitle/scroll indicator
    
    const t1 = setTimeout(() => setStage(1), 2500); // Wait 2.5s to transition to Name
    const t2 = setTimeout(() => setStage(2), 5000); // Wait 5s total to finish intro sequence
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen z-10 pointer-events-none relative">
      <div className="absolute top-8 w-full px-8 md:px-16 flex justify-end gap-8 pointer-events-auto z-50">
        <a href="https://github.com/manasgurde21" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm uppercase tracking-widest font-semibold">GitHub</a>
        <a href="https://linkedin.com/in/manas-gurdeb39596408" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm uppercase tracking-widest font-semibold">LinkedIn</a>
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
                Full Stack Developer & AI Enthusiast
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
    </div>
  );
}
