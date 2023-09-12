import { Text3D } from '@react-three/drei';
import React from 'react';

function CurrentW() {
  return (
    <Text3D font={'/Typo_Round2.json'} size={0.08} position={[-0.35,0.72,0]}
    // // curveSegments={32}
    //       bevelEnabled
          // bevelSize={0.04}
          // bevelThickness={0.1}
          castShadow
          receiveShadow
          
          height={0.015}
          >
      Current work
      <meshStandardMaterial
      color={'#000'} 
      roughness={1}
      metalness={0}
      />
    </Text3D>
  );
}

export default CurrentW;
