import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Scene from "./Scene";
import * as THREE from "three";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Vignette,
  SMAA,
  ChromaticAberration,
  BrightnessContrast,
} from "@react-three/postprocessing";
import {
  Stats,
  Environment,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import { LayerMaterial, Depth, Noise } from "lamina";
import { ACESFilmicToneMapping, sRGBEncoding } from "three";
import { Perf } from "r3f-perf";
import { ToneMapping } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export const Face = () => {
  const [mobil, setMobil] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setMobil(true);
    }
  }, []);
  return (
    <div className="headxav">
      <Suspense fallback={null}>
        <Canvas
          style={{ pointerEvents: "none" }}
          shadows={true}
          linear={false}
          gl={{
            outputEncoding: sRGBEncoding,
            physicallyCorrectLights: true,
            antialias: true,
            toneMapping: ACESFilmicToneMapping,
          }}
          resize={true}
        >
          <Scene mobil={mobil} />
          <PerspectiveCamera
            makeDefault
            fov={50}
            near={0.1}
            far={100}
            position={mobil ? [3.5, 0, 25] : [2, 0, 26]}
          />
          {mobil ? (
''
          ) : (
            <>
              <Environment background resolution={128} blur={1}>
                <mesh scale={100}>
                  <sphereGeometry args={[1, 64, 64]} />
                  <LayerMaterial
                    side={THREE.BackSide}
                    color="#00ffff"
                    alpha={0.1}
                    mode="darken"
                  >
                    <Depth
                      colorA="#ff00ff"
                      colorB="#ff00ff"
                      alpha={0.91}
                      mode="darken"
                      near={0}
                      far={80}
                      origin={[100, 100, 102]}
                    />
                    <Noise
                      mapping="simplex"
                      type="perlin"
                      scale={21}
                      mode="multiply"
                    />
                  </LayerMaterial>
                </mesh>
              </Environment>
              <EffectComposer>
                <DepthOfField
                  focusDistance={0.5}
                  focalLength={4}
                  bokehScale={14}
                  height={960}
                />
                <Bloom
                  luminanceThreshold={0}
                  luminanceSmoothing={0.9}
                  height={600}
                />
                <Vignette eskil={false} offset={0.1} darkness={1} />
                {/* <SMAA edgeDetectionMode={1} preset={3} /> */}
              </EffectComposer>
            </>
          )}
          <Perf />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Face;
