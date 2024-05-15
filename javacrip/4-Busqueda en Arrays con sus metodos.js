//Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con la
//letra "a" y false si al menos una palabra no termina con la letra "a".

const array = ["carpa", " tormenta", "casa"];
const sinA = ["pepe", "carlos", "juan"];

function terminanEnA(words) {
  // código
  const terminanEnA = words.every((word) => word.endsWith("a"));
  return terminanEnA;
}
console.log(terminanEnA(array));
