
import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from 'three'
import PostProc from "./PostProc";
import { BlurPass, Resizer, KernelSize } from 'postprocessing'
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";

export const Letter = forwardRef(function (props, ref) {
  const { nodes, materials } = useGLTF("/logoCUB.glb");

const tvScreen =  useRef()

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

const spot = props.light

console.log(props)
  return (
    <group {...props} dispose={null}>
        {/* <PostProc/> */}
        {/* <SelectiveBloom
        lights={ref}
   /> */}
{/* <EffectComposer> */}

<SelectiveBloom
    lights={[spot]} // ⚠️ REQUIRED! all relevant lights
    selection={[tvScreen]} // selection of objects that will have bloom effect
    selectionLayer={10} // selection layer
    intensity={1.0} // The bloom intensity.
    blurPass={undefined} // A blur pass.
    width={Resizer.AUTO_SIZE} // render width
    height={Resizer.AUTO_SIZE} // render height
    kernelSize={KernelSize.LARGE} // blur kernel size
    luminanceThreshold={0.79} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
    />
    {/* </EffectComposer> */}
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
      ref={tvScreen}
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        // material={materials.YS}
        material={WhyMaterial}
      />
    </group>
  );
})

useGLTF.preload("/logoCUB.glb");
