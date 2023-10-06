import React, { useMemo } from 'react'
import * as THREE from 'three'
import { useGLTF, useTexture } from "@react-three/drei";



function Model(props) {

  const { nodes, materials } = useGLTF("/tabdevice.glb");

materials.tabscreen = new THREE.MeshStandardMaterial({color: '#fff', metalness: 0.28, roughness : 0.4})
console.log(props)

  return (
    <group {...props} dispose={null} rotation={props.rotation} position={props.position}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials.tabscreen}
        material-map={props.texture}
        material-emissive={props.texture}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2.geometry}
        material={materials.tabcase}
      />
    </group>
  );
}

useGLTF.preload("/tabdevice.glb");




function ProjectsWeb() {

const nopTex = useTexture('./Nope.png')
nopTex.flipY = false

  return (
  <>
  <group>
    <mesh

    >
      <Model texture={nopTex} rotation={[0,-Math.PI * 1.1,0]} position={[-0.02,0,-0.02]}/>
      <Model texture={nopTex} rotation={[0,-Math.PI*1.2,0]} position={[-0.22,0,-0.14]}/>
      <Model texture={nopTex} rotation={[0,-Math.PI*1.4,0]} position={[-0.34,0,-0.3]}/>
    </mesh>
  </group>
  </>
  )
}



export default ProjectsWeb