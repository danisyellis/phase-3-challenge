'use strict';

const pg = require('pg');
const db = new pg.Client('postgres://localhost:5432/grocery_store');
db.connect();

const listProducts = function(sectionName) {
  //lists all products which belong to the given section
  return new Promise((resolve, reject) => {
    db.query('SELECT name, section FROM products WHERE section = $1::text', [sectionName])
    .then((dataFromDbCall) => {
      resolve(dataFromDbCall.rows);
    })
    .catch(err => {
      console.error("Oh hai from the db call. There's an error: "+err.message);
      reject(err);
    });
  });
};

const ordersForShopper = function(shopperID) {
  //lists the orders for a given shopper
};

const listAllRealShoppers = function() {
  //lists the names of all shoppers who have at least 1 order
};

module.exports = {listProducts, ordersForShopper, listAllRealShoppers};
