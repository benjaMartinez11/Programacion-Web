//Reciben una lista de números. Deben ordenar los números de menor a mayor según su valor absoluto.
//Eso quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.
//Por ejemplo, si reciben [5, -10, -2, -25, -7] deberían devolver [2, 5, 7, 10, 25].
//Pueden usar el método Math.abs(num) para obtener el valor absoluto de un número.

const numbers = [5, -10, -2, -25, -7, 1];
const numerosAbsolutos = [];

function sortAbsoluteNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const absulute = Math.abs(numbers[i]);
    numerosAbsolutos.push(absulute);
  }
  const sorted = numerosAbsolutos.sport((a, b) => a - b);
  return sorted;
  // código
}

console.log(sortAbsoluteNumbers(numbers));
