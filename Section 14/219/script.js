'use strict';
const Person = function (firstName, birthYear) {  
  this.firstName = firstName;
  this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
  //! this.firstName = firstName; // Duplicated code
  //! this.birthYear = birthYear; // Duplicated code
  Person.call(this, firstName, birthYear); // behind the scenes, this is what happens: new Person(firstName, birthYear)
  this.course = course;
}

Student.prototype = Object.create(Person.prototype); // Linking prototypes

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge(); // 17

console.log(mike.__proto__); // Student.prototype
console.log(mike.__proto__.__proto__); // Person.prototype

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); // Person