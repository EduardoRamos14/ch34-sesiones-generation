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

//----------------------Funciones Autoinvocadas-------------------------------//
/**se autoinvoca, no necesita llamado
 * se peuden definir con funciones anonimas
 */
(function setUp(){
    console.log("Me autoinvoco");
    console.log("Puedo servir como inicializador de tu programa");
})();


//----------------------Funciones Flecha (arrow function)-------------------------------//
/**
 * son similares a las funciones expresadas, pero
 * no requieren la palabra function
 * si tiene una sola instruccion no requiere las llaves{}
 * si la instruccion es el mismo retorno no requiere palabra return
 */


// Area de rectangulo con funcion expresada
const areaRectangulo = function (a, b){
    return (a*b)
}
console.log(areaRectangulo(10,6));

//arrow function
const area = (b,a) => b*a; 
console.log(area(3,2));