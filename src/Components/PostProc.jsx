import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
} from '@react-three/postprocessing';
import React from 'react';
import * as THREE from 'three';
import { BlendFunction } from 'postprocessing';
function PostProc() {
  return (
    <>
      {/* <EffectComposer>
        <DepthOfField
          focusDistance={0.0025}
          focalLength={0.015}
          blur={1}
          bokehScale={1.8}
          // height={480}
        />
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0.82}
          width={400}
          height={400}
          kernelSize={5}
          luminanceThreshold={0.08}
          luminanceSmoothing={0.2}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0006, 0.0002]}
        />
      </EffectComposer> */}
    </>
  );
}

export default PostProc;
