// takes an array and returns an array of productnames
const getProductNames = (products) => {
  return products.map((product) => product.name);
};

// takes an array and returns an array of fruits
const getFruits = (products) => {
  return products.filter((product) => product.type === "fruit");
};

// takes an array and returns an array with specific types of products
const getType = (products, type) => {
  return products.filter((product) => product.type === type);
};

// takes an array and checks if the array contains a specific item (returns boolean)
const hasProduct = (products, name) => {
  return products.some((product) => product.name === name);
};

// takes an array and checks if every element in the array has a price higher than speficied (returns boolean)
const areAllMoreExpensive = (products, price) => {
  return products.every((product) => product.price > price);
};

const findProduct = (products, name) => {
  return products.find((product) => product.name === name);
};
