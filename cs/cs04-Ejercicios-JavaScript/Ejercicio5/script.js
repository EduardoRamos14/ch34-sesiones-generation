
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);

people.splice(1,1);//Eliminar a dani
people.splice(2,1);//Eliminar a juan
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);//mover a luis al principio
people.push("Eduardo");//agregar nombre al final
console.log(people);

//  Iterar y detenerse en "Maria"
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
        if (people[i] === "Maria") {
        break;
        }
    }

// 7. Inidice donde se encuantra Maria
let indexOfMaria = people.indexOf("Maria");
console.log("Maria se encuatra en el inidce " + indexOfMaria);
console.log("Numero de personas en el arreglo " + people.length);