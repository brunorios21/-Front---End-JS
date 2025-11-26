//                  0         1          2
let seleccion = ['Messi', 'De Paul', 'Martinez'];

console.log(seleccion[2]);

/* let dibu = seleccion[2];
console.log(dibu); */

// Destructuración o Destructuring con array
let [leo, rodrigo, dibu] = seleccion;
console.log(dibu);

// Destructuring con objetos
let auto = {
   marca: 'Ferrari',
   modelo: 'Monza', 
   anio: 1954
}

//let miModelo = auto.modelo;
//console.log(miModelo);

let {marca, modelo, anio} = auto;
console.log(marca);
console.log(`El modelo del vehiculo es ${modelo}`);


// Speed Operator o asignación por referencia (tres puntitos)
// Array
let rocky = ['Rocky', 'Rocky II', 'Rocky III'];
let creed = ['Creed', 'Creed II'];

let misPelis = [ 
   ...creed, 
   ...rocky, 
   'Rocky IV' 
];
console.log(misPelis);

// Objetos
let generoPelis = {
   genero: 'Aventura',
   popularidad: 10
}

let volverAlFuturo = {
   titulo: 'Volver al Futuro',
   ranking: 1,
   ...generoPelis
}

console.log(volverAlFuturo);


