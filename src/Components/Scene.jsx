import {

  OrbitControls,
  PerspectiveCamera,
  QuadraticBezierLine,

  useScroll,
} from '@react-three/drei';
import React, {

  useLayoutEffect,

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

import { ReactLogo } from './ReactLogo';
import { Background } from './Background';
import { Debug, Physics} from '@react-three/cannon'

import {
  DepthOfField,
  EffectComposer,

} from '@react-three/postprocessing';

import Introduce from './Introduce';

import About from './About';
import ProjectsShow from './ProjectsShow';
import Floor from './Floor';

import CloudSky from './Clouds';
import ProjectsWeb from './ProjectsWeb';
import { useControls } from 'leva';
import Baloons from './Baloons';
import { Picket } from './Picket';
import {isMobile} from 'react-device-detect';
import ArtShow from './ArtShow';
import ArtPortal from './ArtPortal';
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
const floorRef = useRef()
const picketRef = useRef()
const envRef=useRef()
  const projects = useRef();
const artRef = useRef()



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
  const [projGo, setProjGo] = useState(false)
  const [artGo, setArtGo] = useState(false)
  let ringScaleM;

  const cameraRail = useRef();
  const FRICTION_DISTANCE = 42;
  useFrame((state, delta) => {
    if(isMobile){
      tl.current.seek((scroll.offset*5) * tl.current.duration());
    }
    tl.current.seek((scroll.offset) * tl.current.duration());
  });
  const handleOpenNewTab = () => {
    const urlToOpen = 'http://tweakasix.netlify.app';

    window.open(urlToOpen, '_blank');
  };
  const w = 1 / 3;

  const tl = useRef();

  useLayoutEffect(() => {

let ctx = gsap.context(() => {



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
          ease : 'power3.inOut',
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

      tl.current.to(
        camGroup.current.rotation,
        {
          duration: 0.2,
          ease: 'power1.in',
          y: -Math.PI * 0.6,
        },
        '-=0.1'
      );
    tl.current.fromTo(
      about.current.position,
      { x: 10, y: 0.5, z: 10 },
      {
        duration: 0.25,
        ease: 'power1.out',
        x: 1.2,
        y: 0.75,
        z: 2.8,
      },
      '<-=0.2'
    );

    tl.current.fromTo(
      about.current,
      { titleRef: 0 },
      {
        duration: 0.01,
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
          duration: 0.2,
        },
        '<0.01'
      )
   

      tl.current.to(about.current.position, {
        // ease: "elastic.in(1, 0.3)",
        y: 15,
        x:1,
        z: 1,
        duration: 0.2
      })
      tl.current.to(tv.current.position, { x: 0, z: 0 }, "<")
      
      // tl.current.to(
      //   camGroup.current.rotation,
      //   {
      //     duration: 0.3,
      //     ease: 'power1.in',
      //     y: -Math.PI * 0.7,   
          
      //   },
      //   "<+=0.2"
      // )
      tl.current.to(
        camGroup.current.rotation,
        {
          duration: 0.23,
          ease: 'power1.out',
          y: -Math.PI * 0.9,
          onanimationstart: () => { setTimeout(() => {setProjGo(true)}, 1000) } 
        },  
        "<"
      )
      .to(
        camGroup.current.rotation,
        {
          duration: 0.3,
          ease: 'power1.in',
          y: -Math.PI * 1.4,
          onanimationend: () => { setTimeout(() => {setArtGo(true)}, 1000) } 
  
        },
        // "<0.002"
      );

      tl.current.to(
        camGroup.current.rotation,
        {
          duration: 0.43,
          ease: 'power1.inOut',
          y: -Math.PI * 2,
          // onanimationend: () => { setTimeout(() => {setArtGo(true)}, 1000) } 
  
        },
        // "<0.002"
      );
    // tl.current.kill()
  })
  return () => ctx.revert();
  });
  const backgroundColors = useRef({
    colorA: '#a5a5a5',
    colorB: '#aaaaaaa',
  });

  function Cable({ start, startOffset, end, endOffset }) {
    const ref = useRef()
    const v1 = new THREE.Vector3();
  const v2 = new THREE.Vector3();


    useFrame((state, delta) =>  {

      const elapsedTime = state.clock.getElapsedTime()
      const startPosition = start.current.getWorldPosition(v1);
    const endPosition = end.current.getWorldPosition(v2);

    const startOffsetVector = new THREE.Vector3(...startOffset);

    // Apply the startOffset to v1
    v1.copy(startPosition).add(startOffsetVector);

    // Create a Vector3 instance from endOffset array
    const endOffsetVector = new THREE.Vector3(...endOffset);

    // Apply the endOffset to v2
    v2.copy(endPosition).add(endOffsetVector);

    const midVector = new THREE.Vector3((v2.x+v1.x)/2, (v2.y+v1.y)/2*Math.sin(v2.y-v1.y), (v2.z+v1.z)/2)


    // Set the points for the quadratic bezier line
    ref.current.setPoints(v1, v2, midVector), []})
    return( 
    <mesh castShadow receiveShadow>

    <QuadraticBezierLine receiveShadow  ref={ref}  lineWidth={5} color={'#eeffdf'} shadowSide={THREE.DoubleSide}/>

    </mesh>
    
    )
  }
  

  // const { gridSize, ...gridConfig } = useControls({
  //   gridSize: [10.5, 10.5],
  //   cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
  //   cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
  //   cellColor: '#6f6f6f',
  //   sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
  //   sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
  //   sectionColor: '#9d4b4b',
  //   fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
  //   fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
  //   followCamera: false,
  //   infiniteGrid: true
  // })

  return (
    <>
    {/* <mesh rotation={[-Math.PI *0.5, 0,0]} position={[0,0.018,1]}>
      <circleGeometry args={[2,40,12]}/>
      <meshBasicMaterial color={"#ff00ff"}/>
    </mesh> */}
      {/* <Rig /> */}
     

     <spotLight
          lookAt={[1, 0, 2]}
          position={[8.0, 5, -14]}
          intensity={1.2}
          penumbra={0.002}
          castShadow
          shadowBias={-0.00001}
          shadow-camera-near={0.0001}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={100}
          shadow-camera-left={-100}
          shadow-camera-right={100}
          shadow-camera-top={100}
          shadow-camera-bottom={-100}
          ref={spotRef}
        />
     
   
      <group ref={camGroup} position={[0, 0.1, 1.8]}>
     

{/* <Baloons/> */}
        <Background backgroundColors={backgroundColors} />
        {/* <OrbitControls enableZoom={false}/> */}
        <group ref={cameraRail} rotation={[0, -Math.PI * 0.17, 0]}>
          


        
          <PerspectiveCamera makeDefault fov={40} position={[-0.45, 0.051,0]} rotation={[0.2, 0, 0]}  />

        </group>
      </group>
<CloudSky position={[28.8,0.4,11.2]} rotation={[0,-Math.PI*0.5,0]}/>
<CloudSky position={[-14.8,0.4,31.2]} rotation={[0,-Math.PI*1,0]}/>
<CloudSky position={[-28.8,0.4,-11.2]} rotation={[0,-Math.PI*1.5,0]}/>
        <group
          // ref={group}
          dispose={null}
          position={[0, 0, 0]}
        >
{/* <Grid position={[0, 0.01, 0]} args={gridSize} {...gridConfig} /> */}
 
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
          <Picket ref={picketRef}/>
<Cable  start={picketRef} startOffset={[0.1,0,-0.1]}   end={letter}  endOffset={[0,0.6,-0.1]}/>
          <group  dispose={null}>

            <Letter ref={letter}
            
              scale={0.6}
              position={[1.4, 0.2, -0.2]}
              rotation={[0, -Math.PI * 0.3, 0]}
              light={spotRef}
            />
          </group>

  
          <group ref={introduce} dispose={null} position={[1.5,0.45,0.5]}>
            <Introduce castShadow introduce={introduce} />
          </group>

          <group ref={about} ><About castShadow about={about} dispose={null}/></group>

          <group  ref={reactLogo}  position={[1.5, 0.5, 2.12]} scale={1.5} dispose={null}>
            <ReactLogo visibility={visibility} ringScaleM={ringScaleM} />
          </group>
        <Physics  gravity={[0, -9.81, 0]} allowSleep={true} tolerance={0} >
  {/* <Debug color="red" scale={1.51}> */}

    <Floor ref={floorRef} position={[0,0,0]} /> 
<group  
position={[-0.5,0,4.5]}
rotation={[0,-Math.PI*1.05,0]}
>

{projGo &&(
    // <Debug color="red" scale={1.51}>
  <ProjectsShow ref={projects} env={envRef}  />
  // </Debug>
  )}

</group>
<group  position={[-2,0,2.4]}
rotation={[0,Math.PI*0.5,0]}>
{artGo && (
  
  <ArtShow ref={artRef}  env={envRef} /> 
  )}
</group>
 {/* </Debug> */}
  </Physics>

<group position={[-2,2,8]} scale={15}>

<ProjectsWeb/>
</group>

<group scale={1.6} position={[-6,2,-1]} rotation={[0,Math.PI*0.3,0]}>

<ArtPortal/>
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
