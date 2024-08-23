// Escribe un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.

for (i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log('Buzz');
    } else {
        console.log('Fizz');
    }
}

