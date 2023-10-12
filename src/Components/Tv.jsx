import React, { useRef, useState } from 'react';
import { Html, Image, Scroll, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import CurrentW from './CurrentW';
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader, useThree } from '@react-three/fiber';
import PostProc from './PostProc';
import { BlurPass, Resizer, KernelSize } from 'postprocessing'
import { ChromaticAberration, DepthOfField, EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from 'postprocessing';
export function Tv(props) {
  const { nodes, materials } = useGLTF('/screen.glb');

  const hover = props.hover
  const tv = useRef()

  const spot = props.light
  // Code to execute when the iframe content is loaded


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
    emissiveIntensity: 0.1,
    emissiveMap: tasScreen
    
  });

  materials.screenNorm = new THREE.MeshBasicMaterial({
    map: tasScreen,
    toneMapped: false,
    
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
        {/* <PostProc />  */}
    

        
    {hover &&(
      <>  
      <EffectComposer disableNormalPass={true}>
<SelectiveBloom
    lights={[spot,tv]} // ⚠️ REQUIRED! all relevant lights
    // selection={[tv]} // selection of objects that will have bloom effect
    selectionLayer={10} // selection layer
    intensity={0.81} // The bloom intensity.
    // blurPass={new BlurPass()} // A blur pass.
    width={Resizer.AUTO_SIZE} // render width
    height={Resizer.AUTO_SIZE} // render height
    kernelSize={KernelSize.LARGE} // blur kernel size
    luminanceThreshold={0.79} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.5} // smoothness of the luminance threshold. Range is [0, 1]
    />  

   </EffectComposer>
    </>
    )}
  
   
  
      <mesh
      
        castShadow
        // receiveShadow
        geometry={nodes.Cube003.geometry}
        // material={materials['darkish grey plastic']}
        material={tvPlastic}
      /> 
      
      <mesh
      ref={tv}
        // castShadow
        // receiveShadow
        geometry={nodes.Cube003_1.geometry}
        // material={hover ? materials.screenLight : materials.screenNorm}
        material={materials.screenNorm}
      >
      
      </mesh>    

    </group> 
    // </Scroll>
  );
}

useGLTF.preload('/screen.glb');
