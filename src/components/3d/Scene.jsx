import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react'
import Rat from './Rat.jsx';

export default function Scene({ speed, spins, setSpins, hueSpeed }) {
    const [ratHue, setRatHue] = useState(0);
    const ratColor = new THREE.Color().setHSL(ratHue, 1, 0.5);
    return (

        <div id="canvas-container">
            <Canvas camera={{fov: 50}}>
                <Rat speed={speed} setSpins={setSpins} setRatHue={setRatHue} hueSpeed={hueSpeed} />
                <ambientLight intensity={0.25} />
                <directionalLight color={ratColor} position={[0, 0, 5]} />
            </Canvas>
        </div>
    )
}
