console.log(document.title);

// Una vez lo tenemos, podemos interactuar con él y obtener la información que nos interese, para poder transformarla o mostrarla tal cual.

// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
var gen1 = document.getElementById('gen-1')

gen1 = 'Generasión 1 Pokimon'
document.getElementById('gen-1').innerHTML = gen1;
// Cambia el color de fondo de la primera generación de Pokimon.
document.querySelector('.infocard-list').style.backgroundColor = 'orange'

// Imprime por consola la URL de la página.
let URLactual = window.location
console.log(URLactual)
// Imprime por consola el dominio de la página.
let URLdomain = window.location.host;
console.log(URLdomain)
// Imprime todos los nodos de imagen.
var imagenes = document.getElementsByTagName('img');

console.log(imagenes)
// Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

// const actor = document.getElementsByName('img');
var actor1 = document.querySelectorAll("img")

actor1.forEach(img => img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif");

// Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
const infocard = document.querySelectorAll('.infocard-lg-data .itype.flying');
for(info of infocard){
    info.style.backgroundColor='red'
}
