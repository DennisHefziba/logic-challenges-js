/* EJERCICIO #3 --FizzBuzz--
Imprime los números del 1 al 50:
Si es múltiplo de 3 → "Fizz"
Si es múltiplo de 5 → "Buzz"
Si es múltiplo de ambos → "FizzBuzz" */

const fizzBuzz = (numero) => {
    for(let i = 0; i <= numero; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if(i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        }  else {
            console.log(i);
        }
    }
}

fizzBuzz(50);