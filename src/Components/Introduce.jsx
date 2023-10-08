import { Html, Text, Text3D, useScroll } from '@react-three/drei';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import typo from './Typo_Round2.json';
import gsap from 'gsap';
import { events, useFrame } from '@react-three/fiber';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionConfig } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';
import typo from '/typos/Kids_Now_Regular1.json';
gsap.registerPlugin(ScrollTrigger);

function Introduce({ introduce }) {
  const opacityRef = useRef();
  const posRef = useRef();
  const textGPRef = useRef(null);
  const tl = useRef();
  const scroll = useScroll();
  // console.log(introduce)
  const [textTrig, setTextTrig] = useState(false);

  useFrame((state) => {
    opacityRef.current.fillOpacity = introduce.current.fillOpacity;

    textGPRef.current.position.x = introduce.current.position.x;
    textGPRef.current.position.y = introduce.current.position.y;
    textGPRef.current.position.z = introduce.current.position.z;
// console.log(opacityRef.current.fillOpacity)
    // tl.current.seek(scroll.offset * tl.current.duration());
    const time = state.clock.getElapsedTime();
  });

  const textBase = `Hi, I'm Xavier Yribarren, a 28 years old web developer actually living in Lyon, FR.`;

  const characters = textBase.split('');
  const characterRefs = characters.map(() => useRef());



  return (
    <>
  
      <group ref={textGPRef} rotation={[0, -Math.PI * 0.4, 0]}>

                <Text
// castShadow
font='./Kids_Now.ttf'
                ref={opacityRef}
            className='hi-intro'
            fontSize={0.25}
            maxWidth={1.3}
            color={'black'}
            // fillOpacity={opacityRef.current.fillOpacity}
            // position={characterRefs[index].position}
            // ref={characterRefs[index]}
          >
        {textBase}
        </Text>
{/* 
        <Text3D   ref={opacityRef} font={typo} size={0.15} position={[-0.5,0.72,0]}
    curveSegments={8}
    //       bevelEnabled
          // bevelSize={0.04}
          // bevelThickness={0.1}
          castShadow
          receiveShadow
          
          height={0.04}>
            {textBase}
<meshBasicMaterial color={'black'}/>
        </Text3D> */}
      </group>
     
    </>
  );
}

export default Introduce;
