'use strict';

//grabbing elements
const numberInCartEl = document.getElementById("cart-item-count");
const addToCartButtons = document.querySelectorAll(".add_to_cart");
const cartButtonEl = document.getElementById("cart-button");

//Clicking on "Add to cart" will update the number displayed next to the "Cart" button to show the total number of items in the user's cart
let numberInCart = 0;
numberInCartEl.innerHTML = `(${numberInCart})`;

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    numberInCart += 1;
    numberInCartEl.innerHTML = `(${numberInCart})`;
  });
});

//20: Clicking on the "Cart" button will show the cart modal with a list of all items added

cartButtonEl.addEventListener("click", () => {
  console.log("clicked");
});
//20: Clicking on the "Clear" button in the cart modal removes all items from the cart
//20: Clicking on the "X" button in the cart modal closes the modal
//20: The "Total" in the cart modal shows the calculated sum of all item prices
