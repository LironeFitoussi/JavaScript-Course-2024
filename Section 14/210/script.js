'use strict';
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

// Prototypes
Person.prototype.calcAge = function() {
    console.log(2024 - this.birthYear);
}

console.log(Person.prototype); // {calcAge: ƒ, constructor: ƒ}

jonas.calcAge(); // 33
matilda.calcAge(); // 7
jack.calcAge(); // 49

// __proto__ of jonas is Person.prototype
console.log(jonas.__proto__); // {calcAge: ƒ, constructor: ƒ}
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(jack)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// The diffrence between __proto__ and prototype is that __proto__ is a property of each object, and it points to the prototype of that object. prototype is a property of a constructor function, and it points to the prototype of the objects created by that constructor function.

Person.prototype.species = 'Homosapiens';
console.log(jonas.species); // Homosapiens
console.log(matilda.species); // Homosapiens

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false