import { Html, Text, useScroll } from '@react-three/drei';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import typo from '../../public/Typo_Round2.json';
import gsap from 'gsap';
import { events, useFrame } from '@react-three/fiber';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionConfig } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

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
console.log(opacityRef.current.fillOpacity)
    // tl.current.seek(scroll.offset * tl.current.duration());
    const time = state.clock.getElapsedTime();
  });

  const textBase = `Hi, I'm Xavier Yribarren, a 28 years old web developer actually living in Lyon, FR.`;

  const characters = textBase.split('');
  const characterRefs = characters.map(() => useRef());

  // useLayoutEffect(() => {
  //   // if (opacityRef != undefined && opacityRef.current.position.x < 6) {
  //     tl.current = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: '.headxav',
  //         start: 'top 40%',
  //         // end: 'top 15%',
  //         markers: true,
  //         scrub:1,
  //       },
  //     });
  //     tl.current.pause();
  //     // tl.current.timeScale(2)
  //     tl.current.fromTo(opacityRef.current, {
  //      fillOpacity : 0
  //     }, {
  //      fillOpacity : 1,
  //      duration: 10
  //     })

  //   // }
  // }, []);

  return (
    <>
  
      <group ref={textGPRef} rotation={[0, -Math.PI * 0.4, 0]}>

                <Text

                ref={opacityRef}
            className='hi-intro'
            fontSize={0.2}
            maxWidth={1.3}
            color={'white'}
            // fillOpacity={opacityRef.current.fillOpacity}
            // position={characterRefs[index].position}
            // ref={characterRefs[index]}
          >
        {textBase}
        </Text>
      </group>
     
    </>
  );
}

export default Introduce;
