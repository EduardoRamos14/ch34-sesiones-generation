
let array = [1, 2, 3, 4];

function calcularSumaProducto(array) {
  let suma = array.reduce((total, numero) => total + numero, 0);
  let product = array.reduce((total, numero) => total * numero, 1);
  console.log(`La suma es ${suma}. 
  El producto es ${product}.`);
}
calcularSumaProducto(array);