import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// node_modules/lodash/cloneDeep/index.js

const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        { product: 'milk', quantity: 2 },
    ],
    user: {
        loggedIn: true,
    },
};

const stateClone = Object.assign({}, state);
const updatedCart = cloneDeep(state);
console.log(stateClone.user.loggedIn);

state.user.loggedIn = false;

console.log(stateClone.user.loggedIn);
console.log(updatedCart.user.loggedIn);

if (module.hot) {
    module.hot.accept();
}