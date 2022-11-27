import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import Model from "./Model";

  
export default function Scene(){

const headFull = React.useRef();
console.log(Model.mesh)
// 
useFrame(({ clock }) => {
  const a = clock.getElapsedTime();
  headFull.current.rotation.y = -1 + Math.sin(a * 1) * 0.3; // the value will be 0 at scene initialization and grow each frame
  // headFull.current.group.rotation.x = 0.2 + Math.cos((a / 2) * 2) * 0.03; // the value will be 0 at scene initialization and grow each frame
});
// if(headFull.current){
//   console.log(headFull.current[2])
// }




      //MAPS IMPORT

      return (
        <group ref={headFull} position={[0,0,0]}>
        <spotLight
        lookAt={[-12, 8, 2]}
        position={[-4, -4, 14]}
        intensity={5}
        color="#ff00ff"
        castShadow
      />
      <directionalLight intensity={0.51} position={[-2, 6, 10]} />
      <Model />
      </group>
      )
      }
      
      // useGLTF.preload("/headDefULTRA.glb");
      // useGLTF.preload("/headDefLASH.glb");