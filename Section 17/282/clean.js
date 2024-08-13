const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const getLimit = user => spendingLimits[user] ?? 0;

const addExpense = function (value, description, user = 'jonas') {
  // if (!user) user = 'jonas'; //! Replaced by default parameter in function
  user = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  //! Replaced by the following line that uses the OR operator
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  // Can also be written using getLimit function
  // Can also be written like this using the AND operator and the nullish coalescing operator
  // const limit = spendingLimits?.[user] ?? 0;

  // if (value <= lim) {
  //   budget.push({ value: -value, description: description, user: user });
  // }

  //! Replaced by the following line that uses the AND operator, and the default parameter in the function
  value <= getLimit(user) &&
    budget.push({
      value: -value,
      description,
      user,
    });
};

addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');

// 1. Changed from el to entry
const check = function () {
  for (let entry of budget) {
    // let lim;
    // if (spendingLimits[entry.user]) {
    //   lim = spendingLimits[entry.user];
    // } else {
    //   lim = 0;
    // }
    //! Replaced by the following line that uses the OR operator

    // const limit = spendingLimits[entry.user] ? spendingLimits[entry.user] : 0;
    // Can also be written using getLimit function

    // if (entry.value < -lim) {
    //   entry.flag = 'limit';
    // }
    //! Replaced by the following line that uses the AND operator

    entry.value < -getLimit(entry.user) && (entry.flag = 'limit');
  }
};
check();


const logBigExpenses = function (limit) {
  let output = '';
  for (let entry of budget) {
    // if (entry.value <= -limit) {
    //   // output += entry.description.slice(-2) + ' / '; // Emojis are 2 chars
    //   //! Replaced by the following line that uses the template literal
    //   output += `${entry.description.slice(-2)} / `;
    // }
    //! Replaced by the following line that uses the AND operator
    entry.value <= -limit && (output += `${entry.description.slice(-2)} / `);
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(500);