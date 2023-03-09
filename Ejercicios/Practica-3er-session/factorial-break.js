let dato = 10;
var resultado = 1;

while (true) {
  resultado = resultado * dato;
  dato--;
  if (dato === 1) break;
}
console.log(`El factorial del numero ingresado es ${resultado}`);
