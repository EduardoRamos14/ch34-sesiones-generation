console.log("Sesion JS02 - funciones");

//----------------------Declaracion de funciones-------------------------------//

/*
Una de las caracteristicas de las funciones es que tienen hosting(pueden ser llamadas antes de ser declaradas)*/ 

multiplicar(5,3);//15


/**comentario de funcion
 * 
 * @param {number} a valor multiplicando
 * @param {number} b valor multiplicador
 */
function multiplicar(a, b){
    const resultado = a*b;
    console.log(resultado);
}

function divide(dividendo, divisor){
    return dividendo/divisor;
}

console.log(divide(5,2));//2.5
console.log(divide(5,"2"));//2.5
console.log(divide("5","2"));//2.5
console.log(divide("5 0","2"));//NaN

//----------------------Funciones expresadas-------------------------------//
/*
Funciones que son declaradas dentro de la asignacion de una variable.
Estas funciones pueden ser anonimas(no tienen nombre)

Las funciones expresadas no tienen hosting, por lo que no se carga en memoria hasta que se utilice
*/

const sum = function sumaDeEnteros(a, b){
    return a + b;
};
console.log(sum(6,20));


const potencia = function (base, potencia){ //funcion anonima (no tiene nombre)
    return base ** potencia;
};
console.log(potencia(2,3));

