'use strict';

const command = process.argv[2];
const argForCommand = process.argv[3];
const dbFuncs = require("./database.js");

const formatOutput = function(dataToFormat) {
  for(var i=0; i<dataToFormat.length; i++) {
    const addCorrectNumberOfSpacesForEachCommand = function(num, currentString) {
      while (currentString.length < num){
        currentString += " ";
      }
      currentString += "| ";
       return currentString;
    };

    let bodyString = "| ";
    for(var prop in dataToFormat[i]) {
      let propString = dataToFormat[i][prop].toString();
      switch (command) {
        case "product-list":
          propString = addCorrectNumberOfSpacesForEachCommand(13, propString);
        break;
        case "shopper-orders":
          propString = addCorrectNumberOfSpacesForEachCommand(12, propString);
        break;
        case "real-shoppers":
          propString = addCorrectNumberOfSpacesForEachCommand(17, propString);
        break;
      }
      bodyString += propString;
    }
    console.log(bodyString);
  }
};

switch(command) {
  case 'product-list':
    console.log('|--------------+--------------+');
    console.log('| Product Name | Section      |');
    console.log('|--------------+--------------+');
    dbFuncs.getProducts(argForCommand)
    .then(data => {
      formatOutput(data);
      console.log('|--------------+--------------+');
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
    console.log('|-------------+-------------|\n| order id    | total cost  |\n|-------------+-------------|');
    dbFuncs.getOrdersForShopper(argForCommand)
    .then(data => {
      formatOutput(data);
      console.log('|-------------+-------------|');
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
  console.log("|------------------+------------------|\n| shopper name     | number of orders |\n|------------------+------------------|");
    dbFuncs.getAllRealShoppers()
    .then(data => {
      formatOutput(data);
      console.log('|------------------+------------------|');
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
