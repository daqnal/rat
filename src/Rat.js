import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.set(0, 0, 5);
renderer.setClearColor(0x202020);

const controls = new OrbitControls(camera, renderer.domElement);

const loader = new GLTFLoader();

loader.load(
  "/banana.glb",

  function (gltf) {
    // const model = gltf.scene;
    // model.scale.set(1, 1, 1);
    // model.position.set(0, 0, 0);
    // scene.add(model);
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.scale.set(5, 5, 5); // scale it up bc it's tiny af
    scene.add(gltf.scene);

    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7.5);
    scene.add(dirLight);
  },

  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },

  function (error) {
    console.error(error);
  },
);

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// function animate() {
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     renderer.render( scene, camera );
//   }
// renderer.setAnimationLoop( animate );

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
