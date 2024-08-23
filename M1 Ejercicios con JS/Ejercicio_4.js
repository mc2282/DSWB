// Propuesta B

// Tenemos un array de objetos que representan órdenes de compra con los siguientes atributos:
// Por ejemplo
// cliente: string

// montoTotal: number

// entregado: boolean

// Por ejemplo:

// const ordenes = [
//  { cliente: 'Tomas Gutierrez', montoTotal: 260, entregado: true },
//  { cliente: 'Ines Perez', montoTotal: 956, entregado: false },
//  { cliente: 'Renata Echeverría', montoTotal: 1670, entregado: true }
// ];
// Debemos filtrar todas las órdenes de compra que cumplan con la condición de tener un monto total mayor o igual a $500 y que hayan sido entregadas (“entregado” = true)

// Para solucionarlo debemos crear una función llamada filterOrders que recibe un array de entrada.

const ordenes = [
    { cliente: 'Tomas Gutierrez', montoTotal: 260, entregado: true },
    { cliente: 'Ines Perez', montoTotal: 956, entregado: false },
    { cliente: 'Renata Echeverría', montoTotal: 1670, entregado: true }
];

function filterOrders(array) {
    return array.filter(element => element.montoTotal >= 500 && element.entregado == true);
}
const resultado = filterOrders(ordenes)
console.log(resultado);