'use strict';

const express = require('express');
const app = express();

//middleware
const logger = require('morgan');
app.use(logger('dev'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//routes
app.get("/api/days/:day", ((req, res) => {
  const daysOfWeek = {monday: 1, tuesday:2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7};
  const day = req.params.day.toLowerCase();
  res.set("Content-Type", "application/text");
    if (daysOfWeek.hasOwnProperty(day)) {
      const number = daysOfWeek[day];
      res.send(`${number}`);
    } else {
      res.status(400);
      res.send("'" + day + "' is not a valid day!");
    }
}));

app.post("/api/array/concat", (req, res) => {
  res.set("Content-Type", "application/json");
  const array1 = req.body.array1;
  const array2 = req.body.array2;
  if(Array.isArray(array1) && Array.isArray(array2)) {
    const arrayToSend = array1.concat(array2);
    res.send({"result": arrayToSend});
  } else {
    res.status(400);
    res.send({"error": "Input data should be of type Array."});
  }
});

app.listen(3000, console.log("Hi there! I'm ready!"));
