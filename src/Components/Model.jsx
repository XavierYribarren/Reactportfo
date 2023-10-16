import React, { Suspense, useRef } from 'react';
import {
  AccumulativeShadows,
  BakeShadows,
  RandomizedLight,
  Shadow,
  useGLTF,
  useTexture,
} from '@react-three/drei';
import * as THREE from 'three';
import { ProjectsShow } from './ProjectsShow';
import { Door } from './Door';
import Plants from './Plants';

export const Model = (props) => {
  const { nodes, materials } = useGLTF('/scenePFUV.glb');

  const mainMap = useTexture('/mainScene_Diff.png');
  // mainMap.flipY = false

  const mainMat = new THREE.MeshPhongMaterial({ color: '#856333' });

  const mudSand = useTexture('/mudSandCol.png');
  mudSand.wrapS = THREE.RepeatWrapping;
  mudSand.wrapT = THREE.RepeatWrapping;
  mudSand.repeat.set(0.1, 0.1);



  const mainAO = useTexture('/mainScene_AO4k.png');
  mainAO.flipY = false;
  // mainAO.channel = `1`

  const floorMat = new THREE.MeshBasicMaterial({
    map: mudSand,
    toneMapped: false,
    aoMap: mainAO,
    aoMapIntensity: 0.9,
    lightMap: mainAO,
    lightMapIntensity: 1.3,
  });

  return (
    <Suspense>
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Plane.geometry}
          material={floorMat}
          material-color={'white'}
        ></mesh>
        <ProjectsShow ao={mainAO} />
        <mesh
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
          position={[0, 0, -1.132]}
        />
        {/* <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[2.908, 0, -0.38]}
          scale={1.661}
          // material-aoMap={mainAO}
          // material-aoMapIntensity={0.96}
        /> */}
{/* <Door/> */}
<Plants/>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.rock041.geometry}
          material={mainMat}
position={[0,-0.01,0]}
          // material-aoMap={mainAO}
          // material-aoMapIntensity={0.96}
        />
     
      </group>
    </Suspense>
  );
};

useGLTF.preload('/scenePF.glb');
