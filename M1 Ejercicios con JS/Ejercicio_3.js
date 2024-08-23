// Tenemos un array de objetos que representan datos de productos con los siguientes atributos: nombre precio stock. 
// Por ejemplo: 

// const productos = [
//  { nombre: 'Gaseosa 1.5L', stock: 46, precio: 1000 },
//  { nombre: 'Chocolate', stock: 9, precio: 80 },
//  { nombre: 'Chicles', stock: 19, precio: 50 }
// ];
// Debemos agregar y calcular una nueva propiedad llamada "impuesto", la cual debe ser del 30% con base al precio base. Por ejemplo si aplicamos el 30% de impuestos para un producto con precio de $1000 el resultado será de $300, o para un producto con precio de $500 el resultado será $150.

// Para solucionarlo debemos encontrar una función llamada addNewAttr que recibe un parámetro de entrada un array de objetos, la cual debe agregar esta nueva propiedad “impuesto” a cada objeto del array.

const productos = [
    { nombre: 'Gaseosa 1.5L', stock: 46, precio: 1000 },
    { nombre: 'Chocolate', stock: 9, precio: 80 },
    { nombre: 'Chicles', stock: 19, precio: 50 }
];

function addNewAttr(array) {
    array.forEach((element) => {
        let impuesto1 = element.precio * 0.3;
        element.impuesto = impuesto1
    });
}
addNewAttr(productos);

console.log(productos);