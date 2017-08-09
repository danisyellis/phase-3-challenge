'use strict';

//grabbing elements
const numberInCartEl = document.getElementById("cart-item-count");
const addToCartButtons = document.querySelectorAll(".add_to_cart");
const cartButtonEl = document.getElementById("cart-button");
const modalEl = document.getElementById('modal');
const closeModalEl = document.querySelectorAll('.close')[0];
const clearButtonEl = document.getElementById('clear');
const cartItemsListEl = document.getElementById('cart_items_list');
const totalPriceEl = document.getElementById('total_price');

//other variables I'll be using
let numberInCart = 3;
let itemsInCart = [{name:"Onions", price: 1.11}, {name:"Ice Cream", price: 14.08}, {name:"Orange Juice", price: 2.52}];
let totalPrice = 0;

//Clicking on "Add to cart" will update the number displayed next to the "Cart" button to show the total number of items in the user's cart
numberInCartEl.innerHTML = `(${numberInCart})`;

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    numberInCart += 1;
    numberInCartEl.innerHTML = `(${numberInCart})`;
    itemsInCart.push({item: "the item attached to this button"});
    console.log(itemsInCart)
  });
});

//20: Clicking on the "Cart" button will show the cart modal with a list of all items added

cartButtonEl.addEventListener("click", () => {
  cartItemsListEl.innerHTML = "";
  itemsInCart.forEach(item => {
    let li = document.createElement("LI");
    let name = document.createTextNode(item.name + "                 " + item.price);
    li.appendChild(name);
    cartItemsListEl.appendChild(li);
  });
  modalEl.style.display = "block";
});
//20: Clicking on the "Clear" button in the cart modal removes all items from the cart
clearButtonEl.addEventListener("click", () => {
  itemsInCart = [];
  cartItemsListEl.innerHTML = itemsInCart;
  totalPrice = 0;
  totalPriceEl.innerHTML = totalPrice;
});

//20: Clicking on the "X" button in the cart modal closes the modal
  closeModalEl.addEventListener("click", () => {
    modalEl.style.display = "none";
  });

//20: The "Total" in the cart modal shows the calculated sum of all item prices
itemsInCart.forEach(item => {
  totalPrice = totalPrice + item.price;
});
totalPriceEl.innerHTML = totalPrice;
