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
  return new Promise((resolve, reject) => {
    db.query(`SELECT orders_products.order_id, SUM(products.price) FROM orders_products
     JOIN products ON (orders_products.product_id = products.id)
     JOIN orders ON (orders_products.order_id = orders.id)
     WHERE orders.shopper_id = $1::int
     GROUP BY orders_products.order_id`, [shopperID])
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
    db.query(`SELECT shoppers.name AS "shopper_name", COUNT(orders.id) AS "order_count" FROM shoppers
    JOIN orders ON (shoppers.id = orders.shopper_id)
    GROUP BY shoppers.name
    ORDER BY order_count`)
    .then(data => {
      resolve(data.rows);
    })
    .catch(err => {
      reject(err);
    });
  });
};

module.exports = {getProducts, getOrdersForShopper, getAllRealShoppers};
