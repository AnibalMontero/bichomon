console.log(document.title);
// Una vez lo tenemos, podemos interactuar con él y obtener la información que nos interese, para poder transformarla o mostrarla tal cual.

// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.querySelector('#gen-1').innerHTML = 'Generasión 1 Pokimon';
// Cambia el color de fondo de la primera generación de Pokimon.
let primerDiv = document.querySelector('.infocard-list');
primerDiv.style.backgroundColor = '#F07167';

// Imprime por consola la URL de la página.

console.log(document.URL);
// Imprime por consola el dominio de la página.
console.log(document.domain);

// Imprime todos los nodos de imagen.
// console.log(document.querySelectorAll('img'));
let imagenes = document.querySelectorAll('img');
for (let i = 0; i < imagenes.length; i++) {
  console.log(imagenes[i].src);
}
//Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
// let imagenes = document.querySelectorAll('img');
// for (imagen of imagenes) {
//   imagen.setAttribute(
//     'src',
//     'https://media.giphy.com/media/2v170e71aanfi/giphy.gif'
//   );
// }

// Premium:

// Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
const infocard = document.querySelectorAll('.infocard-lg-data .itype.flying');
for (info of infocard) {
  info.style.backgroundColor = '#00AFB9';
}
console.log(infocard);
