import {
  Cloud,
  Environment,
  Float,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  useScroll,
} from '@react-three/drei';
import React, {
  Suspense,
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
import { Physics, usePlane, useBox } from '@react-three/cannon'
import PostProc from './PostProc';
import {
  DepthOfField,
  EffectComposer,
  SelectiveBloom,
  ChromaticAberration,
  Noise,
  Texture,
  Bloom,
  Vignette,
  Glitch
} from '@react-three/postprocessing';

import Introduce from './Introduce';
import { BlendFunction, Effect, TextureEffect, GlitchMode } from 'postprocessing';
import About from './About';
import ProjectsShow from './ProjectsShow';
import Floor from './Floor';
import Clouds from './Clouds';
import CloudSky from './Clouds';
import ProjectsWeb from './ProjectsWeb';

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

const envRef=useRef()
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
  const [pause, setPause] = useState(true)
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
        // markers: true,
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
          y: -Math.PI * 0.18,
        },
        "<"
      );

    // tl.current.fromTo(
    //   introduce.current.position,
    //   { x: 10, y: 0.5, z: -10 },
    //   {
    //     duration: 0.1,
    //     ease: 'power1.out',
    //     x: 1.5,
    //     y: 0.45,
    //     z: 0.5,
    //   },
    //   // camGroup.current 
    //   "<"
    // );

    tl.current.fromTo(
      introduce.current,
      { fillOpacity: 0 },
      {
        duration: 0.12,
        // ease: 'power1.inOut',
        fillOpacity: 1,
      },
      '-=0.02'
    );
    tl.current
      .to(
        introduce.current,
        {
          ease: 'power1.in',
          fillOpacity: '0',
          duration: 0.15,
        },
        '-=0.01'
      )

      .to(
        camGroup.current.rotation,
        {
          duration: 0.2,
          ease: 'power1.in',
          y: -Math.PI * 0.55,
        },
        '-=0.1'
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
      '<-=0.2'
    );

    tl.current.fromTo(
      about.current,
      { titleRef: 0 },
      {
        duration: 0.1,
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
        duration: 0.02,
      },
      '<0.01'
    );
    tl.current.fromTo(
      about.current,
      { r3fRef: 0 },
      {
        ease: 'power1.inOut',
        r3fRef: 1,
        duration: 0.02,
      },
      '<0.01'
    );
    tl.current.fromTo(
      about.current,
      { nodeRef: 0 },
      {
        ease: 'power1.inOut',
        nodeRef: 1,
        duration: 0.02,
      },
      '<0.01'
    );

    tl.current
      .fromTo(
        about.current,
        { sqlRef: 0 },
        {
          // ease: 'power1.inOut',
          sqlRef: 1,
          duration: 0.02,
        },
        '<0.01', "+=0.5"
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
           ontoggle: (pause) => { setTimeout(() => {setPause(false)}, 1000) } 
        },
        "<"
      )
      .to(
        camGroup.current.rotation,
        {
          duration: 0.3,
          ease: 'power1.in',
          y: -Math.PI * 1,
      
        },  
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
    colorA: '#a5a5a5',
    colorB: '#aaaaaaa',
  });
console.log(cameraRail)
  return (
    <>
      {/* <Rig /> */}
     <spotLight
          lookAt={[1, 0, 2]}
          position={[8.0, 5, -14]}
          intensity={1.2}
          penumbra={0.2}
          castShadow
          // shadowBias={-0.00001}
          shadow-camera-near={0.1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={100}
          shadow-camera-left={-100}
          shadow-camera-right={100}
          shadow-camera-top={100}
          shadow-camera-bottom={-100}
          ref={spotRef}
                  />
      <group ref={camGroup} position={[0, 0.1, 1.8]}>
     


        <Background backgroundColors={backgroundColors} />
        {/* <OrbitControls enableZoom={false}/> */}
        <group ref={cameraRail} rotation={[0, -Math.PI * 0.17, 0]}>
          


        
          <PerspectiveCamera fov={30}  rotation={[0.2, 0, 0]} makeDefault />

        </group>
      </group>
<CloudSky/>
        <group
          // ref={group}
          dispose={null}
          position={[width * w, 0, 0]}
        >
  
          <group ref={tv} dispose={null}>
            <CurrentW dispose={null}/>
            <Tv dispose={null}
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

          <group ref={letter} dispose={null}>
            <Letter
              scale={0.6}
              position={[1.4, 0.2, -0.2]}
              rotation={[0, -Math.PI * 0.3, 0]}
              light={spotRef}
            />
          </group>

  
          <group ref={introduce} dispose={null} position={[1.5,0.45,0.5]}>
            <Introduce castShadow introduce={introduce} />
          </group>

          <group ref={about}><About castShadow about={about} dispose={null}/></group>

          <group  ref={reactLogo}  position={[1, 0.5, 2.5]} scale={1.5} dispose={null}>
            <ReactLogo visibility={visibility} ringScaleM={ringScaleM} />
          </group>
        <Physics isPaused={pause} gravity={[0, -9.81, 0]} allowSleep={true} tolerance={0}>
  
    <Floor   />
<group 
position={[1.05,0,5.2]}
rotation={[0,-Math.PI*0.8,0]}
>


<ProjectsShow ref={projects} env={envRef}  />

</group>
  </Physics>

<group position={[-2.5,2,10]} scale={15}>

<ProjectsWeb/>
</group>






          {/* <Environment
      ref={envRef}
      
            preset='dawn'
            // files='satara_night_4k.hdr'
            //  background
            blur={4}
          /> */}
        </group>


      <EffectComposer disableNormalPass={true}   >

        {/* <DepthOfField
          focusDistance={0.0082}
          focalLength={0.09}
          blur={1.4}
          bokehScale={4}
          // height={480}
        /> */}

        {/* <Noise  
        premultiply 
opacity={0.14}
    blendFunction={BlendFunction.ADD} // blend mode
    />  */}

        {/* <ChromaticAberration
    blendFunction={BlendFunction.ADD} // blend mode
    offset={[0.001, 0.002]} // color offset
  /> */}
{/* <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.49} height={300}/> */}

{/* <Texture 
// aspectCorrection={true} 

blendFunction={BlendFunction.LIGHTEN} textureSrc='/scratches.jpg'/> */}

{/* <Vignette 
eskil={false} 
offset={0.49} darkness={0.49} /> */}

      </EffectComposer>
    </>
  );
}
