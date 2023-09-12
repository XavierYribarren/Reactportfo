import { Text } from '@react-three/drei'
import React from 'react'
import typo from '../../public/Typo_Round2.json'
function Introduce({position, rotation}) {
  return (
    <>
    <Text 
    position={position}
    rotation={rotation}
    // overflowWrap='normal'
    font={'typo'} 
    // clipRect={[-100,-100,0,1220]}
    textAlign='center'
    maxWidth={2.1}
    fontSize={0.2}
    // lineHeight={0.8}
    color={'black'}
    // whiteSpace='normal'
    >
    Hi, I'm Xavier Yribarren,
    a 28 years old web developper 
    actually living in Lyon, FR.
    </Text>
    </>
  )
}

export default Introduce