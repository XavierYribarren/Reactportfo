import { Cloud, MeshReflectorMaterial, useTexture } from '@react-three/drei'
import React, { forwardRef, useMemo } from 'react'
import { usePlane } from '@react-three/cannon'
import * as THREE from 'three'

const  Floor = forwardRef(({ children, ...props },ref) => {
  const [refPhy] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position:[0,-0.49,0],mass: 0, material:{restitution : 0.5, friction: 0.2} }))
  const floorGeo = useMemo(() => new THREE.CircleGeometry( 20, 50),[])

const floorRough = useTexture('./ground_sandy_02_roughness-min.png')
floorRough.flipY = false
floorRough.wrapS = THREE.RepeatWrapping
floorRough.wrapT = THREE.RepeatWrapping
floorRough.repeat.set(0.29,0.29)
const floorDisp = useTexture('./ground_sandy_02_height-min.png')
floorDisp.flipY = false
floorDisp.wrapS = THREE.RepeatWrapping
floorDisp.wrapT = THREE.RepeatWrapping
floorDisp.repeat.set(0.29,0.29)
const floorNorm = useTexture('./ground_sandy_02_normal-min.png')
floorNorm.flipY = false
floorNorm.wrapS = THREE.RepeatWrapping
floorNorm.wrapT = THREE.RepeatWrapping
floorNorm.repeat.set(0.9,0.29)
  return (

<>
    <mesh 
ref={ref}
      rotation={[-Math.PI * 0.5, 0, 0]}
      position={[0, 0.0051, 0]}
      receiveShadow
      // castShadow
      // geometry={floorGeo}
    >
      <circleBufferGeometry args={[50, 50]}    receiveShadow
      castShadow/>
      {/* <MeshReflectorMaterial
        // color='#0c0c0c'
        color={'#ffcb30'}
        blur={[1000, 1000]}
        resolution={2048}
        mixBlur={1}
        mixStrength={0.3}
        depthScale={10}
        minDepthThreshold={2}
        // metalness={0.51}
        roughnessMap={floorRough}
        displacementMap={floorDisp}
        displacementBias={2}
        displacementScale={0.94}
        // roughness={1}
        normalMap={floorNorm}
        normalScale={2.5}
        // mirror={0.21}
        
      /> */}
      
      <meshStandardMaterial  
      color={'#ffcb30'}
      // roughnessMap={floorRough}
      // metalnessMap={floorDisp}
        // displacementMap={floorDisp}
        // displacementBias={2}
        // displacementScale={0.94}
        // roughness={1}
        // normalMap={floorNorm}
        // normalScale={[-1,1]}
         />
    </mesh>


<mesh 
ref={refPhy}
     rotation={[-Math.PI * 0.5, 0, 0]}
     position={[0, 0.00, 0]}
     receiveShadow
    //  castShadow
    // visible={false}
   >
     <circleBufferGeometry args={[5, 50]} />

     
     <meshBasicMaterial color={"#000000"}  />
   </mesh></>
  )
})

export default Floor