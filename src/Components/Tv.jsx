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
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const hover = props.hover
  const tv = useRef()

  const spot = props.light
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
    {/* <DepthOfField
  focusDistance={0.00082}
  focalLength={0.0009}
  blur={4.4}
  bokehScale={4}
  height={480}
  />  */}

  {/* <ChromaticAberration
       blendFunction={BlendFunction.NORMAL}
       offset={[0.0006, 0.0002]}
  />  */}
   </EffectComposer>
    </>
    )}
  
   
  
      <mesh
      
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        // material={materials['darkish grey plastic']}
        material={tvPlastic}
      /> 
      
      <mesh

      ref={tv}
        castShadow
        receiveShadow
        geometry={nodes.Cube003_1.geometry}
        // material={hover ? materials.screenLight : materials.screenNorm}
        material={materials.screenNorm}
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
