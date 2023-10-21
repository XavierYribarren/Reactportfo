import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Instances, Instance, OrbitControls, Environment, useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

const angle =  Math.random()*Math.PI
const radius = 3 + Math.random()*6
// const randomVector = (r) => [ Math.sin(angle)*r, 0.15,Math.cos(angle) -  Math.random() * r ]
const randomVector = (r) => [r*5*Math.sin(angle)*(-0.5+Math.random()),0,5]

const randomEuler = () => [0, Math.random() * Math.PI, 0]
const data = Array.from({ length: 1000 }, (r ) => ({  position: randomVector(r), rotation: randomEuler() }))


export default function Plants() {
  // const { range } = useControls({ range: { value: 100, min: 0, max: 300, step: 1 } })
  const totalInstances = 100; // Adjust the number of instances as needed
  const radius = 15 + Math.random()*5; // Adjust the radius as needed
  const emptyCenterRadius = 10;

  const instancePositions = [];
  for (let i = 0; i < totalInstances; i++) {
    const angle = Math.random() * Math.PI * 2;
    const x =  (i/ totalInstances)+radius  * Math.cos(angle)  ;
    const y = -0.05; // You can adjust the vertical position as needed
    const z = ((i/ totalInstances+ radius)  * Math.sin(angle) );
    
    
    const distanceToOrigin = Math.sqrt(x * x + z * z);

    // Check if the distance is greater than the empty circular center radius
    if (distanceToOrigin > emptyCenterRadius) {
      instancePositions.push(new THREE.Vector3(x, y, z));
    }
  }
  return (

      <Shoes data={instancePositions} range={100} />
  
  )
}

function Shoes({ data}) {
  const { nodes, materials } = useGLTF('/plants.glb')
  const totalInstances = 100

console.log(data)
  return (
    <group>

    <Instances limit={totalInstances} 
    range={100}   geometry={nodes.BezierCurve002.geometry}
    material={nodes.BezierCurve002.material}  
    //  position={[4.92, 0.364, 1.487]}
    >
      <group 
      // position={[0, 0, 0]}
      >
        {data.map((props, i) => (
          <Shoe key={i}  position={[props.x, props.y, props.z]}  rotation={[0,Math.random()*Math.PI,0]}/>
          ))}
      </group>
    </Instances>
    <Instances limit={totalInstances/4} 
    range={100}   geometry={nodes.BezierCurve003.geometry}
    material={nodes.BezierCurve003.material}  
    //  position={[4.92, 0.364, 1.487]}
    >
      <group 
      // position={[0, 0, 0]}
      >
        {data.map((props, i) => (
          <Shoe key={i}  position={[props.x, props.y, props.z]}  rotation={[0,Math.random()*Math.PI,0]}/>
          ))}
      </group>
    </Instances>
    <Instances limit={totalInstances/10} 
    range={100}   geometry={nodes.BezierCurve001.geometry}
    material={nodes.BezierCurve001.material}  
    //  position={[4.92, 0.364, 1.487]}
    >
      <group 
      // position={[0, 0, 0]}
      >
        {data.map((props, i) => (
          <Shoe key={i} scale={2}  position={[props.x, props.y, props.z]}  rotation={[0,Math.random()*Math.PI,0]}/>
          ))}
      </group>
    </Instances>
    
          </group>
  )
}

function Shoe({ random, color = new THREE.Color(), ...props }) {

  const ref = useRef()


  return (
    <group {...props}>
      <Instance ref={ref}   scale={(Math.random())}  />
    
    </group>
  )
}
