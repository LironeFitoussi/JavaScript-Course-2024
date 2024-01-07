/* Write your code below. Good luck! 🙂 */
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
        bill * 0.2;
};

// const calcTip1 = (bill) => bill >= 50 && bill <= 300 ?
//     bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
// tip1 = calcTip(bills[0])
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2]),
];

const totals = [
    bills[0] + tips[0],
    bills[0] + tips[0],
    bills[0] + tips[0]
]

console.log(bills, tips, totals); //(3) [125, 555, 44] (3) [18.75, 111, 8.8] (3) [143.75, 143.75, 143.75]

