// - Tu nombre (string)

// - Tu edad (number)

// - ¿Eres desarrollador? (boolean)

// - Tu fecha de nacimiento (Date)

// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

const nombre = "Octavio Fabris";
let edad = 19;
let desarrollador = false;
const nacimiento = new Date(2003, 4, 31);
const libro = {
  titulo: "Cuentos de arboles",
  autor: "Mario Borges",
  fecha: 31 / 03 / 2003,
  url: "https://www.google.com/search?q=mario+bo",
};
const Datos = new Array(nombre, edad, desarrollador, nacimiento, libro);

console.log(nombre);
console.log(edad);
console.log(desarrollador);
console.log(nacimiento);
console.log(libro);
console.log(Datos);

const listax = [
  "Octavio Fabris",
  19,
  false,
  new Date(2003, 4, 31),
  {
    titulo: "Hola pepito",
    autor: "Jose perex",
    fecha: new Date(1971, 5, 12),
    url: "https://github.com/Open-Bootcamp/ResolucionEjercicios/blob/main/JavaScript/02-Sintaxis/sintaxis.js",
  },
];

console.log(listax);
