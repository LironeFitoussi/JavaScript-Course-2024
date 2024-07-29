'use strict';
const Person = function(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
    // console.log(this);

    // Never do this
    // imagine you create 1000 objects, then you will have 1000 copies of this function
    // this.calcAge = function() {
    //     console.log(2024 - this.birthYear);
    // }
};

const jonas = new Person('Jonas', 1991);
// console.log(jonas); // Person {firstName: "Jonas", birthYear: 1991}

// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
// console.log(matilda); // Person {firstName: "Matilda", birthYear: 2017}

const jack = new Person('Jack', 1975);
// console.log(jack); // Person {firstName: "Jack", birthYear: 1975}

// Check if jonas is an instance of Person
// console.log(jonas instanceof Person); // true

const jay = 'Jay';
// console.log(jay instanceof Person); // false