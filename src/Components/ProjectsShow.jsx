import {

  useTexture,

  useGLTF,
} from '@react-three/drei';
import React, { forwardRef, useMemo, useRef } from 'react';

import * as THREE from 'three'

export const ProjectsShow = ({ ...props }) => {
  
  const { nodes, materials } = useGLTF("/projectsTG.glb");


const multicolo = useTexture('/multicolo2-min.jpg')
multicolo.flipY = false
multicolo.wrapS = THREE.RepeatWrapping
multicolo.wrapT = THREE.RepeatWrapping
multicolo.colorSpace = THREE.LinearSRGBColorSpace
multicolo.premultiplyAlpha = true
// multicolo.needsUpdate = true
multicolo.repeat.set(1.9,1.19)




const projectMat = new THREE.MeshStandardMaterial({
  map: multicolo,
  roughness: 0,

  aoMap: props.ao,
  aoMapIntensity : 1.2,
  emissive: '#888',
  emissiveMap: multicolo,
  emissiveIntensity: 2,
  // transparent: true
})

  return (
    <group {...props} dispose={null}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.PROJECTS001.geometry}
        material={projectMat}
        // position={[-0.101, 0.184, 4.325]}
      />
    </group>
  );
}
useGLTF.preload("/projectsTG.glb");

