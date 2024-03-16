const lirone = [
  "Lirone",
  "Fitoussi",
  2024 - 1991,
  "student",
  ["Michael", "Peter", "Steven"],
];

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
  rep++;
}

const roleDice = () => Math.trunc(Math.random() * 6) + 1;
let dice = roleDice();

console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = roleDice();
  dice === 6 && console.log("You roled 6, Loop is over");
}
