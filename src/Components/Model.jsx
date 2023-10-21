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
import { HireBaloon } from './HireBaloon';
import { WoodSign } from './WoodSign';
import { Logos } from './Logos';

export const Model = (props) => {
  const { nodes, materials } = useGLTF('/scenePFUV.glb');

  const mainMap = useTexture('/mainScene_Diff.png');
  // mainMap.flipY = false

  const mainMat = new THREE.MeshPhongMaterial({ color: '#856333' });

  const mudSand = useTexture('/mudSandCol.png');
  mudSand.wrapS = THREE.RepeatWrapping;
  mudSand.wrapT = THREE.RepeatWrapping;
  mudSand.repeat.set(0.1, 0.1);



  const mainAO = useTexture('/mainScene_AOCUT.png');
  mainAO.flipY = false;
  // mainAO.channel = `1`

  const floorMat = new THREE.MeshBasicMaterial({
    map: mudSand,
    toneMapped: false,
    aoMap: mainAO,
    aoMapIntensity: 0.9,
    lightMap: mainAO,
    lightMapIntensity: 1.53,
  });

  return (
    <Suspense>
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Plane.geometry}
          material={floorMat}

          // material-color={'white'}
        ></mesh>
        <ProjectsShow ao={mainAO} />
     
<HireBaloon />
<WoodSign/>
<Logos/>
<Plants/>
        <mesh
     
          geometry={nodes.rock041.geometry}
          material={mainMat}
position={[0,-0.01,0]}
   
        />
     
      </group>
    </Suspense>
  );
};

useGLTF.preload('/scenePF.glb');
