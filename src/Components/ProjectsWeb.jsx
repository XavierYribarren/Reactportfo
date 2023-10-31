import React, { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Clone, Text, useFont, useGLTF, useTexture } from '@react-three/drei';
import { useThree } from 'react-three-fiber';

const nopeText = {
  title: `2nd School Project`,
  content: `  We had to create a  React App 
 and fetch some 
 API informations. We then decided
 to create an alibi generator to turn down some propositions!`,
  technos: 'HTML, CSS, JavaScript, React',
};
const emergaText = {
  title: `3rd School Project`,
  content:
    'We worked on a webApp for EmerGa, a life-saving app allowing faster interventions and more precise information on an incident. We had to make both Frontend and Backend parts',
  technos: 'HTML, CSS, JavaScript, React, Express, MySQL',
};
const narifText = {
  title: `N.A.R.I.F`,
  content:
    "Pretending there's a Native American Roulette Federation, it's basically a Russian Roulette with a bow. It was a fun exercise to show that something absurd with a serious shape could still work!",
  technos: 'HTML, CSS, JavaScript',
};

const Model = (props) => {
  const { nodes, materials } = useGLTF('/tabdevice.glb');

  const [hovered, setHovered] = useState(false);
  const tabModel = useRef();
  materials.tabscreen = new THREE.MeshStandardMaterial({
    color: hovered ? '#2f2f2f' : '#fff',
    metalness: 0.28,
    roughness: 0.4,
  });
  materials.tabcase.metalness = 0.5;
  materials.tabcase.roughness = 0.5;

  const tabCase = new THREE.MeshBasicMaterial({color: "#000"})
// console.log(materials.tabcase)


  return (
    <group
      ref={tabModel}
      {...props}
      dispose={null}
      rotation={props.rotation}
      position={props.position}
    >
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        // castShadow
        geometry={nodes.Cube_1.geometry}
      >
        <meshStandardMaterial
          color={hovered ? '#2f2f2f' : '#fff'}
          map={props.texture}
          metalness={0.28}
          roughness={0.4}
          emissiveMap={props.texture}
          emissiveIntensity={hovered ? 0 : 1}
          toneMapped={false}
        />
        <group scale={0.1}>
          <Text
            position={[-0.0, 0.7, 0.1]}
            fontSize={0.1}
            maxWidth={1.2}
            textAlign='center'
            color={'white'}
            fillOpacity={hovered ? 1 : 0}
            font='/typos/Big_BlackBear.ttf'
          >
            {props.text.title}
          </Text>
          <Text
            position={[-0.0, -0.2, 0.2]}
            fontSize={0.07}
            lineHeight={1.1}
            textAlign='center'
            maxWidth={0.8}
            fillOpacity={hovered ? 1 : 0}
            // font='./Kids_Now.ttf'
            font='/typos/Big_BlackBear.ttf'
          >
            {props.text.content}
          </Text>
        </group>
      </mesh>
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Cube_2.geometry}
        
        // material={tabCase}
      >
        <meshBasicMaterial color={'#000'} />
      </mesh>
    </group>
  );
}



export const ProjectsWeb = () => {
  const nopeTex = useTexture('./Nope.png');
  nopeTex.flipY = false;
  const emergaTex = useTexture('./EmerGaGQ.png');
  emergaTex.flipY = false;
  const narifTex = useTexture('./Narif.png');
  narifTex.flipY = false;

  return (
    <>
      <group>
        {/* <mesh> */}

          <Model
            texture={nopeTex}
            text={nopeText}
            rotation={[0, -Math.PI * 1.1, 0]}
            position={[-0.042, 0, -0.02]}
          />
          <Model
            texture={emergaTex}
            text={emergaText}
            rotation={[0, -Math.PI * 1.3, 0]}
            position={[-0.22, 0, -0.14]}
          />
          <Model
            texture={narifTex}
            text={narifText}
            rotation={[0, -Math.PI * 1.45, 0]}
            position={[-0.3, 0, -0.32]}
          />
        {/* </mesh> */}
      </group>
    </>
  );
};

// export default ProjectsWeb
useGLTF.preload('/tabdevice.glb');