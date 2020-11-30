// LODASH METHODS - LEVEL TWO

// Instructions:
// Complete the functions below and check to see if your work is correct by
// running the tests in the testfile (open a terminal window and run
// "yarn watch" in the correct folder). All tests expect for the first one
// start with "xit", this means that only the first test will run and the
// rest will be skipped. When you are ready to run the next test, just
// remove the "x" (so it says "... it("assumption")...".)
// You can find all lodash methods here: https://lodash.com/docs/4.17.15
// You can find the answers in the answers file, but please try to solve it first without checking the answers

// HINT: You could use partition, map

const _ = require("lodash");

const princesses = [
  {
    name: "Jasmine",
    relationshipStatus: "married",
    personalityType: "ESFP",
    characteristics: ["spontaneous", "fun-loving", "direct"],
    bestFriend: { tiger: "Rajah" },
  },
  {
    name: "Moana",
    relationshipStatus: "too busy saving the world",
    personalityType: "ENFJ",
    characteristics: ["charismatic", "altruistic", "born-leader"],
    bestFriend: { chicken: "Heihei" },
  },
  {
    name: "Rapunzel",
    relationshipStatus: "entanglement",
    personalityType: "ENFP",
    characteristics: ["warm", "altruistic", "idealistic"],
    bestFriend: { chameleon: "Pascal" },
  },
  {
    name: "Pocahontas",
    relationshipStatus: "engaged",
    personalityType: "INFJ",
    characteristics: ["curious", "independent", "idealistic"],
    bestFriend: { racoon: "Meeko" },
  },
  {
    name: "Mulan",
    relationshipStatus: "married",
    personalityType: "ISTP",
    characteristics: ["reserved", "action-taker", "idealistic"],
    bestFriend: { dragon: "Mushu" },
  },
  {
    name: "Snow White",
    relationshipStatus: "sleeping diagonally",
    personalityType: "INFP",
    characteristics: ["curious", "sweet", "charming"],
    bestFriend: "all animals",
  },
];

// Returns two arrays: one with married princesses and one with princesses with other relationship statuses
const getMarriedPrincesses = (princesses) => {
  return _.partition(
    princesses,
    (princess) => princess.relationshipStatus === "married"
  );
};

//Q: why does this not work?
// Returns two arrays: one with introverted princesses (personalityType "I...") and one with extroverted princesses
const getIntrovertPrincesses = (princesses) => {
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

module.exports = {
  princesses,
  getMarriedPrincesses,
  getIntrovertPrincesses,
  getPersonalityTypeLowerCase,
  getPrincessesWithWaist,
};
