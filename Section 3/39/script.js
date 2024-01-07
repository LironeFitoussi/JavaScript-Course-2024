const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends); //Output: (3) ['Michael', 'Steven', 'Peter']
// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); //Output: Michael

console.log(friends.length); //Output: 3
console.log(friends[friends.length - 1]); //Output: Peter

friends[2] = 'Jay';
console.log(friends); //Output: (3) ['Michael', 'Steven', 'Jay']

const firstName = "Jonas"
const jonas = [firstName, "Schmedtmann", 2021 - 1991, 'teacher', friends];
console.log(jonas); // ["Jonas", "Schmedtmann", 30, "teacher", ["Michael", "Steven", "Jay"]]

console.log(jonas.length);

// Exercise
const calcAge = (birthYear) => {
    return 2021 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years)); //Output: NaN
console.log(years + 10); //Output: '1990,1967,2002,2010,201810'

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3); //31 54 3

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages); //(3) [31, 54, 3]