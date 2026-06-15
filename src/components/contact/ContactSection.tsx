'use client';

import { useState, useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useStore } from '@/store/useStore';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const setActiveChapter = useStore((state) => state.setActiveChapter);
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (!sectionRef.current) return;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveChapter(8),
      onEnterBack: () => setActiveChapter(8),
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [setActiveChapter]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="relative w-full min-h-screen py-24 flex flex-col justify-center snap-center bg-transparent z-10 px-8 md:px-32">
      <div className="max-w-4xl mx-auto w-full text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">Let's Talk</h2>
        <p className="text-xl text-gray-400">Ready to build something magical together?</p>
      </div>
      
      <div className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
        {status === 'success' ? (
          <div className="text-center py-16">
            <h3 className="text-3xl font-bold text-[#00ffaa] mb-4">Message Sent!</h3>
            <p className="text-gray-300">Thank you for reaching out. I'll get back to you shortly.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00ffaa]/50 transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00ffaa]/50 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea 
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00ffaa]/50 transition-colors resize-none"
                placeholder="Your idea here..."
              ></textarea>
            </div>
            
            {status === 'error' && (
              <div className="text-[#ff5555] text-sm text-center">Failed to send message. Please try again or email directly.</div>
            )}
            
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="mt-4 w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
      
      <div className="mt-20 text-center text-gray-500 text-sm">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="https://linkedin.com/in/manas-gurdeb39596408" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/manasgurde21" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="mailto:manasgurde45@gmail.com" className="hover:text-white transition-colors">manasgurde45@gmail.com</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Manas Gurde. All rights reserved.</p>
      </div>
    </section>
  );
}
