import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import Rat from './Rat'

export default function Scene() {

    return (
        <div id="canvas-container">
        <Canvas camera={{fov: 50}}>
            <Rat />
            <ambientLight intensity={0.5} />
            <directionalLight color="white" position={[0, 0, 5]} />
        </Canvas>
        </div>
    )
}
