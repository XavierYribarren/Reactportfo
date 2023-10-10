import {
  useTexture,
  useFont,
} from '@react-three/drei';
import React, { forwardRef, useMemo, useRef } from 'react';
import { useBox } from '@react-three/cannon';
import { MeshPhysicalMaterial, MeshStandardMaterial } from 'three';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';
import { BlurPass, Resizer, KernelSize } from 'postprocessing';
import { useFrame, useThree } from 'react-three-fiber';
import About from './About';
import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
const ArtShow = forwardRef(({ ...props }, ref) => {
  const [ref2] = useBox(() => ({
    mass: 1,
    args:[0,0,0],
    position: [0, 5, 0],
    allowSleep: true,
    type: 'Dynamic'
  }));


const multicolo = useTexture('/multicolo2-min.jpg')
multicolo.flipY = false
multicolo.wrapS = THREE.RepeatWrapping
multicolo.wrapT = THREE.RepeatWrapping
multicolo.colorSpace = THREE.LinearSRGBColorSpace
multicolo.premultiplyAlpha = true
multicolo.needsUpdate = true
multicolo.repeat.set(0.9,0.9)

useFrame((state, delta) => {
  const elapsedTime = state.clock.getElapsedTime()

  multicolo.rotation = Math.PI *elapsedTime/150
multicolo.offset.x = (Math.sin(elapsedTime/10)*1+delta)
multicolo.offset.y = (Math.sin(elapsedTime/10)*1.2-delta)
})
const fontus = useFont('/typos/Big_BlackBear.json')
const textGeo2 = useMemo(
  () => new TextGeometry( 'ART', {
		font: fontus,
		size: 0.80,
		height: 0.4,
		curveSegments: 32,
		bevelEnabled: true,
		bevelThickness: 0.04,
		bevelSize: 0.004,
		bevelOffset: 0,
		bevelSegments: 4,
	},[] )
)

  return (
    <>   
      
      <mesh ref={ref2} scale={0.35} geometry={textGeo2} castShadow>


    
          <meshStandardMaterial
          ref={ref}
            map={multicolo}
        
           emissive={"#787878"}
           emissiveIntensity={0.5}
 metalness={0}
 roughness={1}
      
       
          />
       
      </mesh>
    </>
  );
}
)
export default ArtShow;
