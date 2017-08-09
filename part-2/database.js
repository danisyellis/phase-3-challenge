'use strict';

const pg = require('pg');
const db = new pg.Client('postgres://localhost:5432/grocery_store');
db.connect();

const getProducts = function(sectionName) {
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

const getOrdersForShopper = function(shopperID) {
  //lists the orders for a given shopper
  //also return an array? of prices of items in the order with that number
    //let's start by returning every item *
      //SELECT * FROM orders_products WHERE (join?) order_id = the thing I'm returning
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM orders WHERE shopper_id = $1::int', [shopperID])
    .then(data => {
      resolve(data.rows);
    })
    .catch(err => {
      reject(err);
    });
  });
};

const getAllRealShoppers = function() {
  //lists the names of all shoppers who have at least 1 order
  return new Promise((resolve, reject) => {
    db.query('SELECT shopper_id FROM orders')
    .then(data => {
      resolve(data.rows);
    })
    .catch(err => {
      reject(err);
    });
  });
};

const getShopperNames = function(shopperID) {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM shoppers WHERE id = $1::int', [shopperID])
    .then(data => {
      resolve(data.rows);
    })
    .catch(err => {
      reject(err);
    });
  });
};

module.exports = {getProducts, getOrdersForShopper, getAllRealShoppers, getShopperNames};
