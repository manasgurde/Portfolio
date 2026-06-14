'use client';

import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    // This component mounts inside the Canvas, so we can control the Three.js camera
    // We attach a ScrollTrigger to the body or a specific wrapper
    
    // Example: move camera down as user scrolls
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    });

    tl.to(camera.position, {
      z: 2,
      y: -5,
      ease: 'none'
    });

    return () => {
      tl.kill();
    };
  }, [camera]);

  return null;
}
