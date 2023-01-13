import { Suspense, useEffect, useState } from "react";
import { Canvas} from "@react-three/fiber";
import Scene from "./Scene";
import * as THREE from "three";
import {
  EffectComposer,
  DepthOfField,
  Vignette,

} from "@react-three/postprocessing";
import {

  Environment,
  OrbitControls,
  PerspectiveCamera,

  Sparkles,
} from "@react-three/drei";
import { LayerMaterial, Depth, Noise } from "lamina";
import { ACESFilmicToneMapping, sRGBEncoding } from "three";
import { Perf } from "r3f-perf";
import Background from "./Background";


export const Face = ({ setLoader }) => {
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
          dpr={[1, 2]}
          gl={{
            outputEncoding: sRGBEncoding,
            physicallyCorrectLights: true,
            // antialias: true,
            toneMapping: ACESFilmicToneMapping,
            alpha: true,
          }}
        >
          <Background/>
          <Scene mobil={mobil} setLoader={setLoader} />

          <PerspectiveCamera
            makeDefault
            fov={50}
            near={0.1}
            far={100}
            position={mobil ? [3.5, 0, 25] : [2, 0, 26]}
          />
           
          {mobil ? (
            ""
          ) : (
            <>
              {" "}
              <EffectComposer
                enabled={true}
                disableNormalPass={true}
                stencilBuffer={true}
                dispose={null}
                autoClear={true}
              >
                <DepthOfField
                  focusDistance={0.11}
                  focalLength={0.4}
                  bokehScale={4}
                  height={480}
                />

                <Vignette eskil={false} offset={0.1} darkness={0.8} />
              </EffectComposer>
              <Environment background resolution={128} blur={0}>
                <mesh scale={3}>
                  {/* <sphereGeometry args={[160, 32, 32]} /> */}
                  <LayerMaterial
                    side={THREE.BackSide}
                    color="#158b98"
                    alpha={0.91}
                    mode="darken"
                  >
                    <Depth
                      colorA="#ff00ff"
                      colorB="#ff00ff"
                      alpha={0.81}
                      mode="darken"
                      near={-10}
                      far={20}
                      origin={[100, 100, 100]}
                    />
      
                  </LayerMaterial>
                </mesh>
              </Environment>
            
              <Sparkles
                count={1500}
                color={"yellow"}
                scale={20}
                speed={0.05}
                position={[0, -10, 0]}
                noise={1}
              />
              
            </>
          )}

          <Perf deepAnalyze={true} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Face;
