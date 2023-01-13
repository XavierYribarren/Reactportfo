import React, { forwardRef, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useGLTF } from "@react-three/drei";
import { Clock, DoubleSide, Fog } from "three";
// import Model from "./City";

export default function Background(){


      const terrain1Ref = React.useRef();
      const terrain2Ref = React.useRef();
const mesh = useRef()


      const [t1init, setT1init] = useState(false)
      const [t2init, setT2init] = useState(false)
const ref = React.useRef()

    
    const Model = React.forwardRef((props, ref) => {
      const matus =   new THREE.MeshStandardMaterial({color : 'black', roughness: 0, metalness:1})
      const { nodes, materials } = useGLTF("/untitled-v1.glb");
    
      const { z } = props;
      
      
      return (
        <group {...props} ref={ref} dispose={null} scale={[0.7,0.7,0.7]} position={[0,-4,z]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={matus}
            position={[-4.89, 0.25, 117.9]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={matus}
            position={[24.7, 0.85, -5.86]}
            rotation={[Math.PI, 0, Math.PI]}
          />
        </group>
      );
    })
    
    
    useGLTF.preload("/untitled-v1.glb");





    //   console.log(terrain1Ref)
    // terrain2Ref.z = -100
// terrain1Ref.position = new THREE.Vector3([0,-4,0])
// terrain2Ref.position = new THREE.Vector3([0,-4,-180])
      useFrame((state, delta, z) => {
    // //     const deltaTime = state.clock.getDelta()
    // //     // Update plane position
        terrain1Ref.current.position.z = 0+(state.clock.elapsedTime * 1) ; 
        terrain2Ref.current.position.z = -180+((state.clock.elapsedTime * 1) );
        // console.log( 'T1 ' + terrain1Ref.current.position.z)
        // console.log( 'T2 ' + terrain2Ref.current.position.z)
        //  console.log(terrain2Ref.current.position)
    // //     // if(terrain2Ref.current.position.z > -150){setT2init(true)} 
    // //     // console.log(t2init + 'state')  
    // terrain2Ref.current.position.z > -150 ? setT2init(!t2init)  : ''
      });
    // // //  console.log(terrain2Ref.current.position)
      return (
        <>
          <Model ref={terrain1Ref} z={0}/>
          <Model ref={terrain2Ref} z={-150}/>
          <fog attach="fog" color="#06032b" near={20} far={170} />
          {/* <mesh position={[0,20,-70]}>
            <planeBufferGeometry args={[130,70]}/>
            <meshStandardMaterial color={'black'}/>
          </mesh> */}
          <mesh ref={mesh} position={[0,0,-30]} setRotationFromAxisAngle={[0,0,-Math.PI/2]}>
            <planeBufferGeometry args={[10,70]} />
            <meshStandardMaterial color={'red'} side={DoubleSide}/>
          </mesh>
        </>
      );
}