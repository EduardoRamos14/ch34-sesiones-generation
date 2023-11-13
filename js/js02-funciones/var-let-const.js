console.log("var vs let vs const");

// ================ Reassigment and Redeclaration========
/*
Declarar una variable significa que se reserva el nombre 
en memoria en el scope actual. 

Inicializar una variable es establecer el valor de la variable

*/
// Pueden ser reasignadas y redeclaradas dentro del 
// mismo contexto de función.
var userName = 10;
userName = 20; // Reasignación válida
var userName = 30; // Redeclaración válida en el mismo contexto de función


// Pueden ser reasignadas dentro del mismo bloque y no pueden 
// ser redeclaradas en el mismo ámbito.
let age = 10;
age = 20; // Reasignación válida
// let age = 30; // Error: No se puede redeclarar en el mismo ámbito


// No pueden ser reasignadas después de su inicialización y tampoco 
// pueden ser redeclaradas en el mismo ámbito.
const address = 10;
// address = 20; // Error: No se puede reasignar
// const address = 30; // Error: No se puede redeclarar


/*
  Variables declaradas con var, let y const tienen un alcance de función. 
  Esto significa que están limitadas al contexto de la función 
  en la que se declaran.
*/

function functionScope(){
    var myVar = 10;
    let myLet = 20;
    const myConst = 30;

    console.log(myVar);
    console.log(myLet);
    console.log(myConst);
    
}
functionScope();


// ================ Block Scope ====================
/*
  Variables declaradas con let y const tienen un alcance de bloque. 
  Esto significa que están limitadas al bloque en el que se declaran.
*/
{
  var a = "a";
  let b = "b";
  const c = "c"; 

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);
//console.log(b);
//console.log(c);

var personaA = "Nathanael";
let personaB = "Peso Pluma";
const personaC = "Junior H";

{
    var personaA = "Margarita";
    let personaB = "Ángeles Azules";
    const personaC = "Alacranes Musicales"

    {
        var personaA = "Tatiana";
        let personaB = "La Granja de Zenón";
        const personaC = "Cri-cri";

        console.log(personaA);//Tatiana
        console.log(personaB);//La Granja de Zenón
        console.log(personaC);//Cri-cri
    }
}

console.log(personaA);//tatiana
console.log(personaB);//peso pluma
console.log(personaC);//junior h



// ================ Hoisting =======================
/*
  El "hoisting" en JavaScript es un comportamiento que ocurre durante 
  la fase de compilación antes de la ejecución del código. 
  Se refiere a la elevación (movimiento) de las declaraciones 
  de variables y funciones al inicio de su contexto de ejecución

*/
console.log(phone);//undefine
var phone;
phone ="55-123-123"
console.log(phone);//55-123-123

/*
  Las variables declaradas con var son elevadas al inicio de su contexto 
  de ejecución (ya sea el ámbito de función o el ámbito global).
  
  Sin embargo, solo la declaración de la variable es elevada, 
  no la asignación. Esto significa que la variable existe, 
  pero su valor es undefined hasta que llega a la línea de asignación.
*/
//console.log(email); //Cannot access 'email' before initialization
let email = "tan@gmail.com";

