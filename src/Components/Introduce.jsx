import { Html, Text, useScroll } from '@react-three/drei';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import typo from '../../public/Typo_Round2.json';
import gsap from 'gsap';
import { events, useFrame } from '@react-three/fiber';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionConfig } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';
import AnimatedText from './AnimatedText';

gsap.registerPlugin(ScrollTrigger);

function Introduce({ introduce }) {
  const opacityRef = useRef();
  const posRef = useRef();
  const textRef = useRef(null);
  const tl = useRef();
  const scroll = useScroll();
  // console.log(introduce)
  const [textTrig, setTextTrig] = useState(false);

  useFrame((state) => {
    opacityRef.current.fillOpacity = introduce.current.fillOpacity;

    opacityRef.current.position.x = introduce.current.position.x;
    opacityRef.current.position.y = introduce.current.position.y;
    opacityRef.current.position.z = introduce.current.position.z;

    tl.current.seek(scroll.offset * tl.current.duration());
    const time = state.clock.getElapsedTime();
  });

  const textBase = `Hi, I'm Xavier Yribarren, a 28 years old web developer actually living in Lyon, FR.`;

  const characters = textBase.split('');
  const characterRefs = characters.map(() => useRef());

  useLayoutEffect(() => {
    if (opacityRef != undefined && opacityRef.current.position.x < 6) {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '.headxav',
          start: 'top 10%',
          // end: 'top 15%',
          markers: true,
          scrub: 0.01,
        },
      });
      tl.current.play();
      // tl.current.timeScale(2)

      characters.forEach((char, index) => {
        tl.current.timeScale(2);
        tl.current.fromTo(
          characterRefs[index].current.position,
          { x: 1 * index, y: -(1 + index), z: -(index) },
          { x: index / 12, y: 0, z: 0, duration: 0.1*scroll.offset },
          '<0.15'
        );
      });
    }
  }, [characters, characterRefs]);

  return (
    <>
      {/* <Html     > */}
      <group ref={opacityRef} rotation={[0, -Math.PI * 0.4, 0]}>
        {characters.map((char, index) => (
          <Text
            className='hi-intro'
            fontSize={0.2}
            maxWidth={0.0003}
            color={'white'}
            fillOpacity={opacityRef.fillOpacity}
            position={characterRefs[index].position}
            ref={characterRefs[index]}
          >
            {/* <div key={index}> */}

            {char}
            {/* </div> */}
          </Text>
        ))}
      </group>
      {/* </Html> */}
    </>
  );
}

export default Introduce;
