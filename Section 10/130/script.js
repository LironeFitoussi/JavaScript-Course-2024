'use strict';

const flight = 'LH234';
const lirone = {
  name: "Lirone Fitoussi",
  passport: 328624879
};

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999'
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 328624879) {
    alert("Check in")
  } else {
    alert('Wrong passport')
  }
}

checkIn(flight, lirone)
console.log(flight);
console.log(lirone);

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 10000000000)
};

newPassport(lirone)
checkIn(flight, lirone)
console.log(lirone);