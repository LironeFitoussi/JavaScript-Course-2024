const bill = 275;

/* Write your code below. Good luck! 🙂 */
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);