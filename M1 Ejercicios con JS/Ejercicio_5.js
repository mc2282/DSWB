// Enunciado

// Dado el array = [1,2,3,4,5,6], implementa en cada caso el código que resuelva las siguientes consignas:

array = [1, 2, 3, 4, 5, 6]

// 1- Itera todos los elementos dentro del array utilizando while y mostrarlos en consola.
// i = 0
// while (i < array.length + 1) {
//     console.log(array[i])
//     i++;
// }

// 2- Itera todos los elementos dentro del array utilizando for y mostrarlos en consola.

// for (i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// 3- Itera todos los elementos dentro del array utilizando .forEach y mostrarlos en consola.

// array.forEach(element => {
//     console.log(element);
// });

// 4- Mostrar todos los elementos dentro del array sumándole uno a cada uno.
// for (i = 0; i < array.length; i++) {
//     array[i] = array[i] + 1
//     console.log(array[i]);
// }

// 5- Generar una copia del array pero con todos los elementos incrementado en 1.
// copiaArray = [];
// for (i = 0; i < array.length; i++) {
//     copiaArray[i] = array[i] + 1
//     console.log(copiaArray[i]);
// }

// - Calcular el promedio
var suma = 0
for (i = 0; i < array.length; i++) {
    suma = suma + array[i];
}
var promedio = suma / array.length;
console.log(promedio);