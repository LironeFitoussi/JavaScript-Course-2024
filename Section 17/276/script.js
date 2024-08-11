//  Export using CommonJS syntax // Available in Node.js only
export.addToCart = function(product, quantity) {
  // Add to cart logic here
  cart.push({product, quantity});
  console.log(
    `${quantity} ${product} added to cart (shipping cost is $${shippingCost})`
  );
}

// Import
const { addToCart } = require('./276/script.js');