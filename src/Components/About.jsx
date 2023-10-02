import { Html, Text, useScroll } from '@react-three/drei';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import typo from './Typo_Round2.json';
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
  const titleRef = useRef(null)
const reactRef = useRef(null)
const nodeRef = useRef(null)
const r3fRef = useRef(null)
const sqlRef = useRef(null)


  useFrame((state) => {  
    
    tl.current.seek(scroll.offset * tl.current.duration());

  
  titleRef.current.fillOpacity = about.current?.titleRef;
  reactRef.current.fillOpacity = about.current?.reactRef;
  nodeRef.current.fillOpacity = about.current?.nodeRef;
  r3fRef.current.fillOpacity = about.current?.r3fRef;
  sqlRef.current.fillOpacity = about.current?.sqlRef;
  // reactRef.current.fillOpacity = about.current.fillOpacity+3;


    textGPRef.current.position.x = about.current.position.x;
    textGPRef.current.position.y = about.current.position.y;
    textGPRef.current.position.z = about.current.position.z;

 
    const time = state.clock.getElapsedTime();

 
  });

  const textBase = `The technos I use`;

  const characters = textBase.split('');
  const characterRefs = characters.map(() => useRef());

  useLayoutEffect(() => {
    // if (opacityRef != undefined && opacityRef.current.position.x < 6) {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '.headxav',
          start: 'top 45%',
          // end: 'top 15%',
          markers: true,
          scrub:1,
        },
      });
      // tl.current.pause();
      // tl.current.timeScale(2)
      // tl.current.fromTo(reactRef.current, {
      //  fillOpacity : 0
      // }, {
      //  fillOpacity : 1,
      //  duration: 1
      // })

    // }
  }, []);



  return (
    <>
  
      <group ref={textGPRef} rotation={[Math.PI * 0.02, -Math.PI * 0.76, 0]}>

                <Text
castShadow
font='./Rajdhani-Medium.ttf'
                ref={titleRef}
            className='hi-intro'
            fontSize={0.3}
            maxWidth={2.5}
            color={'white'}
            // fillOpacity={opacityRef.current.fillOpacity}
            position={[0,1,0]}
          >
       The technos I use
        </Text>
<group position={[0,-0.2,0]}>


        <Text
castShadow
font='./Rajdhani-Medium.ttf'
                 ref={reactRef}
            className='hi-intro'
            fontSize={0.22}
            maxWidth={2.5}

            position={[0,0.7,0]}
          >

     React.js
        </Text>

        <Text
castShadow
font='./Rajdhani-Medium.ttf'
                ref={r3fRef}
            className='hi-intro'
            fontSize={0.22}
            maxWidth={2.5}
            position={[0,0.2,0]}
            fillOpacity={0}
          >
  
     React-Three-Fiber / Three.js
        </Text>      
          <Text
castShadow
font='./Rajdhani-Medium.ttf'
                ref={nodeRef}
            className='hi-intro'
            fontSize={0.22}
            maxWidth={2.5}
            position={[0,-0.4,0]}
            
          >
   
     Node.js
        </Text>
        <Text
castShadow
font='./Rajdhani-SemiBold.ttf'
                ref={sqlRef}
            className='hi-intro'
            fontSize={0.22}
            maxWidth={2.5}
            position={[0,-1,0]}
          >
 
    SQL
        </Text>
        </group>
      </group>
     
    </>
  );
}

export default About;
