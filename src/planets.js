import * as THREE from 'three';

export function crearplaneta(textura, mida ){
const Texture= new THREE.TextureLoader().load(textura);
const planeta= new THREE.Mesh(
  new THREE.SphereGeometry(mida, 32, 32),
  new THREE.MeshStandardMaterial({map: Texture})
);
return planeta;}

export function crearmer() {
 return crearplaneta("./imatges/mercuri.jpg",0.3);}

 export function crearven() {
 return crearplaneta("./imatges/venus.jpg",0.45);}

 export function crearter() {
 return crearplaneta("./imatges/terra.jpg",0.5);}

 export function crearmars() {
 return crearplaneta("./imatges/mars.jpg",0.35);}

 export function crearjup() {
 return crearplaneta("./imatges/jupiter.jpg",1.5);}

export function crearsat() {
 return crearplaneta("./imatges/saturn.jpg",1.3);}

export function crearura() {
 return crearplaneta("./imatges/uranus.jpg",0.9);}

export function crearnep() {
 return crearplaneta("./imatges/neptu.jpg",0.9);}