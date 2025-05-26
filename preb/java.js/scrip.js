//Sintaxis Básica 

let edad = 2;        // Variable local
const PI = 3.1416;    // Constante (no cambia)


/*

String (texto)
"Hola mundo"
Number (números)
10, 3.14
Boolean (lógico)
true, false
Undefined (sin valor)
let x;
Null (vacío)
let y = null;

✅ Aritméticos: + - * / % **
✅ Comparación: == === != !== > < >= <=
✅ Lógicos: && (AND), || (OR), ! (NOT)
*/


//Estructuras de Control 
//Condicionales (if, else)


//Tenemos que realizar el acceso a un local. Las personas que sean "empleados" seran permitidas
//las personas que sean invitadas tambien, mientras que el personal de logistica no lo esta. 
//armar un condicional que saque por consola si esta permitida o no a ingresar la persona
/*
    console.log() imprime por pantalla 
*/ 

const persona1 = "empleado"
const persona2 = "logistica"

if (persona1 === "empleado") {
    console.log("esta permitido su ingreso")
}
  else if(persona1 === "logistica"){
    console.log("no esta permitido su ingreso")
  } 
  else
  {
    console.log("consultar en administracion")
  }


//switch 
// una especie de condicial grande que puede abastecer multiples condiciones 

let dia = "carlitos";

switch (dia) {
    case 1: console.log("Lunes"); break;
    case 2: console.log("Martes"); break;
    case "carlitos": console.log("Hola soy carlitos"); break; 
    default: console.log("Día no registrado");
}

const listas = [1,2,3]

console.log(listas[1]) //acceder a posicion de una lista/array 

//for, forEach 
/*for(let i = 0; i < listas.length ; i++){
    console.log(listas[i],"posicion",i)
}*/

//forEach 
/*listas.forEach(function(item, index){
    console.log("item",item, "indice",index)
})*/

//recorrer una lista y mostrar por pantalla los numeros que solamente sean pares 
const listaNum = [10,2,5,8,9]

for(let i = 0; i < listaNum.length ; i++){
    
    if (listaNum[i] % 2 == 0) {
        console.log("numeros pares:", listaNum[i],"posicion:", i)
    }
}