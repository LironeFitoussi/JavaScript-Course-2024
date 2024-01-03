"use strict";

function calcAge1(birthYeah) {
    // const age = 2037 - birthYeah;
    // return age
    return 2037 - birthYeah;
}

const age1 = calcAge1(1999);

const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah
}

const age2 = calcAge2(1999)

console.log({ age1, age2 });
