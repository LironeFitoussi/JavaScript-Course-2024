// const dolphinsAvg = (96 + 108 + 89) / 3;
// console.log(dolphinsAvg);

// const koalasAvg = (88 + 91 + 110) / 3;
// console.log(koalasAvg);

// if (dolphinsAvg > koalasAvg) {
//     console.log('Dolphins win the trophy');
// } else if (koalasAvg > dolphinsAvg) {
//     console.log('Koalas win the trophy');
// } else {
//     console.log('Both win the trophy');
// }


// // BONUS 1
// const dolphinsAvg = (97 + 112 + 101) / 3;
// console.log(dolphinsAvg);

// const koalasAvg = (109 + 95 + 123) / 3;
// console.log(koalasAvg);

// if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
//     console.log('Dolphins win the trophy');
// } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
//     console.log('Koalas win the trophy');
// } else {
//     console.log('Both win the trophy');
// }

// BONUS 2
const dolphinsAvg = (97 + 112 + 101) / 3;
console.log(dolphinsAvg);

const koalasAvg = (109 + 95 + 106) / 3;
console.log(koalasAvg);

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log('Dolphins win the trophy');
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    console.log('Koalas win the trophy');
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No one wins the trophy 😭');
}