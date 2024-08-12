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
  user = user.toLowerCase();

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

const check = function () {
  for (let entry of budget) {
    entry.value < -getLimit(entry.user) && (entry.flag = 'limit');
  }
};
check();


const logBigExpenses = function (limit) {
  let output = '';
  for (let entry of budget) {
    entry.value <= -limit && (output += `${entry.description.slice(-2)} / `);
  }
  output = output.slice(0, -2);
  console.log(output);
};

console.log(budget);
logBigExpenses(500);