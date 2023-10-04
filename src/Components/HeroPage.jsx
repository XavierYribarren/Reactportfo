import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import './hero-page.css';
import Scene from './Scene';
import * as THREE from 'three';

import {

  Environment,
  ScrollControls, Stage,
} from '@react-three/drei';
import { Perf } from 'r3f-perf';


function HeroPage() {
  return (
    <div className='headxav'>
      <Canvas
        fallback={null}
     
        // camera={{ position: [-1, 20.1, 10.6], fov:30 }}
        linear

        shadows
        legacy
        // dpr={[1, 1.5]}
        gl={{
          // preserveDrawingBuffer: true,
          antialias: true,
          alpha: true,
          powerPreference: 'default',
          
  
        }}
      >
        <fogExp2 attach='fog' color='#8ce8f4' near={20} far={85} density={0.021} />

        <ScrollControls
          // distance={0.5}
          pages={22}
          damping={0.51}
      
        >
                <Environment
    
            preset='dawn'
            // files='satara_night_4k.hdr'
            //  background
            blur={4}
          />

          <Scene />
      
        </ScrollControls>
        <Perf deepAnalyze={true} trackCPU />
      </Canvas>

    </div>
  );
}

export default HeroPage;
