const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const Cart = require("../cart");
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// ========================================================

it("should return the area of a 5 by 6 rectangle", function () {
  const rect = utils.area(5,6);
  expect(rect).to.be.a('number');
  expect(rect).to.be.equal(30);

});

it("should return the area of a circle of radius 5", function () {
  const circle = utils.circleArea(5);
  expect(circle).to.be.a('number');
  expect(circle).to.be.equal(Math.PI * 25);
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

it("Should create a new (object) Item with name and price", function() {
  const cart = new Cart();
  cart.new("item", 5);
  expect(cart.cart).to.be.a('array');
  expect(cart.cart.length).to.be.equal(1);
  expect(cart.cart[0]).to.be.a('object');
  expect(cart.cart[0].name).to.be.a('string');
  expect(cart.cart[0].name).to.be.equal('item');
  expect(cart.cart[0].value).to.be.a('number');
  expect(cart.cart[0].value).to.be.equal(5);
});

it("Should return an array containing all items in cart", function() {
  const cart = new Cart();
  cart.new("item", 5);
  cart.new("item2", 6);
  cart.new("item3", 7);
  cart.new("item4", 8);
  const dump = cart.list();
  expect(dump).to.be.a('array')
  expect(dump.length).to.be.equal(4)
  expect(dump[0]).to.be.equal({name: 'item', value: 5})
  expect(dump[1]).to.not.equal(dump[0])
});

it("Should add a new item to the shopping cart", function() {
  const cart = new Cart();
  expect(cart.cart.length).to.be.equal(0)
  cart.new('item',5)
  expect(cart.cart.length).to.be.equal(1)
});

it("Should return the number of items in the cart", function() {
  const cart = new Cart();
  expect(cart.total()).to.be.equal(0)
  cart.new("item", 5);
  expect(cart.total()).to.be.equal(1)
  cart.new("item2", 6);
  expect(cart.total()).to.be.equal(2)
  cart.new("item3", 7);
  expect(cart.total()).to.be.equal(3)

});

it("Should remove items from cart", function() {
  const cart = new Cart();
  cart.new("item", 5);
  cart.new("item2", 6);
  expect(cart.total()).to.be.equal(2)
  cart.remove(0)
  expect(cart.total()).to.be.equal(1)
});

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart");

it("Should validate that an empty cart has 0 items", function() {
  const cart = new Cart();
});

it("Should return the total cost of all items in the cart", function() {
  const cart = new Cart();
  expect(card.cost()).to.be.equal(0)
  cart.new("item", 5);
  expect(card.cost()).to.be.equal(5)
  cart.new("item2", 6);
  expect(card.cost()).to.be.equal(11)
});
