'strict mode';

const question = new Map([
    ['question', 'What is the best programming language?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!']
]);

console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap);
console.log(question.get("question"));
for (const [key, value] of question) {
    typeof key === 'number' &&
    console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3
// console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Conver Map to Array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
