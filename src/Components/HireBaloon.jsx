
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from 'three'
export const HireBaloon = (props) => {
  const { nodes, materials } = useGLTF("/hireBaloon.glb");

const baloonTex = useTexture('/hirebaloon_Pass1_2k-2.png')
baloonTex.flipY = false
const hireBaloonMat = new THREE.MeshStandardMaterial({map: baloonTex, roughness:0.2})
  return (
    <group {...props} dispose={null} >
      <mesh
      scale={1.8}
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={hireBaloonMat}
        // material={nodes.Cube006.material}
        // material-map={baloonTex}
        rotation={[0,Math.PI*0.1,0]}
        position={[-2.507, 1.307, -2.032]}
      />
    </group>
  );
}

useGLTF.preload("/hireBaloon.glb");
