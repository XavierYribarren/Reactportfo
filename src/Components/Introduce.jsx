import { Text, useScroll } from '@react-three/drei'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import typo from '../../public/Typo_Round2.json'
import gsap from "gsap";
import { useFrame } from 'react-three-fiber';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion-3d";

function Introduce({position, rotation}) {
const tl = useRef();

const scroll = useScroll()
const [model, setModel] = useState(false)
const ref = useRef()


//  console.log(tl.current.scrollTrigger.scroll.v)
let scrollX;



useFrame(() => {

  // console.log(scroll.offset)
})

if(scroll.offset > 0.5){
  setModel(true)
}

  return (
    <>


{/* <MotionConfig
              transition={{
                type: "spring",
                duration: 2,
                ease: "easeInOut",
                repeat: 1,
                repeatDelay: 1,
              }}
            >
              <motion.group animate={scroll.offset < 0.1 ? "es335" : "tele"}>
                <motion.group
                  variants={{
                    es335: {     x: 1,
                      scale: 0, },
                    tele: {
                      x: 1,
                      scale: 1,
                    },
                  }}
                >   */}
                <Text 
    // position={position}
    position={[4,1,1]}
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
           
                {/* </motion.group>

              
              </motion.group>
            </MotionConfig>
   */}
  
    </>
  )
}

export default Introduce