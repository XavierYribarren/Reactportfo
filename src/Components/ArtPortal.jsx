import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { useCursor, MeshPortalMaterial, CameraControls, Gltf, Text, Html, PerspectiveCamera } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing, geometry } from 'maath'
import { suspend } from 'suspend-react'
import ArtRoom from './ArtRoom'

extend(geometry)
const regular = ''
const medium = ''

const ArtPortal = () => {
  const [, params] = useRoute('/item/:id')
const goBack =  ` < back `
  return(
  // <Canvas camera={{ fov: 75, position: [0, 0, 20] }} eventSource={document.getElementById('root')} eventPrefix="client">
  <>
 
  <color attach="background"  />      {params ?  <Html transform={false} fullscreen >
          <div style={{ position: 'absolute', width: '100vw',  height: '100vh' ,top: '-50vh', left: '-50vw' }}>

         <a style={{zIndex: '2500', position: 'sticky', top: '-48vh', left:'-48vw', fontSize: '13px' }} href="#" onClick={() => setLocation('/')}>
       {goBack}
        </a>
          </div>
         </Html> : ''}
    <Frame id="01" name={`pick\nles`} author="Omar Faruq Tawsif"  position={[-0.051, 0.4, -0.58]} rotation={[0, -0.02, 0]}>
      {/* <Gltf src="pickles_3d_version_of_hyuna_lees_illustration-transformed.glb" scale={18} position={[0, -5, 0]}>

      </Gltf> */}
      <group rotation={[0,-0.2,0]}>

      <ArtRoom params={params} />
      </group>
    </Frame>
    {/* <Frame id="02" name="tea" author="Omar Faruq Tawsif">
      <Gltf src="fiesta_tea-transformed.glb" position={[0, -2, -3]} />
    </Frame>
    <Frame id="03" name="still" author="Omar Faruq Tawsif" bg="#d1d1ca" position={[1.15, 0, 0]} rotation={[0, -0.5, 0]}>
      <Gltf src="still_life_based_on_heathers_artwork-transformed.glb" scale={12} position={[0, -0.8, -4]} />
    </Frame> */}
 
  </>
  // </Canvas>
)}

function Frame({ id, name, author, bg, width = 1.25, height = 2.2, children, ...props }) {
  const portal = useRef()
  const [loc, setLocation] = useLocation()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame((state, dt) => easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.2, dt))
  return (
    <group {...props}>
      {/* <Text  fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
        {name}
      </Text>
   
        
      <Text  fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]} material-toneMapped={false}>
        /{id}
      </Text>
      <Text  fontSize={0.04} anchorX="right" position={[0.0, -0.677, 0.01]} material-toneMapped={false}>
        {author}
      </Text> */}
      <mesh 
      receiveShadow
      // position={[2,0,10]}
      name={id} onDoubleClick={(e) => (e.stopPropagation(), setLocation('/item/' + e.object.name))} onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
        <roundedPlaneGeometry args={[width, height, 0]}  />
        <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
          <color attach="background" args={[bg]} />
         {params ?        <Html>
          <div style={{ position: 'fixed', width: '100vw',  height: '100vh' ,top: '-50vh', left: '-50vw' }}>

         <a style={{zIndex: '2500', position: 'fixed', top: '-48vh', left:'-48vw', fontSize: '13px' }} href="#" onClick={() => setLocation('/')}>
          {params ? '< back' : 'double click to enter portal'}
        </a>
          </div>
         </Html> : ''}
         {params ? 
         <Rig/>      : ' '}
          {children}
        </MeshPortalMaterial> 
     
      </mesh>  
      
    </group>
  )
}



function Rig({ position = new THREE.Vector3(0, 0, 0), focus = new THREE.Vector3(0, 31, 0) }) {
  const { controls, scene } = useThree()
  const [, params] = useRoute('/item/:id')
  const camControls = useRef()
  useEffect(() => {
    const active = scene.getObjectByName(params?.id)
    if (active) {
      active.parent.localToWorld(position.set(0, -5, 0))
      active.parent.localToWorld(focus.set(0, 5, 0))
    }
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), !true)
    controls?.removeEventListener("cameraControls.mouseButtons.wheel", CameraControls.ACTION.DOLLY, CameraControls.ACTION.ZOOM)
  })


  return <CameraControls 
ref={camControls}
   truck={false}
  //  zoom={false}
  // dolly={0}
  
// removeEventListener={"mouseButtons.wheel"}
  // setPosition={[0,2,0]}
    minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
}

export default ArtPortal