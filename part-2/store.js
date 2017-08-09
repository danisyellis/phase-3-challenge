'use strict';

const command = process.argv[2];
const argForCommand = process.argv[3];
const dbFuncs = require("./database.js");

const formatOutput = function(dataToFormat) {
  // const props = [];
  // for (var prop in dataToFormat[1]) {
  //   props.push(prop);
  // }
  // let headerString = "| ";
  // props.forEach((item) => {
  //   headerString = headerString + item + " | ";
  // });
  // let stringForBorders = "|";
  // for(var i=3; i<headerString.length; i++) {
  //   stringForBorders += "-";
  // }
  // stringForBorders += "|";
  // console.log(stringForBorders);
  // console.log(headerString);
  // console.log(stringForBorders);
  for(var i=0; i<dataToFormat.length; i++) {
    let bodyString = "| ";
    for(var prop in dataToFormat[i]) {
      bodyString = bodyString + dataToFormat[i][prop] + " | ";
    }
    console.log(bodyString);
  }
};

switch(command) {
  case 'product-list':
    console.log('|--------------+---------+');
    console.log('| Product Name | Section |');
    console.log('|--------------+---------+');
    dbFuncs.getProducts(argForCommand)
    .then(data => {
      formatOutput(data);
      console.log('|--------------+---------+');
    })
    .then(() => {
      process.exit();
    })
    .catch((err) => {
      console.error(err.message);
    })
    .then(() => {
      process.exit();
    });
  break;
  case 'shopper-orders':
    console.log('|----------+------------|\n| order id | total cost |\n|----------+------------|');
    dbFuncs.getOrdersForShopper(argForCommand)
    .then(data => {
      formatOutput(data);
      console.log('|----------+------------|');
    })
    .then(() => {
      process.exit();
    })
    .catch((err) => {
      console.error(err.message);
    })
    .then(() => {
      process.exit();
    });
  break;
  case 'real-shoppers':
  console.log("|--------------+------------------|\n| shopper name | number of orders |\n|--------------+------------------|");
    dbFuncs.getAllRealShoppers()
    .then(data => {
      formatOutput(data);
      console.log('|--------------+------------------|');
    })
    .then(() => {
      process.exit();
    })
    .catch((err) => {
      console.error(err.message);
    })
    .then(() => {
      process.exit();
    });
  break;
}
