const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Lirone'
const lastName = 'Fitoussi'
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x += 10; // Equivalent to x = x + 10 = 25
x *= 4;  // Equivalent to x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // = 100
x--; // = 99
console.log(x);

// Comparaison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);
console.log(now - 1991 > now - 2018);