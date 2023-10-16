import { Html, Preload, Text, Text3D, useFont, useScroll, useTexture } from '@react-three/drei';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import typo from '../../public/Kids_Now_Regular.json';
import gsap from 'gsap';
import { events, useFrame } from '@react-three/fiber';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionConfig } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

 export const About = ({ about }) => {
  const opacityRef = useRef();
  const textGPRef = useRef(null);
  const tl = useRef();
  const scroll = useScroll();
  const titleRef = useRef(null)
  const titleMostRef = useRef(null)
const reactRef = useRef(null)
const nodeRef = useRef(null)
const r3fRef = useRef(null)
const sqlRef = useRef(null)

// const typo = useFont('../../public/Kids_Now.ttf')

  useFrame(() => {  
    
    // tl.current.seek(scroll.offset * tl.current.duration());
    if(about.current.titleRef < 0.1) { textGPRef.current.visible = false } else {textGPRef.current.visible = true}
  
  titleRef.current.fillOpacity = about.current?.titleRef;
  titleMostRef.current.fillOpacity = about.current?.titleRef;
  reactRef.current.fillOpacity = about.current?.reactRef;
  nodeRef.current.fillOpacity = about.current?.nodeRef;
  r3fRef.current.fillOpacity = about.current?.r3fRef;
  sqlRef.current.fillOpacity = about.current?.sqlRef;
  // reactRef.current.fillOpacity = about.current.fillOpacity+3;


    textGPRef.current.position.x = about.current.position.x;
    textGPRef.current.position.y = about.current.position.y;
    textGPRef.current.position.z = about.current.position.z;

 
   

 
  });

  const textBase = `The technos I use`;

  const characters = textBase.split('');
  const characterRefs = characters.map(() => useRef());

  useLayoutEffect(() => {

      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '.headxav',
          start: 'top 45%',
          scrub:1,
        },
      });

  }, []);



  return (
    <>

      <group ref={textGPRef} rotation={[Math.PI * 0.028, -Math.PI * 0.8, 0]} >

                <Text characters="abcdefghijklmnopqrstuvwxyz0123456789!"
castShadow
font= './Kids_Now.ttf'
                ref={titleRef}
            className='hi-intro'
            fontSize={0.5}
            maxWidth={2.95}
            fontWeight='bold'
            strokeColor={"#000"}
            strokeOpacity={1}
            strokeWidth={"0.5%"}
            outlineColor={'#fff'}
            outlineWidth={'12%'}
            outlineBlur={'30%'}
            outlineOpacity={'0.4'}
            color={'black'}
            // fillOpacity={opacityRef.current.fillOpacity}
            position={[0,1,0]}
          >
       The technos I use
       <Text castShadow characters="abcdefghijklmnopqrstuvwxyz0123456789!"
font= './Kids_Now.ttf'
                ref={titleMostRef}
            className='hi-intro'
            fontSize={0.18}
            maxWidth={2.95}
            color={'#909090'}
            fontWeight='bold'
            strokeColor={"#000"}
            strokeOpacity={1}
            strokeWidth={"0.5%"}
            outlineColor={'#fff'}
            outlineWidth={'12%'}
            outlineBlur={'30%'}
            outlineOpacity={'0.4'}
      
            // fillOpacity={opacityRef.current.fillOpacity}
            position={[0,-0.25,0]}>(the most)</Text>
        </Text>
<group position={[0,-0.2,0]}>


        <Text characters="abcdefghijklmnopqrstuvwxyz0123456789!"
castShadow
font='./Kids_Now.ttf'
                 ref={reactRef}
            className='hi-intro'
            fontSize={0.3}
            maxWidth={2.5}
            
            fontWeight='bold'
            strokeColor={"#000"}
            strokeOpacity={1}
            strokeWidth={"0.5%"}
            outlineColor={'#fff'}
            outlineWidth={'12%'}
            outlineBlur={'30%'}
            outlineOpacity={'0.4'}
            color={'black'}
            position={[0,0.6,0]}
          >

     React.js
        </Text>

        <Text characters="abcdefghijklmnopqrstuvwxyz0123456789!"
castShadow
font='./Kids_Now.ttf'
                ref={r3fRef}
            className='hi-intro'
            fontSize={0.3}
            maxWidth={2.9}
            position={[0,0.2,0]}
            fillOpacity={0}
            fontWeight='bold'
            strokeColor={"#000"}
            strokeOpacity={1}
            strokeWidth={"0.5%"}
            outlineColor={'#fff'}
            outlineWidth={'12%'}
            outlineBlur={'30%'}
            outlineOpacity={'0.4'}
            color={'black'}
          >
  
     React-Three-Fiber / Three.js
        </Text>      
          <Text characters="abcdefghijklmnopqrstuvwxyz0123456789!"
castShadow
font='./Kids_Now.ttf'
                ref={nodeRef}
            className='hi-intro'
            fontSize={0.3}
            maxWidth={2.5}
            position={[0,-0.2,0]}
            fontWeight='bold'
            strokeColor={"#000"}
            strokeOpacity={1}
            strokeWidth={"0.5%"}
            outlineColor={'#fff'}
            outlineWidth={'12%'}
            outlineBlur={'30%'}
            outlineOpacity={'0.4'}
            color={'black'}
            
          >
   
     Node.js
        </Text>
        <Text characters="abcdefghijklmnopqrstuvwxyz0123456789!"
castShadow
font='./Kids_Now.ttf'
                ref={sqlRef}
            className='hi-intro'
            fontSize={0.3}
            maxWidth={2.5}
            position={[0,-0.6,0]}
            fontWeight='bold'
            strokeColor={"#000"}
            strokeOpacity={1}
            strokeWidth={"0.5%"}
            outlineColor={'#fff'}
            outlineWidth={'12%'}
            outlineBlur={'30%'}
            outlineOpacity={'0.4'}
            color={'black'}
          
          >
 
    SQL
        </Text>
        </group>
      </group>
     
    </>
  );
}


