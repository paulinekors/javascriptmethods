// LODASH METHODS - LEVEL ONE

// Instructions:
// Complete the functions below and check to see if your work is correct by
// running the tests in the testfile (open a terminal window and run
// "yarn watch" in the correct folder). All tests expect for the first one
// start with "xit", this means that only the first test will run and the
// rest will be skipped. When you are ready to run the next test, just
// remove the "x" (so it says "... it("assumption")...".)
// You can find all lodash methods here: https://lodash.com/docs/4.17.15
// You can find the answers in the answers file, but please try to solve it first without checking the answers

// HINT: You could use intersection, union, uniq, difference

const _ = require("lodash");

const britneysFavorites = [
  "Livin' La Vida Loca",
  "What is Love?",
  "Baby Got Back",
  "No Diggity",
];

const mariahsFavorites = [
  "Waiting for Tonight",
  "Waterfalls",
  "No Diggity",
  "Ice Ice Baby",
];

const christinasFavorites = [
  "Jump",
  "MMMBop",
  "Waterfalls",
  "Baby Got Back",
  "No Diggity",
];

// Returns an array of items that are present in all of the specified arrays
const getEveryonesFavs = () => {};

// Returns an array of all unique songs (removes duplicates)
const getUniqueSongs = () => {};

// Returns an array of songs that are Britney's favorites but NOT Mariak's favorites
const getBritneyVsMariah = () => {};

module.exports = {
  britneysFavorites,
  mariahsFavorites,
  christinasFavorites,
  getEveryonesFavs,
  getUniqueSongs,
  getBritneyVsMariah,
};
