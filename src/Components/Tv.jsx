import React, { useMemo, useRef, useState } from 'react';
import { Html, Image, Scroll, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader, useThree } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

export function Tv(props, ref) {
  const { nodes, materials } = useGLTF("/screen2.glb");

  const [hover, setHover] = useState(false);
  const tv = useRef();

  const handleOpenNewTab = () => {
    const urlToOpen = 'http://tweakasix.barren.fr';

    window.open(urlToOpen, '_blank');
  };

  const tasScreen = useLoader(TextureLoader, '/tasScreenHD.png');
  tasScreen.flipY = false;

  materials.screenLight = new THREE.MeshStandardMaterial({
    map: tasScreen,
    toneMapped: false,
    emissiveIntensity: 0.1,
    emissiveMap: tasScreen,
  });

 const screenNorm = useMemo(() => new THREE.MeshBasicMaterial({
    // map: tasScreen,
    toneMapped: false,
  }))

  const tvPlastic = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#0c0c0c',
    metalness: 1,
    roughness: 0.04,
  }))




//   const handlePointerOver = () => {setHover(true), console.log(hover)};
// const handlePointerOut = () => setHover(false);
const handlePointerOver = () => {console.log('Mouse over'), setHover(true),  (document.body.style.cursor = 'pointer')};
const handlePointerOut = () => {console.log('Mouse out'), setHover(false), (document.body.style.cursor = 'auto')};
  return (
    <group {...props} dispose={null}>
      <mesh  castShadow    geometry={nodes.Cube020.geometry}> <meshLambertMaterial   color={'#0c0c0c'}
    metalness= {0.51} 
    roughness= {0.14} /></mesh>

      <mesh
        ref={tv}
        onClick={handleOpenNewTab}
        scale={1}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        geometry={nodes.Cube020_1.geometry}
        // material={screenNorm.clone()}
      > 
      {/* <primitive  object={nodes.Cube003_1.geometry} /> */}
   {hover ? (

 
     <meshStandardMaterial map={tasScreen} emissiveMap={tasScreen} envMapIntensity={1.5} toneMapped={false}/> 
 
  

  ):(
      <meshBasicMaterial  map={tasScreen} toneMapped={false}/> )}
      </mesh>

    </group>
  );
}

useGLTF.preload('/screen2.glb');
