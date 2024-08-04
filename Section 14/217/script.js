'use strict';
// Object.create
//! Object.create(); // undefined because Object.create() is a static method so it can be called on the class itself not on the instance of the class

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven); // {} because Object.create() is a static method so it can be called on the class itself not on the instance of the class
steven.name = 'Steven';
steven.birthYear = 2002;
console.log(steven); // { name: 'Steven', birthYear: 2002 }
steven.calcAge(); // 22

// Object.create() is used to manually set the prototype of an object 
console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
console.log(sarah); // { firstName: 'Sarah', birthYear: 1979 }
sarah.calcAge(); // 45