/* Contar vocales
Crea una función que cuente cuántas vocales tiene un string. */

//Palabra: Marchito

/* const vowelsCount = (palabra) => {
    let contador = 0;

    for(let i = 0; i < palabra.length; i++) {
        if(palabra[i] == "a" || palabra[i] == "e" || palabra[i] == "i" || palabra[i] == "o" || palabra[i] == "u") {
            contador++;
        }
    }

    return contador;
}

console.log(vowelsCount("potasio")); */

/* Version mejorada */

const vowelsCounter = (palabra) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let contador = 0;

    for(let i = 0; i < palabra.length; i++) {
        if(vowels.includes(palabra[i].toLowerCase())) {
            contador++;
        }
    }

    return contador;
}

console.log(vowelsCounter("Manzana"));
