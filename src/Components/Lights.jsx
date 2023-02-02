import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Color, InstancedMesh, Object3D } from "three";

export function Lights() {
   
        const meshRef = useRef();
        const tempObject = new Object3D();
      
        console.log(InstancedMesh)
        useEffect(() => {
          if (meshRef == null) return;
          if (meshRef.current == null) return;
      
          // let i = 0;
          // for (let x = 0; x < 100; x++)
          //   for (let y = 0; y < 100; y++)
          //     for (let z = 0; z < 100; z++) 

          for (let i = 0; i< 100; i++)
              {
                const id = i++;
                tempObject.position.set((Math.random()-0.5)*i+Math.random(), -6.9, (Math.random()-0.5)*i+Math.random());
                tempObject.scale.set(1, 1, 1.5);
                tempObject.updateMatrix();
                meshRef.current.setMatrixAt(id, tempObject.matrix);
              }
          meshRef.current.instanceMatrix.needsUpdate = true;
        }, []);
        useFrame(({ clock }) => {
            const time = clock.getElapsedTime();

            // const amount = 20
            // for (let x = 0; x < amount; x++) {
            //     for (let y = 0; y < amount; y++) {
                //   for (let z = 0; z < amount; z++) {
            // meshRef.current.position.z = 
            // Math.sin(x / 2 + time) +
            // Math.sin(y / 3 + time) +
        //   meshRef.current.position.z+(time*0.0006) ;
                //   }}
                // }
                // console.log(meshRef)
        })
        return (
          <instancedMesh ref={meshRef} args={[100, null, 100]}scale={[1,1,1]}>
            <sphereGeometry args={[0.1, 12, 12]}/>
            <meshLambertMaterial emissive={"#ff00ff"} emissiveIntensity={10} />
          </instancedMesh>
        );
      }