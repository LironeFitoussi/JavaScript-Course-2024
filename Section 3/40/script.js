const friends = ['Michael', 'Steven', 'Peter'];

// Add Elements
const newLength = friends.push('Jay');
console.log(friends); // (4) ['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); // 4

friends.unshift('John')
console.log(friends); // (5) ['John', 'Michael', 'Steven', 'Peter', 'Jay']

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped); // Peter
console.log(friends); // (3) ['John', 'Michael', 'Steven']

friends.shift() //First
console.log(friends); // (2) ['Michael', 'Steven']

console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1

friends.push(23);
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
console.log(friends.includes('23')); // false
console.log(friends.includes(23)); // true

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}




