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
  new THREE.Color('#ffaa00'), // Story 1 (1)
  new THREE.Color('#aa00ff'), // Story 2 (2)
  new THREE.Color('#00ffaa'), // Skills (3)
  new THREE.Color('#0a192f'), // Projects Showcase (4)
  new THREE.Color('#ff5555'), // Journey Timeline (5)
  new THREE.Color('#ffcc00'), // Achievements (6)
  new THREE.Color('#00ccff'), // Testimonials (7)
  new THREE.Color('#001133'), // Contact (8)
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
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
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
