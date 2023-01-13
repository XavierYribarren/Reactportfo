import React, { forwardRef, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Clock, Fog } from "three";
import Terrain from "./Terrain";

export default function Background(props, ref){





//     const Terrain = forwardRef((props, ref) => {
        



      const terrain1Ref = useRef();
      const terrain2Ref = useRef();

      const [t1init, setT1init] = useState(false)
      const [t2init, setT2init] = useState(false)

      console.log(terrain1Ref)
    // terrain2Ref.z = -100
// terrain1Ref.position = new THREE.Vector3([0,-4,0])
// terrain2Ref.position = new THREE.Vector3([0,-4,-180])
    //   useFrame((state, delta, z) => {
    // // //     const deltaTime = state.clock.getDelta()
    // // //     // Update plane position
    // // //     terrain1Ref.current.position.z = 0+(state.clock.elapsedTime * 1) ; 
    // // //     // console.log(terrain1Ref.current.position.z)
    //     terrain2Ref.current.position.z = -180+((state.clock.elapsedTime * 10) );
    //      console.log(terrain2Ref.current.position.z)
    // // //     // if(terrain2Ref.current.position.z > -150){setT2init(true)} 
    // // //     // console.log(t2init + 'state')  
    // terrain2Ref.current.position.z > -150 ? setT2init(!t2init)  : ''
    //   });
    // // //  console.log(terrain2Ref.current.position)
      return (
        <>
          <Terrain ref={terrain1Ref} z={0}/>
          <Terrain ref={terrain2Ref} z={-150}/>
          <fog attach="fog" color="#b5b5b5" near={20} far={170} />
        </>
      );
}