console.log("Sesion JS02 - funciones");

// ---------------- Función declarada, funciones definidas-------------
//    ( function declaration, function statement)
/*
  Una de las características de las funcioens declaradas
  es que tienen hoisting (pueden ser llamadas antes de su declaració).
*/

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

(function inicializacion(config){
  console.log("Me inicio con la configuracion " + config)
})("Api de prueba");

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



//----------------------Parametros Default-------------------------------//
const saludoGeneration= (persona="persona", cohorte="cohorte") => `Hola ${persona}, que gusto que estes en la corte ${cohorte}`;

console.log(saludoGeneration("Jhoseph", "Ch-34"));
console.log(saludoGeneration());


//----------------------Rest Parametros-------------------------------//
/**
 * Nos permite representar una serie de valores indefinidos en los argumentos
 * estos se presentan como un array
 * el rest parameter debe estar al final de la lista de parametros
 */


/*
const sumatoriaVariosNumeros = ( a , b , ...manyMoreArgs) => {
  let suma;
  suma = a + b;
  suma += manyMoreArgs.reduce(  (accumulator, currentValue)=> accumulator+currentValue, 0 );
  return suma;
}
*/

//----------------------Rest Parametros-------------------------------//
/**
 * Funcion que se pasa a otra funcion como argumento, para luego invocarla para completar algun tipo de rutina o accion
 */

const sumatoriaVariosNumeros = (a,b,...manyMoreArgs) => {
  let suma;
  suma = a+b;

  for (let i = 0; i < manyMoreArgs.length; i++) {
    console.log(manyMoreArgs[i]);
    suma += manyMoreArgs[i];
  }

  return suma;
}

console.log(`Sumatoria de dos numeros 4 + 6 = ${sumatoriaVariosNumeros(4,6)}`);
console.log(`Sumatoria de dos numeros es = ${sumatoriaVariosNumeros(4,6,3,4,6,4,5)}`);





// ---------------- Funciones de callback -------------
/*
  Función que se pasa a otra función como argumento, para
  luego invocarla para complementar algún tipo de rutina o acción.

Realizar 3 funciones.
  1 función que reciba un mensaje e imprima en consola
  1 función que reciba un mensaje e imprima en alert
  1 función que reciba un mensaje e imprima en el DOM, en H2
*/

const printToConsole= (mensaje)=>console.log (mensaje);
printToConsole('printToConsole');

const printToAlert= (mensaje)=>alert(mensaje);
//printToAlert('printToAlert');


const getH2Message = ()=> document.getElementById("mensaje");//funcion que obtiene el id de html
const printToH2= (mensaje)=>{
  const refH2 = getH2Message();
  refH2.innerHTML = mensaje;
}
printToH2('printToH2');

//----------------------ejercicio-------------------------------//

let numeros = [5, 10, 15, 20, 25];
const doblenumbers=[];

//For
const doblarNumeros = (numeros)=> {
  for (let i = 0; i < numeros.length; i++) {
    doblenumbers.push(numeros[i]*2);
  }
  return doblenumbers
}
console.log(doblarNumeros(numeros));


// Usando callback con map

const fncCallBackforMap = (element, index, array) => element * 2;
const dobleUsingMap = (array) => array.map( fncCallBackforMap );
              //[5, 10, 15, 20, 25];
console.log( dobleUsingMap( numeros) ); // [10, 20, 30, 40, 50]

const doubleUsingMapAndArrowFunction = (array) => array.map( element => element * 2 );
console.log( doubleUsingMapAndArrowFunction(numeros) ); // [10, 20, 30, 40, 50]

/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.

  salida: "Cursos en común: Programming, Music"
*/

const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];
const student3Courses = ["Math","Geography", "Spanish", "Programming", "Music"];

const cursosEnComun =(student1Courses, student2Courses)=>{
  const commonCourses=[];
  for (let i = 0; i < student1Courses.length; i++) {
    for (let j = 0; j < student2Courses.length; j++) {
      if(student1Courses[i] === student2Courses[j]){
        commonCourses.push(student1Courses[i]);
      }
    }
  }
return commonCourses;
}
console.log(`Cursos en común: ${cursosEnComun( student1Courses, student2Courses )}`)

// Resolviendo el ejercicio usando el método filter() y el método includes()
const commonCoursesUsingFilter = ( student1, student2) => student1.filter( course => student2.includes( course ));
console.log(`Cursos en común: ${ commonCoursesUsingFilter( student1Courses, student2Courses ) }`);

// Comparando 3 arreglos de cursos
const commonCoursesStudent1And2 = commonCoursesUsingFilter( student1Courses, student2Courses );
const commonCoursesStudet1And2And3 = commonCoursesUsingFilter( commonCoursesStudent1And2, student3Courses );
console.log(`Cursos en común: ${ commonCoursesStudet1And2And3 }`);

  let cursosComunes = student1Courses.filter(curso => student2Courses.includes(curso));
  console.log(cursosComunes);


  // ------------------- Contar la cantidad de caracteres de una frase -----------
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p': 8
// resolverlo usando arrow function

const contarLetrasP = (frase) => {
  const arregloCaracteres = frase.split('');// Convertir la cadena en un arreglo de caracteres
  const letrasP = arregloCaracteres.filter((letra) => letra === 'p');// Filtrar los caracteres 'p'
  const cantidadP = letrasP.length;// Obtener la cantidad de letras 'p'
  return cantidadP;
};

const frase = "pepe pecas pica papas con un pico y una pala";
const cantidadLetrasP = contarLetrasP(frase);
console.log(`La cantidad de letras 'p': ${cantidadLetrasP}`);

//--------------------
const phrase = "pepe pecas pica papas con un pico y una pala";
const countChar = (phrase, character) => phrase.split("").filter( element => element === character ).length;
console.log( countChar( phrase, "p"));


//---------------------------------------Funciones Recursivas---------------------------------------
// ------------------- Funciones Recursivas -----------
/*
  Es una técnica de programación en donde la función se llama así misma.
  Se debe tener precausión de no entrar en un ciclo infinito.

  En algunos casos, la recursividad puede ser más legible y clara
  ya que refleja de manera directa la naturaleza recursiva del problema.

  function funcionRecursiva ( valor ){
    if( condicionParo ){

    } else {
        funcionRecursiva( nuevoValor ); // llamada recursiva
    }
  }

*/

const factorial = (valor)=>{
  let total=1
  for (let i = 1; i <=valor; i++) {
      total=total*i;
      console.log(total);
  }
  return total;
}
console.log("El factorial de 5 es: "+ factorial(5));


function factorialRecursivo ( number ) {
  if( number < 1 ){
    return 1;
  } else {
      return number * factorialRecursivo( number - 1 );
  }
}

console.log(`Factorial recursivo de 5: ${factorialRecursivo(5)}`);

/*
Calcular suma de números pares.
Realizar una función recursiva que sume los números pares
de un número determinado, hasta el número 1.

número: 12.
Resultado: 12 + 10 + 8 + 6 + 4 + 2 

número: 7
Resultado: 6 + 4 + 2 

Recomendación: usar módulo %2
*/

const sumaNumerosParesRecursiva=(numero)=>{
  if (numero <= 0) {
      return 0;
  }
  if (numero % 2 === 0) {
      return numero + sumaNumerosParesRecursiva(numero - 2);
  } else {
      return sumaNumerosParesRecursiva(numero - 1);
  }
}

console.log(`Resultado para número 12: ${sumaNumerosParesRecursiva(12)}`);
console.log(`Resultado para número 7: ${sumaNumerosParesRecursiva(7)}`);
