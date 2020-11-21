// ARRAY METHODS - LEVEL THREE

// Instructions:
// Complete the functions below and check to see if your work is correct by
// running the tests in the testfile (open a terminal window and run
// "yarn watch" in the correct folder). All tests expect for the first one
// start with "xit", this means that only the first test will run and the
// rest will be skipped. When you are ready to run the next test, just
// remove the "x" (so it says "... it("assumption")...".)
// You can find all array methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// You can find the answers in the answers file, but please try to solve it first without checking the answers

// HINT: You could use map, filter, sort, some, join

const friends = [
  {
    id: 1,
    firstName: "Rachel",
    lastName: "Green",
    friendsOnMySpace: 439,
    favoriteFood: ["S'mores", "Strawberry Cheesecake"],
  },
  {
    id: 2,
    firstName: "Ross",
    lastName: "Geller",
    friendsOnMySpace: 222,
    favoriteFood: ["Lasagna", "Pancakes", "Lemon Cheesecake"],
  },
  {
    id: 3,
    firstName: "Joey",
    lastName: "Tribbiani",
    friendsOnMySpace: 929,
    favoriteFood: ["Pizza", "Campbell's Tomato Soup", "Non Shareable Food"],
  },
  {
    id: 4,
    firstName: "Chandler",
    lastName: "Bing",
    friendsOnMySpace: 102,
    favoriteFood: ["Philly Cheese Steak", "Hamburger", "Pop Tarts"],
  },
  {
    id: 5,
    firstName: "Monica",
    lastName: "Geller",
    friendsOnMySpace: 565,
    favoriteFood: ["Applepie", "Grandma's Cookies", "Cheez-It"],
  },
  {
    id: 6,
    firstName: "Gunther",
    lastName: null,
    friendsOnMySpace: 7,
    favoriteFood: ["Pancakes", "Tater Tots"],
  },
];

// Returns sorted friends in descending order of number of friendsOnMySpace and changes id to luckyNumber
const getByPopularity = (friends) => {};

// Returns an array of friends that have the word "cheese" in their favoriteFoods
const getCheeseLovers = (friends) => {};

// Returns an array of all friends containing only their firstname and lastname
const getNames = (friends) => {};

// Returns an array with friends containing only their firstname and the first word of their first favorite food
const getNewNames = (friends) => {};

// Returns an array with friends listing their new name (as listed above) and their old name
const getNewAndOldNames = (friends) => {};

// Lets you change a last name to a new last name (returns an array)
const getChangedLastName = (friends, lastName, changedLastName) => {};

module.exports = {
  getNames,
  friends,
  getNewNames,
  getNewAndOldNames,
  getChangedLastName,
  getByPopularity,
  getCheeseLovers,
};
