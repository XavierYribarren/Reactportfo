import React, { useLayoutEffect, useRef } from "react";
import { Html, MeshDistortMaterial, MeshWobbleMaterial, useGLTF, useScroll } from "@react-three/drei";
import * as THREE from 'three'
import { useFrame } from "react-three-fiber";
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



export function ReactLogo(props) {
  const { nodes, materials } = useGLTF("/React3D.glb");
const tl = useRef()
const rings = useRef()
const core = useRef()
const scroll = useScroll();
console.log(props)

const ringMat = new THREE.MeshStandardMaterial({
color: "#0cd2ec"
})

const coreMat = new THREE.MeshStandardMaterial({
  color: "#0cd2ec",
  roughness : 0.2,
  metalness : 1
})
 const random = Math.random()
useFrame((state, delta) => {
  tl.current.seek(scroll.offset * tl.current.duration())
  const time = state.clock.getElapsedTime()
 

// rings.current.scale.x = ringScaleM
// rings.current.scale.y = ringScaleM
// rings.current.scale.z = ringScaleM
rings.current.rotation.x += 0.01
rings.current.rotation.y += -0.01

// console.log(state.clock.elapsedTime);
core.current.scale.x =  1.5+(Math.sin(time*4)*.5) 
core.current.scale.y = 1.5+(Math.sin(time*4)*.5)
core.current.scale.z = 1.5+(Math.sin(time*4)*.5)
})

const visibility = props.visibility
const ringScaleM = props.ringScaleM
// let ringScaleM = 0.71


  tl.current = gsap.timeline({  
    scrollTrigger: {
    trigger: '.headxav',
    // pin: true,   // pin the trigger element while active
    // start: "top 60%",
    // end: "70%",// when the top of the trigger hits the top of the viewport
    // // end: "+=500", // end after scrolling 500px beyond the start
    markers : true,
    scrub: 0.1, }
  })
useLayoutEffect(() => {

tl.current.pause()
// tl.current.play()
// tl.current.fromTo(rings.current.scale, {x: 0,y :0, z : 0}, {
//   duration : 0.05,
//   x : 1,
//   y:1,
//   z : 1,
// }, "+=0.2")
})




  return (
    <group {...props} dispose={null}>

      <mesh
      ref={core}
      
        castShadow
        receiveShadow
        // geometry={nodes.Sphere.geometry}
        // material={coreMat}
      >
        <sphereGeometry args={[0.05,36,36,10]}/>
<MeshWobbleMaterial factor={10} speed={2} roughness={0} metalness={1} color={"#0cd2ec"}/>
      </mesh>
      <mesh
      ref={rings}
      // scale={ringScaleM}
        // castShadow
        receiveShadow
        geometry={nodes.Torus002.geometry}
        scale={0.8}
        material={ringMat}
      />
    </group>
  );
}

useGLTF.preload("/React3D.glb");