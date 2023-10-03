import { MeshTransmissionMaterial, MeshWobbleMaterial, Text3D,  Cloud } from '@react-three/drei'
import React, { forwardRef, useRef } from 'react'
import typo from './Typo_Round2.json';
import { useBox } from '@react-three/cannon';
import { MeshPhysicalMaterial, MeshStandardMaterial } from 'three';
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing';
import { BlurPass, Resizer, KernelSize } from 'postprocessing'

 const ProjectsShow = forwardRef(function (props){
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0] , allowSleep:true}))

  const spot = props.light
const seed = 10
  return (
    <>
    
    <EffectComposer>

<SelectiveBloom
    lights={[spot]} // ⚠️ REQUIRED! all relevant lights
    selection={[ref]} // selection of objects that will have bloom effect
    selectionLayer={10} // selection layer
    intensity={1.0} // The bloom intensity.
    // blurPass={undefined} // A blur pass.
    width={Resizer.AUTO_SIZE} // render width
    height={Resizer.AUTO_SIZE} // render height
    kernelSize={KernelSize.LARGE} // blur kernel size
    luminanceThreshold={0.09} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.005} // smoothness of the luminance threshold. Range is [0, 1]
    />
    </EffectComposer>
  
    <mesh ref={ref} >
     {/* <group rotation={[0, Math.PI*0.8,0]} position={[18.8,10.4,-24.2]} >
<Cloud seed={1} position={[10, 0, 0]} fade={20}   speed={0.31} growth={2} segments={20} volume={18} opacity={1} bounds={[14, 13, 11]}/>
    <Cloud seed={1} fade={10}  speed={0.2} growth={4} volume={10} opacity={1} bounds={[14, 13, 11]}/>
    <pointLight position={[6, 10, 0]} intensity={12.5} color="blue" distance={15}/>

     </group> */}


     
  <Text3D font={typo} size={0.4} 
  curveSegments={62}
  //       bevelEnabled
  bevelSize={0.04}
  // bevelThickness={0.1}
  castShadow
  receiveShadow
  
  height={0.15}>
    PROJECTS
    <meshPhysicalMaterial
      // color={'#f0f'} 
      // roughness={0.2}
      // // metalness={1}
      // reflectivity={1}
      transparent
      // // transmission={0.99}
      // iridescence={1}
      // iridescenceIOR={1.5}
     emissive={"#ff00ff"}
     emissiveIntensity={1}
     metalness={0.4}
     roughness={0.8}
      transmission={0.92}

   


      />
  </Text3D>

 
      </mesh>  </>
  )
})

export default ProjectsShow