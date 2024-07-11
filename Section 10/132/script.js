'use strict';

const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  };
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas')

// Challenge
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hello')('Jonas')
