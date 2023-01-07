import React from "react";
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
import { BoxHelper } from "three";

export default function Scene({ mobil }) {
  const headFull = React.useRef();

  const faceMap = useLoader(TextureLoader, "/headus/Colour_8k-min-min.jpg");
  faceMap.flipY = false;
  const faceNorm = useLoader(
    TextureLoader,
    "/headus/Normal-Map_SubDivision_1-min-min.jpg"
  );
  faceNorm.flipY = false;
  const faceRough = useLoader(TextureLoader, "/headus/Gloss_8k-min.jpg");
  faceRough.flipY = false;
  const faceSpec = useLoader(TextureLoader, "/headus/Spec_8k-min.jpg");
  faceSpec.flipY = false;
  const faceShadow = useLoader(TextureLoader, "/headus/Shadow128S.png");
  faceShadow.flipY = false;

  const headus = new THREE.MeshStandardMaterial({
    // wireframe: true,
    map: faceMap,
    normalMap: faceNorm,
    normalScale: new THREE.Vector2(1, -1),
    roughnessMap: faceRough,
    roughness: 0.8,
    metalnessMap: faceSpec,
    metalness: 0.4,
    aoMap: faceShadow,
    aoMapIntensity: 1,
  });

  const headusMob = new THREE.MeshStandardMaterial({
    // wireframe: true,
    map: faceMap,
  });
  //   ////INNER EYE
  const innerEyeMap = useLoader(
    TextureLoader,
    "/headus/Sphere1_TXTR-min-min2.png"
  );
  innerEyeMap.flipY = false;
  const innerEyeNorm = useLoader(TextureLoader, "/headus/Sphere1_NM-min.png");
  innerEyeNorm.flipY = false;

  const eyeout2 = new THREE.MeshPhysicalMaterial({
    transmission: 0.99,
    roughness: 0,
    opacity: 0.4,
    clearcoat: 1,
    clearcoatRoughness: 0,
    transparent: true,
  });

  const eyeoutMob = new THREE.MeshStandardMaterial({
    roughness: 0,
    opacity: 0.4,
    transparent: true,
  });

  const eyeMaterial = new THREE.MeshStandardMaterial({
    map: innerEyeMap,
    normalMap: innerEyeNorm,
  });

  const facialHairsMat = new THREE.MeshLambertMaterial({ color: "#111111" });


  const backRoughness = useLoader(TextureLoader, "/terrain-roughness.jpg");
  innerEyeNorm.flipY = false;



  const model = useLoader(
    GLTFLoader,
    mobil ? "/HeadDefDISPMOB.glb" : "/HeadDefDISPPAChov2.glb",
    (loader) => {
      // console.log(loader)
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco/");
      loader.setDRACOLoader(dracoLoader);
    }
  );
console.log(model)
  // model.scene.traverse(function (object) {
  //   if (object.isMesh) {
  //     if (object.name === "Sphere2" || object.name === "Sphere2001") {
  //       object.material = mobil ? eyeoutMob : eyeout2;
  //     } else if (object.name === "Sphere1002" || object.name === "Sphere1003") {
  //       object.material = eyeMaterial;
  //     }
  //     if (object.name === "Head2001") {
  //       object.material = headus;
  //     } else if (
  //       object.name === "Broaux" ||
  //       object.name === "Mesh002" ||
  //       object.name === "Mesh001" ||
  //       object.name === "Mesh007" ||
  //       object.name === "Mesh003"
  //     ) {
  //       object.material = facialHairsMat;
  //     }
  //     if (object.name === "Torus") {
  //       object.material = new THREE.MeshStandardMaterial({
  //         color: "#9d9d9d",
  //         metalness: 1,
  //         roughness: 0,
  //       });
  //     }
  //   } else if (object.name === "NurbsPath031") {
  //     object.children[1].material.envMapIntensity = 0.2;
  //     // console.log(object.children[1].name)

  //     // object.children.material = new THREE.MeshStandardMaterial({color: '#9d9d9d', metalness:1, roughness: 0})
  //   }
  // });



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

  //MAPS IMPORT
  // useHelper(headFull, BoxHelper, 'cyan')

  return (
    <>
      {mobil ? (
        <mesh rotateOnAxis={[1, 1, 0]} position={[2, 0, -1]}>
          <planeGeometry args={[40, 40, 60, 60]} />
          <MeshWobbleMaterial
            color={"#c5b2f0"}
      //       speed={'Speed', 1, { range: true, max: 10, step: 0.1 }}
      factor={0.2}
            resolution={1024}
            metalness={1}
            roughness={0.7}
            roughnessMap={backRoughness}
          />
        </mesh>
      ) : (
        ""
      )}
      <group
        dispose={null}
        ref={headFull}
        position={mobil ? [5, -2, 17.5] : [4.5, -2, 18.5]}
        rotation={mobil ? [-0.05, -0.9, 0] : [0.9, -0.8, 0.051]}
      >
        <spotLight
          lookAt={[-12, 8, 2]}
          position={[-4, -4, 14]}
          intensity={5}
          color="#ff00ff"
          penumbra={0.02}
          castShadow
        />
        <directionalLight intensity={0.51} position={[-2, 6, 10]} />
        {/* <primitive object={new THREE.AxesHelper(10)} /> */}

        <primitive object={model.scene} position={[0, 0, 0]} />
      </group>
    </>
  );
}
// useGLTF.preload("/headDefDISP.glb");
