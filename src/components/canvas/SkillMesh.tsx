'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';

interface SkillMeshProps {
  position: [number, number, number];
  name: string;
  color: string;
}

export default function SkillMesh({ position, name, color }: SkillMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      // Animate scale on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
      <mesh 
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial 
          color={color} 
          wireframe={!hovered}
          emissive={hovered ? color : '#000000'}
          emissiveIntensity={0.5}
        />
        
        {/* HTML Label overlay */}
        <Html distanceFactor={10} zIndexRange={[100, 0]} center>
          <div 
            className={`transition-all duration-300 pointer-events-none px-3 py-1 rounded-md backdrop-blur-md border border-white/10
              ${hovered ? 'opacity-100 translate-y-[-40px] bg-black/60 scale-100' : 'opacity-0 translate-y-0 scale-95'}`}
          >
            <span className="text-white font-mono text-sm tracking-widest whitespace-nowrap">{name}</span>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}
