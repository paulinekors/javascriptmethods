// OBJECT METHODS - LEVEL ONE

// Instructions:
// Complete the functions below and check to see if your work is correct by
// running the tests in the testfile (open a terminal window and run
// "yarn watch" in the correct folder). All tests expect for the first one
// start with "xit", this means that only the first test will run and the
// rest will be skipped. When you are ready to run the next test, just
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
const getBorderCollie = (doggos) => doggos.borderCollie;
// Other options
// const getBorderCollie = (doggos) => doggos["borderCollie"];
// const getBorderCollie = (doggos) => {
//   return doggos.borderCollie;
// };

// Returns a siberian husky
const getSiberianHusky = (doggos) => doggos["siberianHusky"];

// Returns an array of doggos keys
const getDoggosKeys = (doggos) => {
  return Object.keys(doggos);
};

const getDoggosValues = (doggos) => {
  return Object.values(doggos);
};

// Returns the doggo object but changes the fluffLevel of all doggos to 10
const getDoggosMaxFluff = (doggos) =>
  // Option 1
  //   Object.entries(doggos) // turns {doggos} into [doggos]
  //     .map(([doggo, props]) => [doggo, { ...props, fluffLevel: 10 }]) // sets fluffLevel to max
  //     .reduce((acc, [doggo, props]) => ({ ...acc, [doggo]: props }), {}); // change [doggos] back to {doggos}

  // Option 2
  Object.entries(doggos).reduce(
    (acc, [doggo, props]) => ({
      ...acc,
      [doggo]: { ...props, fluffLevel: 10 },
    }),
    {}
  );

// Returns the doggo object but adds another key "enemy" with value "cat"
const getDoggosEnemy = (doggos) =>
  // Option 1
  //   Object.entries(doggos)
  //     .map(([doggo, props]) => [
  //       doggo,
  //       {
  //         ...props,
  //         enemy: "cats",
  //       },
  //     ])
  //     .reduce((acc, [doggo, props]) => ({ ...acc, [doggo]: props }), {});

  // Option 2
  Object.entries(doggos).reduce(
    (acc, [doggo, props]) => ({
      ...acc,
      [doggo]: {
        ...props,
        enemy: "cats",
      },
    }),
    {}
  );

// Returns the doggo object but adds a hobby "hide and treat" to the hobbies array for all doggos
const getDoggosExtraHobby = (doggos) =>
  Object.entries(doggos).reduce(
    (acc, [doggo, props]) => ({
      ...acc,
      [doggo]: {
        ...props,
        hobbies: [...props.hobbies, "hide and treat"],
      },
    }),
    {}
  );

// Returns the doggo object but leaves out one specified breed
const getDoggosExcludingBreed = (doggos, excludingBreed) => {
  return Object.entries(doggos)
    .filter(([_doggo, { breed }]) => breed !== excludingBreed)
    .reduce((acc, [doggo, props]) => ({ ...acc, [doggo]: props }), {});
};

// Returns the doggo object but leaves out one OR more specified breeds
const getDoggosExcludingBreeds = (doggos, excludingBreeds) => {
  return Object.entries(doggos)
    .filter(([_doggo, { breed }]) => !excludingBreeds.includes(breed))
    .reduce((acc, [doggo, props]) => ({ ...acc, [doggo]: props }), {});
};

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
