
/* let multiplo = parseInt(prompt("ingrese un numero"))


for (let i = 1 ; i <= 10; i++) {
    console.log(multiplo * i);
    
} */


/* let numeros = parseInt(prompt("ingrese un numero"))
const listaNumeros = [""]
while (numeros > 0) {
        numeros = parseInt(prompt("ingrese un numero"))
        listaNumeros.push(numeros)
}
console.log(listaNumeros); */ 

/* let numeros2 = parseInt(prompt("ingrese un numero"))
let finBucle = true
let contador = 0
while (numeros2 >= 1 && numeros2 <= 100 && finBucle) {
    contador++
    if (numeros2 < listaNumeros[listaNumeros.length - 2]){
        numeros2 = parseInt(prompt("ingrese un numero, el incognito es menor"))
    }else if(numeros2 > listaNumeros[listaNumeros.length - 2]){
        numeros2 = parseInt(prompt("ingrese un numero, el incognito es mayor"))
    }else if(numeros2 === listaNumeros[listaNumeros.length - 2] ){
        finBucle = false
        alert(`ganaste, te tomo ${contador} intentos`)
    }
} */


/* const primo = []
let numero = Number(prompt("escriba un numero"))
primo.push(numero);
        for (let i=1; i < primo[0]; i++) {
            if (primo[0] %i === 0) { 
                console.log("es primo");
                break;
            }else{
                console.log("no es primo");
            }    
        } */

        /* let numero = Number(prompt("Ingrese un numero"))
        function encontrarDivisores(numero){     
            let divisores = []          
            for (let i = 1; i <= numero; i++) 
            {if (numero % i === 0) {divisores.push(i)}}
            return divisores;         
            }    
            let divisores = encontrarDivisores(numero)    
            if (divisores.length <= 2){console.log(`El numero ${numero} es primo`)}
            else{console.log(`El numero ${numero} no es primo`)} */
       
     
            /* function encontrarDivisores(numero) {
                let divisores = [];
            
                for ( let i = 1 ; i <= numero ; i++){
                if (numero % i === 0) {
                    divisores.push(i)
                }
            }
                return divisores;
            }
            let numero = 100
            let divisores = encontrarDivisores(numero)
            console.log(`El numero ${numero} es divisible por ${divisores}`); */



/* const nombres = [
    "ana",
    "joaco",
    "mateo",
    "denis",
    "franco",
    "parzival",
    "artemis",
    "azul",
    "messi",
    "mbappe"
]

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres [i]);
}
 
const numeros = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]


for (let i = 0; i < numeros.length; i++) {
    console.log(`${numeros[i]}` * 2);
}

const familia = [
    papa = {
        nombre: "pablo",
        edad: "48",
        altura: 198,
        apellido: "palacios"
    },
    mama = {
        nombre: "graciela",
        edad: "49",
        altura: 170,
        apellido: "sajnin"
    },
    yo = {
        nombre: "franco",
        edad: "19",
        altura: 198,
        apellido: "palacios"
    },
    hermano = {
        nombre: "lucas",
        edad: "17",
        altura: 200,
        apellido: "palacios"
    },
    perro = {
        nombre: "rocco",
        edad: "6",
        altura: 60,
        apellido: "palacios"
    }
]  

for (let i = 0; i < familia.length; i++) {
    const miembros = familia[i]
    console.log(`mi nombre es ${miembros.nombre}, tengo ${miembros.edad} años, mido ${miembros.altura}m y mi apellido es ${miembros.apellido}`)
    
} */

/* const numeros = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]

for (let i= 0; i< numeros.length; i++) {
    const impares = numeros[i]
    if (impares % 2!== 0) {
        console.log(impares);
    }
    
} */

/* 
let numeros
let pares = 0
let impares = 0
do {
    numeros = parseInt(prompt("ingrese un numero")) 
    numeros %2 === 0 ? (pares+=numeros) : (impares+=numeros)
        
} while (numeros !== 0);

console.log(pares);
console.log(impares); */

/* const numeros = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]
let mayor = numeros[0]

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i]; 
    }
}
console.log(mayor);

let menor= numeros[0]

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
        menor = numeros[i]; 
    }
}
console.log(menor); */
/* let jugador1 = prompt("Escriba el nombre del jugador 1:");
let jugador2 = prompt("Escriba el nombre del jugador 2:");

function jueguito() {
  do {
    jugador1 = prompt("Jugador 1: ¿Piedra, papel o tijera?");
    jugador2 = prompt("Jugador 2: ¿Piedra, papel o tijera?");

    if (jugador1 === jugador2) {
      alert("Empate, sigan jugando.");
    }
  } while (jugador1 === jugador2);

  if ((jugador1 === "piedra" && jugador2 === "tijera") ||
      (jugador1 === "papel" && jugador2 === "piedra")  ||
      (jugador1 === "tijera" && jugador2 === "papel")) {
    console.log(`¡${jugador1} gana!`);
  } else {
    console.log(`¡${jugador2} gana!`);
  }
}

jueguito(); */




