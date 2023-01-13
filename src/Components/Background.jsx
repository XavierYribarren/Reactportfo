import React, { forwardRef, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Sparkles, useGLTF } from "@react-three/drei";
import { Clock, DoubleSide, Fog } from "three";
// import Model from "./City";

export default function Background(){


      const terrain1Ref = React.useRef();
      const terrain2Ref = React.useRef();
const mesh = useRef()
const sparkles = useRef()


const ref = React.useRef()

const matus =   new THREE.MeshStandardMaterial({color : 'green', roughness: 0, metalness:0})
const matusTST =   new THREE.MeshStandardMaterial({color : 'red', roughness: 0, metalness:0}) 
    const Model = React.forwardRef((props, ref) => {
 
      const { nodes, materials } = useGLTF("/untitled-v1.glb");
    
      const { z } = props;
      
      
      return (
        <group {...props} ref={ref} dispose={null} scale={[0.7,0.7,0.7]} position={[0,-7,z]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={props.matos}
            position={[-4.89, 0.25, 117.9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={props.matos}
            position={[24.7, 0.85, -5.86]}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </group>
      );
    })
    
    
    useGLTF.preload("/untitled-v1.glb");


console.log(terrain1Ref)
// terrain2Ref.current.children[0].material = matusTST

      useFrame((state) => {

    // //     // Update plane position
    const deltaTime = (state.clock.elapsedTime - (state.clock.elapsedTime%129.7)) /129.7
        terrain1Ref.current.position.z = 0+(state.clock.elapsedTime-(deltaTime*129.7) * 1) ; 
        terrain2Ref.current.position.z = -223+(state.clock.elapsedTime-(deltaTime*129.7) * 1)
        // sparkles.current.position.z =  Math.sin(4)*(state.clock.elapsedTime * 0.05)
        // console.log( 'T1 ' + terrain1Ref.current.position.z)
        console.log( 'T2 ' + terrain2Ref.current.position.z)
        //  console.log(terrain2Ref.current.position)
      });
    // // //  console.log(terrain2Ref.current.position)
      return (
        <>
          <Model ref={terrain1Ref} matos={matus} z={0}/>
          <Model ref={terrain2Ref} matos={matusTST} z={-200}/>
          {/* <fog attach="fog" color="#06032b" near={20} far={170} /> */}
          <mesh position={[0,20,-70]}>
            <planeBufferGeometry args={[130,70]}/>
            <meshStandardMaterial color={'darkblue'}/>
          </mesh>
          <mesh ref={mesh} 
         rotation={[-Math.PI * 0.5,0,0]} 
           position={[0,-7,0]}>
            <planeBufferGeometry args={[60,150]} />
            <meshStandardMaterial color={'red'} side={DoubleSide} />
          </mesh>
          <group ref={sparkles}>
          <Sparkles
         
                count={0}
                color={"yellow"}
                scale={20}
                speed={0.00}
                position={[0, -10, 0]}
                noise={1}
                random={true}
              />
              </group>
        </>
      );
}