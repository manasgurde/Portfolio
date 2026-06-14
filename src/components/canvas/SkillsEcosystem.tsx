'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useStore } from '@/store/useStore';
import SkillMesh from './SkillMesh';

const SKILLS = [
  // Languages
  { name: 'JavaScript', color: '#f7df1e', pos: [-2, 1, -1] as [number, number, number] },
  { name: 'Python', color: '#3776ab', pos: [2, 1.5, -2] as [number, number, number] },
  { name: 'C++', color: '#00599c', pos: [0, 2.5, -3] as [number, number, number] },
  
  // Frontend
  { name: 'React.js', color: '#61dafb', pos: [-3, -0.5, 0] as [number, number, number] },
  { name: 'Next.js', color: '#ffffff', pos: [-1.5, -1.5, 1] as [number, number, number] },
  { name: 'Tailwind CSS', color: '#38b2ac', pos: [1.5, -1, 0.5] as [number, number, number] },
  { name: 'HTML5/CSS3', color: '#e34f26', pos: [3, 0, -1] as [number, number, number] },
  
  // Backend & DB
  { name: 'Node.js', color: '#339933', pos: [-1, 0.5, 2] as [number, number, number] },
  { name: 'Express.js', color: '#eeeeee', pos: [1, 0, 1.5] as [number, number, number] },
  { name: 'PostgreSQL', color: '#336791', pos: [2.5, -2, -1.5] as [number, number, number] },
  { name: 'Supabase', color: '#3ecf8e', pos: [-2.5, 1.5, 1] as [number, number, number] },
  
  // Tools
  { name: 'Git/GitHub', color: '#f05032', pos: [0, -2.5, -0.5] as [number, number, number] },
  { name: 'VS Code', color: '#007acc', pos: [-3.5, 0.5, -2] as [number, number, number] },
];

export default function SkillsEcosystem() {
  const activeChapter = useStore((state) => state.activeChapter);
  const groupRef = useRef<THREE.Group>(null);
  
  // We only want the ecosystem visible/animated if the active chapter is >= 3 (the skills section)
  // We can animate the group's scale to "pop" into existence
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate the entire constellation slowly
      groupRef.current.rotation.y += delta * 0.05;
      
      // Animate scale based on active chapter
      const targetScale = activeChapter >= 3 ? 1 : 0;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Optional: Add a subtle central light for the ecosystem */}
      <pointLight position={[0, 0, 0]} intensity={activeChapter >= 3 ? 2 : 0} color="#4444ff" distance={10} />
      
      {SKILLS.map((skill, i) => (
        <SkillMesh 
          key={i}
          name={skill.name}
          color={skill.color}
          position={skill.pos}
        />
      ))}
    </group>
  );
}
