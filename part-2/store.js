'use strict';

const command = process.argv[2];
const argForCommand = process.argv[3];
const dbFuncs = require("./database.js");

//switch statement for the 3 cases (the 3 different commands)

dbFuncs.listProducts();  //this works, yay! It's all hooked up
