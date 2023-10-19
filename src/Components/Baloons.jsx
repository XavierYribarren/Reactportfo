import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Instances, Instance, OrbitControls, Environment, useGLTF, Float } from '@react-three/drei'
import { useControls } from 'leva'
import { Debug, Physics, usePlane, useSphere } from "@react-three/cannon"

const colorArray = ["#3db2ff","#ffb830","#ff2442","#f637ec","#16ff00" ]
// const randomVector = (r) => [(Math.random()*3)-1,  r-(Math.random()*2)-0.5  ,  (Math.random()*1.2)-1.001]
const randomVector = (r) => [3+((Math.random()-0.5)*10)*Math.PI*2,  r-(Math.random()*2)-0.2  ,  (Math.random()*30)-15]

const randomScale = (r) =>{
 let scalus = (r /2)* Math.random()+0.8 
 return [ scalus, scalus, scalus]}
const randomEuler = () => [0,Math.random() * Math.PI, 0]
const data = Array.from({ length: 1000 }, (r = 2) => ({color: colorArray[Math.floor(Math.random() * 5)], random: Math.random(), position: randomVector(r), rotation: randomEuler() , scale:randomScale(r)}))

export default function Baloons() {
  // const { range } = useControls({ range: { value: 100, min: 0, max: 300, step: 1 } })
  return (
    // <Canvas camera={{ position: [0, 0, 20], fov: 50 }} performance={{ min: 0.1 }}>
    <>
<group rotation={[0,-Math.PI*0.1,0]}>

      <Shoes data={data} range={30} />

</group>
   
    </>
      // <OrbitControls autoRotate autoRotateSpeed={1} />
    // </Canvas>
  )
}

console.log(data)

function Shoes({ data, range }) {
  const { nodes, materials } = useGLTF('/singleBaloon2.glb')

  const baloonMat = new THREE.MeshPhysicalMaterial({roughness:0.2, transmission: 0.2})
  const { viewport } = useThree()

  return (
    <Instances range={range}       geometry={nodes.BALLOON01.geometry}
        material={baloonMat}
    //     // geometry={nodes.BALLOON.geometry}
    // material={nodes.BALLOON.material}
   
    position={[0.52, 0.24, -0.]}>
 
      <mesh
        castShadow
        receiveShadow

        position={[0.002, 0, 0]}
      />

  
      <group position={[0, 0, 0]}>
        {data.map((props, i) => (
          <Float floatIntensity={i/100}
          speed={i/80}
          floatingRange={[2, 2.5]}
          >

          <Shoe key={i}   {...props} />
          </Float>
        ))}
      </group>     
    </Instances>
  )
}

function Shoe({ random, color = new THREE.Color(), ...props }) {
  const ref = useRef()
  // const [hovered, setHover] = useState(false)

  return (
    <group {...props}>
      <Instance ref={ref} color={color} />
    </group>
  )
}
