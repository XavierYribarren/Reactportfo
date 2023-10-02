import { Text3D } from '@react-three/drei'
import React from 'react'
import typo from './Typo_Round2.json';
function ProjectsShow() {


  return (
  <Text3D font={typo} size={0.4} 
  // // curveSegments={32}
  //       bevelEnabled
        // bevelSize={0.04}
        // bevelThickness={0.1}
        castShadow
        receiveShadow
        
        height={0.15}>
    PROJECTS
    <meshStandardMaterial
      color={'#f00'} 
      roughness={1}
      metalness={0}
      />
  </Text3D>
  )
}

export default ProjectsShow