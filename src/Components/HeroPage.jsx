import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import './hero-page.css';
import Scene from './Scene';
import * as THREE from 'three';
import {
  EffectComposer,
  DepthOfField,
  Vignette,
} from '@react-three/postprocessing';
import {
  Backdrop,
  CameraShake,
  CycleRaycast,
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
} from '@react-three/drei';
import { LayerMaterial, Depth, Noise } from 'lamina';
import { ACESFilmicToneMapping, sRGBEncoding } from 'three';
import { Perf } from 'r3f-perf';

function HeroPage() {
  function Rig() {
    const [vec] = useState(() => new THREE.Vector3());
    const { camera, mouse } = useThree();
    useFrame(() => camera.position.lerp(vec.set(-1, 0.1, 1.6), 0.05));
    return (
      <CameraShake
        maxYaw={0.01}
        maxPitch={0.01}
        maxRoll={0.01}
        yawFrequency={0.5}
        pitchFrequency={0.5}
        rollFrequency={0.4}
      />
    );
  }

  return (
    <div className='headxav'>
      <Canvas
        fallback={null}
        camera={{ position: [-1, 20.1, 10.6], fov: 30 }}
        linear
        fla
        shadows
        legacy
        dpr={[1, 1.5]}
        gl={{
          // preserveDrawingBuffer: true,
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          // precision: "lowp",
          // powerPreference: "low-power"
        }}
      >
        {/* <color attach="background" args={["#0c0c0c"]}/> */}
        <fog attach='fog' color='#efefef' near={1} far={20} />

        <OrbitControls
          makeDefault
          target={[0.8, 0.6, -0.2]}
          enableDamping={false}
          // enableRotate={false}
          enableZoom={false}
          enablePan={false}
        />

        <ScrollControls
         distance={0.5} 
         pages={4} damping={1}
        horizontal
         >
          {/* <Scroll> */}

          <mesh
            rotation={[-Math.PI * 0.5, 0, 0]}
            position={[0, 0.01, 0]}
            receiveShadow
            castShadow
          >
            <circleBufferGeometry args={[5, 50]} />
            <MeshReflectorMaterial
              color='#efefef'
              blur={[100, 100]}
              resolution={2048}
              mixBlur={0}
              mixStrength={20}
              depthScale={10}
              minDepthThreshold={2}
              metalness={0}
              roughness={1}
              // depthToBlurRatioBias={0.25}
              mirror={1}
            />
          </mesh>

          <Scene />
          {/* </Scroll> */}
        </ScrollControls>
        {/* <Perf deepAnalyze={true} /> */}
      </Canvas>
    </div>
  );
}

export default HeroPage;
