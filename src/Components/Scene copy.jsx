import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";


  
export default function Scene(props){


const headFull = React.useRef();



const faceMap = useLoader(TextureLoader, "/headus/Colour_8k-min-min.jpg");
  faceMap.flipY = false;
  // faceMap.minFilter = THREE.LinearMipmapNearestFilter
  // faceMap.magFilter = THREE.LinearFilter
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
  // faceShadow.minFilter = THREE.LinearMipmapNearestFilter
  ////INNER EYE
  const innerEyeMap = useLoader(
    TextureLoader,
    "/headus/Sphere1_TXTR-min-min.png"
  );
  innerEyeMap.flipY = false;
  const innerEyeNorm = useLoader(TextureLoader, "/headus/Sphere1_NM-min.png");
  innerEyeNorm.flipY = false;

  //         // const { nodes, materials } = useGLTF( "/HeadDefULTRA.glb");
  //  const { nodes, materials } = useGLTF( "/HeadDefLASH.glb");
  const { nodes, materials } = useGLTF("/HeadDefDISP.glb");

  materials.eyeout2 = new THREE.MeshPhysicalMaterial({
    transmission: 0.99,
    roughness: 0,
    opacity: 0.4,
    clearcoat: 1,
    clearcoatRoughness: 0,
    transparent: true,
  });
  const eyeMaterial = new THREE.MeshStandardMaterial({
    map: innerEyeMap,
    normalMap: innerEyeNorm,
  });
  materials.Headus = new THREE.MeshPhysicalMaterial({
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

  const facialHairsMat = new THREE.MeshLambertMaterial({ color: "#111111" });
  materials.RootStrandLarge.vertexColors = new THREE.Color("#000");
  materials.hairStrands.vertexColors = new THREE.Color("#000");






// 
useFrame(({ clock }) => {
  const a = clock.getElapsedTime();
  headFull.current.rotation.y = -1 + Math.sin(a * 1) * 0.3; // the value will be 0 at scene initialization and grow each frame
  // headFull.current.group.rotation.x = 0.2 + Math.cos((a / 2) * 2) * 0.03; // the value will be 0 at scene initialization and grow each frame
});





      //MAPS IMPORT

    return (
          <>
            <group
              {...props}
              dispose={null}
              ref={headFull}
              position={[5, 1.5, 9]}
              rotation={[0.2, -0.8, 0]}
            >
            <spotLight
      lookAt={[-12, 8, 2]}
      position={[-4, -4, 14]}
      intensity={5}
      color="#ff00ff"
      castShadow
    />
    <directionalLight intensity={0.51} position={[-2, 6, 10]} />

              <mesh
                geometry={nodes.Mesh007.geometry}
                material={facialHairsMat}
                position={[0.74, 2.87, 1.51]}
                rotation={[1.42, -0.46, -0.97]}
              />
              <mesh
                geometry={nodes.Mesh002.geometry}
                material={facialHairsMat}
                position={[0.71, 2.65, 1.47]}
                rotation={[-1.21, -0.37, 0.93]}
              />
              <mesh
                geometry={nodes.Mesh003.geometry}
                material={facialHairsMat}
                position={[-0.69, 2.64, 1.47]}
                rotation={[-1.2, 0.4, -0.96]}
              />
              <mesh
                geometry={nodes.Mesh001.geometry}
                material={facialHairsMat}
                position={[-0.69, 2.89, 1.52]}
                rotation={[1.48, 0.34, 0.84]}
              />
              <mesh
                geometry={nodes.Torus.geometry}
                // material={materials.silver}
                position={[1.4, 2, -0.01]}
                rotation={[0, 0.39, -Math.PI / 2]}
              />
              <mesh
                geometry={nodes.Bebar.geometry}
                material={facialHairsMat}
                position={[0, 3.25, 0]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes.Sphere1.geometry}
                material={nodes.Sphere1.material}
                position={[-0.62, 2.79, 1.25]}
                rotation={[Math.PI / 2, 0, -0.03]}
              />
              <mesh
                geometry={nodes.NurbsPath011.geometry}
                material={materials.HairRoot}
                position={[1.44, 2.7, -0.64]}
                rotation={[-0.01, -0.04, 0.33]}
              />
              <mesh
                geometry={nodes.NurbsPath.geometry}
                material={materials.HairRoot}
                position={[1.94, 4.89, 2.22]}
              />
              <mesh
                geometry={nodes.Sphere1001.geometry}
                material={nodes.Sphere1001.material}
                position={[0.65, 2.79, 1.25]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes.Sphere2.geometry}
                material={nodes.Sphere2.material}
                position={[-0.62, 2.77, 1.14]}
                rotation={[1.44, 0, 0]}
              />
              <mesh
                geometry={nodes.Sphere2001.geometry}
                material={nodes.Sphere2001.material}
                position={[0.64, 2.78, 1.24]}
                rotation={[1.44, 0, 0]}
              />
              <mesh
                geometry={nodes.Head2001.geometry}
                material={materials.Headus}
                position={[0, 3.28, -0.05]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes.NurbsPath027.geometry}
                material={materials.RootStrandLarge}
                position={[0.83, 0.52, 0.02]}
                rotation={[0.22, -0.17, -0.25]}
              />
              <mesh
                geometry={nodes.NurbsPath001.geometry}
                material={materials.RootStrandLarge}
                position={[0.61, 4.16, -3.3]}
                rotation={[0.78, -0.87, -1.86]}
              />
              <mesh
                geometry={nodes.Broaux.geometry}
                material={facialHairsMat}
                position={[0, 3.23, -0.02]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <group position={[0.25, 3.03, -1.37]} rotation={[1.29, 0.16, -1.24]}>
                <mesh
                  geometry={nodes.NurbsPath004_1.geometry}
                  material={materials.HairRoot}
                />
                <mesh
                  geometry={nodes.NurbsPath004_2.geometry}
                  material={materials.hairStrands}
                />
                <mesh
                  geometry={nodes.NurbsPath004_3.geometry}
                  material={materials.RootStrandLarge}
                />
              </group>
              <group position={[0.37, 3.09, 1.95]} rotation={[0.2, -1.04, 0.12]}>
                <mesh
                  geometry={nodes.NurbsPath031_1.geometry}
                  material={materials.RootStrandLarge}
                />
                <mesh
                  geometry={nodes.NurbsPath031_2.geometry}
                  material={materials.hairStrands}
                />
              </group>
            </group>
          </>
        );
      }
      useGLTF.preload("/headDefDISP.glb");