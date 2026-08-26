import './style.css'
import * as THREE from 'three';
import {crearsol} from "./sol.js";
import {crearmer, crearven, crearter, crearmars, crearjup, crearsat, crearura, crearnep} from "./planets.js";
import {crearring} from "./ring.js";
import {rotacio, translacio} from "./moviments.js"
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { AfterimagePass } from 'three/addons/postprocessing/AfterimagePass.js';

import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 700);

const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#bg"),});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize (window.innerWidth, window.innerHeight);
camera.position.set(0, 50, 80);
renderer.render (scene, camera);

//elements del sistema solar
const sol= crearsol();
scene.add(sol);


const mer= crearmer();
 //. les dimencions son realitat =10.000.000 --> aqui= 1
scene.add(mer);


const ven= crearven();
scene.add(ven);

const terra= crearter();
scene.add(terra);


const mars= crearmars();
scene.add(mars);

const jup= crearjup();
scene.add(jup);

const sat= crearsat();
const ring= crearring();
sat.add(ring);
scene.add(sat)

const ura= crearura();
scene.add(ura);

const nep= crearnep();
scene.add(nep);

const renderPass = new RenderPass( scene, camera );
const composer = new EffectComposer( renderer );
composer.addPass( renderPass );
const resolution = new THREE.Vector2( window.innerWidth, window.innerHeight );
const bloomPass = new UnrealBloomPass( resolution, 1.5, 0.4, 0.85 );
composer.addPass( bloomPass );
const afterimagePass = new AfterimagePass( 0.9 );
composer.addPass( afterimagePass );

const pointLight = new THREE.PointLight(0xfc9601, 1000, 0)
pointLight.position.set(0,0,0)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

const lightHelper= new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(1200,120);
scene.add(lightHelper, )

const controls = new OrbitControls(camera, renderer.domElement);

const spaceTexture = new THREE.MeshStandardMaterial(0x000000);
scene.background= spaceTexture;

const clock= new THREE.Clock();

function animate() 
{requestAnimationFrame(animate); 
     const dia= clock.getElapsedTime();
     const any= dia/365;
    translacio(0.2408, mer, 5.79, 0.2056, any);
    translacio(0.6152, ven, 10.82, 0.0068 , any);
    translacio(1, terra, 14.96, 0.0167, any);
    translacio(1.8808, mars, 22.79, 0.0934, any);
    translacio(11.862, jup, 77.85, 0.0489, any);
    translacio(29.457, sat, 143.4, 0.0565, any);
    translacio(84.017, ura, 287.1, 0.0472, any);
    translacio(164.79, nep, 449.5, 0.0086, any);
    rotacio(sol, 25.4, dia); 
    rotacio(mer, 58.6, dia);
    rotacio(ven, -243, dia);
    rotacio(terra, 0.997, dia);
    rotacio(mars, 1.026, dia);
    rotacio(jup, 0.414, dia);
    rotacio(sat, 0.444, dia);
    rotacio(ura, -0.718, dia);
    rotacio(nep, 0.671, dia);
    controls.update(); 
    renderer.render (scene, camera);}

animate()