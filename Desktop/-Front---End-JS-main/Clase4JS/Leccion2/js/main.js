/* 
//console.log(document.getElementById('ident'));

let nodoH1 = document.getElementsByClassName('clase-h1');

console.log(nodoH1);

//nodoH1 = document.getElementsByTagName('h1');
//console.log(nodoH1[0]);

console.log(document.getElementsByName('name-h1'));
 
//console.log(document.querySelector('#ident'));
 */
/* 
let etiquetaH1 = document.getElementById('ident');

//etiquetaH1.innerHTML = '<h2> innerHTML toma el nodo y lo reemplaza </h2>'; 
//etiquetaH1.innerText = 'Reemplaza el texto interno del nodo';
etiquetaH1.textContent = 'Permite reemplazar el texto, respetando las etiquetas HTML';
etiquetaH1.style.color = 'red';
//console.log(etiquetaH1);

let parrafo = document.getElementById('parrafo');
parrafo.innerHTML = '<i> Texto en cursiva modificado desde JS </i>';

let parrafos = document.getElementsByTagName('p');
for (let nodo of parrafos) {
   console.log(nodo);
}

let elemento = document.getElementsByClassName('clase');
for (let nodo of elemento) {
   console.log(nodo);   
   nodo.textContent = 'Nuevo parrafo';
}
 */
//console.log(document.querySelector('.clase')); //Devuelve el primer elemento que encuentra
//console.log(document.querySelectorAll('.clase')); // Devuelve todos los elementos que encuentra

//console.log(document.getElementById('formulario'));

function mostrarContenido() {
   let form = document.forms['formulario'];
   let texto = '';
   let username = 'Blanca';
   let password = '1234';

   /* for (let elemento of form) {
      texto += elemento.value + ' ';
   } */
   (form[0].value === username && form[1].value === password) ? texto = 'Lograste acceder' : texto = 'Usuario o pass incorrecto';

   //console.log(texto);

   document.getElementById('valor').textContent = texto;
}

function agregarContenido() {
   //document.getElementById('valor').innerHTML += '<p>Nuevo parrafo agregado</p>';   
   //document.querySelector('#valor').appendChild(document.createElement('p')).textContent = 'Nuevo parrafo agregado';
   let nodoDiv = document.querySelector('#valor');
   let p = document.createElement('p');
   p.textContent = 'Nuevo parrafo agregado';
   nodoDiv.appendChild(p);
}


