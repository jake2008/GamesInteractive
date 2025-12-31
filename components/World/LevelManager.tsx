
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Float, Center } from '@react-three/drei';
import * as THREE from 'three';
import { SECTIONS } from '../../types';

const FONT_URL = "https://cdn.jsdelivr.net/npm/three/examples/fonts/helvetiker_bold.typeface.json";

const TechIcon: React.FC<{ type: string; color: string }> = ({ type, color }) => {
    const mesh = useRef<THREE.Group>(null);
    
    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.01;
            mesh.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
        }
    });

    return (
        <group ref={mesh}>
            <mesh>
                {type === 'web3' && <icosahedronGeometry args={[1.5, 0]} />}
                {type === 'unity' && <boxGeometry args={[2, 2, 2]} />}
                {type === 'multiplayer' && <torusKnotGeometry args={[1, 0.3, 100, 16]} />}
                <meshStandardMaterial color={color} wireframe emissive={color} emissiveIntensity={0.5} />
            </mesh>
            <mesh scale={[0.9, 0.9, 0.9]}>
                {type === 'web3' && <icosahedronGeometry args={[1.5, 0]} />}
                {type === 'unity' && <boxGeometry args={[2, 2, 2]} />}
                {type === 'multiplayer' && <torusKnotGeometry args={[1, 0.3, 100, 16]} />}
                <meshBasicMaterial color="black" />
            </mesh>
        </group>
    );
};

export const LevelManager: React.FC = () => {
  return (
    <group>
      {SECTIONS.slice(1).map((section) => (
        <group key={section.id} position={section.position}>
            
            {/* 3D Visual Icon */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <group position={[4, 0, 0]}>
                    <TechIcon type={section.id} color={section.color} />
                </group>
            </Float>

            {/* 3D Text Label */}
            <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
                <group position={[-3, 0, 0]} rotation={[0, 0.2, 0]}>
                    <Center right>
                        <Text3D
                            font={FONT_URL}
                            size={1.5}
                            height={0.2}
                            curveSegments={12}
                        >
                            {section.title}
                            <meshStandardMaterial color={section.color} />
                        </Text3D>
                    </Center>
                    <Center right position={[0, -1.2, 0]}>
                         <Text3D
                            font={FONT_URL}
                            size={0.4}
                            height={0.1}
                        >
                            {section.id.toUpperCase()} SOLUTIONS
                            <meshStandardMaterial color="#888" />
                        </Text3D>
                    </Center>
                </group>
            </Float>

            {/* Decor Rings */}
            <mesh rotation={[Math.PI/2, 0, 0]} position={[0, -5, 0]}>
                <ringGeometry args={[8, 8.2, 32]} />
                <meshBasicMaterial color={section.color} transparent opacity={0.1} />
            </mesh>

        </group>
      ))}
      
      {/* Connecting Data Lines */}
      {SECTIONS.map((_, i) => {
          if (i === SECTIONS.length - 1) return null;
          const start = SECTIONS[i].position[2];
          const end = SECTIONS[i+1].position[2];
          return (
              <mesh key={`line-${i}`} position={[0, -2, (start + end)/2]} rotation={[Math.PI/2, 0, 0]}>
                  <cylinderGeometry args={[0.05, 0.05, Math.abs(start - end), 8]} />
                  <meshBasicMaterial color="#333" transparent opacity={0.5} />
              </mesh>
          );
      })}
    </group>
  );
};
