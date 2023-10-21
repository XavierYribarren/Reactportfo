
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three'

export function CurrentW(props) {
  const { nodes, materials } = useGLTF("/latestW.glb");
  const latestWMat = new THREE.MeshPhongMaterial({reflectivity:1, color:"#ebebeb"})
  return (
    <group {...props} dispose={null} scale={0.8}>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Text.geometry}
        material={latestWMat}
        position={[0.038, 1.02, 0.027]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/latestW.glb");
