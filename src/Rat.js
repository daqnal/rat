import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.set(0, 0, 50);
renderer.setClearColor(0x202020);

// const controls = new OrbitControls(camera, renderer.domElement);

const loader = new OBJLoader();

let rat;
loader.load(
  "/rat.obj",

  function (obj) {
    rat = obj;
    rat.position.set(0, -20, -190);
    scene.add(obj);

    const light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);

    const dirLight = new THREE.DirectionalLight(0xefefef, 0.5);
    scene.add(dirLight);
  },

  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },

  function (error) {
    console.error(error);
  },
);

function animate() {
  requestAnimationFrame(animate);

  if (rat) {
    rat.rotation.y += 0.05;
  }

  renderer.render(scene, camera);
}
animate();
