// Returns two arrays: one with married princesses and one with princesses with other relationship statuses
const partitionPrincessesByRelationshipStatus = (princesses) => {
  return _.partition(
    princesses,
    (princess) => princess.relationshipStatus === "married"
  );
};

// Returns two arrays: one with introverted princesses (personalityType "I...") and one with extroverted princesses
const partitionPrincessesByPersonality = (princesses) => {
  return _.partition(
    princesses,
    (princess) => princess.personalityType.charAt(0) === "I"
  );
};

// Returns the princesses array with personalityType transformed to lowercase
const getPersonalityTypeLowerCase = (princesses) => {
  return _.map(princesses, (princess) => ({
    ...princess,
    personalityType: princess.personalityType.toLowerCase(),
  }));
};

// Returns the princesses array with extra key and value pair (waistSizeInCm: 25)
const getPrincessesWithWaist = (princesses) => {
  return _.map(princesses, (princess) => ({
    ...princess,
    waistSizeInCm: 25,
  }));
};

// Returns all princesses that have "idealistic" as a characteristics
const getIdealisticPrincesses = (princesses) => {
  return _.filter(princesses, (princess) =>
    princess.characteristics.includes("idealistic")
  );
};

// const getIdealisticPrincesses = (princesses) => {
//   return _.filter(princesses, (princess) =>
//     princess.characteristics.some((princess) => /idealistic/i.test(princess))
//   );
// };

// BONUS QUESTION - very difficult
// Returns the princesses array with names of bestFriends transformed to uppercase
// (check https://lodash.com/docs/4.17.15#chain)
const getBestFriendsUpperCase = (princesses) =>
  _(princesses)
    .filter((princess) => princess.bestFriend)
    .map((princess) => ({
      ...princess, // copy princess
      bestFriend: _.mapValues(princess.bestFriend, (f) => f.toUpperCase()),
    }))
    .value();

// BONUS QUESTION - very difficult
// Returns only princesses that:
// - have an animal friend (bestFriend)
// - are extroverted (personalityType)
// - are altruistic (characteristics)
// - have a chicken as a best friend (bestFriend)
const getTargetPrincess = (princesses) =>
  _(princesses)
    .filter((princess) => princess.bestFriend)
    .filter((princess) => princess.personalityType.charAt(0) === "E")
    .filter((princess) => princess.characteristics.includes("altruistic"))
    .filter((princess) => Object.keys(princess.bestFriend).includes("chicken"))
    .value();
