/* Activity class by teacher */

const obj = [
  {
    pera: 2,
    manzana: 5,
    carne: 2,
  },
  {
    jugos: 2,
    dulces: 3,
    huevos: 4,
  },
];

const [primeraPos, segundaPos] = obj.map((chart) => Object.keys(chart));
const allProds = [...primeraPos, ...segundaPos];
console.table(allProds);

const prodValues = obj.map((chart) => Object.values(chart));
const prodValuesToSum = prodValues.flat();
const totalProds = prodValuesToSum.reduce((acc, cur) => (acc += cur), 0);
console.log(totalProds);
