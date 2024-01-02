let isJavaScriptFun = true;
isJavaScriptFun = 'yes';
let age = 30;
age = 31; // Mutating the variable

const birthYear = 1991;

// birthYear = 1990;
/*
Output:
script.js:7 Uncaught TypeError: Assignment to constant variable.
    at script.js:7:11
*/
// birthYear = 1990;

// const myJob;
/*
Output:
script.js:15 Uncaught SyntaxError: Missing initializer in const declaration (at script.js:15:7)
*/

var job = 'programmer';
job = 'teacger';

// Not Recomended
lastName = 'fitoussi'
console.log(lastName);