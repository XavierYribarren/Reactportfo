import { Text, useScroll } from '@react-three/drei'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import typo from '../../public/Typo_Round2.json'
import gsap from "gsap";
import { useFrame } from '@react-three/fiber';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion-3d";
import * as THREE from 'three'

function Introduce({introduce}) {

const opacityRef = useRef()
const posRef = useRef()

// console.log(introduce)

useFrame(() => {
opacityRef.current.fillOpacity = introduce.current.fillOpacity

opacityRef.current.position.x= introduce.current.position.x
opacityRef.current.position.y= introduce.current.position.y
opacityRef.current.position.z= introduce.current.position.z

})

  return (
    <>


     
<Text 
ref={opacityRef}
        // className='pipi'
        fontSize={0.2}
        // position={opacityRef.current.position}
        rotation={[0,-Math.PI*0.4,0]}
        // fillOpacity={0}
        maxWidth={2.3}
        color={"white"}
        >

 Hi, I'm Xavier Yribarren,
    a 28 years old web developper 
    actually living in Lyon, FR.
    
        </Text>
  
    </>
  )
}

export default Introduce