/* Eliminar duplicados de un array
Dado un array:
[1,2,2,3,4,4,5]
Devuelve:
[1,2,3,4,5] */

const deleteDuplicates = (array) => {
    const resultado = [];

    for(let i = 0; i < array.length; i++) {
        if(!resultado.includes(array[i])) {
            resultado.push(array[i]);
        }
    }

    return resultado;
}

console.log(deleteDuplicates([1,2,2,3,4,4,5]));