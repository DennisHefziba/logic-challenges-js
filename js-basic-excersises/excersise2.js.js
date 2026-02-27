/*EJERCICIO #2 --Número mayor--
Crea una función que reciba dos números y retorne el mayor.*/

const numeroMayor = (num1, num2) => {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(numeroMayor(20,75));