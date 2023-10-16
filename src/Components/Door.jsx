import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from 'three'

export function Door(props) {
  const { nodes, materials } = useGLTF("/door.glb");

  const woodMat = useTexture('/plywood0k.jpg')
  woodMat.flipY = false
woodMat.wrapS = THREE.RepeatWrapping
woodMat.wrapT = THREE.RepeatWrapping
woodMat.repeat.set(1,0.93)

const woodMatNorm = useTexture('/plywood_nor0k.jpg')
woodMatNorm.flipY = false
const woodMatRough = useTexture('/plywood_rough0k.jpg')
woodMatRough.flipY = false
const doorMat = new THREE.MeshStandardMaterial({color: "#bdbdbd", map: woodMat, roughnessMap: woodMatRough, normalMap: woodMatNorm})


const doorKnobMat = new THREE.MeshStandardMaterial({ color: "#bdbdbd", metalness: 1, roughness:0})

  return (
    <group {...props} dispose={null}>
      <group position={[2.908, -0.01, -0.38]} scale={1.661}>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Cube008.geometry}
          material={doorMat}
          // material-map={woodMat}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={doorKnobMat}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/door.glb");
