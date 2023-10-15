import React, { useMemo, useRef } from "react";
import { Html, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { Perf } from "r3f-perf";

function ArtRoom(props) {
  const { nodes, materials } = useGLTF("/artroomOPT.glb");

// ROOM setup
const artRoomTx = useTexture('./ArtRoom-min.png')
artRoomTx.flipY = false
const artRoomMat = new THREE.MeshStandardMaterial({map: artRoomTx, roughness: 0.5, metalness: 0.71, emissiveMap : artRoomTx})



// FRAMES setup
const framesMat = useMemo(() => { new THREE.MeshStandardMaterial()},[])
const frameL = useTexture('./frames/Skull-min.png')
frameL.flipY = false
const frameR = useTexture('./frames/Bidultiti-min.png')
frameR.flipY = false
const frame31 = useTexture('./frames/pringle3x1-min.png')
frame31.flipY = false
const frame32 = useTexture('./frames/SkullRoom-min.png')
frame32.flipY = false
const frame33 = useTexture('./frames/tub-min.png')
frame33.flipY = false

  return (
    <>
    <group {...props} dispose={null} scale={2} position={[0,-50.2,0]} rotation={[0, - Math.PI*0.25, 0]}> 
    <Perf/>
     <ambientLight intensity={1.5} position={[0,10,0]}/>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={artRoomMat}
        // material-map={artRoomTx}
        />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["frame-3-1"].geometry}
        
        material={framesMat}    
        material-map={frame31}
        />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["frame-3-2"].geometry}
        material={framesMat}
        material-map={frame32}
        />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["frame-3-3"].geometry}
        material={framesMat}
        material-map={frame33}
        />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["frame-R"].geometry}
        material={framesMat}
        material-map={frameR}
        // material-emissiveMap={frameR}
        // material-emissiveIntensity={10}
        />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["frame-L"].geometry}
        material={framesMat}
        material-map={frameL}
        />
   
    </group>  

    <group>
{props.params ? 
       <Html transform position={[2,8,40]} scale={40} distanceFactor={1.5} rotation={[0,Math.PI*0.025,0]}>
 <iframe src="https://www.youtube.com/watch?v=4ujgky1Vc3k"/>
      </Html>
       : ''}
    </group>
        </>
  );
}

useGLTF.preload("/artroomOPT.glb");

export default ArtRoom