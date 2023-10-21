import React, { useRef, useState } from "react";
import { AccumulativeShadows, BakeShadows, ContactShadows, Shadow, SoftShadows, useGLTF } from "@react-three/drei";
import * as THREE from 'three'
export function Logos(props) {
  const { nodes, materials } = useGLTF("/GhLinkedin.glb");

  const github = 'https://github.com/XavierYribarren'
  const linkedin = 'https://www.linkedin.com/in/xavier-yribarren/'
 
  const [gitHover, setGitHover] = useState(false);
  const [linkedInHover, setLinkedInHover] = useState(false);

const gitMat = new THREE.MeshStandardMaterial({color: '#000', roughness: 0.41, emissive : gitHover ? "#888" : "#000"})
const linkMat = new THREE.MeshStandardMaterial({color: "#0a66c2", roughness: 0.81, emissive : linkedInHover ? "#888" : "#000" })
  
const handlePointerOver = () => {  (document.body.style.cursor = 'pointer')};
const handlePointerOut = () => { (document.body.style.cursor = 'auto')};
const handleOpenNewTab = (site) => {
 

   let urlToOpen = site

  window.open(urlToOpen, '_blank');
};

return (
    <group {...props} dispose={null} scale={1.3}
     position={[0.9, 0, 1.21]}
     >
  
  <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert.geometry}
        // material={nodes.Vert.material}
        onClick={() => handleOpenNewTab(github)}
        material={gitMat}
        position={[-2.627, 0.403, -1.871]}
        rotation={[0.087, Math.PI / 9, 0]}
        scale={1.074}
        onPointerOver={() => {handlePointerOver(), setGitHover(true)}}
        onPointerOut={() => {handlePointerOut(), setGitHover(false)}}
      />
      <group 
      onClick={() =>  handleOpenNewTab(linkedin)}
        onPointerOver={() => {handlePointerOver(), setLinkedInHover(true)}}
        onPointerOut={() => {handlePointerOut(), setLinkedInHover(false)}}
        >

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve035.geometry}
        // material={nodes.Curve035.material}
        material={linkMat}
        //  material-color={"#0a66c2"}
        position={[-2.304, -0.078, -1.808]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[4.924, 3.742, 4.924]}
        />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={nodes.Curve001.material}
        
        position={[-2.304, -0.078, -1.808]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[4.924, 3.742, 4.924]}
        // material-color={"#ff00ff"}
        />
        </group>

      {/* <ContactShadows opacity={0.91} scale={1} blur={1} far={10} resolution={256} color="#000000" position={[0,0.001,0]}/> */}
    </group>
  );
}

useGLTF.preload("/GhLinkedin.glb");