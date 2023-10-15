import React, { useLayoutEffect, useMemo, useRef } from 'react';
import {
  Html,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useGLTF,
  useScroll,
} from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from 'react-three-fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const  ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('/React3D.glb');
  const tl = useRef();
  const rings = useRef();
  const core = useRef();
  const scroll = useScroll();
  console.log(props);
  const coreSphere = useMemo(() => new THREE.SphereGeometry(0.05, 36, 36, 10) ,[]);

  const ringMat = new THREE.MeshStandardMaterial({
    color: '#0cd2ec',
    roughness: 0,
    metalness: 0.2,
  });

  const coreMat = useMemo (() => new THREE.MeshPhysicalMaterial({
    roughness: 1,
    metalness: 0,
    color: '#0cd2ec',
    specularIntensity: 1,
    specularColor: '#0cd2ec',
    clearcoat: 0.21,
    clearcoatRoughness: 0.04,
    opacity: 0,
    // transmission: 0.1,
  }) ,[])

  const random = Math.random();

  useFrame((state, delta) => { 
    // tl.current.seek(scroll.offset * tl.current.duration());
    const time = state.clock.getElapsedTime();


    rings.current.rotation.x += 0.01;
    rings.current.rotation.y += -0.01;

    // console.log(state.clock.elapsedTime);
    core.current.scale.x = 1.5 + Math.sin(time * 4) * 0.5;
    core.current.scale.y = 1.5 + Math.sin(time * 4) * 0.5;
    core.current.scale.z = 1.5 + Math.sin(time * 4) * 0.5;

  });



  return (
    <group {...props} dispose={null}>
      <mesh
        ref={core}
        castShadow
        // receiveShadow
        geometry={coreSphere}
        material={coreMat}
      >
        {/* <sphereGeometry args={[0.05,36,36,10]}/> */}
        {/* <meshPhysicalMaterial roughness={1} metalness={0} color={"#0cd2ec"}  specularIntensity={1} specularColor={"#0cd2ec"}  clearcoat={0.21} clearcoatRoughness={0.04} transmission={0.1} transparent/> */}
        {/* <MeshWobbleMaterial factor={10} speed={2}  roughness={0.4} metalness={0.41} color={"#0cd2ec"}/> */}
      </mesh>
      <mesh
        ref={rings}
        // scale={ringScaleM}
        castShadow
        // receiveShadow
        geometry={nodes.Torus002.geometry}
        scale={0.8}
        material={ringMat}
      >
   
      </mesh>
    </group>
  );
}

useGLTF.preload('/React3D.glb');
