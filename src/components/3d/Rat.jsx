import { useFrame, useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

export default function Rat({ speed, setSpins, setRatHue, hueSpeed }) {
  const obj = useLoader(OBJLoader, "/rat.obj");
  const rat = React.useRef(obj);
  const prevSpin = React.useRef(0);

  // 2pi radians in a circle
  // Divide by 60 to convert seconds to minutes (rotations per second -> rpm)
  const initSpeedConst = (2 * Math.PI) / 60;
  // Measured in radians
  let rotation = 0;

  useFrame(({ clock }) => {
    // clock.elapsedTime measured in seconds
    rotation = clock.elapsedTime * initSpeedConst * speed;
    rat.current.rotation.y = rotation;

    // Change the hue based upon the progress of the spin
    // If hueSpeed = 1, then it will cycle through every hue once per second
    setRatHue((rotation * hueSpeed) % 1);

    // Update the counter by taking the floor function of the rotation variable
    const currentSpin = Math.floor(rotation / (2 * Math.PI));
    if (currentSpin != prevSpin.current) {
      prevSpin.current = currentSpin;
      setSpins(currentSpin);
    }
  });

  // Return the 3D rat object as a component
  return (
    <primitive
      object={obj}
      ref={rat}
      position={new THREE.Vector3(0, -20, -190)}
    />
  );
}
