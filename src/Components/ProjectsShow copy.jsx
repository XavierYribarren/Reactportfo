import {
  MeshTransmissionMaterial,
  MeshWobbleMaterial,
  Text3D,
  Cloud,
  RenderTexture,
  Preload,
  useTexture,
  useFont,
  ContactShadows,
  AccumulativeShadows,
} from '@react-three/drei';
import React, { forwardRef, useMemo, useRef } from 'react';
import { useBox } from '@react-three/cannon';
import { MeshPhysicalMaterial, MeshStandardMaterial } from 'three';

import { useFrame, useThree } from 'react-three-fiber';
import { About } from './About';
import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
export const ProjectsShow = ({ ...props }) => {
  // const [ref] = useBox(() => ({
  //   mass: 20,
  //   args:[0,0,0],
  //   position: [0, 5, 0],
  //   allowSleep: true,
  //  type: 'Dynamic',
  // //  velocity: 0.1,
  //  sleepTimeLimit:0.72,
    
  // }));
  const contents = useRef()
  const events = useThree((state) => state.events)
  const spot = props.light;
  const seed = 10;

const multicolo = useTexture('/multicolo2-min.jpg')
multicolo.flipY = false
multicolo.wrapS = THREE.RepeatWrapping
multicolo.wrapT = THREE.RepeatWrapping
multicolo.colorSpace = THREE.LinearSRGBColorSpace
multicolo.premultiplyAlpha = true
// multicolo.needsUpdate = true
multicolo.repeat.set(0.9,0.9)

const multicol = useRef(multicolo)

// useFrame((state, delta) => {
//   const elapsedTime = state.clock.getElapsedTime()

//   multicolo.rotation = Math.PI *elapsedTime/150
// multicolo.offset.x = (Math.sin(elapsedTime/10)*1+delta)
// multicolo.offset.y = (Math.sin(elapsedTime/10)*1.2-delta)
// })
const fontus = useFont('/typos/Big_BlackBear.json')
const textGeo = useMemo(
  () => new TextGeometry( 'Projects', {
		font: fontus,
		size: 1,
		height: 0.4,
		curveSegments: 32,
		bevelEnabled: true,
		bevelThickness: 0.024,
		bevelSize: 0.004,
		bevelOffset: 0,
		bevelSegments: 4
	},[] )
)

  return (
    <>     
   


       <mesh scale={0.35} 
          geometry={textGeo}
          position={[-1,0,0]}
          castShadow
          receiveShadow
       >

          <meshStandardMaterial
      
      // depthWrite={true}
      // map={multicol.current}

      
      
      // transparent
      
      // sheenRoughness={1}
      // // transmission={0.99}
      emissive={"#787878"}
      emissiveIntensity={0.5}
      metalness={0}
      roughness={1}
      
      
      />
        </mesh>

  
    </>
  );
}

// export default ProjectsShow;