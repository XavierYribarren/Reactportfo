import { Cloud, MeshReflectorMaterial } from '@react-three/drei'
import React from 'react'
import { usePlane } from '@react-three/cannon'
import { MeshBasicMaterial } from 'three'

function Floor(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position:[0,-0.49,0],mass: 0, material:{restitution : 0.5, friction: 0.2} }))
 
  return (

<>
    <mesh 

      rotation={[-Math.PI * 0.5, 0, 0]}
      position={[0, 0.01, 0]}
      receiveShadow
      castShadow
    >
      <circleBufferGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        color='#151515'
        blur={[100, 100]}
        resolution={2048}
        mixBlur={0}
        mixStrength={1}
        depthScale={10}
        minDepthThreshold={2}
        metalness={0}
        roughness={1}
        mirror={1}
      />
      
      {/* <meshBasicMaterial ref={backG} side={THREE.DoubleSide}  /> */}
    </mesh>


<mesh 
ref={ref}
     rotation={[-Math.PI * 0.5, 0, 0]}
     position={[0, 0.00, 0]}
     receiveShadow
     castShadow
   >
     <circleBufferGeometry args={[5, 50]} />

     
     <meshBasicMaterial color={"#000000"}  />
   </mesh></>
  )
}

export default Floor