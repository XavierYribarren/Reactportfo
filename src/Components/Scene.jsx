import {
  Box,
  CameraShake,
  Environment,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  Stage,
  Text,
  useScroll,
} from '@react-three/drei';
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Tv } from './Tv';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { Letter } from './Letter';
import CurrentW from './CurrentW';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { TextSection } from './TextSection';
import { ReactLogo } from './ReactLogo';
import { Background } from './Background';
import PostProc from './PostProc';
import { DepthOfField, EffectComposer, SelectiveBloom, ChromaticAberration } from '@react-three/postprocessing';
import Introduce from './Introduce';
import { BlendFunction } from 'postprocessing';
export default function Scene() {
  const group = useRef();
  const tv = useRef();
  const letter = useRef();
  const camGroup = useRef();

  const [hover, setHover] = useState(false);
  const { camera, mouse } = useThree();
  function Rig() {
    const [vec] = useState(() => new THREE.Vector3());

    useFrame(() => camera.position.lerp(vec.set(-1, 0.1, 1.6), 0.05));
    // return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.05} pitchFrequency={0.05} rollFrequency={0.04} />
  }
  const lightCol = useRef({
color: "#ffffff"

})

const reactLogo = useRef()

  const introduce = useRef();
const backG = useRef()  
const envbl = useRef(null)
const spotRef = useRef()
  const scroll = useScroll();
  const { width, height } = useThree((state) => state.viewport);
const [visibility, setVisibility] = useState(false)
let  ringScaleM



  const cameraRail = useRef();
  const FRICTION_DISTANCE = 42;
  useFrame((state, delta) => {
    
    tl.current.seek(scroll.offset * tl.current.duration())

  });
  const handleOpenNewTab = () => {
    const urlToOpen = 'http://tweakasix.netlify.app';

    window.open(urlToOpen, '_blank');
  };
  const w = 1 / 3;

const tl = useRef()

 useLayoutEffect(() => {
  tl.current = gsap.timeline({  scrollTrigger: {
    trigger: ".main",
    // pin: true,   // pin the trigger element while active
    start: "top top",
    end: "bottom 100%",// when the top of the trigger hits the top of the viewport
    // end: "+=500", // end after scrolling 500px beyond the start
    markers : true,
    scrub: 0.01 
  }})
tl.current.pause()

tl.current.fromTo(tv.current.position, {x: 0, z : 0}, {
  duration : 0.21,
  x : -2,
  z : -2
})
.to(camGroup.current.rotation,  {
  duration: 0.2,
  ease: "power1.out",
  y : -Math.PI *0.20,
}, "<0.01")


  tl.current.fromTo(introduce.current.position, {x : 10, y: 0.5,z: - 10 },{
    duration : 0.25,
    ease: "power1.out",
x : 1.5,
y:0.45,
z:0.5
  },"-=0.2" )

  tl.current.fromTo(introduce.current, {fillOpacity : 0 },{
    duration : 0.2,
    ease: "power1.inOut",
 fillOpacity: 1
  }, "-=0.01")
  tl.current.to(introduce.current, {
    ease: "power1.inOut",
    fillOpacity: "0",
    duration : 0.1,
  },"<0.2")

  .to(camGroup.current.rotation,  {
    duration: 0.3,
    ease: "power1.in",
    y : -Math.PI *0.70,
   
  }, 
  "-=0.3"  
  )
  .to(camGroup.current.rotation,  {
    duration: 0.3,
    ease: "power1.in",
    y : -Math.PI *0.70,
   
  }, 
  // "<0.2"  
  )  .to(camGroup.current.rotation,  {
    duration: 0.3,
    ease: "power1.in",
    y : -Math.PI *0.70,
   
  }, 
  // "<0.2"  
  )  .to(camGroup.current.rotation,  {
    duration: 0.3,
    ease: "power1.in",
    y : -Math.PI *0.70,
   
  }, 
  // "<0.2"  
  )
// tl.current.kill()


 })
 const backgroundColors = useRef({
  colorA: "#505050",
  colorB: "#505050",
});
  return (
    <>
      {/* <Rig /> */}

  
     
      <group
        ref={camGroup}
        position={[0, 0.1, 1.8]}

      >
        <spotLight
          lookAt={[1, 0, 2]}
          position={[0, 4, 14]}
          intensity={5}
          penumbra={0.2}
          castShadow
          ref={spotRef}
        />

            <Background backgroundColors={backgroundColors} />
        {/* <OrbitControls enableZoom={false}/> */}
        <group    ref={cameraRail}     rotation={[0,-Math.PI*0.17,0]}>
  
        <PerspectiveCamera
          fov={30}
          rotation={[0.2, 0, 0]}
          makeDefault
          />
          </group>

      </group>
      {/* {textSections.map((textSection, index) => (
          <TextSection {...textSection} key={index} />
        ))} */}
      


  <EffectComposer>
<DepthOfField
  focusDistance={0.0082}
  focalLength={0.09}
  blur={1.4}
  bokehScale={4}
  height={480}
  /> 
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

        {/* <Scroll html > */}

        {/* <div ref={introduce} id="introduce" style={{ position: 'fixed' , top:'33vh', left:'100vw' , width:'30vw'}}> */}
        {/* <Html> */}
<group
 ref={introduce}
//  position={[0,0.1,0]}
 >

      <Introduce 
      
           introduce={introduce}
          //  position={[14,0.8,2]}
            // rotation={[0,-Math.PI*0.4,0]}
            />
        </group>
        {/* <Text ref={introduce}
        // className='pipi'
        fontSize={0.2}
        position={[14,0.8,2]}
        // fillOpacity={0}
        maxWidth={2.3}
        rotation={[0,-Math.PI*0.4,0]}
        color={"white"}
        >
        
 Hi, I'm Xavier Yribarren,
    a 28 years old web developper 
    actually living in Lyon, FR.
    
        </Text> */}
  


<group ref={reactLogo} position={[1,0.5,2.5]}
scale={1.5}
>

        <ReactLogo 
        visibility={visibility}
        ringScaleM={ringScaleM}
        />
</group>
        <Environment 
        preset='dawn'
        //  background 
         blur={3}
         />
      
      </group>  </EffectComposer>
    </>
  );
}
