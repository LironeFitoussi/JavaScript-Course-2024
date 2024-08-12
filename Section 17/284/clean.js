'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

console.log(spendingLimits);

const getLimit = (user, limits) => limits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limits, cleanUser) ? 
    [...state, { value: -value, description, user: cleanUser }] 
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);

const checkExpenses = (state, limits) => 
  state.map(entry => 
    entry.value < -getLimit(limits, entry.user) ? 
    { ...entry, flag: 'limit' } 
    : entry);

const finalBudjet = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudjet);

const logBigExpenses = (limit, state) => {
  const output = state
    .filter(entry => entry.value <= -limit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  console.log(output);
};

console.log(newBudget3);
logBigExpenses(500, newBudget3);
