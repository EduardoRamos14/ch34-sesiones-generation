
// ------------- Uso  de  symbol --------------------------------------
/*
 Se utiliza para añadir claves de propiedades únicas y que estén ocultas
 a otros mecanismos como la iteración y stringify.

 Esto nos sirve para realizar el concepto de encapsulación.
*/

const escondite= Symbol();

const natsu = {
    nombre: "Natsu",    
    color: ["blanco", "beige"],
    esterilizado: true,
    raza: "criollo",
    tamanioCm: 25,
    edad: 8,
    [escondite]: "cama de meli",
    maullar: function(){
        return "miiiiaaau";
    },
    comer: function( comida ){
        return `${this.nombre} come ${comida}`
    }
}

console.log(`Meli❤️ tiene de mascota a ${natsu.nombre} de edad ${natsu.edad} años`);

//se le de comida: pescado
console.log(natsu.comer("pescado"));

//iterar los atributos de un objeto
for (let atributo in natsu) {
    console.log(` ${atributo} : ${natsu[atributo]}`)
}

// guardar los valores en localstorage
localStorage.setItem("datosNatsu", JSON.stringify(natsu));

console.log(`El econdite de Natsu es: ${natsu[escondite]}`);