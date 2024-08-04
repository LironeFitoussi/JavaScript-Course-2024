// class expertion
// const Person = function () {}

// class declaration
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  // Get Age
  get age() {
    return 2024 - this.birthYear;
  }

// Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new Person('Jessica Davis', 1996);
console.log(jessica);
console.log(jessica.birthYear);
console.log(jessica.__proto__ === Person.prototype);

// Person.prototype.greet = function () {
//     console.log(`Hey ${this.firstName}`);
// }

jessica.greet();

// 1. Classes are NOT hoisted: even if they are class declarations which is diffrent from function declarations that are hoisted.
// 2. Classes are first-class citizens: we can pass them into functions and return them from functions.
// 3. Classes are executed in strict mode: we don't need to write 'use strict' in classes.

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
console.log(account.latest = 50);
console.log(jessica.age);

const walter = new Person('Walter White', 1965);
console.log(walter);
console.log(walter.fullName);