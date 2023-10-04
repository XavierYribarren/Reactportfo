import {
  MeshTransmissionMaterial,
  MeshWobbleMaterial,
  Text3D,
  Cloud,
  RenderTexture,
  Preload,
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
function ProjectsShow({ ...props }) {
  const [ref] = useBox(() => ({
    mass: 1,
    position: [0, 5, 0],
    allowSleep: true,
  }));
  const contents = useRef()
  const events = useThree((state) => state.events)
  const spot = props.light;
  const seed = 10;

const multicolo = useTexture('/multicolo2-min.jpg')
multicolo.flipY = false
multicolo.wrapS = THREE.RepeatWrapping
multicolo.wrapT = THREE.RepeatWrapping
multicolo.needsUpdate = true
multicolo.repeat.set(0.9,0.9)

useFrame((state, delta) => {
  const elapsedTime = state.clock.getElapsedTime()

  multicolo.rotation = Math.PI *elapsedTime/150
multicolo.offset.x = (Math.sin(elapsedTime/10)*1+delta)
multicolo.offset.y = (Math.sin(elapsedTime/10)*1.2-delta)
})
const fontus = useFont('/typos/BigBlackBear.json')
const textGeo = useMemo(
  () => new TextGeometry( 'Projects', {
		font: fontus,
		size: 0.80,
		height: 0.4,
		curveSegments: 32,
		bevelEnabled: true,
		bevelThickness: 0.024,
		bevelSize: 0.004,
		bevelOffset: 0,
		bevelSegments: 4,
	},[] )
)

  return (
    <>     
      <mesh ref={ref} scale={0.4} geometry={textGeo} castShadow>


          PROJECTS
          <meshPhysicalMaterial
      
  // depthWrite={true}
            map={multicolo}
            
            // transparent
            sheen={0.75}
            sheenColor={'#00ffff'}
            // sheenRoughness={1}
            // // transmission={0.99}
            iridescence={2}
 metalness={0}
 roughness={1}
             reflectivity={0}
             envMap={0}
       
          />
           {/* </Text3D> */}
      </mesh>
    </>
  );
}

export default ProjectsShow;
