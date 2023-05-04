import React, { forwardRef, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { CubeCamera, Environment, Sparkles, useEnvironment, useGLTF } from "@react-three/drei";
import { Clock, DoubleSide, Fog, RepeatWrapping } from "three";
import { Lights } from "./Lights";


export default function Background(){


      const terrain1Ref = React.useRef();
      const terrain2Ref = React.useRef();
const mesh = useRef()
const sparkles = useRef()


const ref = React.useRef()

const cityMap = useLoader(TextureLoader,'./Envtst_Pass 2-min (1).png')
cityMap.flipY = false

const floorMap = useLoader(TextureLoader,'./Floor_Pass.png')
cityMap.flipY = false

const skyMap = useLoader(TextureLoader,'./SkyRend2.png')


const matus =   new THREE.MeshBasicMaterial({ map:cityMap, alphaTest: 0})
    const Model = React.forwardRef((props, ref) => {
 
      const { nodes, materials } = useGLTF("/Citylowpol2-3.glb");
    
      const { z } = props;
      
      
      return (
        <group {...props} ref={ref} dispose={null}  position={[-15,-12,z]}>
 <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={matus}
        position={[-8.16, 1, 0]}
        rotation={[0, -1.57, 0]}
       
      />
    </group>
      );
    })
    
    const sparkmat = new THREE.MeshStandardMaterial({color:'red', emissive:'#ffffff', emissiveIntensity : 10, transparent: false, side:DoubleSide})

    useGLTF.preload("/Citylowpol2-3.glb");
    

   



useEffect(() => {
  floorMap.wrapS = RepeatWrapping
  floorMap.wrapT = RepeatWrapping
  floorMap.repeat.set(1,1)
  floorMap.offset.set(0,0)
},[floorMap])



// terrain2Ref.current.children[0].material = matusTST

      useFrame((state) => {

    // //     // Update plane position
    const deltaTime = (state.clock.elapsedTime - (state.clock.elapsedTime%57))
        terrain1Ref.current.position.z = 0+(state.clock.elapsedTime-(deltaTime)) ; 
        terrain2Ref.current.position.z = -114+(state.clock.elapsedTime-(deltaTime))
        // sparkles.current.position.z =  (state.clock.elapsedTime )
        // console.log( 'T1 ' + terrain1Ref.current.position.z)
        // console.log( 'T2 ' + terrain2Ref.current.position.z)
        //  console.log(terrain2Ref.current.position)
        floorMap.offset.set(0,(state.clock.elapsedTime * 0.007) )
      });
    // // //  console.log(terrain2Ref.current.position)
      return (
        <group position={[0,0,20]}>
          <Model ref={terrain1Ref} matos={matus} z={0}/>
          <Model ref={terrain2Ref} matos={matus} z={-200}/>
          {/* <fog attach="fog" color="#010101" 
          near={100} far={0} 
          /> */}
        
          <mesh position={[-10,20,-60]}>
            <planeGeometry args={[150,80]}/>
            <meshLambertMaterial map={skyMap} roughness={0.5}/>
          </mesh>
          <mesh ref={mesh} 
         rotation={[-Math.PI * 0.5,0,0]} 
           position={[0,-12,0]}>
            <planeGeometry args={[80,150]} />
            <meshBasicMaterial  map={floorMap} />
          </mesh>
          {/* <group ref={sparkles} dispose={null}>
          <Sparkles 
                size={4}
                count={1000}
                color={"yellow"}
                scale={[60,0,100]}
                speed={0}
                position={[0, -6.9, 0]}
                noise={1}
                random={true}
                opacity={0.8}
            
              
              />
              </group> */}
            
              {/* <Lights/> */}
        </group>
      );
}