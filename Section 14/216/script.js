'use strict';
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //? Instance methods
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

  //? Static methods
  // Static method - it is not inherited by the instances
  static hey() {
    console.log('Hey there!');
  }
}



Person.hey = function() {
  console.log('Hey there!');
  console.dir(this); // [Function: Person]
};

const person = new Person('Max Swhc', 30);

person.greet();
//! person.hey(); // Error: person.hey is not a function beacsue hey is a static method so it can be called on the class itself not on the instance of the class

Person.hey(); // Hey there! because hey is a static method so it can be called on the class itself not on the instance of the class

