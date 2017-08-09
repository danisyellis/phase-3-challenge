'use strict';

const mocha = require('mocha');
//const chai = require('chai').expect;
const { expect } = require('chai');
const dbFuncs = require('./database.js');

describe("testing product-list", function() {
  it("returns all products in a given section, along with the section name", function() {
    expect(dbFuncs.getProducts("frozen")).to.equal(5);
  });
});
