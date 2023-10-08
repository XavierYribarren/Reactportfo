
import React, { forwardRef, useRef } from "react";
import { Float, QuadraticBezierLine, useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from 'three'
import PostProc from "./PostProc";
import { BlurPass, Resizer, KernelSize } from 'postprocessing'
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";

export const Letter = forwardRef(function (props, ref) {
  const { nodes, materials } = useGLTF("/logoBallPHY.glb");

const whysRef =  useRef()

  const YsEmitIntensity = useLoader(TextureLoader, "/letterMaps/YS_Pass2.png");
  YsEmitIntensity.flipY = false;
  const YsEmitMap = useLoader(TextureLoader, "/letterMaps/YS_Pass1.png");
  YsEmitMap.flipY = false;

  const multicolo = useTexture('/colorcubes.jpg')
  multicolo.flipY = false
  multicolo.wrapS = THREE.RepeatWrapping
  multicolo.wrapT = THREE.RepeatWrapping

  multicolo.repeat.set(2,2.9)
  


const TRBLMat = new THREE.MeshStandardMaterial({
  map: multicolo,
// color: material-color,
 metalness: 0.18,
 roughness: 0.68,
//  clearcoat: 0.8,
//  transmission: 0.8
//  reflectivity: 1
})


const XlegMaterial = new THREE.MeshStandardMaterial({
  // map: multicolo,
})


return (
  <group {...props} dispose={null} rotation={[0, -Math.PI * 0.3, 0]} position={[1.4, 0.2, -0.2]}>
  

    <Float speed={4.8} floatIntensity={1} floatingRange={[-0.2,0.2]}>

    <group      
               >


<mesh
        castShadow
        receiveShadow
        geometry={nodes["TR-BL"].geometry}
        material={TRBLMat}
        color={"#ff000f"}
        />
      <mesh ref={ref}
        castShadow
        receiveShadow
        geometry={nodes["TL-BR"].geometry}
        material={TRBLMat}
       color={new THREE.Color("#ff00ff")}
        />
    </group>
        </Float>


        </group>
  );
})

useGLTF.preload("/logoBallPHY.glb");

