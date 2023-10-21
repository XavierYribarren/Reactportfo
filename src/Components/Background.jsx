import { Environment, GradientTexture, MeshReflectorMaterial, Sphere, Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Depth, Gradient, LayerMaterial } from "lamina";

import { useRef } from "react";

import * as THREE from "three";

export const Background = () => {
  const start = -0.25;
  const end = 0.2;

  const gradientRef = useRef();
  const gradientEnvRef = useRef();

  // useFrame(() => {
  //   gradientRef.current.colorA = new THREE.Color(
  //     backgroundColors.current.colorA
  //   );
  //   gradientRef.current.colorB = new THREE.Color(
  //     backgroundColors.current.colorB
  //   );
  //   gradientEnvRef.current.colorA = new THREE.Color(
  //     backgroundColors.current.colorA
  //   );
  //   gradientEnvRef.current.colorB = new THREE.Color(
  //     backgroundColors.current.colorB
  //   );
  // });

  return (
    <>
      <Sphere scale={[50, 50, 50]}
       rotation-y={Math.PI*0.5}  
       rotation-x={Math.PI*1} 
       >
        <LayerMaterial color={"#ffffff"} side={THREE.BackSide} opacity={0.05}>
          <Gradient  colorA={"#8af1ff"} colorB={"#ec8f0c"}  axes={"y"} start={start} end={end} />
        </LayerMaterial>
    
      </Sphere>
      <Environment 
        preset='dawn'
      // files={'kiara_5_noon_2k.hdr'}
        //  background 
        
         blur={3}
         />



    </>
  );
};