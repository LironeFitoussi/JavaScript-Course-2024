const lirone = [
  "Lirone",
  "Fitoussi",
  2024 - 1991,
  "student",
  ["Michael", "Peter", "Steven"],
];

const types = [];
for (let i = 0; i < lirone.length; i++) {
  console.log(lirone[i], typeof lirone[i]);
  // types[i] = typeof lirone[i];
  types.push(typeof lirone[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  let thisYear = new Date().getFullYear();
  ages.push(thisYear - years[i]);
}

console.log(ages);

// continue and break
console.log(" --- ONLY STRINGS --- ");
for (let i = 0; i < lirone.length; i++) {
  if (typeof lirone[i] !== "string") continue;

  console.log(lirone[i]), typeof lirone[i];
}

console.log(" --- BREAK WITH NUMBER --- ");
for (let i = 0; i < ages.length; i++) {
  if (typeof lirone[i] === "number") break;

  console.log(lirone[i]), typeof lirone[i];
}

// console.log(lirone[0]);
// console.log(lirone[1]);
// ...
// console.log(lirone[4]);
// lirone[5] does NOT exist
