import React, { Suspense, forwardRef, useRef } from "react";
import { AccumulativeShadows, useGLTF, useTexture } from "@react-three/drei";
import { MeshBasicMaterial } from "three";
import * as THREE from 'three'

export const Picket = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/picketrope2.glb");
  const picketTex = useTexture('/picket_Pass1.png')
  picketTex.flipY = false
  const picketMat = new THREE.MeshLambertMaterial({map: picketTex})
  return (
    <Suspense fallback={null}>

<group ref={ref} {...props} dispose={null} position={[2.094, 0.041, -1.116]}>
      <mesh

        geometry={nodes.picket001.geometry}
        material={picketMat}
       
      />
    </group>
       </Suspense>
  );
})

useGLTF.preload("/picketrope2.glb");