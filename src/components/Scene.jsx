import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { useLoader } from '@react-three/fiber'

export default function Scene() {

    const obj = useLoader(OBJLoader, "/rat.obj");

    return (
        <div id="canvas-container">
        <Canvas camera={{fov: 50}}>
            <primitive 
                object={obj} 
                position={new THREE.Vector3(0, -20, -190)}
            />
            <ambientLight intensity={0.5} />
            <directionalLight color="white" position={[0, 0, 5]} />
        </Canvas>
        </div>
    )
}
