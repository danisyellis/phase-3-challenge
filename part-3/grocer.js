'use strict';

//Clicking on "Add to cart" will update the number displayed next to the "Cart" button to show the total number of items in the user's cart
const numberInCartEl = document.getElementById("cart-item-count");
const cartButtonEl = document.getElementById("cart-button");
let numberInCart = 0;
numberInCartEl.innerHTML = `(${numberInCart})`;

cartButtonEl.addEventListener("click", () => {
  numberInCart += 1;
  numberInCartEl.innerHTML = `(${numberInCart})`;
});
