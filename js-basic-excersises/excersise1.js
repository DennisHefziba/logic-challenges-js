/* EJERCICIO #1 --Número par o impar--
Crea una función que reciba un número y devuelva "Par" o "Impar" */

const parImpar = (numero) => {
    if(numero % 2 == 0) {
        return "El numero es par";
    } else {
        return "El numero es impar";
    }
}

console.log(parImpar(22));