import * as THREE from 'three';

export function crearring(){
const ringTexture = new THREE.TextureLoader().load("./imatges/ring.jpg");
const ring= new THREE.Mesh(
  new THREE.RingGeometry(2, 4.4, 64),
  new THREE.MeshStandardMaterial({map: ringTexture, side: THREE.DoubleSide})
);
ring.rotation.x = -0.5*Math.PI;
return ring}

