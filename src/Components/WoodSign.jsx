
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from 'three'
export function WoodSign(props) {
  const { nodes, materials } = useGLTF("/woodsignCarved.glb");
  const signTx = useTexture('/WoodSignFull_Comb.png')
signTx.flipY = false
const signDepth = useTexture('/WoodSignFull_Rough.png')
signDepth.flipY = false
const signNorm = useTexture('/WoodSignFull_Norm.png')
signNorm.flipY = false
  const signMat = new THREE.MeshStandardMaterial({map: signTx, color:"#fcd8a5", metalnessMap: signDepth , normalMap: signNorm, normalScale: new THREE.Vector2(0,0.75)})
  return (
    <group {...props} dispose={null}>
      <mesh
      scale={1}
        castShadow
        // receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={signMat}
        position={[-5.351, 1.028, -0.157]}
        rotation={[0,Math.PI*0.2,0]}

      />
    </group>
  );
}

useGLTF.preload("/woodsignCarved.glb");