// // Importing module

// import "./shoppingCart.js";
// console.log("Importing module");
// console.log(shippingCost); //! Uncaught ReferenceError: shippingCost is not defined

///////////////////////////////
// The import statement does not import the default export of the module, but only the named exports.
// Importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// console.log("Importing module");

// import * as ShoppingCart from "./shoppingCart.js";

// const cartObject = {...ShoppingCart};
// console.log(ShoppingCart);
// ShoppingCart.addToCart("Banana", 6);
// addToCart("bread", 5);
// console.log(cartObject);
// console.log(price, tq);


// Default imports
// import add from "./shoppingCart.js";
// add("pizza", 2);

///////////////////////////////
console.log("IMPORTING module");
import add, { cart }  from "./shoppingCart.js";
add("pizza", 2);
add("bread", 5);
add("apple", 4);

console.log(cart);