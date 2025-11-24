
let list = [ 1, 'Hola', {nombre: 'Pepe'}, true ];

/* for ( let i=0; i < list.length; i++ ) {
   console.log(list[i]);
} */

/* for ( let i in list ) {
   console.log(list[i]);
} */

/* for ( let item of list ) {
   console.log(item);
} */

// Se aplica a los arreglos
/* 
list.forEach( item => {
   console.log(item);
});

list.forEach( (item, index) => {
   console.log(`Elemento ${index} es: ${item}`);
});
 */

// Definición de un objeto
let alumno = { 
   nombre: 'Pepe', 
   edad: 12, 
   curso: 'JS', 
   interes: ['HTML', 'CSS', 'JS'] 
};

console.log(alumno);
console.log(alumno.nombre);
console.log(alumno.interes[2]);