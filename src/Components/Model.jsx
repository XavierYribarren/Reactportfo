import React, { Suspense, useRef } from "react";
import { AccumulativeShadows, BakeShadows, RandomizedLight, Shadow, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { ProjectsShow } from "./ProjectsShow";

export const Model = (props) => {
  const { nodes, materials } = useGLTF("/scenePFUV.glb");

const mainMap = useTexture('/mainScene_Diff.png')
mainMap.flipY = false

const mudSand = useTexture('/mudSandCol.png')
mudSand.wrapS = THREE.RepeatWrapping
mudSand.wrapT = THREE.RepeatWrapping
mudSand.repeat.set(0.1,0.1)


const mainAO = useTexture('/mainScene_AO4k.png')
mainAO.flipY = false
// mainAO.channel = `1`
const mainAOShadow = useTexture('/mainScene_Shadow4k.png')
mainAOShadow.flipY = false

const floorMat = new THREE.MeshBasicMaterial({map: mudSand, toneMapped:false, aoMap: mainAO, aoMapIntensity: 0.90, lightMap: mainAO, lightMapIntensity: 1.3})
 
return (
  <Suspense>

    <group {...props} dispose={null}>

      <mesh
    
        geometry={nodes.Plane.geometry}
  
        material={floorMat}
        material-color={'white'}
      
        >
      
      </mesh>
    <ProjectsShow ao={mainAO} />
      <mesh
     
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[0, 0, -1.132]}
        />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[2.908, 0, -0.38]}
        scale={1.661}
        // material-aoMap={mainAO}
        // material-aoMapIntensity={0.96}
        />

      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.rock041.geometry}
        material={nodes.rock041.material}
        // material-aoMap={mainAO}
        // material-aoMapIntensity={0.96}
        />
{/* <BakeShadows/> */}
{/* <AccumulativeShadows temporal frames={100} color="green" colorBlend={2} toneMapped={true} alphaTest={0.75} opacity={2} scale={12} position={[0,0.001,0]}>
          <RandomizedLight intensity={Math.PI} amount={8} radius={4} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
        </AccumulativeShadows> */}
    </group>
        </Suspense>
 
  );
}

useGLTF.preload("/scenePF.glb");
