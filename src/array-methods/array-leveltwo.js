// ARRAY METHODS - LEVEL TWO

// Instructions:
// Complete the functions below and check to see if your work is correct by
// running the tests in the testfile (open a terminal window and run
// "yarn watch" in the correct folder). All tests expect for the first one
// start with "xit", this means that only the first test will run and the
// rest will be skipped. When you are ready to run the next test, just
// remove the "x" (so it says "... it("assumption")...".)
// You can find all array methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// You can find the answers in the answers file, but please try to solve it first without checking the answers

const queens = [
  {
    firstName: "Bianca",
    lastName: "del Rio",
    nickname: "Not Today Satan",
    age: 37,
    favoriteSong: "Sissy That Walk",
  },
  {
    firstName: "Kim",
    lastName: "Chi",
    nickname: "No Tea No Shade",
    age: 34,
    favoriteSong: "Kitty Girl",
  },
  {
    firstName: "Victoria",
    lastName: "Parker",
    nickname: "Porkchop",
    age: 57,
    favoriteSong: "Call Me Mother",
  },
  {
    firstName: "Trinity",
    lastName: "Taylor",
    nickname: "The Tuck",
    age: 21,
    favoriteSong: "Sissy That Walk",
  },
  {
    firstName: "Latrice",
    lastName: "Royale",
    nickname: "Large And In Charge",
    age: 41,
    favoriteSong: "Peanut Butter",
  },
];

// takes an array and returns an array of queens listing firstName and lastName
const getQueensNames = (queens) => {};

// takes an array and returns an array of queens listing firstName "nickname" lastName
const getQueensNicknames = (queens) => {};

// takes an array and returns combined age of all queens (returns a number)
const getCombinedAgeQueens = (queens) => {};

// takes an array and returns an array of queens whose favorite song is "Kitty Girl", "Peanut Butter" or "Call Me Mother"
const getFavoriteSongs = (queens) => {};

// takes an array and shows all info except for age (returns an array)
const getQueensWithoutAge = (queens) => {};

// takes an array and lets you rename favoriteSong to favoriteMovie (returns an array)
const getRenamedFavorite = (queens) => {};

// takes an array and lets you count the number of queens whose favoriteSong is "Sissy That Walk" (returns a number)
const getTotalFavoriteSong = (queens, song) => {};

// takes an array and lets you change Latrice's nickname to "Chunky Yet Funky" and Kim's nickname to "Shadier Than A Palmtree" (returns an array)
const getNickNameChange = (queens) => {};

module.exports = {
  queens,
  getQueensNames,
  getQueensNicknames,
  getCombinedAgeQueens,
  getFavoriteSongs,
  getQueensWithoutAge,
  getRenamedFavorite,
  getTotalFavoriteSong,
  getNickNameChange,
};
