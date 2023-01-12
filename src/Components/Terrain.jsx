import React, { forwardRef, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Clock } from "three";


export default function Terrain({z}){

  // let z
//  const { z } = props;

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
      
        return (
            <group position={[0, -5, z]} scale={[0.7,0.7,0.7]}>
       
            <primitive object={city.scene} />
              </group>
        );
      
      


    }