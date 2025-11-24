/* 
let texto = 'Texto para prueba';

console.log(texto);

// set -> guardar información
// get -> obtener información

//localStorage.setItem( 'clave', texto);

console.log(localStorage.getItem( 'clave' ));

//Se utiliza para limpiar localStorage
//localStorage.removeItem( 'clave');


//sessionStorage.setItem('tema', 'dark');

let tema = sessionStorage.getItem('tema');

console.log('El tema se la sessiones ' + tema);

sessionStorage.removeItem('tema');
 */

let materias = ['Programción', 'Base de Datos', 'Diseño'];

localStorage.setItem('materias', JSON.stringify(materias));

//materias = 'Programción, Base de Datos, Diseño';
let materiasGuardadas = JSON.parse(localStorage.getItem('materias'));

console.log(materias);
materiasGuardadas.push('Inglés');
console.log(materiasGuardadas);

localStorage.removeItem('materias');


let usuario = {
   nombre: 'Pepe',
   rol: 'admin',
   experiencia: 10,
};

localStorage.setItem('usuario', JSON.stringify(usuario));

console.log(JSON.parse(localStorage.getItem('usuario')));


let curso = {
   name: 'JavaScript',
   alumnos: ['Ana', 'Luis', 'Carlos'],
   activo: true,
};

localStorage.setItem('curso', JSON.stringify(curso));

let cursoGuardado= JSON.parse(localStorage.getItem('curso'));


cursoGuardado.alumnos.push('Maria'); //Agrega al final del array
cursoGuardado.alumnos.unshift('Maria'); //Agrega al inicio del array
cursoGuardado.alumnos.shift(); //Elimina el primer elemento del array
cursoGuardado.alumnos.pop(); //Elimina el último elemento del array
cursoGuardado.alumnos.splice(1,1,'Juan'); //Elimina y agrega elementos en una posición específica
//cursoGuardado.alumnos.splice(1,1); //Elimina elementos en una posición específica
cursoGuardado.alumnos.splice(2,0,'Luis'); //Agrega elementos en una posición específica
console.log(cursoGuardado);



