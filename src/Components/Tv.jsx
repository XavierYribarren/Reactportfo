import React, { useRef, useState } from 'react';
import { Html, Image, Scroll, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import CurrentW from './CurrentW';
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader, useThree } from 'react-three-fiber';
import PostProc from './PostProc';
export function Tv(props) {
  const { nodes, materials } = useGLTF('/screen.glb');
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const hover = props.hover
  const tv = useRef()
  // Code to execute when the iframe content is loaded
  const handleIframeLoad = () => {
    const iframe = document.querySelector('iframe');

    if (iframe){

      setIframeLoaded(true);
    }
    // Update the state to indicate that the iframe is loaded
  };

  const tasScreen = useLoader(TextureLoader, "/tasScreenHD.png");
// tasScreen.toneMapping = THREE.ReinhardToneMapping
  tasScreen.flipY = false;


  materials.screenLight = new THREE.MeshStandardMaterial({
    // roughness: 1,
    // metalness: 1,
    // flatShading: true,
    // color: "#000000",
    map: tasScreen,
    
    // emissive: '#222' ,
    toneMapped : false,
    emissiveIntensity: '0.1',
    emissiveMap: tasScreen
    
  });

  materials.screenNorm = new THREE.MeshBasicMaterial({
    map: tasScreen,
    toneMapped: false
  })

  const tvPlastic = new THREE.MeshStandardMaterial({
    color: '#0c0c0c',
    metalness: 1,
    roughness: 0.04,
})
const { camera, mouse } = useThree();

  return (
  // <Scroll>
    <group  {...props} dispose={null}
  
    >
        <PostProc /> 
      
   
      <mesh
      
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        // material={materials['darkish grey plastic']}
        material={tvPlastic}
      /> 
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_1.geometry}
        material={hover ? materials.screenLight : materials.screenNorm}
      >
      
      </mesh>    
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['43_inch_remake001'].geometry}
        // material={materials['darkish grey plastic']}
        material={tvPlastic}
        position={[0, 0.345, -0.133]}
      />
    </group> 
    // </Scroll>
  );
}

useGLTF.preload('/screen.glb');
