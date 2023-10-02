import {
  Environment,
  Float,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  useScroll,
} from '@react-three/drei';
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Tv } from './Tv';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { Letter } from './Letter';
import CurrentW from './CurrentW';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { TextSection } from './TextSection';
import { ReactLogo } from './ReactLogo';
import { Background } from './Background';

import PostProc from './PostProc';
import {
  DepthOfField,
  EffectComposer,
  SelectiveBloom,
  ChromaticAberration,
  Noise,
  Texture
} from '@react-three/postprocessing';

import Introduce from './Introduce';
import { BlendFunction, Effect, TextureEffect } from 'postprocessing';
import About from './About';
import ProjectsShow from './ProjectsShow';

export default function Scene() {
  const tv = useRef();
  const letter = useRef();
  const camGroup = useRef();
  const about = useRef({
    titleRef: 0,
    reactRef: '0',
    nodeRef: 0,
    r3fRef: 0,
    sqlRef: 0,
  });
  const projects = useRef();
  const [hover, setHover] = useState(false);
  const { camera, mouse } = useThree();
  function Rig() {
    const [vec] = useState(() => new THREE.Vector3());

    useFrame(() => camera.position.lerp(vec.set(-1, 0.1, 1.6), 0.05));
    // return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.05} pitchFrequency={0.05} rollFrequency={0.04} />
  }

  const reactLogo = useRef();

  const introduce = useRef();

  const spotRef = useRef();
  const scroll = useScroll();
  const { width, height } = useThree((state) => state.viewport);
  const [visibility, setVisibility] = useState(false);
  let ringScaleM;

  const cameraRail = useRef();
  const FRICTION_DISTANCE = 42;
  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });
  const handleOpenNewTab = () => {
    const urlToOpen = 'http://tweakasix.netlify.app';

    window.open(urlToOpen, '_blank');
  };
  const w = 1 / 3;

  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.main',
        // pin: true,   // pin the trigger element while active
        start: 'top top',
        end: 'bottom 100%', // when the top of the trigger hits the top of the viewport
        // end: "+=500", // end after scrolling 500px beyond the start
        markers: true,
        scrub: 0.01,
      },
    });
    tl.current.pause();

    tl.current
      .fromTo(
        tv.current.position,
        { x: 0, z: 0 },
        {
          duration: 0.21,
          x: -2,
          z: -2,
        }
      )
      .to(
        camGroup.current.rotation,
        {
          duration: 0.21,
          ease: 'power1.out',
          y: -Math.PI * 0.2,
        },
        '<'
      );

    tl.current.fromTo(
      introduce.current.position,
      { x: 10, y: 0.5, z: -10 },
      {
        duration: 0.15,
        ease: 'power1.out',
        x: 1.5,
        y: 0.45,
        z: 0.5,
      },
      camGroup.current
    );

    tl.current.fromTo(
      introduce.current,
      { fillOpacity: 0 },
      {
        duration: 0.2,
        ease: 'power1.inOut',
        fillOpacity: 1,
      },
      '-=0.01'
    );
    tl.current
      .to(
        introduce.current,
        {
          ease: 'power1.inOut',
          fillOpacity: '0',
          duration: 0.15,
        },
        '<-0.15'
      )

      .to(
        camGroup.current.rotation,
        {
          duration: 0.2,
          ease: 'power1.in',
          y: -Math.PI * 0.55,
        },
        '-=0.15'
      );
    tl.current.fromTo(
      about.current.position,
      { x: 10, y: 0.5, z: 10 },
      {
        duration: 0.25,
        ease: 'power1.out',
        x: 1.5,
        y: 0.75,
        z: 3.1,
      },
      '<-0.2'
    );

    tl.current.fromTo(
      about.current,
      { titleRef: 0 },
      {
        duration: 0.2,
        ease: 'power1.inOut',
        titleRef: 1,
      },
      '-=0.01'
    );

    tl.current.fromTo(
      about.current,
      { reactRef: 0 },
      {
        ease: 'power1.inOut',
        reactRef: 1,
        duration: 0.1,
      },
      '<0.2'
    );
    tl.current.fromTo(
      about.current,
      { r3fRef: 0 },
      {
        ease: 'power1.inOut',
        r3fRef: 1,
        duration: 0.1,
      },
      '<0.2'
    );
    tl.current.fromTo(
      about.current,
      { nodeRef: 0 },
      {
        ease: 'power1.inOut',
        nodeRef: 1,
        duration: 0.05,
      },
      '<0.2'
    );

    tl.current
      .fromTo(
        about.current,
        { sqlRef: 0 },
        {
          // ease: 'power1.inOut',
          sqlRef: 1,
          duration: 0.1,
        },
        '<0.2',
      )
   

      tl.current.to(about.current.position, {
        // ease: "elastic.in(1, 0.3)",
        y: 15,
        x:10,
        z: 10,
        duration: 0.2
      })
      
      tl.current.to(
        camGroup.current.rotation,
        {
          duration: 0.3,
          ease: 'power1.in',
          y: -Math.PI * 0.7,
        },
        "<"
      )
      .to(
        camGroup.current.rotation,
        {
          duration: 0.3,
          ease: 'power1.in',
          y: -Math.PI * 1,
        }
        // "<0.2"
      )
      .to(
        camGroup.current.rotation,
        {
          duration: 0.3,
          ease: 'power1.in',
          y: -Math.PI * 1.4,
        }
        // "<0.2"
      );
    // tl.current.kill()
  });
  const backgroundColors = useRef({
    colorA: '#505050',
    colorB: '#505050',
  });
