import { Cloud, useHelper, Clouds } from '@react-three/drei'
import React, { useRef } from 'react'
import * as THREE from 'three'
function CloudSky() {
  const light = useRef()

const matCloud = new THREE.MeshBasicMaterial({color: 'white'})

  return (
    <>
    <group  position={[28.8,0.4,11.2]} rotation={[0,-Math.PI*0.5,0]} dispose={null}>
      <Clouds material={THREE.MeshBasicMaterial} >


    <Cloud receiveShadow={false} seed={11} position={[-10, 0, -10.8]} fade={2}  speed={0.1} growth={1} segments={20} volume={12} opacity={0.41} bounds={[14, 5, 11]} />
        <Cloud receiveShadow={false} seed={12} fade={1}  speed={0.2} growth={1} volume={8} opacity={0.21} bounds={[24, 5, 11]} />
        <Cloud receiveShadow={false} seed={22} fade={1}  speed={0.2} growth={1}  volume={12} opacity={0.91} bounds={[34, 5, 11]} />
      </Clouds>
       
    
         </group>
        <pointLight ref={light}  position={[152, 20, 150.2]} intensity={1} color="white" />
    </>
  )
}

export default CloudSky