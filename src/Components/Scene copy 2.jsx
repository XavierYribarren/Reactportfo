import {
  Box,
  CameraShake,
  Environment,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  Text,
  useScroll,
} from '@react-three/drei';
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Tv } from './Tv';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { Letter } from './Letter';
import CurrentW from './CurrentW';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { TextSection } from './TextSection';

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
  const introduce = useRef();
const backG = useRef()  
const envbl = useRef(null)
  const scroll = useScroll();
  const { width, height } = useThree((state) => state.viewport);


//   const textSections = useMemo(() => {
//     return [
//       {
//         cameraRailDist: -5,
//         position: new THREE.Vector3(
//           10,
//           0.5,
//          0
//         ),
//         subtitle: `Welcome to Wawatmos,
// Have a seat and enjoy the ride!`,
//       },
//       {
//         cameraRailDist: 1.5,
//         position: new THREE.Vector3(
//           12,
//           1,
//          6
//         ),
//         title: "Services",
//         subtitle: `Do you want a drink?
// We have a wide range of beverages!`,
//       },
//       {
//         cameraRailDist: 1,
//         position: new THREE.Vector3(
//           5,
//           1,
//          1
//         ),
//         title: "Fear of flying?",
//         subtitle: `Our flight attendants will help you have a great journey`,
//       },
//       {
//         cameraRailDist: 0.5,
//         position: new THREE.Vector3(
//           15,
//           1,
//          0
//         ),
//         title: "Movies",
//         subtitle: `We provide a large selection of medias, we highly recommend you Porco Rosso during the flight`,
//       },
//     ];
//   }, []);
  const cameraRail = useRef();
  const FRICTION_DISTANCE = 42;
  useFrame((state, delta) => {
    
    tl.current.seek(scroll.offset * tl.current.duration())

    // let friction = 1

    // textSections.forEach((textSection) => {
    //   const distance = textSection.position.distanceTo(
    //     camGroup.current.position
    //   );

    //   console.log(distance)
    //   if (distance < FRICTION_DISTANCE) {
    //     friction = Math.max(distance / FRICTION_DISTANCE, 0.1);
    //     const targetCameraRailPosition = new THREE.Vector3(
    //       (1 - distance / FRICTION_DISTANCE) * textSection.cameraRailDist,
    //       0,
    //       0
    //     );
    //     cameraRail.current.position.lerp(targetCameraRailPosition, delta);
    //     // resetCameraRail = false;
    //   }
    // });

    // const r1 = scroll.range(0 / 4, 4 / 4);
    // const r2 = scroll.range(0, 4 / 4);
    // const TvRot = scroll.curve(0 / 4, 2 / 8);
    // const introPos = scroll.range(0 / 4, 1 / 4);
    // const introPos2 = scroll.range(1 / 4, 1 / 1);

    // camGroup.current.rotation.y = THREE.MathUtils.damp(
    //   camGroup.current.rotation.y,
    //   width * 2 * -r2,
    //   10,
    //   1
    // );
    // tv.current.position.z = THREE.MathUtils.damp(
    //   tv.current.position.z,
    //   -width * TvRot,
    //   10,
    //   1
    // );

  //   introduce.current.position.x = THREE.MathUtils.damp(
  //     introduce.current.position.x, 
  //  10 - scroll.offset*10,
  //     10,
  //     1
  //   )
    // console.log(tl.current.duration())

  backG.current.color = new THREE.Color(lightCol.current.color) 
// envbl.current.blur = envbl.current.blur * (3*scroll.offset)
  //  console.log( envbl.current)
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
    end: "bottom bottom",// when the top of the trigger hits the top of the viewport
    // end: "+=500", // end after scrolling 500px beyond the start
    markers : true,
    scrub: 1, }})
// tl.current.pause()

tl.current.fromTo(tv.current.position, {x: 0, z : 0}, {
  duration : 0.1,
  x : -2,
  z : -2
})
.to(camGroup.current.rotation,  {
  duration: 1,
  y : -Math.PI *0.5
}, "-=0.5")
  tl.current.fromTo(introduce.current.position, {x : 40 },{
    duration : 0.1,
x : 2
  },"-=1" , "+=1")
  tl.current.to(lightCol.current, {
    duration : 0.1,
color: "#ff00ff"
  }, "-=1")


  tl.current.to(introduce.current, {
    duration : 1,
 fillOpacity: 1
  })


 })

  return (
    <>
      {/* <Rig /> */}
      <group
        ref={camGroup}
        position={[0, 0.1, 1.8]}

      >
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
          {/* <MeshReflectorMaterial
            color='#efefef'
            ref={lightCol} 
            blur={[100, 100]}
            resolution={2048}
            mixBlur={0}
            mixStrength={20}
            depthScale={10}
            minDepthThreshold={2}
            metalness={0}
            roughness={1}
            mirror={1}
          /> */}
          <meshBasicMaterial ref={backG} side={THREE.DoubleSide}  />
        </mesh>

        <spotLight
          lookAt={[12, 8, 2]}
          position={[0, 4, 14]}
          intensity={2}
          penumbra={0.2}
          castShadow
        />

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
          />
        </group>
        <group ref={letter}>
          <Letter
            scale={0.5}
            position={[1.4, 0, -0.2]}
            rotation={[0, -Math.PI * 0.3, 0]}
          />
        </group>

        {/* <Scroll html > */}

        {/* <div ref={introduce} id="introduce" style={{ position: 'fixed' , top:'33vh', left:'100vw' , width:'30vw'}}> */}
        {/* <Html> */}

      
        <Text ref={introduce}
        className='pipi'
        fontSize={0.2}
        position={[14,0.8,2]}
        fillOpacity={0.4}
        maxWidth={2.5}
        rotation={[0,-Math.PI*0.5,0]}
        color={"white"}
        >

 Hi, I'm Xavier Yribarren,
    a 28 years old web developper 
    actually living in Lyon, FR.
    
        </Text>
        {/* </Html> */}
        {/* </div> */}

        {/* </Scroll> */}
        <Environment 
        preset='dawn'
         background 
         blur={3}
         />
      </group>
    </>
  );
}
