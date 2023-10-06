import {
  CatmullRomLine,
  Cloud,
  Environment,
  Float,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  QuadraticBezierLine,
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
import { Physics, usePlane, useBox } from '@react-three/cannon';
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
  Glitch,
} from '@react-three/postprocessing';

import Introduce from './Introduce';
import {
  BlendFunction,
  Effect,
  TextureEffect,
  GlitchMode,
} from 'postprocessing';
import About from './About';
import ProjectsShow from './ProjectsShow';
import Floor from './Floor';
import Clouds from './Clouds';
import CloudSky from './Clouds';
import ProjectsWeb from './ProjectsWeb';
import { color } from 'framer-motion';
import { Picket } from './Picket';

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
  const floorRef = useRef();
  const picketRef = useRef();
  const envRef = useRef();
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
  const [pause, setPause] = useState(true);
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
          '<'
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
      tl.current.to(
        introduce.current,
        {
          ease: 'power1.in',
          fillOpacity: '0',
          duration: 0.15,
        },
        '-=0.01'
      );

      tl.current.to(
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

      tl.current.fromTo(
        about.current,
        { sqlRef: 0 },
        {
          // ease: 'power1.inOut',
          sqlRef: 1,
          duration: 0.02,
        },
        '<0.01',
        '+=0.5'
      );

      tl.current.to(about.current.position, {
        // ease: "elastic.in(1, 0.3)",
        y: 15,
        x: 10,
        z: 10,
        duration: 0.2,
      });

      tl.current
        .to(
          camGroup.current.rotation,
          {
            duration: 0.3,
            ease: 'power1.in',
            y: -Math.PI * 0.7,
            ontoggle: (pause) => {
              setTimeout(() => {
                setPause(false);
              }, 1000);
            },
          },
          '<'
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
    return () => ctx.revert();
  });

  function Cable({ start, startOffset, end, endOffset }) {
    const ref = useRef();
    const v1 = new THREE.Vector3();
    const v2 = new THREE.Vector3();
    const [points, setPoints] = useState([v1, v2]);

    useFrame((state, delta) => {
      const elapsedTime = state.clock.getElapsedTime();
      const startPosition = start.current.getWorldPosition(v1);
      const endPosition = end.current.getWorldPosition(v2);

      const startOffsetVector = new THREE.Vector3(...startOffset);

      // Apply the startOffset to v1
      v1.copy(startPosition).add(startOffsetVector);

      // Create a Vector3 instance from endOffset array
      const endOffsetVector = new THREE.Vector3(...endOffset);

      // Apply the endOffset to v2
      v2.copy(endPosition).add(endOffsetVector);

      const midVector = new THREE.Vector3(
        (v2.x + v1.x) / 2,
        (v2.y + v1.y) * Math.sin(v2.y - v1.y),
        (v2.z + v1.z) / 2
      );

      const picketVector = new THREE.Vector3(
        v1.x + 0.01,
        v1.y + 0.08,
        v1.z + 0.015
      );
      //  console.log(start.current)
      // console.log(ref.current)
      // Set the points for the quadratic bezier line
      setPoints([v1, picketVector, midVector, v2]), [];
    });

    const ropeMat = new THREE.LineBasicMaterial({ color: 'pink' });
    return (
      <Physics>
        <mesh castShadow receiveShadow material={ropeMat}>
          {/* <QuadraticBezierLine receiveShadow  ref={ref} dashed={true} dashScale={0.01} dashSize={0.02} lineWidth={5} color={'#eeffdf'} shadowSide={THREE.DoubleSide}/> */}
          <CatmullRomLine
            segments={12}
            castShadow
            clipShadows
            // material={THREE.LineMaterial}
            ref={ref}
            points={points} // Array of Points
            // closed={false}                  // Default
            curveType='catmullrom' // One of "centripetal" (default), "chordal", or "catmullrom"
            tension={1} // Default (only applies to "catmullrom" curveType)
            color='#eeffce' // Default
            lineWidth={5} // In pixels (default)
            dashed={false}
          />
        </mesh>
      </Physics>
    );
  }

  console.log(picketRef);

  return (
    <>
      {/* <Rig /> */}
      <spotLight
        lookAt={[1, 0, 2]}
        position={[8.0, 5, -14]}
        intensity={1}
        penumbra={0.2}
        castShadow
        // shadowBias={-0.00001}
        shadow-camera-near={0.1}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-far={100}
        // shadow-camera-left={-100}
        // shadow-camera-right={100}
        // shadow-camera-top={100}
        // shadow-camera-bottom={-100}
        ref={spotRef}
      />
      <group ref={camGroup} position={[0, 0.1, 1.8]}>
        <Background />

        <group ref={cameraRail} rotation={[0, -Math.PI * 0.17, 0]}>
          <OrbitControls enableZoom={false}/>

          {/* <PerspectiveCamera
            fov={30}
            near={0.1}
            rotation={[0.2, 0, 0]}
            makeDefault
          /> */}
        </group>
      </group>
      <CloudSky />
      <group
        // ref={group}
        dispose={null}
        position={[width * w, 0, 0]}
      >
        <group ref={tv} dispose={null}>
          <CurrentW dispose={null} />
          <Tv
            dispose={null}
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
        <Picket ref={picketRef} />
        <Cable
          start={picketRef}
          startOffset={[-0.6, 0.0, 0.0]}
          end={letter}
          endOffset={[-0.6, 0.6, -0.1]}
        />
        <group dispose={null}>
          <Letter ref={letter} scale={0.6} light={spotRef} />
        </group>

        <group ref={introduce} dispose={null} position={[1.5, 0.45, 0.5]}>
          <Introduce castShadow introduce={introduce} />
        </group>

        <group ref={about}>
          <About castShadow about={about} dispose={null} />
        </group>

        <group
          ref={reactLogo}
          position={[1, 0.5, 2.5]}
          scale={1.5}
          dispose={null}
        >
          <ReactLogo visibility={visibility} ringScaleM={ringScaleM} />
        </group>
        <Physics
          isPaused={pause}
          gravity={[0, -9.81, 0]}
          allowSleep={true}
          tolerance={0}
        >
          <Floor ref={floorRef} castShadow />
          <group position={[1.05, 0, 5.2]} rotation={[0, -Math.PI * 0.8, 0]}>
            <ProjectsShow ref={projects} env={envRef} />
          </group>
        </Physics>

        <group position={[-2.5, 2, 10]} scale={15}>
          <ProjectsWeb />
        </group>
      </group>
    </>
  );
}
