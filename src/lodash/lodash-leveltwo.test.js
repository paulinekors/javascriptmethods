const {
  princesses,
  getMarriedPrincesses,
  getIntrovertPrincesses,
  getPersonalityTypeLowerCase,
  getPrincessesWithWaist,
} = require("./lodash-leveltwo");

describe("Princesses", () => {
  describe("getMarriedPrincesses", () => {
    it("returns two arrays: one with married princesses and one with non-married princesses", () => {
      expect(getMarriedPrincesses(princesses)).toEqual([
        [
          {
            name: "Jasmine",
            relationshipStatus: "married",
            personalityType: "ESFP",
            characteristics: ["spontaneous", "fun-loving", "direct"],
            bestFriend: { tiger: "Rajah" },
          },

          {
            name: "Mulan",
            relationshipStatus: "married",
            personalityType: "ISTP",
            characteristics: ["reserved", "action-taker", "idealistic"],
            bestFriend: { dragon: "Mushu" },
          },
        ],
        [
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
            name: "Snow White",
            relationshipStatus: "sleeping diagonally",
            personalityType: "INFP",
            characteristics: ["curious", "sweet", "charming"],
            bestFriend: "all animals",
          },
        ],
      ]);
    });
  });

  describe("getIntrovertPrincesses", () => {
    xit("returns two arrays: one with introverted princesses and one with extroverted princesses", () => {
      expect(getIntrovertPrincesses(princesses)).toEqual([
        [
          {
            name: "Mulan",
            relationshipStatus: "married",
            personalityType: "ISTP",
            characteristics: ["reserved", "action-taker", "idealistic"],
            bestFriend: { dragon: "Mushu" },
          },
          {
            name: "Pocahontas",
            relationshipStatus: "engaged",
            personalityType: "INFJ",
            characteristics: ["curious", "independent", "idealistic"],
            bestFriend: { racoon: "Meeko" },
          },
          {
            name: "Snow White",
            relationshipStatus: "sleeping diagonally",
            personalityType: "INFP",
            characteristics: ["curious", "sweet", "charming"],
            bestFriend: "all animals",
          },
        ],
        [
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
        ],
      ]);
    });
  });

  describe("getPersonalityTypeLowerCase", () => {
    it("returns the princesses array with personalityType transformed to lowercase", () => {
      expect(getPersonalityTypeLowerCase(princesses)).toEqual([
        {
          name: "Jasmine",
          relationshipStatus: "married",
          personalityType: "esfp",
          characteristics: ["spontaneous", "fun-loving", "direct"],
          bestFriend: { tiger: "Rajah" },
        },
        {
          name: "Moana",
          relationshipStatus: "too busy saving the world",
          personalityType: "enfj",
          characteristics: ["charismatic", "altruistic", "born-leader"],
          bestFriend: { chicken: "Heihei" },
        },
        {
          name: "Rapunzel",
          relationshipStatus: "entanglement",
          personalityType: "enfp",
          characteristics: ["warm", "altruistic", "idealistic"],
          bestFriend: { chameleon: "Pascal" },
        },
        {
          name: "Pocahontas",
          relationshipStatus: "engaged",
          personalityType: "infj",
          characteristics: ["curious", "independent", "idealistic"],
          bestFriend: { racoon: "Meeko" },
        },
        {
          name: "Mulan",
          relationshipStatus: "married",
          personalityType: "istp",
          characteristics: ["reserved", "action-taker", "idealistic"],
          bestFriend: { dragon: "Mushu" },
        },
        {
          name: "Snow White",
          relationshipStatus: "sleeping diagonally",
          personalityType: "infp",
          characteristics: ["curious", "sweet", "charming"],
          bestFriend: "all animals",
        },
      ]);
    });
  });
  describe("getPrincessesWithWaist", () => {
    it("returns the princesses array with extra key and value pair (waistSizeInCm: 25)", () => {
      expect(getPrincessesWithWaist(princesses)).toEqual([
        {
          name: "Jasmine",
          relationshipStatus: "married",
          personalityType: "ESFP",
          characteristics: ["spontaneous", "fun-loving", "direct"],
          bestFriend: { tiger: "Rajah" },
          waistSizeInCm: 25,
        },
        {
          name: "Moana",
          relationshipStatus: "too busy saving the world",
          personalityType: "ENFJ",
          characteristics: ["charismatic", "altruistic", "born-leader"],
          bestFriend: { chicken: "Heihei" },
          waistSizeInCm: 25,
        },
        {
          name: "Rapunzel",
          relationshipStatus: "entanglement",
          personalityType: "ENFP",
          characteristics: ["warm", "altruistic", "idealistic"],
          bestFriend: { chameleon: "Pascal" },
          waistSizeInCm: 25,
        },
        {
          name: "Pocahontas",
          relationshipStatus: "engaged",
          personalityType: "INFJ",
          characteristics: ["curious", "independent", "idealistic"],
          bestFriend: { racoon: "Meeko" },
          waistSizeInCm: 25,
        },
        {
          name: "Mulan",
          relationshipStatus: "married",
          personalityType: "ISTP",
          characteristics: ["reserved", "action-taker", "idealistic"],
          bestFriend: { dragon: "Mushu" },
          waistSizeInCm: 25,
        },
        {
          name: "Snow White",
          relationshipStatus: "sleeping diagonally",
          personalityType: "INFP",
          characteristics: ["curious", "sweet", "charming"],
          bestFriend: "all animals",
          waistSizeInCm: 25,
        },
      ]);
    });
  });
});
