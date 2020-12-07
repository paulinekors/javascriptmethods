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

// Returns an array of doggos values
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
