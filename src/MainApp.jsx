import './App.css';
import React, { startTransition, useLayoutEffect, useRef, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import Face from './Components/Face';
import RingLoader from 'react-spinners/RingLoader';
import HeroPage from './Components/HeroPage';
import { SkinnedMesh } from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useScroll, animated, useSpring } from '@react-spring/web'

function MainApp() {
  const [loaded, setLoaded] = useState(true);

const containerRef = useRef()

  const [textStyles, textApi] = useSpring(() => ({
    y: '100%',
  }))
  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.7) {
        textApi.start({ y: '0' })
      } else {
        textApi.start({ y: '100%' })
      }
    },
    default: {
      immediate: true,
    },
  })


  const X_LINES = 40

  const PAGE_COUNT = 5
  
  const INITIAL_WIDTH = 20

  // useLayoutEffect(() => {
  //   // const el = introduce.current;
  //   ScrollTrigger.create({
  //     // horizontal: true,
  //     trigger: ".oui",
  //     // start: 'right top', 
  //     //  end: 'right 80%',  
  //     // end: "+=300",
  //     markers: true,      
  //     // scrub: true,
  //     //  scroller: '.main'
     
  //   }),
  // //   // gsap.fromTo(
  // //   //  "#introduce",
  // //   //  {
  // //   //   opacity: 0,
  // //   //   scale: 0.2,
  // //   //   y: -20
  // //   // },
  // //   // {
  // //   //   opacity: 1,
  // //   //   y: 0,
  // //   //   scale: 4,
  // //   //   duration: 1,
  // //   //   ease: "none",
        
  // //   //   }
  // //   // );
  
  //   gsap.to(
  //     '.oui',
  //     { rotation:0},
  //     {
  //     //  scaleX:10,
  //       rotation: 180,
  //       duration: 1,
  //       // scrollTrigger: {
  //         trigger: '.oui',
  //       //   start: 'top top',         
  //       //    scroller: '.headxav'
         
  //       // },
  //     }
  //   );

  // //   console.log(el)
  // });

  return (
    <div className='main'>     
    
      {/* <Parallax pages={8} style={{ top: '0', left: '0' }}> */}
         {/* <ParallaxLayer offset={0} speed={0} factor={1} sticky={{start :0, end : 8}} style={{ position: 'relative'}}>    */}
         {/* <div> */}
   <HeroPage />

     
 {/* <ParallaxLayer offset={1} speed={0.51} factor={1.5}> */}

        {/* </ParallaxLayer> */}
   
      {/* </div> */}
 {/* </ParallaxLayer> */}

        {/* <div > */}
       
      {/* </Parallax>  */}
    </div>
  );
}

export default MainApp;
