/* EJERCICIO #1  --Invertir un string--
Crea una función que reciba un texto y lo devuelva invertido.
Ejemplo: hola => aloh */

const invertedText = (text) => {
    letters = [];
    invertido = [];

    for(let i = 0; i < text.length; i++) {
        letters[i] = text[i];
        console.log(letters);
        for(let j = text.length; j >= 0; j--) {
        invertido[i] = invertido[j];
    }
    }

    //Ejercicio no terminado, revisarlo en el siguiente commit

    

    

    console.log("Texto original: "+ text, " Texto invertido: "+invertido);

    
}

invertedText("Hola");