console.log(cameraRail)
  return (
    <>
      {/* <Rig /> */}

      <group ref={camGroup} position={[0, 0.1, 1.8]}>
        <spotLight
          lookAt={[1, 0, 2]}
          position={[0, 4, 14]}
          intensity={2}
          penumbra={0.2}
          castShadow
          ref={spotRef}
        />

        <Background backgroundColors={backgroundColors} />
        {/* <OrbitControls enableZoom={false}/> */}
        <group ref={cameraRail} rotation={[0, -Math.PI * 0.17, 0]}>
      
          <PerspectiveCamera fov={30} rotation={[0.2, 0, 0]} makeDefault />
        </group>
      </group>

      <EffectComposer disableNormalPass={true}  autoClear camera={cameraRail.PerspectiveCamera}>
        {/* <DepthOfField
          // focusDistance={0.0082}
          // focalLength={0.09}
          // blur={1.4}
          // bokehScale={4}
          // // height={480}
        /> */}
        <group
          // ref={group}
          dispose={null}
          position={[width * w, 0, 0]}
        >
          <mesh
            rotation={[-Math.PI * 0.5, 0, 0]}
            position={[0, 0.01, 0]}
            receiveShadow
            castShadow
          >
            <circleBufferGeometry args={[5, 50]} />
            <MeshReflectorMaterial
              color='#151515'
              blur={[100, 100]}
              resolution={2048}
              mixBlur={0}
              mixStrength={1}
              depthScale={10}
              minDepthThreshold={2}
              metalness={0}
              roughness={1}
              mirror={1}
            />
            {/* <meshBasicMaterial ref={backG} side={THREE.DoubleSide}  /> */}
          </mesh>

          <group ref={tv}>
            <CurrentW />
            <Tv
              className='TV'
              // style={{cursor: 'pointer'}}
              onClick={handleOpenNewTab}
              scale={1}
              onPointerOver={(e) => (
                e.stopPropagation(),
                setHover(true),
                (document.body.style.cursor = 'pointer')
              )}
              onPointerOut={() => (
                setHover(false), (document.body.style.cursor = 'auto')
              )}
              hover={hover}
              light={spotRef}
            />
          </group>

          <group ref={letter}>
            <Letter
              scale={0.5}
              position={[1.4, 0, -0.2]}
              rotation={[0, -Math.PI * 0.3, 0]}
              light={spotRef}
            />
          </group>

  
          <group ref={introduce}>
            <Introduce castShadow introduce={introduce} />
          </group>

          <group ref={about}><About castShadow about={about} /></group>

          <group ref={reactLogo} position={[1, 0.5, 2.5]} scale={1.5}>
            <ReactLogo visibility={visibility} ringScaleM={ringScaleM} />
          </group>
<group ref={projects} rotation={[0,-Math.PI*0.8,0]} position={[0.5,0.01,3.22]}>


<ProjectsShow/>
</group>

          <Environment
            preset='dawn'
            //  background
            blur={2}
          />
        </group>
        {/* <Noise  
        premultiply 

    blendFunction={BlendFunction.ADD} // blend mode
    />  */}

        {/* <ChromaticAberration
    blendFunction={BlendFunction.INVERT} // blend mode
    offset={[0.001, 0.002]} // color offset
  /> */}


{/* <Texture 
// aspectCorrection={true} 

blendFunction={BlendFunction.LIGHTEN} textureSrc='/scratches.jpg'/> */}


      </EffectComposer>
    </>
  );
}
