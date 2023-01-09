import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Scene from './Scene';
import * as THREE from 'three';
import {
  EffectComposer,
  DepthOfField,

  Vignette,
} from '@react-three/postprocessing';
import {
  Stats,
  Environment,
  PerspectiveCamera,
  OrbitControls,
} from '@react-three/drei';
import { LayerMaterial, Depth, Noise } from 'lamina';
import { ACESFilmicToneMapping, sRGBEncoding } from 'three';
import { Perf } from 'r3f-perf';
import { ToneMapping } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import Background from './Background';

export const Face = ({ setLoader }) => {
  const [mobil, setMobil] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setMobil(true);
    }
  }, []);
  return (
    <div className='headxav'>
      <Suspense fallback={null}>
        <Canvas
          // style={{ pointerEvents: 'none' }}
          // shadows={true}
          // linear={true}
          dpr={[1,2]}
          gl={{
            outputEncoding: sRGBEncoding,
            physicallyCorrectLights: true,
            antialias: true,
            toneMapping: ACESFilmicToneMapping,
            alpha: true
            
          }}
          // resize={true}
        >
                  <Scene mobil={mobil} setLoader={setLoader} />
                {/* <Background/> */}
               <PerspectiveCamera
            makeDefault
            fov={50}
            near={0.1}
            far={100}
            position={mobil ? [3.5, 0, 25] : [2, 0, 26]}
            // dispose={null}
          />
   
          {
            mobil ? (
              ''
            ) : (
              <>
              <Environment background resolution={128} blur={1}>
                <mesh scale={100}>
                  <sphereGeometry args={[1, 64, 64]} />
                  <LayerMaterial
                    side={THREE.BackSide}
                    color='#0bb5b5'
                    alpha={0.1}
                    mode='darken'
                  >
                    <Depth
                      colorA='#ff00ff'
                      colorB='#ff00ff'
                      alpha={0.91}
                      mode='darken'
                      near={-10}
                      far={10}
                      origin={[100, 100, 100]}
                    />
                    <Noise
                      mapping='simplex'
                      type='perlin'
                      scale={21}
                      mode='multiply'
                    />
                  </LayerMaterial>
                </mesh>
              </Environment>
          
              {/* <EffectComposer
              enabled = {true}
  depthBuffer = {true}
  disableNormalPass= {true}
  stencilBuffer={true}
  // dispose={null}
  autoClear={true}
  resolutionScale={2}
  >

              <DepthOfField
                  focusDistance={0}
                  focalLength={0.4}
                  bokehScale={2}
                  height={480}
                />
       
              <Vignette eskil={false} offset={0.1} darkness={0.8} />
              </EffectComposer> */}
            </>
           ) }
   
          <Perf deepAnalyze={true} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Face;
