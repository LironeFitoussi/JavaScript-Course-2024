'use strict';

let count = 0;
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other];
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Lirone Fitoussi', upperFirstWord);
transformer('Lirone Fitoussi', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋🏻');
  count++
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5)