import * as THREE from 'three';

export function crearsol(){
const solTexture= new THREE.TextureLoader().load("./imatges/sol.jpg");
const sol= new THREE.Mesh(
  new THREE.SphereGeometry(4, 32, 32),
  new THREE.MeshBasicMaterial({map: solTexture})
);
return sol;}