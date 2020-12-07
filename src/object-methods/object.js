// OBJECT METHODS

// Instructions:
// Complete the functions below and check to see if your work is correct by
// running the tests in the testfile (open a terminal window and run
// "yarn watch" in the correct folder). All tests start with "xit",
// this means that they will be skipped. When you are ready to run a test, just
// remove the "x" (so it says "... it("assumption")...".)
// You can find all object methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// You can find the answers in the answers file, but please try to solve it first without checking the answers

// HINT: You could use Object.keys, Object.values, Object.entries and all array methods that we practised in array methods

const doggos = {
  goldenRetriever: {
    breed: "Retriever",
    fluffLevel: 9,
    hobbies: ["swimming", "cuddling"],
  },
  borderCollie: {
    breed: "Collie",
    fluffLevel: 8,
    hobbies: ["herding sheep", "playing frisbee"],
  },
  jackRussel: {
    breed: "Terrier",
    fluffLevel: 4,
    hobbies: ["stealing food"],
  },
  japaneseAkita: {
    breed: "Spitz",
    fluffLevel: 9,
    hobbies: ["long walks", "guarding the family"],
  },
  siberianHusky: {
    breed: "Spitz",
    fluffLevel: 7,
    hobbies: ["pulling the sled", "paragliding"],
  },
};

// Returns a border collie
const getBorderCollie = (doggos) => {};

// Returns a siberian husky
const getSiberianHusky = (doggos) => {};

// Returns an array of doggos keys
const getDoggosKeys = (doggos) => {};

// Returns an array of doggos values
const getDoggosValues = (doggos) => {};

// Returns the doggo object but changes the fluffLevel of all doggos to 10
const getDoggosMaxFluff = (doggos) => {};

// Returns the doggo object but adds another key "enemy" with value "cat"
const getDoggosEnemy = (doggos) => {};

// Returns the doggo object but adds a hobby "hide and treat" to the hobbies array for all doggos
const getDoggosExtraHobby = (doggos) => {};

// Returns the doggo object but leaves out one specified breed
const getDoggosExcludingBreed = (doggos, excludingBreed) => {};

// Returns the doggo object but leaves out one OR more specified breeds
const getDoggosExcludingBreeds = (doggos, excludingBreeds) => {};

module.exports = {
  doggos,
  getBorderCollie,
  getSiberianHusky,
  getDoggosKeys,
  getDoggosValues,
  getDoggosMaxFluff,
  getDoggosExtraHobby,
  getDoggosEnemy,
  getDoggosExcludingBreed,
  getDoggosExcludingBreeds,
};
