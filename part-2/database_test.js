'use strict';

const mocha = require('mocha');
const expect = require('chai').expect;
//const { expect } = require('chai');
const dbFuncs = require('./database.js');

describe("testing product-list", function() {
  it("returns items from the given section", function() {
    return dbFuncs.getProducts("frozen")
    .then(data => {expect(data[0].name).to.equal('Ice Cream');});
  });
  it("also returns the section name of the given section", function() {
    return dbFuncs.getProducts("frozen")
    .then(data => {expect(data[0].section).to.equal('frozen');});
  });
  it("returns all items in that section", function() {
    return dbFuncs.getProducts("frozen")
    .then(data => {expect(data.length).to.equal(3);});
  });
});

describe("testing shopper-orders", function() {
  it("returns the ids of orders for the given shopper", function() {
    return dbFuncs.getOrdersForShopper(1)
    .then(data => {expect(data[1].order_id).to.equal(3);});
  });
  it("returns all orders for the given shopper", function() {
    return dbFuncs.getOrdersForShopper(1)
    .then(data => {expect(data.length).to.equal(3);});
  });
  it("also returns the summed price of all items in each order", function() {
    return dbFuncs.getOrdersForShopper(1)
    .then(data => {expect(data[0].sum).to.equal('44.34');});
  });
});

describe("real-shoppers", function() {
  it("returns all shoppers that have made orders", function() {
    return dbFuncs.getAllRealShoppers()
    .then(data => {expect(data.length).to.equal(4);});
  });
  it("returns the names of shoppers that have made orders", function() {
    return dbFuncs.getAllRealShoppers()
    .then(data => {
      expect(data[0].shopper_name).to.equal("Dax");});
  });
  it("also returns the number of orders for each person", function() {
    return dbFuncs.getAllRealShoppers()
    .then(data => {
      expect(data[3].order_count).to.equal('3');});
  });
});
