import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { useState } from "react";


export default function Rat({ speed, setSpins }) {
    const initSpeedConst = 1;
    const obj = useLoader(OBJLoader, "/rat.obj");
    const rat = React.useRef(obj);
    const prevSpin = React.useRef(0);

    useFrame(({ clock }) => {
        const rotation = clock.elapsedTime * initSpeedConst * speed;
        rat.current.rotation.y = rotation;

        const currentSpin = Math.floor(rotation / (2 * Math.PI));
        if (currentSpin > prevSpin.current) {
            prevSpin.current = currentSpin;
            setSpins(currentSpin);
        }
        
    });

    return (
        <primitive
        object={obj}
        ref={rat}
        position={new THREE.Vector3(0, -20, -190)}
        />
    );
}
