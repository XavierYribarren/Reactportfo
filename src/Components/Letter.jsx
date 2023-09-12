
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from 'three'
import PostProc from "./PostProc";
export function Letter(props) {
  const { nodes, materials } = useGLTF("/logoCUB.glb");


  const YsEmitIntensity = useLoader(TextureLoader, "/letterMaps/YS_Pass2.png");
  YsEmitIntensity.flipY = false;
  const YsEmitMap = useLoader(TextureLoader, "/letterMaps/YS_Pass1.png");
  YsEmitMap.flipY = false;

const WhyMaterial = new THREE.MeshPhysicalMaterial({
  map: YsEmitMap,
  emissive : new THREE.Color('#aaaaaa'),
 emissiveMap : YsEmitIntensity,
 emissiveIntensity : 2,
 metalness: 0.98,
 roughness: 0,
 reflectivity: 1
 
})
 
console.log(WhyMaterial)
  return (
    <group {...props} dispose={null}>
        {/* <PostProc/> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.Xleg}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        // material={materials.YS}
        material={WhyMaterial}
      />
    </group>
  );
}

useGLTF.preload("/logoCUB.glb");
