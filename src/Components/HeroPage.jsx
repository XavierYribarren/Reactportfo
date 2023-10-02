import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import './hero-page.css';
import Scene from './Scene';
import * as THREE from 'three';

import {

  ScrollControls, Stage,
} from '@react-three/drei';


function HeroPage() {
  return (
    <div className='headxav'>
      <Canvas
        fallback={null}
        // camera={{ position: [-1, 20.1, 10.6], fov:30 }}
        linear

        shadows
        legacy
        dpr={[1, 1.5]}
        gl={{
          // preserveDrawingBuffer: true,
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
  
        }}
      >
        {/* <fog attach='fog' color='#040404' near={1} far={20} /> */}

        <ScrollControls
          // distance={0.5}
          pages={22}
          damping={0.51}
      
        >
         

          <Scene />
      
        </ScrollControls>
        {/* <Perf deepAnalyze={true} /> */}
      </Canvas>

    </div>
  );
}

export default HeroPage;
