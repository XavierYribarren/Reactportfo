import React, { forwardRef, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Clock } from "three";


export default function Background(){



    const cityFull = useRef()

    // const backPlane = useLoader(TextureLoader, "/Backcity.jpg");
    const city = useLoader(
        GLTFLoader,
'./untitled-v1.glb',
        (loader) => {
    
          const dracoLoader = new DRACOLoader();
          dracoLoader.setDecoderPath("/draco/");
          loader.setDRACOLoader(dracoLoader);
        }
    )
// console.log(city)
city.scene.traverse(function (object) {
      if (object.isMesh) {
object.material =  new THREE.MeshStandardMaterial({color : 'black', roughness: 0, metalness:1})
      }})

    const Terrain = forwardRef((props, ref) => {
        const { z } = props;

      
        return (
            <group  ref={ref} position={[0, -5, z]} scale={[0.7,0.7,0.7]}>
       
            <primitive object={city.scene} />
              </group>
        );
      })
      



      const terrain1Ref = useRef();
      const terrain2Ref = useRef();

      const [t1init, setT1init] = useState(false)
      const [t2init, setT2init] = useState(false)


      useFrame((state, delta, z) => {
        const deltaTime = state.clock.getDelta()
        // console.log(deltaTime)
        // Update plane position
        terrain1Ref.current.position.z = (state.clock.elapsedTime * 1) ; 
        // console.log(terrain1Ref.current.position.z)
        terrain2Ref.current.position.z = -180+((state.clock.elapsedTime * 1) );
        //  console.log(terrain2Ref.current.position.z)
        if(terrain2Ref.current.position.z > -150){setT2init(true)} 
        console.log(t2init + 'state')  
      });
        //  terrain2Ref.position.z > -150 ? setT2init(!t2init)  : ''
    //  console.log(terrain2Ref.current.position)
      return (
        <>
          <Terrain ref={terrain1Ref} z={0} />
          <Terrain ref={terrain2Ref} z={-180} />
        </>
      );
}