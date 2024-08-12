import cloneDeep from 'lodash-es';
console.log('Start fetching data');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Data fetched');

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

// lodash-es and deepClone
const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        { product: 'milk', quantity: 2 },
    ],
    user: {
        loggedIn: true,
    },
};

const stateDeepClone = cloneDeep(state);
const stateClone = Object.assign({}, state);
console.log(stateClone.user.loggedIn);

if (module.hot) {
    module.hot.accept();
}

class Person {
    #greeting = 'Hey';
    constructor(name) {
        this.name = name;
        console.log(`${this.greeting}, ${this.name}`);
    }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));