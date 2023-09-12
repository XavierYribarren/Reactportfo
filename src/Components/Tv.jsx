import React, { useRef, useState } from 'react';
import { Html, Scroll, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import CurrentW from './CurrentW';
export function Tv(props) {
  const { nodes, materials } = useGLTF('/screen.glb');
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const tv = useRef()
  // Code to execute when the iframe content is loaded
  const handleIframeLoad = () => {
    const iframe = document.querySelector('iframe');

    if (iframe){

      setIframeLoaded(true);
    }
    // Update the state to indicate that the iframe is loaded
  };
  materials.screen = new THREE.MeshStandardMaterial({
    roughness: 1,
    // metalness: 0.4,
    color: "#000000"
  });

  const tvPlastic = new THREE.MeshStandardMaterial({
    color: '#0c0c0c',
    metalness: 1,
    roughness: 0.04,
})

  return (
  <Scroll>
    <group  {...props} dispose={null}>
      <CurrentW/>
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
        material={materials.screen}
      >
     

        <Html
        castShadow
        receiveShadow
        style={{ position: 'sticky'}}
        className='htmlScreen'
        position={[0, 0.38, 0.022 ]}
        transform
        occlude
        scale={1}
        distanceFactor={0.3}
        zIndexRange={[10, 0]}
        >
          <iframe src='http://tweakasix.netlify.app' 
             style={{ 
               width: '69vw',
               height: '86vh',
               top:'-43.5vh',
               left: '-34.5vw',
              //  position: 'inherit',
               visibility: iframeLoaded ? 'visible' : 'hidden', scrollSnapType: 'auto'}}
               onLoad={handleIframeLoad}
               
               
               />
        </Html>
          
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
    </Scroll>
  );
}

useGLTF.preload('/screen.glb');
