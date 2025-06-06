/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

let suma = 1 + 1;
console.log(suma);

let resta = 2 - 1;
console.log(resta);

let multiplicacion = 2 * 2;
console.log(multiplicacion);

let division = 2 / 2;
console.log(division);

let modulo = 2 % 2;
console.log(modulo);

let incremento = 2;
incremento++;
console.log(incremento);

let decremento = 2;
decremento--;
console.log(decremento);

let potencia = 2 ** 2;
console.log(potencia);

let igualdad = 2 == 2;
console.log(igualdad);

let desigualdad = 2 != 2;
console.log(desigualdad);       

let igualdadEstricta = 2 === 2;
console.log(igualdadEstricta);

let desigualdadEstricta = 2 !== 2;
console.log(desigualdadEstricta);

let mayorQue = 2 > 1;
console.log(mayorQue);

let menorQue = 2 < 1;
console.log(menorQue);

let mayorOIgualQue = 2 >= 2;
console.log(mayorOIgualQue);    

let menorOIgualQue = 2 <= 1;    
console.log(menorOIgualQue);

let and = (2 > 1) && (2 < 3);
console.log(and);

let or = (2 > 1) || (2 > 3);
console.log(or);

let not = !(2 > 1);
console.log(not);

let ternario = 2 > 1 ? 'verdadero' : 'falso';
console.log(ternario);

let condicionalIf = 2 > 1;
if (condicionalIf) {
    console.log('verdadero');
} else {
    console.log('falso');   
}

let condicionalSwitch = 1;
switch (condicionalSwitch) {
    case 1:
        console.log('verdadero');
        break;
    default:
        console.log('falso');
        break;
}

let condicionalWhile = 1;
while (condicionalWhile < 10) {
    console.log(condicionalWhile);
    condicionalWhile++;
}

let condicionalDoWhile = 1;
do {
    console.log(condicionalDoWhile);
    condicionalDoWhile++;
} while (condicionalDoWhile < 10);

let condicionalFor = 1;
for (let i = 0; i < 10; i++) {
    console.log(condicionalFor);
    condicionalFor++;
}

let condicionalForEach = [1, 2, 3];
condicionalForEach.forEach(element => {
    console.log(element);
});

let condicionalTryCatch = 2;
try {
    console.log(condicionalTryCatch);
} catch (error) {
    console.log(error);
}

let condicionalTryCatchFinally = 1;
try {
    console.log(condicionalTryCatchFinally);
} catch (error) {
    console.log(error);
} finally {
    console.log('El bloque de código ha finalizado');
}

let condicionalForIn = {a: 1, b: 2, c: 3};
for (let key in condicionalForIn) {
    console.log(key, condicionalForIn[key]);
}

let condicionalForOf = [1, 2, 3, 4, 5];
for (let element of condicionalForOf) {
    console.log(element);
}
