// // Example of falsy values
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log('You should get a job!');
// };

// let height = 0;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// };

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)'); //Missed
if (age == 18) console.log('You just became an adult :D (loose)'); //Get Logged


console.log('18' == 18); //Output: true
console.log('18' === 18); //Output: false

const favourite = Number(prompt('What is your favorite number?'))
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');