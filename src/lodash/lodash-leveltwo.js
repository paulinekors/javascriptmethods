// LODASH METHODS - LEVEL TWO

// Instructions:
// Complete the functions below and check to see if your work is correct by
// running the tests in the testfile (open a terminal window and run
// "yarn watch" in the correct folder). All tests start with "xit",
// this means that they will be skipped. When you are ready to run a test, just
// remove the "x" (so it says "... it("assumption")...".)
// You can find all lodash methods here: https://lodash.com/docs/4.17.15
// You can find the answers in the answers file, but please try to solve it first without checking the answers

// HINT: You could use partition, map, filter

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
    bestFriend: null,
  },
];

// Returns two arrays: one with married princesses and one with princesses with other relationship statuses
const partitionPrincessesByRelationshipStatus = (princesses) => {};

// Returns two arrays: one with introverted princesses (personalityType "I...") and one with extroverted princesses
const partitionPrincessesByPersonality = (princesses) => {};

// Returns the princesses array with personalityType transformed to lowercase
const getPersonalityTypeLowerCase = (princesses) => {};

// Returns the princesses array with extra key and value pair (waistSizeInCm: 25)
const getPrincessesWithWaist = (princesses) => {};

// Returns all princesses that have "idealistic" as a characteristics
const getIdealisticPrincesses = (princesses) => {};

// BONUS QUESTION - very difficult
// Returns the princesses array with names of bestFriends transformed to uppercase
// (check https://lodash.com/docs/4.17.15#chain)
const getBestFriendsUpperCase = (princesses) => {};

// BONUS QUESTION - very difficult
// Returns only princesses that:
// - have an animal friend (bestFriend)
// - are extroverted (personalityType)
// - are altruistic (characteristics)
// - have a chicken as a best friend (bestFriend)
const getTargetPrincess = (princesses) => {};

module.exports = {
  princesses,
  partitionPrincessesByRelationshipStatus,
  partitionPrincessesByPersonality,
  getPersonalityTypeLowerCase,
  getPrincessesWithWaist,
  getIdealisticPrincesses,
  getBestFriendsUpperCase,
  getTargetPrincess,
};
