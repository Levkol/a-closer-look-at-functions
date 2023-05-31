'use strict';
/*
/////////////////////Default paramters:
const bookings = [];

const createBooking = function (
  flightNumber,
  numberOfPassengers = 1,
  price = 199 * numberOfPassengers
) {
  // ES5
  //   numberOfPassengers = numberOfPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNumber,
    numberOfPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking(`LH123`);
createBooking(`LH123`, 2, 800);
createBooking(`LH123`, 2);
createBooking(`LH123`, 5);
createBooking(`LH123`, undefined, 1000);
*/
/*
/////////////////////Passing arguments:
const flight = `LH234`;
const jonas = {
  name: `Jonas Schmedtmann`,
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = `LH999`;
  passenger.name = `Mr.` + passenger.name;

  if (passenger.passport === 24739479284) {
    alert(`Chek in`);
  } else {
    alert(`Wrong passport!`);
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/

/////////////////////First-class and higher-order functions:
