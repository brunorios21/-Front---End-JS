
// Callback
// Es una función que recibe como parametro otra función
/* 
function saludarDespues(callback) {
   console.log('Procesos...');
   callback(); // se ejecuta despúes
}

saludarDespues(() => {
   console.log('Esto es un saludo utilizando callback');
});
 */
/* 
let imp = function imprimir(mensaje) {
   console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
   let res = op1 + op2;
   funcionCallback(`Resultado de la suma es ${res}`);
}

sumar(3,5,imp);
 */
/* 
// Callback + asincronía
// setTimeout(funcionCallback, time);
function miFuncionCallback() {
   console.log('Saludos a los 3 seg');
}

setTimeout(miFuncionCallback, 3000);

setTimeout( function() { console.log('saludo asíncrono a 4seg')}, 4000);

setTimeout( () => {
   console.log('El saludos se genera primero')
}, 1000);
 */
/* 
// Promises
//                          resolver, rechazado
const promesa = new Promise ((resolved, reject) => {
   let estado = false;

   if (estado) {
      resolved('Esta todo ok');
   }
   else {
      reject('Algo fallo!');
   }
})

//promesa.then( resultado => console.log(resultado), error => console.log(error));
promesa
   .then( resultado => console.log(resultado))
   .catch( error => console.log(error));
 */
/* 
// Async/Await
// Definición clasica de promesa
let promesa = new Promise ( (resolver) => {
   setTimeout( () => {
      resolver('Promesa con settimeout');
   }, 3000);
})

promesa.then( valor => console.log(valor));

// Con async
async function miFunctionPromise() {
   return 'Saludo con async';
}

miFunctionPromise().then( valor => console.log(valor));

// await - solo con async
async function miFunctionAwait () {
   let miPromesa = new Promise ( resolver => {
      resolver('Promesa con await');
   })

   console.log(await miPromesa);
}

miFunctionAwait();
 */
/* 
// Fetch
fetch ('https://dummyjson.com/products')
   .then( res => res.json )
   .then( data => console.log(data))
   .catch( err => console.log('Error:', err))
 */

async function traerProduct() {
   try {
      const respuesta = await fetch('https://dummyjson.com/products');
      const datos = await respuesta.json();
      console.log(datos);
   }
   catch (error) {
      console.log('Mensaje de error ',error)
   }
}

traerProduct();
