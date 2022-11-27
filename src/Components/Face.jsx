import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Scene from './Scene'
import * as THREE from 'three'
import { EffectComposer, DepthOfField, Bloom, Vignette, SMAA } from '@react-three/postprocessing'
import {  Stats,Environment, PerspectiveCamera } from '@react-three/drei';
import { LayerMaterial, Depth, Noise } from 'lamina';
import { ACESFilmicToneMapping, sRGBEncoding } from 'three';



export const Face =() => {



return (
    <div className='headxav' >
        
<Suspense fallback={null}>
<Canvas 
style={{ pointerEvents : 'none' }}
shadows = {true}
linear={false}

gl={{
  outputEncoding : sRGBEncoding,
  physicallyCorrectLights : true, 
  antialias : true,
  toneMapping : ACESFilmicToneMapping}}
  >


    <Scene />
    <Environment background resolution={128}
    blur={1}>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial side={THREE.BackSide} color="#00ffff" alpha={0.1} mode="normal" >
 
            <Depth colorA="#ff00ff" colorB="#ff00ff" alpha={0.91} mode="darken" near={0} far={50} origin={[100, 100, 102]} />
            <Noise mapping="simplex" type="perlin" scale={1} mode="multiply" />
          </LayerMaterial>
        </mesh>
      </Environment>
                <PerspectiveCamera
         
            makeDefault
            fov={50}
            position={[2, 0, 26]}
          />
             <EffectComposer>
        <DepthOfField focusDistance={0.1} focalLength={2} bokehScale={14} height={960} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={600} />
        <Vignette eskil={false} offset={0.1} darkness={1} />
        <SMAA edgeDetectionMode={1} preset={3}/>
      </EffectComposer>
</Canvas>
<Stats/>
</Suspense>
    </div>
)
  }

  export default Face;