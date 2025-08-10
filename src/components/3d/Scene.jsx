import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import Rat from './Rat.jsx';

export default function Scene({ speed, spins, setSpins }) {

    return (
        <div id="canvas-container">
            <Canvas camera={{fov: 50}}>
                <Rat speed={speed} setSpins={setSpins}/>
                <ambientLight intensity={0.5} />
                <directionalLight color="white" position={[0, 0, 5]} />
            </Canvas>
        </div>
    )
}
