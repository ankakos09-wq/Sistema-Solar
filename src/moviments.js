import * as THREE from 'three';
export function rotacio(nom, perioderotacio, any){
    const rotacio= (any/perioderotacio)*Math.PI*2;
    nom.rotation.y=rotacio;
}
export function translacio (periodetranslacio, nom,semieixM, exentri, any){
    const angle= (any/(-periodetranslacio))* Math.PI* 2;
    const r = (semieixM * (1 - exentri * exentri)) / (1 + exentri * Math.cos(angle));
    nom.position.x= Math.cos(angle)*r;
    nom.position.z= Math.sin(angle)*r;
}