import React, { forwardRef, useRef } from "react";
import { AccumulativeShadows, useGLTF, useTexture } from "@react-three/drei";

export const Picket = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/picketrope.glb");
  const picketTex = useTexture('/picketTx.png')
  picketTex.flipY = false
  return (
    <group ref={ref} {...props} dispose={null}  position={[2,0.02,-1]}>

      <mesh
      scale={0.2}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.picket}
        material-map={picketTex}
      />
      <mesh
      scale={0.2}
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve001.geometry}
        material={materials.rope}
      />
    </group>
  );
})

useGLTF.preload("/picketrope.glb");