const imagen = document.getElementById('imgVar1');
const imagen2 = document.getElementById('imgVar2');
const imagen3 = document.getElementById('imgVar3');

const imagenes = [
  'imgs/empresa-01.jpg',
  'imgs/empresa-04.jpg',
];

const imagenes2 = [
  'imgs/empresa-02.jpg',
  'imgs/empresa-05.jpg',
];

const imagenes3 = [
  'imgs/empresa-03.jpg',
  'imgs/empresa-06.jpg',
];

let indiceActual = 0;

function cambiarImagenSecuencial() {

  indiceActual = (indiceActual + 1) % imagenes.length;

  imagen.style.opacity = 0;
  
  setTimeout(function () {
    imagen.src = imagenes[indiceActual];

    imagen.style.opacity = 1;
  }, 500); 
}
setInterval(cambiarImagenSecuencial, 5000);



let indiceActual2 = 0;

function cambiarImagenSecuencial2() {

  indiceActual2 = (indiceActual2 + 1) % imagenes2.length;

  imagen2.style.opacity = 0;
  
  setTimeout(function () {
    imagen2.src = imagenes2[indiceActual2];

    imagen2.style.opacity = 1;
  }, 500); 
}
setInterval(cambiarImagenSecuencial2, 5000);



let indiceActual3 = 0;

function cambiarImagenSecuencial3() {

  indiceActual3 = (indiceActual3 + 1) % imagenes3.length;

  imagen3.style.opacity = 0;
  
  setTimeout(function () {
    imagen3.src = imagenes3[indiceActual3];

    imagen3.style.opacity = 1;
  }, 500); 
}
setInterval(cambiarImagenSecuencial3, 5000);