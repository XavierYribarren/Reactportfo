import {
  Box,
  CameraShake,
  Environment,
  Html,
  MeshReflectorMaterial,
  Scroll,
  useScroll,
} from '@react-three/drei';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Tv } from './Tv';
import * as THREE from 'three';
import { useFrame, useThree } from 'react-three-fiber';
import { Letter } from './Letter';
import CurrentW from './CurrentW';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from '@react-spring/web';
gsap.registerPlugin(ScrollTrigger);
import { animated } from '@react-spring/web'


export default function Scene() {
  const group = useRef();
  const tv = useRef();
  const letter = useRef();
  const introduce = useRef(null)
  const [hover, setHover] = useState(false);
  const { camera, mouse } = useThree();
  function Rig() {
    const [vec] = useState(() => new THREE.Vector3());

    useFrame(() => camera.position.lerp(vec.set(-1, 0.1, 1.6), 0.05));
    // return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.05} pitchFrequency={0.05} rollFrequency={0.04} />
  }


  const scroll = useScroll();
  const { width, height } = useThree((state) => state.viewport);

  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 4, 4 / 4);
    const r2 = scroll.range(0, 4 / 4);
    const letterRot = scroll.range(0 / 4, 2 / 4);
    const introPos = scroll.range(0 / 4, 1 / 4);
    const introPos2 = scroll.range(1 / 4, 1 / 2);
    // const r3 = scroll.visible(4 / 5, 1 / 5)
    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      (-width / 4) * r1,
      10,
      1
    );
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      (width / 4) * r2,
      10,
      1
    );
    tv.current.position.z = THREE.MathUtils.damp(
      tv.current.position.z,
      -(width / 8) * letterRot,
      10,
      1
    );

 
  });
  const handleOpenNewTab = () => {

    const urlToOpen = 'http://tweakasix.netlify.app';

    window.open(urlToOpen, '_blank');
  };
  const w = 1 / 3;  
  




  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 1,
        x: 100000,
      },
      to: {
        opacity: 1,
        x: 1000,
      },
    }),
    // {
    //   rootMargin: '-40% 0%',
    // }
  )


  
  return (
    <>
      <Rig />

      <group
        ref={group}
        dispose={null}
        // position={[width * w,0,0]}
      >
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

            mirror={1}
          />
        </mesh>

        <spotLight
          lookAt={[12, 8, 2]}
          position={[0, 4, 14]}
          intensity={2}
          penumbra={0.2}
          castShadow
        />

        <group ref={tv}>
        <CurrentW/>
          <Tv
          className="TV"
            // style={{cursor: 'pointer'}}
          onClick={handleOpenNewTab}
            scale={1}
            onPointerOver={(e) => (e.stopPropagation(), setHover(true),  document.body.style.cursor = 'pointer' )}
            onPointerOut={() => (setHover(false),  document.body.style.cursor = 'auto') }
            hover={hover}
          />
        </group>
        <group ref={letter}>
          <Letter
            scale={0.5}
            position={[1.4, 0, 0.2]}
            rotation={[0, -Math.PI * 0.3, 0]}
          />
        </group>
   
    
    <Scroll html >
<div>
<animated.div 
ref={ref} style={springs}
>

{/* <div 
// ref={introduce} id="introduce" style={{ position: 'absolute' , top:'33vh', left:'100vw' , width:'30vw'}}
>    */}
 Hi, I'm Xavier Yribarren,
    a 28 years old web developper 
    actually living in Lyon, FR.
</animated.div>
    </div>

</Scroll>
        <Environment preset='dawn'  blur={3} />
      </group>
    </>
  );
}
