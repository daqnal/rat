import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import React from "react";
import { useState } from "react";


export default function Rat({ speed, setSpins, setRatHue, hueSpeed }) {
    const initSpeedConst = (2 * Math.PI);
    const obj = useLoader(OBJLoader, "/rat.obj");
    const rat = React.useRef(obj);
    const prevSpin = React.useRef(0);

    useFrame(({ clock }) => {
        // 
        const rotation = clock.elapsedTime * initSpeedConst * speed;
        rat.current.rotation.y = rotation;

        // Change the hue based upon the progress of the spin
        // If hueSpeed = 1, then it will cycle through every hue once per second
        setRatHue((rotation * hueSpeed) % 1);

        // Update the counter by taking the floor function of the rotation variable
        const currentSpin = Math.floor(rotation / initSpeedConst);
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
