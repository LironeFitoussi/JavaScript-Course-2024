'strict mode';

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2)
// rest.clear();

const arr = [1, 2]
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));



// Map Anagram

// const isAnagram = function (word1, word2) {
//   const word1Map = new Map();
//   const word2Map = new Map();

//   word1 = word1.toLowerCase();
//   word2 = word2.toLowerCase();

//   for (const letter of word1) {
//     word1Map.set(letter, word1Map.get(letter) + 1 || 1);
//   }

//   for (const letter of word2) {
//     word2Map.set(letter, word2Map.get(letter) + 1 || 1);
//   }

//   if (word1Map.size !== word2Map.size) return false;

//   for (const [key, value] of word1Map) {
//     if (word2Map.get(key) !== value) return false;
//   }

//   return true;
// }

// isAnagram('Lirone', 'Enoril'); // true
