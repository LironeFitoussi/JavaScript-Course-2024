const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2024 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};


console.log(jonas);
console.log(jonas.lastName); // Schmedtmann
console.log(jonas['lastName']); // Schmedtmann

const nameKey = 'Name'
console.log(jonas["first" + nameKey]); // Jonas
console.log(jonas["last" + nameKey]); // Schmedtmann

// console.log(jonas."last" + nameKey); // illegal
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.');
console.log(jonas[interestedIn]); // Return a String

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.');
};

jonas.location = 'Portugal';
jonas['twitter'] = '@Jonasschmedtman';

console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael."
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);