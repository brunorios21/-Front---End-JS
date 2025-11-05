
/* Operadores de Comparación */
let a = 5, b = '5';
//b = 3;

console.log('Valor de a: ', a);
console.log('Valor de b: ', b);

// Operador de Igualdad
// Comparación de valores sin importar el tipo de dato
console.log('a == b', a == b);

// Operador de Igualdad Estricta
console.log('a === b', a === b);

// Operador de Desigualdad
console.log('a != b', a != b);

// Operador de Desigualdad Estricta
console.log('a !== b', a !== b);

// Operador Mayor y Menor que
// Mayor que
console.log('a > b', a > b);

// Menor que
console.log('a < b', a < b);

// Mayor o igual que, Menor o igual que
console.log('a >= b', a >= b);
console.log('a <= b', a <= b);

// Operadores Lógicos - (Tabla de verdad)
// && (AND) 
// true  && true  = true
// true  && false = false
// false && true  = false
// false && false = false

// || (OR)
// true  || true  = true
// true  || false = true
// false || true  = true
// false || false = false

// ! (NOT)  
// !true = false
// !false= true

/* Condicionales */
let variable = 'palabra';
//console.log(numero);

// Estructura if
// if (¿?) 
if (isNaN(variable)) {
   // Si esta condición es verdadera
   console.log('El valor de mi variable no es valor númerico');
}

//if (isNaN(variable)) console.log('El valor de mi variable no es valor númerico');

// Condición con operador ternario
// (¿?) ? intrucción de la respuesta verdadera : Intrucción de la respuesta falsa
// (condicion) ? true : false
 (a === b) ? console.log('Ambos valores son iguales') : console.log('Los valores son diferentes');

// Estructiura if-else
// if (¿?) { respueta verdadera } else { respuesta falsa }
if (isNaN(variable)) {
   // Si esta condición es verdadera
   console.log('El valor de mi variable no es valor númerico');
} else {
   // Si esta condición es verdadera
   console.log('El valor de mi variable es valor númerico');
}

//-----------
a = 5, b = '5';
if (a === b) {
   console.log('Ambos valores son iguales');
}
else {
   console.log('Los valores son diferentes');
}

// Estructura if-else if-else
if (a > b) {
   console.log('El primer valor es mayor que el segundo');
}
else {
   if (a < b) {
      console.log('El primer valor es menor que el segundo');
   }
   else if (a === b) {
      console.log('Ambos valores son iguales');
   }
   else {
      console.log('Los valores son de diferente tipo de dato');
      
   }
}

// Sentencia switch
let opcion = 6;

switch (opcion) {
   case 1:
      console.log('El valor de opción es 1');
      break;

   case 2:
      console.log('El valor de opción es 2');
      break;

   case 3:
      console.log('El valor de opción es 3');
      break;

   default:
      console.log('Opción no válida');
      break;
}
/* 
if (opcion === 1) {
   console.log('El valor de opción es 1');
} else if (opcion === 2) {
   console.log('El valor de opción es 2');
} else if (opcion === 3) {
   console.log('El valor de opción es 3');
} else {
   console.log('Opción no válida');
}
 */

/* Ciclos (bucles)*/
// While
// mostrar números del 1 al 5
let contador = 6;
while (contador <= 5) { //(contador != 5)
   console.log(contador);
   //contador = contador + 1;
   contador++;
}

// do-while
// Siempre que necesitemos que la tarea/instrucción de código se ejecute al menos una vez
do {
   console.log(contador);
   contador++;
} while (contador <= 5);


// for (var inicialización; condición; actualización) { ... }
for (let aux = 1; aux <= 5; aux++) {
   console.log(aux);
}