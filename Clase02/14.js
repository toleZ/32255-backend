const numbers = [2, 4, 6, 8];

const cuadrados = numbers.map((number) => number ** 2);
console.log(cuadrados);

const numerToFind = 16;
const incluye = cuadrados.includes(numerToFind);
console.log(
  `El valor ${numerToFind} se está buscando en el array [${cuadrados}] y el resultado es ${incluye}`
);
