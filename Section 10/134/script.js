'use strict';

function randomNum() {
  return Math.trunc(Math.random() * 100000000)
}
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function () {},
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name
    })
  },
  
}

lufthansa.book(randomNum(), "Jonas Shmedtmann")
lufthansa.book(randomNum(), "Lirone Fitoussi")

console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
}

const book = lufthansa.book
// Does not work
// book(randomNum(), 'Jojo Benshushan')

book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings);

book.call(lufthansa, randomNum(), 'Marry Cooper')
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
}

book.call(swiss, randomNum(), "Jhonny Depp")