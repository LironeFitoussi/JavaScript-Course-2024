'use strict';
function calcAge(birthYear) {
    const age = (new Date).getFullYear() - birthYear
    // console.log(firstName);

    function printAge() {
        const output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);
        }

        // console.log(str);
        console.log(millenial);
    }

    printAge()

    return age
}

const firstName = 'Lirone';
calcAge(1991)