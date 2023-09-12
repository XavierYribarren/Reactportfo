import {
  Box,
  CameraShake,
  Environment,
  MeshReflectorMaterial,
  Scroll,
  useScroll,
} from '@react-three/drei';
import React, { useRef, useState } from 'react';
import { Tv } from './Tv';
import * as THREE from 'three';
import { useFrame, useThree } from 'react-three-fiber';
import { Letter } from './Letter';
import PostProc from './PostProc';
import Introduce from './Introduce';

export default function Scene() {
  const group = useRef();

  const {viewport} = useThree()

const [hover, setHover] = useState(false)

  function Rig() {
    const [vec] = useState(() => new THREE.Vector3());
    const { camera, mouse } = useThree();
    useFrame(() => camera.position.lerp(vec.set(-1, 0.1, 1.6), 0.05));
    // return <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.05} pitchFrequency={0.05} rollFrequency={0.04} />
  }

  const scroll = useScroll();
  const { width, height } = useThree((state) => state.viewport);

  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 4, 0.01,4);
    const r2 = scroll.range(0, 0.6);
    const r3 = scroll.range(0.6, 2);
    // const r3 = scroll.visible(4 / 5, 1 / 5)
    // state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, (-Math.PI/ 1.45) * r2, 10, 1)
    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      (-Math.PI / 1.45) * (r2)+r2 *0.5,
      10,
      1
    );
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      (width / 7) * r2,
      10,
     1
    );
    // group.current.children[2].position.z = THREE.MathUtils.damp(group.current.children[2].position.z, (-6) * r1, 100, delta/4)
    //   group.current.children[2].scale.x = 1 + scroll.range(0.005 / 100, 0.05 ) /3
    //   console.log(group.current)
  });


  const w = 1 / 3;
  return (
    <>
      <Rig />

      <group
        ref={group}
        dispose={null}
        // position={[width * w,0,0]}
      >
        <mesh
          rotation={[-Math.PI * 0.5, 0, 0]}
          position={[0, 0.01, 0]}
          receiveShadow
          castShadow
        >
          <circleBufferGeometry args={[5, 50]} />
          <MeshReflectorMaterial
            color='#efefef'
            blur={[100, 100]}
            resolution={2048}
            mixBlur={0}
            mixStrength={20}
            depthScale={10}
            minDepthThreshold={2}
            metalness={0}
            roughness={1}
            // depthToBlurRatioBias={0.25}
            mirror={1}
          />
        </mesh>

        <spotLight
          lookAt={[12, 8, 2]}
          position={[0, 4, 14]}
          intensity={2}
          // color="#ff00ff"
          penumbra={0.2}
          castShadow
        />
{/* <Scroll distance={0.5} horizontal pages={4} damping={1}> */}

        <Tv scale={1} position={[0, 0, 0]}
              onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
              onPointerOut={() => setHover(false)}
              hover={hover}
        />

        <Letter
          scale={0.5}
          position={[1.4, 0, 0.2]}
          rotation={[0, -Math.PI * 0.3, 0]}
          />

<Introduce
position={[viewport.width*1,1,2]}
rotation={[0, -Math.PI * 0.55, 0]}
/>
{/* </Scroll> */}
        <Environment preset='dawn' background blur={1} />
      </group>
    </>
  );
}
