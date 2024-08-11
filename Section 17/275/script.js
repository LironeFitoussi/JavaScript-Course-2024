// IIFE
const shoppingCart = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  // Exporting module
  return { 
    addToCart, 
    cart, 
    totalPrice,
    totalQuantity
   };
})();

shoppingCart.addToCart('apple', 4);
shoppingCart.addToCart('pizza', 2);
console.log(shoppingCart);
console.log(shoppingCart.shippingCost); //! undefined beacuse it is not exported