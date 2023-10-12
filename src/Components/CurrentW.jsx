import { Text3D } from '@react-three/drei';
import React from 'react';
import typo from '/typos/Kids_Now_Regular1.json';
export const CurrentW = () => {
  return (
    <Text3D font={typo} size={0.15} position={[-0.5,0.72,0]}
    curveSegments={8}
    //       bevelEnabled
          // bevelSize={0.04}
          // bevelThickness={0.1}
          castShadow
          receiveShadow
          
          height={0.04}
          >
      Current work
      <meshStandardMaterial
      color={'#000'} 
      roughness={.1}
      metalness={.31}
      transparent
   specularIntensity={1}


      />
    </Text3D>
  );
}

// export default CurrentW;
