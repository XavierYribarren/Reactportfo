
import React from 'react'
import * as THREE from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Outlines, Environment, useTexture } from "@react-three/drei"
import { Physics, useSphere } from "@react-three/cannon"
import { EffectComposer, N8AO, SMAA } from "@react-three/postprocessing"


const colorArray = ["#3db2ff","#ffb830","#ff2442","#f637ec","#16ff00" ]
  const rfs = THREE.MathUtils.randFloatSpread
  const sphereGeometry = new THREE.SphereGeometry(0.05, 32, 32)
  const baubleMaterial = new THREE.MeshStandardMaterial({ roughness: 0, envMapIntensity: 1 })
  
  // const colors = new Array(1000).fill().map(() => niceColors[95][Math.floor(Math.random() * 5)])

function Clump({ mat = new THREE.Matrix4(), vec = new THREE.Vector3(), ...props }) {
  // const { outlines } = useControls({ outlines: { value: 0.0, step: 0.01, min: 0, max: 0.05 } })
  // const texture = useTexture("/cross.jpg")
  for (let i = 0; i < 40; i++) {
    baubleMaterial.color = new THREE.Color(colorArray[i%5])}
  const [ref, api] = useSphere(() => ({ args: [0.05], mass: 1.5, angularDamping:0.1, linearDamping: 0.91, position: [rfs(0.5), rfs(0.5), rfs(0.5)] }))
  useFrame((state) => {
    for (let i = 0; i < 40; i++) {
      // ref.current.material.color = new THREE.Color(colorArray[i%5])
      // console.log(colorArray[i%5])
      // Get current whereabouts of the instanced sphere
      ref.current.getMatrixAt(i, mat)
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      api.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-5).toArray(), [0, 0.0, 0])
    }
  })
  return (
    <instancedMesh ref={ref} castShadow receiveShadow args={[sphereGeometry,baubleMaterial, 15]} material-color={baubleMaterial} >
      {/* <Outlines thickness={outlines} /> */}
    </instancedMesh>
  )
}

function Pointer() {
  const viewport = useThree((state) => state.viewport)
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [0.3]}))
  return useFrame((state) => api.position.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0))
}


function Baloons() {


  return (
   <>
   <group position={[0,1,0]}>

   <Physics gravity={[0, -2, 0]} iterations={1} >
      <Pointer />
      <Clump 
    
    />
    </Physics>
    </group>
   </>
  )
}

export default Baloons