'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, PerformanceMonitor } from '@react-three/drei';
// @ts-expect-error missing types
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';
import CameraController from '../hero/CameraController';
import SkillsEcosystem from './SkillsEcosystem';
import { useStore } from '@/store/useStore';

const CHAPTER_COLORS = [
  new THREE.Color('#ffffff'), // Intro (0)
  new THREE.Color('#4f46e5'), // Story 1 (1) - Deep Indigo
  new THREE.Color('#d946ef'), // Story 2 (2) - Neon Fuchsia
  new THREE.Color('#0ea5e9'), // Skills (3) - Bright Cyan
  new THREE.Color('#10b981'), // Projects Showcase (4) - Emerald
  new THREE.Color('#f43f5e'), // Journey Timeline (5) - Rose Red
  new THREE.Color('#eab308'), // Achievements (6) - Cyber Yellow
  new THREE.Color('#8b5cf6'), // Testimonials (7) - Vivid Violet
  new THREE.Color('#020617'), // Contact (8) - Midnight Abyss
];

function ParticleCloud({ count = 5000 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  const activeChapter = useStore((state) => state.activeChapter);
  
  // Generate random positions within a sphere
  const sphere = useMemo(() => {
    return random.inSphere(new Float32Array(count * 3), { radius: 10 });
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      if (activeChapter >= 4) {
        // Slow orbit for projects showcase
        ref.current.rotation.y -= delta / 30;
        ref.current.rotation.x -= delta / 40;
      } else {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
      }
    }
    
    // Smoothly animate particle colors based on active chapter
    if (materialRef.current) {
      const targetColor = CHAPTER_COLORS[Math.min(activeChapter, CHAPTER_COLORS.length - 1)] || CHAPTER_COLORS[0];
      materialRef.current.color.lerp(targetColor, 0.05);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          ref={materialRef}
          transparent
          color="#ffffff"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function ParticleBackground() {
  const [particleCount, setParticleCount] = useState(5000);

  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <PerformanceMonitor 
          onIncline={() => {
            setParticleCount(5000);
          }} 
          onDecline={() => {
            // Low-end fallback: reduce particles
            setParticleCount(1500);
          }} 
        />
        <ambientLight intensity={0.5} />
        <ParticleCloud count={particleCount} />
        <SkillsEcosystem />
        <CameraController />
      </Canvas>
    </div>
  );
}
