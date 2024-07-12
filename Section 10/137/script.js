'use strict';
const runOnce = function () {
  console.log('This will never run again');
};

// console.log(runOnce());

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

//! console.log(isPrivate); // ReferenceError

// Arrow function
(() => {
    console.log('This will ALSO never run again');
})();

{
    const isPrivate = 23;
    var notPrivate = 46;
}

//! console.log(isPrivate); // ReferenceError
//? console.log(notPrivate); // 46
