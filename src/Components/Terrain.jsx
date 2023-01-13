import React, { forwardRef, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Clock } from "three";
import { propTypes } from "react-bootstrap/esm/Image";


const Terrain = forwardRef((props, ref) => {



  // let z
 const { z } = props;


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





      // useFrame((state, delta, z) => {
      //   //     const deltaTime = state.clock.getDelta()
      //   //     // Update plane position
      //   //     terrain1Ref.current.position.z = 0+(state.clock.elapsedTime * 1) ; 
      //   //     // console.log(terrain1Ref.current.position.z)
      //       terrain2Ref.current.position.z = -180+((state.clock.elapsedTime * 10) );
      //   //     //  console.log(terrain2Ref.current.position.z)
      //   //     // if(terrain2Ref.current.position.z > -150){setT2init(true)} 
      //   //     // console.log(t2init + 'state')  
      //     });
      //   //     //  terrain2Ref.position.z > -150 ? setT2init(!t2init)  : ''
      //   // //  console.log(terrain2Ref.current.position)
      
        return (
            <group ref={ref} dispose={null} scale={[0.7,0.7,0.7]} position={[0,-4,z]} >
       
            <primitive object={city.scene} {...props}/>
              </group>
        );
      
      


    })

    export default Terrain