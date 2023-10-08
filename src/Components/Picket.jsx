import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Picket = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/picketrope.glb");
  return (
    <group ref={ref} {...props} dispose={null}  position={[2,0.02,-1]}>
      <mesh
      scale={0.05}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.picket}
      />
      <mesh
      scale={0.05}
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve001.geometry}
        material={materials.rope}
      />
    </group>
  );
})

useGLTF.preload("/picketrope.glb");