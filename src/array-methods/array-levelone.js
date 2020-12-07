// ARRAY METHODS - LEVEL ONE

// Instructions:
// Complete the functions below and check to see if your work is correct by
// running the tests in the testfile (open a terminal window and run
// "yarn watch" in the correct folder). All tests start with "xit",
// this means that they will be skipped. When you are ready to run a test, just
// remove the "x" (so it says "... it("assumption")...".)
// You can find all array methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// You can find the answers in the answers file, but please try to solve it first without checking the answers

// HINT: You could use map, filter, some, every or find

const products = [
  { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
  { name: "banana", type: "fruit", quantity: 10, price: 15 },
  { name: "celery", type: "vegetable", quantity: 30, price: 13 },
  { name: "orange", type: "fruit", quantity: 3, price: 2 },
];

// takes an array and returns an array of productnames
const getProductNames = (products) => {};

// takes an array and returns an array of fruits
const getFruits = (products) => {};

// takes an array and returns an array with specific types of products
const getType = (products, type) => {};

// takes an array and checks if the array contains a specific item (returns boolean)
const hasProduct = (products, name) => {};

// takes an array and checks if every element in the array has a price higher than speficied (returns boolean)
const areAllMoreExpensive = (products, price) => {};

const findProduct = (products, name) => {};

module.exports = {
  products,
  getProductNames,
  getFruits,
  getType,
  hasProduct,
  areAllMoreExpensive,
  findProduct,
};
