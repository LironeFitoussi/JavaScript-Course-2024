// ES2022 Top-Level Await
// The top-level await allows you to use the await keyword outside of an async function, which makes it easier to work with promises. but block the code execution until the promise is resolved.
// console.log("Starting");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts")
// const data = await res.json()

// console.log(data);
// console.log("Finished");
// Blockiing code
console.log('Start fetching data');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Data fetched');

// Executing the module from ./shoppingCart.js
import cart , { addToCart, totalPrice as price, tq } from './shoppingCart.js';
addToCart('bread', 5);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data[0].title, body: data[0].body };
};

const asyncObject = getLastPost();

console.log(asyncObject); // This will be printed before the data, because the code execution is blocked by the await keyword in the getLastPost function.
console.log('Finished'); // This will be printed first, because the code execution is blocked by the await keyword in the getLastPost function.
asyncObject.then((data) => console.log(data));

// Using lastPost function with async/await
const lastPost2  = await getLastPost();
console.log(lastPost2); // This will be printed after the data, because the code execution is blocked by the await keyword in the getLastPost function.

