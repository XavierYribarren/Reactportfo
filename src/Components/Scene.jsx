import React, { useState } from "react";
import * as THREE from "three";
import {
  useGLTF,
  useHelper,
  MeshReflectorMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { BoxHelper, FrontSide } from "three";
import { useMemo } from "react";
import { useLayoutEffect } from "react";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";

export default function Scene({ mobil, setLoader }) {
  const headFull = React.useRef();


  const faceMap = useLoader(TextureLoader, "/headus/Faceandshad-min.png");
  faceMap.flipY = false;
  const faceNorm = useLoader(
    TextureLoader,
    "/headus/Normal-Map_SubDivision_1-min-min2.jpg"
  );
  faceNorm.flipY = false;
  const faceRough = useLoader(TextureLoader, "/headus/Gloss_8k-min.jpg");
  faceRough.flipY = false;
  const faceSpec = useLoader(TextureLoader, "/headus/Spec_8k-min2.jpg");
  faceSpec.flipY = false;
  const faceDisp = useLoader(TextureLoader, "/headus/Cavity_8k-min.png");
  faceDisp.flipY = false;

  const headus = new THREE.MeshStandardMaterial({
    // wireframe: true,
    map: faceMap,
    // normalMap: faceNorm,
    // normalScale: new THREE.Vector2(1, -1),
    roughnessMap: faceRough,
    roughness: 0.8,
    // metalnessMap: faceSpec,
    // metalness: 0.4,
    side: FrontSide,
   bumpMap: faceDisp,
   bumpScale: 0.0049,
  displacementMap: faceDisp,
  displacementScale: 0.002
  });

  const headusMob = new THREE.MeshStandardMaterial({
    // wireframe: true,
    map: faceMap,
  });
  //   ////INNER EYE
  const innerEyeMap = useLoader(
    TextureLoader,
    "/headus/Sphere1_TXTR-min-min3.png"
  );
  innerEyeMap.flipY = false;
  const innerEyeNorm = useLoader(TextureLoader, "/headus/Sphere1_NM-min2.png");
  innerEyeNorm.flipY = false;

  const eyeMaterial = new THREE.MeshStandardMaterial({
    map: innerEyeMap,
    normalMap: innerEyeNorm,

  });

  const facialHairsMat = new THREE.MeshBasicMaterial({ color: "#111111" });


  const model = useLoader(
    GLTFLoader,
    mobil
      ? "/HeadDefDISPMOB.glb"
      : "/optgueul.glb",
    (loader) => {

      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco/");
      loader.setDRACOLoader(dracoLoader);
    }
  );
  const { scene } = model;
  const clonedScene = useMemo(() => scene.clone(), []);
  useLayoutEffect(() => {
    clonedScene.traverse((object) => traverse(object));
    setLoader(true);
  }, [clonedScene]);


  const traverse = (object) => {
    console.log(object)
    if (object.isMesh) {
      if (object.name === "Sphere1002" || object.name === "Sphere1003") {
        object.material = eyeMaterial;
      }
      if (object.name === "Head2001") {
        object.material = headus;
      } else if (object.name === "Mesh002") {
        object.material = facialHairsMat;
      }
      if (object.name === "Torus") {
        object.material = new THREE.MeshStandardMaterial({
          side: FrontSide,
          color: "#9d9d9d",
          metalness: 1,
          roughness: 0,
        });
      }
      if (object.name === "Broaux" || 
      object.name ==="Mesh001" || 
      object.name ==="Mesh003" || 
      object.name ==="Mesh007") {
        object.material = facialHairsMat;
      }
    }

  };

  //
  {
    mobil
      ? useFrame(({ clock }) => {
          const a = clock.getElapsedTime();
          headFull.current.rotation.y = -1 + Math.sin(a / 4) * 0.1; // the value will be 0 at scene initialization and grow each frame
          headFull.current.position.x = 5 + Math.cos((a / 2) * 2) * 0.03; // the value will be 0 at scene initialization and grow each frame
        })
      : useFrame(({ clock }) => {
          const a = clock.getElapsedTime();
          headFull.current.rotation.y = -1 + Math.sin(a * 1) * 0.03; // the value will be 0 at scene initialization and grow each frame
          headFull.current.rotation.x = 0.2 + Math.cos((a / 2) * 2) * 0.03; // the value will be 0 at scene initialization and grow each frame
        });
  }


  return (
    <>
      
      <group
        dispose={null}
        ref={headFull}
        position={mobil ? [5, -2, 17.5] : [4, -1.2, 21.5]}
        rotation={mobil ? [-0.05, -0.9, 0] : [0.9, -0.8, 0.051]}
      >
        <spotLight
          lookAt={[12, 8, 2]}
          position={[-4, -4, 14]}
          intensity={8}
          color="#ff00ff"
          penumbra={0.02}
          castShadow
        />
        <directionalLight intensity={0.81} position={[-2, 6, 10]} />
        
        <primitive object={clonedScene} position={[0, 0, 0]} />
      </group>
    </>
  );
}

