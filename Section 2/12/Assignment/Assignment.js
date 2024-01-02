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