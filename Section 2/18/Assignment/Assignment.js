const country = 'Israel'
const continent = 'Asia'
let population = 9
const isIsland = false
let language
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'Hebrew'
console.log(typeof language);

/*
country = 'France'
Output: Uncaught TypeError: Assignment to constant variable.
at Assignment.js:12:9
*/
console.log(population / 2);
// population++
console.log(population);

const finlandPopulation = 6
console.log(population > finlandPopulation);

const averagePopulation = 33
console.log(population < averagePopulation);

let description = 'Israel is in Asia, and its 9 million people speak Hebrew'
console.log(description);
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(description);

if (population > 33) {
    console.log(`${country} population is above average`);
} else {
    const populationDiff = averagePopulation - population
    console.log(`${country} population is ${populationDiff} million below average`);
}