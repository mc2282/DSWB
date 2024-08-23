// Propuesta A
// Escribe un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:
// #
// ##
// ###
// ####
// #####
// ######
// #######

var veces = 7

for (i = 0; i < veces; i++) {
    let t = '#';

    for (j = 0; j < (i + 1); j++) {
        if (j != 0) {
            t = t + '#';
        }
    }
    console.log(t)
}


