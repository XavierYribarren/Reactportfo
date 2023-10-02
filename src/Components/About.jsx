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

function About({ about }) {
  const opacityRef = useRef();

  const textGPRef = useRef(null);
  const tl = useRef();
  const scroll = useScroll();


  useFrame((state) => {
    opacityRef.current.fillOpacity = about.current.fillOpacity;

    textGPRef.current.position.x = about.current.position.x;
    textGPRef.current.position.y = about.current.position.y;
    textGPRef.current.position.z = about.current.position.z;
console.log(opacityRef.current.fillOpacity)
    // tl.current.seek(scroll.offset * tl.current.duration());
    const time = state.clock.getElapsedTime();
  });

  const textBase = `The technos I use`;

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
  
      <group ref={textGPRef} rotation={[0, -Math.PI * 0.76, 0]}>

                <Text
castShadow
font='./Rajdhani-Medium.ttf'
                ref={opacityRef}
            className='hi-intro'
            fontSize={0.3}
            maxWidth={2.5}
            color={'white'}
            // fillOpacity={opacityRef.current.fillOpacity}
            position={[0,1,0]}
          >
       The technos I use
        </Text>
      </group>
     
    </>
  );
}

export default About;
