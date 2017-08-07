'use strict';

const express = require('express');
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

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

//app.post()

app.listen(3000, console.log("Hi there! I'm ready!"));
