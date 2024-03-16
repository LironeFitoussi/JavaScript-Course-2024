const lirone = [
  "Lirone",
  "Fitoussi",
  2024 - 1991,
  "student",
  ["Michael", "Peter", "Steven"],
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = lirone.length - 1; i >= 0; i--) {
  console.log(i, lirone[i]);
}

for (let exercise = 1; exercise <= 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
