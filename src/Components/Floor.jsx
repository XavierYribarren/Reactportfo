import { Cloud, MeshReflectorMaterial, useTexture } from '@react-three/drei'
import React, { forwardRef, useMemo } from 'react'
import { useBox, usePlane } from '@react-three/cannon'
import * as THREE from 'three'

const  Floor = forwardRef((props ,ref) => {
 // const [refPhy] = usePlane(() => ({
  //   rotation:[-Math.PI*0.5,0,0], 
  //   mass: 0, material:{restitution : 0, friction: 1},  type: 'Static', ...props }))


  return (

<>
    <mesh 
ref={ref}
      rotation={[-Math.PI * 0.5, 0, 0]}
      position={[0, 0, 0]}
      receiveShadow
      // castShadow
      // geometry={floorGeo}
    >
      <planeGeometry args={[30, 30, 20, 20]}    receiveShadow
      castShadow/>
      
      <meshStandardMaterial  
      // color={'#ffcb30'}
      color={"#e69441"}
         />
    </mesh>


<mesh 
// ref={refPhy}
     rotation={[-Math.PI * 0.5, 0, 0]}

     receiveShadow
    //  castShadow
    // visible={false}
   >

   </mesh></>
  )
})

export default Floor