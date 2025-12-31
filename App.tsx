
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Environment } from './components/World/Environment';
import { Player } from './components/World/Player';
import { LevelManager } from './components/World/LevelManager';
import { Effects } from './components/World/Effects';
import { HUD } from './components/UI/HUD';
import { useStore } from './store';

// Cinematic Camera Controller tied to Scroll
const CameraController = () => {
  const { camera } = useThree();
  const { scrollProgress } = useStore();
  
  // Ref to smooth out the movement
  const targetZ = useRef(0);
  
  useFrame((state, delta) => {
    // Map scroll progress (0 to 1) to Z position (0 to -110)
    // We go slightly past the last item
    const scrollTarget = -scrollProgress * 110;
    
    // Smooth Lerp
    targetZ.current = THREE.MathUtils.lerp(targetZ.current, scrollTarget, delta * 2.0);
    
    // Move Camera
    camera.position.z = targetZ.current;
    
    // Slight mouse parallax
    const mouseX = state.mouse.x * 2;
    const mouseY = state.mouse.y * 1;
    
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouseX, delta * 2);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouseY + 2, delta * 2);
    
    // Camera always looks slightly ahead
    camera.lookAt(0, 0, targetZ.current - 50);
  });
  
  return null;
};

function Scene() {
  return (
    <>
        <Environment />
        <group>
             {/* Player removed, strictly showcase now */}
            <Player />
            <LevelManager />
        </group>
        <Effects />
    </>
  );
}

function App() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden select-none">
      <HUD />
      <Canvas
        dpr={[1, 1.5]} 
        gl={{ antialias: false, stencil: false, depth: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 2, 0], fov: 60 }}
      >
        <CameraController />
        <Suspense fallback={null}>
            <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
