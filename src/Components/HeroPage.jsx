import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import './hero-page.css';
import Scene from './Scene';

import { Loader, ScrollControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { isMobile } from 'react-device-detect';

function HeroPage() {
  return (
    <div className='headxav'>
      <Suspense
        fallback={   <Loader/>}
        // fallback={}
      >
        <Canvas
          fallback={null}
          //  frameloop='demand'

          linear
          shadows
          // legacy
          dpr={[1, 1.5]}
          gl={{
            // preserveDrawingBuffer: true,
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
        >
          <fogExp2
            attach='fog'
            color='#8ce8f4'
            near={50}
            far={85}
            density={0.021}
          />

          <ScrollControls
            horizontal={isMobile ? true : false}
            pages={22}
            damping={0.51}
            infinite
          >
            <Scene />
          </ScrollControls>
          {/* <Stats/> */}
        </Canvas>
     
      </Suspense>
    </div>
  );
}

export default HeroPage;
