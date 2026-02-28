/* EJERCICIO #1 --Palíndromo--
Crea una función que determine si una palabra es palíndromo.
*/

const palindrome = (word) => {
    const splitedWord = word.toLowerCase().split("").join("");
    const result = [];
    
    for(let i = word.length - 1; i >= 0; i--) {
        result.push(word[i].toLowerCase());
    }

    const reversed = result.join("");

    if(splitedWord === reversed) {
        return "Es pali"
    } else {
        return "No es"
    }

}

console.log(palindrome("Oso"));