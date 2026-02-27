/* EJERCICIO #1  --Invertir un string--
Crea una función que reciba un texto y lo devuelva invertido.
Ejemplo: hola => aloh */

const invertedText = (text) => {
    textSplited = text.split("");
    console.log(textSplited);

    invertido = [];

    for(let i = textSplited.length - 1; i >= 0; i--) {
        invertido.push(textSplited[i]);
    }

    console.log("Texto original: "+textSplited.join(""), " texto invertido: "+invertido.join(""));

}

invertedText("Hola");
