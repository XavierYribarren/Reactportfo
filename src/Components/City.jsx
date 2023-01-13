
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Model = (props, ref) => {
  const { nodes, materials } = useGLTF("/untitled-v1.glb");

  const { z } = props;
  const group = React.useRef()
  console.log(props)
  
  return (
    <group {...props} ref={group} dispose={null} scale={[0.7,0.7,0.7]} position={[0,-4,z]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[-4.89, 0.25, 117.9]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={nodes.Plane002.material}
        position={[24.7, 0.85, -5.86]}
        rotation={[Math.PI, 0, Math.PI]}
      />
    </group>
  );
}
export default Model;

useGLTF.preload("/untitled-v1.glb");
