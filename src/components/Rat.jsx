import * as THREE from 'three'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { useLoader } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import React from 'react'

export default function Rat() {

    const obj = useLoader(OBJLoader, "/rat.obj");
    const rat = React.useRef(obj);

    useFrame(({ clock }) => {
        rat.current.rotation.y = clock.elapsedTime * 1.5;
        // console.log(clock.elapsedTime);
    }) 

    return (
        <primitive 
            object={obj} 
            ref={rat}
            position={new THREE.Vector3(0, -20, -190)}
        />
    )
}