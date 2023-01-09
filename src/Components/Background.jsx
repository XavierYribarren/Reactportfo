import React, { useState } from "react";
import * as THREE from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";


export default function Background(){

    const backPlane = useLoader(TextureLoader, "/Backcity.jpg");


    return(
        <group>
            <mesh position={[2,0,-15]}>
                <planeGeometry args={[60,40]}/>
                <meshStandardMaterial map={backPlane}/>
            </mesh>
            
        </group>
    )
}