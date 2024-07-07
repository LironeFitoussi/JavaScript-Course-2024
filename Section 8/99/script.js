'use strict';
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: "Lirone",
    age: 30
}

const friend = me;

friend.age = 27;
console.log("Friend: ", friend); // Friend:  – {name: "Lirone", age: 27}
console.log("Me: ", me); // Me:  – {name: "Lirone", age: 27}