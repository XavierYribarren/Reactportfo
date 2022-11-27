import React from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";


  
export default function Scene(){


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

  const headus = new THREE.MeshPhysicalMaterial({
    wireframe: true,
    map: faceMap,
    // normalMap: faceNorm,
    // normalScale: new THREE.Vector2(1, -1),
    // roughnessMap: faceRough,
    // roughness: 0.8,
    // metalnessMap: faceSpec,
    // metalness: 0.4,
    // aoMap: faceShadow,
    // aoMapIntensity: 1,
  });

  const headusMob = new THREE.MeshStandardMaterial({
    wireframe: true,
    map: faceMap,
  })
//   ////INNER EYE
  const innerEyeMap = useLoader(
    TextureLoader,
    "/headus/Sphere1_TXTR-min-min.png"
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


  // const facialHairsMat = new THREE.MeshLambertMaterial({ color: "#111111" });
  // materials.RootStrandLarge.vertexColors = new THREE.Color("#000");
  // materials.hairStrands.vertexColors = new THREE.Color("#000");


  const model = useGLTF("/HeadDefDISP.glb",
  (loader) =>
    {
      // console.log(loader)
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')
        loader.setDRACOLoader(dracoLoader)
      },
      );
      console.log(model.scene)

      model.scene.traverse( function( object ) {

      if ( object.isMesh ) {
          
        if (object.name === 'Sphere2'){

          object.material = eyeoutMob
} else         if (object.name === 'Sphere1'){

  object.material = eyeMaterial
}
if (object.name === 'Head2001'){

  object.material = headusMob
}
    
        }
    
    } );



// 
// useFrame(({ clock }) => {
//   const a = clock.getElapsedTime();
//   headFull.current.rotation.y = -1 + Math.sin(a * 1) * 0.3; // the value will be 0 at scene initialization and grow each frame
//   headFull.current.rotation.x = 0.2 + Math.cos((a / 2) * 2) * 0.03; // the value will be 0 at scene initialization and grow each frame
// });





      //MAPS IMPORT

    return (
          <>
            <group
              dispose={null}
              ref={headFull}
              position={[4, 3, 6]}
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

             <primitive object={model.scene}/>
            </group>
          </>
        );
      }
      useGLTF.preload("/headDefDISP.glb");