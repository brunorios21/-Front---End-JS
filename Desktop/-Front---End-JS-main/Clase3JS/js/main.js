/*************  ARREGOS ****************/
// Consideramos ahora arreglos, vectores, listas, etc como si fueran lo mismo
/* 
let arreglo = [];

arreglo[0] = 5;
arreglo[1] = 'palabra';
arreglo[2] = 3;

// arreglo [ 5 , 'palabra', 3 ,   ...., N]
// arreglo [pos1,   pos2, pos3]
// arreglo [ 0 ,     1 ,    2 ,  ...., N-1]

console.log(`Elemento 1, del indice [0]: ${arreglo[0]}`);
console.log(`Elemento 2, del indice [1]: ${arreglo[1]}`);
console.log(`Último elemento, del indice [3-1]: ${arreglo[2]}`);
console.log(`Elemento N, del indice [N]: ${arreglo[5]}`);

 */
// Declaración de un arreglo
let nuevoArreglo = [54, 95, 32, 12, 64, 78];

//console.log(nuevoArreglo.length);
/* for (let i=0; i < nuevoArreglo.length; i++) {
   console.log(`Arreglo[${i}] = ${nuevoArreglo[i]}`);
} */

/* for (let i in nuevoArreglo) {
   console.log(`Arreglo[${i}] = ${nuevoArreglo[i]}`);
} */

/* for (let element of nuevoArreglo) {
   console.log(element);   
} */

// A las funciones se las llama con un nombre cuya definición es una acción de la tarea que va a realizar o mediante un verbo
/* function nombreDeLaFuncion (parametros) {
   Escribir las tareas a realizar internamente
} */
/*  
let variable = 86;
let x = 'palabra';

// Defino mi función
function imprimir (a) {
   console.log(a);
}
// Llamo o invocó la mi función
imprimir(variable); //le paso un argumento -> variable
imprimir(x);
 */
/* 
// Procedimiento y Función
// Procedimiento -> no devuelve nada, o no regresa ningún valor

// Función de tipo procedimiento
function mostrarInfo () {
   console.log("Hola, soy un procedimiento");   
   // El procedimiento no tiene un return
}

mostrarInfo();

// Función -> devuelve un valor al finalizar la función
function sumar (a,b) {
   let suma = a + b;
   return suma;
}

//sumar(3,6);
let x=3, y=6 ,z=0;

z = sumar(x,y);
console.log(z);
 */
/* 
// Paso valor en JS
// Utilizando datos primitivos (number, bool, string)
function cambiarValor (parametro) {
   console.log('dentro de la función',parametro);
   parametro = 54;
   console.log(parametro);
}

let argumento = 23;
console.log(argumento);
cambiarValor(argumento);
console.log(argumento);

// Pasar por referencia en JS
// Objetos (array, object, function)
function newValor (parameter) {
   parameter[0] = 45;
}

let arreglo = [20];
console.log(arreglo);
newValor(arreglo);
console.log(arreglo);

// Para modificar el valor de argumento dentro de la función debo convertirlo en una variable tipo objeto o asignale el valor retornado
// Retorne el nuevo valor y lo asignamos a argumento
function cambiarValor (parametro) {
   parametro = 54;
   return parametro;
}

argumento = 23;
console.log(argumento);
argumento = cambiarValor(argumento);
console.log(argumento);

// Lo convierto en un objeto
function cambiarValor (obj) {
   obj.valor = 54;
}

argumento = { valor: 23};
console.log(argumento);
cambiarValor(argumento);
console.log(argumento);

// Lo convierto en un arreglo
function cambiarValor (arreglo) {
   arreglo[0] = 54;
}

argumento = [23];
console.log(argumento);
cambiarValor(argumento);
console.log(argumento);
 */
/* 
// Alcanse de variable o scope
let a = 10; // Esta variable es global

function mostarValorGlobal() {
   console.log('Variable global ',a);
   a = 23;
   console.log(a);
   let b = 29; // Variable local
   console.log(b);
}

function miFunction() {
   console.log(a);
}

miFunction();
mostarValorGlobal();
console.log(a);
//console.log(b);
 */
/* 
// Funciones Recursivas
// Imprimir 3, 2, 1
function mifunctionRecursiva(numero) {
    if (numero == 1) {
      console.log(numero);
   }
   else {
      console.log(numero);      
      mifunctionRecursiva(numero - 1);
   } 
  //console.log(numero); 
  //numero == 1 ? 0 : mifunctionRecursiva(numero - 1);
}

mifunctionRecursiva(3);
 
/* 
// Callback
let imp = function imprimir (mensaje) {
   console.log(mensaje);   
}

function operacionSumar (op1, op2, functionCallback) {
   let suma = op1 + op2;
   functionCallback(`Resultado: ${suma}`);
}

operacionSumar(5,3,imp);
 */