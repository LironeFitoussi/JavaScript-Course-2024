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

budget[0].value = 10000; //! This will not work because the object is frozen

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.jay = 200; //! This will not work because the object is frozen
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

    // budget.push({
    //   value: -value,
    //   description,
    //   user: cleanUser,
    // });
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget3);

// const checkExpenses = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user) ? { ...entry, flag: 'limit' } : entry;
//   });

//   // for (let entry of budget) {
//   //   entry.value < -getLimit(limits, entry.user) && (entry.flag = 'limit');
//   // }
// };

const checkExpenses = (state, limits) => 
  state.map(entry => 
    entry.value < -getLimit(limits, entry.user) ? 
    { ...entry, flag: 'limit' } 
    : entry);

const finalBudjet = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudjet);

const logBigExpenses = (limit, state) => {
  // let output = '';
  // for (let entry of budget) {
  //   entry.value <= -limit && (output += `${entry.description.slice(-2)} / `);
  // }
  // output = output.slice(0, -2);
  const output = state
    .filter(entry => entry.value <= -limit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
    // .reduce((str, entry) => `${str}${entry.description.slice(-2)} / `, '')
  
  console.log(output);
};

console.log(newBudget3);
logBigExpenses(500, newBudget3);
