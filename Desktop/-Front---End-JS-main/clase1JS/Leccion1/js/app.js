
// Comentario en una línea

/*
   Comentario 
   en 
   varias
   líneas
*/

console.log('Mensaje que se va a mostrar en la consola');

//alert("Esto muestra un mensaje en el navegador, en una ventana emergente");

// Definir variables
let a;

a = 10;
console.log(a);
a = "Saludo";
console.log(a);

/* Reglas para definir las variables */ 
// letra, $, _, posteriormente en la definición pueden ir números
// Recomendación: escribir los nombre en minúscula y utilizar escritura camelCase

let miNumero1 = 5;
console.log(miNumero1);

let _miNumero2 = 10;
console.log(_miNumero2);

let $miNumero3 = 15;
console.log($miNumero3);

// Variable constantes
const PI = 3.1416;
console.log(PI);

const SEG_MINUTOS = 60;
console.log(SEG_MINUTOS);

console.log(Math.PI);

// Diferentes tipos de datos
let valorNumerico = 20;
let valorFlotante = 7.34;
let cadenaTexto = "Hola a todos";
let valorBooleano = true; // false
let valorNulo = null; // ausencia de valor
let valorIndefinido = undefined; // valor no definido

console.log(typeof valorNumerico);
console.log(typeof valorFlotante);
console.log(typeof cadenaTexto);
console.log(typeof valorBooleano);
console.log(typeof valorNulo);
console.log(typeof valorIndefinido);

// Concepto de Hoisting
variableDeterminada = 3;

console.log(variableDeterminada);

var variableDeterminada;
variableDeterminada = 234;

console.log(variableDeterminada);

let x = 10;
console.log(x);

//let x;
x = 20;
console.log(x);


// Buenas prácticas
// Concatenar cadenas de texto y variables
let cad1,cad2, cad3;
cad1 = "Hola ";
cad2 = "a todos ";
cad3 = cad1 + cad2 + "ustedes.";

console.log(cad3 + "!!!");
console.log(cad1 + cad2 + cad3);
console.log('El resultado de cad3 es: ', cad3);

// Operadores aritméticos
let num1, num2, resultado;
num1 = 10;
num2 = 5;

resultado = num1 + num2;
console.log("La suma es: ", resultado);

resultado = num1 - num2;
console.log("La resta es: ", resultado);

resultado = num1 * num2;
console.log("La multiplicación es: ", resultado);

resultado = num1 / num2;
console.log("La división es: ", resultado);

resultado = num2 % 2;
console.log("El módulo es: ", resultado);

resultado = num1 ** 2; // num1 al cuadrado 
console.log("La potencia es: ", resultado);  

resultado = Math.pow(num1, 2)
console.log("La potencia es: ", resultado);

// Operadorea de incremento y decremento
let contador = 0;
console.log(contador);

// pre-incremento
++contador; // aumento es en la misma línea
console.log(contador);

// post-incremento 
contador++ // aumento en la siguiente línea
console.log(contador);

let var1 = 5, var2 = 2;

console.log(++var1 * var2++);
console.log("var1: ", var1);
console.log("var2: ", var2);

// pre-decremento
--var1;
console.log(var1);

// post-decremento
var2--;
console.log(var2);


let q,w,e = "5",t = "cinco",u = q, i= w;

q = 5;
w = '5';

console.log(typeof q);
console.log(typeof w);
console.log(typeof e);

console.log(q + w);