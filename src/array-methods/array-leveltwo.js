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

// HINT: You could use map, reduce, filter, includes, reduce

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
const getQueensNames = (queens) => {
  //   return queens.map((queen) => queen.firstName.concat(" ", queen.lastName));
  return queens.map((queen) => `${queen.firstName} ${queen.lastName}`);
};

// takes an array and returns an array of queens listing firstName "nickname" lastName
const getQueensNicknames = (queens) => {
  //   return queens.map((queen) => queen.firstName.concat(' "', queen.nickname).concat('" ', queen.lastName)
  return queens.map(
    (queen) => `${queen.firstName} "${queen.nickname}" ${queen.lastName}`
  );
};

// takes an array and returns combined age of all queens (returns a number)
const getCombinedAgeQueens = (queens) => {
  return queens.reduce((acc, current) => {
    return acc + current.age;
  }, 0);
};

// takes an array and returns an array of queens whose favorite song is "Kitty Girl", "Peanut Butter" or "Call Me Mother"
const FAVORITESONGS = ["Kitty Girl", "Peanut Butter", "Call Me Mother"];
const getFavoriteSongs = (queens) => {
  return queens.filter((queen) => FAVORITESONGS.includes(queen.favoriteSong));
};

// takes an array and shows all info except for age (returns an array)
const getQueensWithoutAge = (queens) => {
  return queens.map(({ age, ...rest }) => {
    return { ...rest };
  });
};

// takes an array and lets you rename favoriteSong to favoriteMovie (returns an array)
const getRenamedFavorite = (queens) => {
  return queens.map(({ favoriteSong: favoriteMovie, ...rest }) => {
    return { ...rest, favoriteMovie };
  });
};

// takes an array and lets you count the number of queens whose favoriteSong is "Sissy That Walk" (returns a number)
const getTotalFavoriteSong = (queens, song) => {
  return queens.reduce((acc, queen) => {
    if (queen.favoriteSong === song) return acc + 1;
    return acc;
  }, 0);
};

// takes an array and lets you change Latrice's nickname to "Chunky Yet Funky" and Kim's nickname to "Shadier Than A Palmtree" (returns an array)
const getNickNameChange = (queens) => {
  return queens.map((queen) =>
    queen.nickname === "Large And In Charge"
      ? { ...queen, nickname: "Chunky Yet Funky" }
      : queen && queen.nickname === "No Tea No Shade"
      ? { ...queen, nickname: "Shadier Than A Palmtree" }
      : queen
  );
};

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
