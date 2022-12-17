const password = "  djas@@fdasda.da*#   ";
const trimmedPassword = password.trim();

console.log(trimmedPassword);

const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]], [10, 11, 12]];
const flatArr = arr.flat(3);
console.log(flatArr);
