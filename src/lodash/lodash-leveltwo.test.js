const {
  princesses,
  partitionPrincessesByRelationshipStatus,
  partitionPrincessesByPersonality,
  getPersonalityTypeLowerCase,
  getPrincessesWithWaist,
  getIdealisticPrincesses,
  getBestFriendsUpperCase,
  getTargetPrincess,
} = require("./lodash-leveltwo");

describe("Princesses", () => {
  describe("partitionPrincessesByRelationshipStatus", () => {
    xit("returns two arrays: one with married princesses and one with non-married princesses", () => {
      expect(partitionPrincessesByRelationshipStatus(princesses)).toEqual([
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
            bestFriend: null,
          },
        ],
      ]);
    });
    xit("returns an empty array with empty arrays if there are no princesses", () => {
      expect(partitionPrincessesByRelationshipStatus([])).toEqual([[], []]);
    });
  });

  describe("partitionPrincessesByPersonality", () => {
    xit("returns two arrays: one with introverted princesses and one with extroverted princesses", () => {
      expect(partitionPrincessesByPersonality(princesses)).toEqual([
        [
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
    xit("returns an empty array with empty arrays if there are no princesses", () => {
      expect(partitionPrincessesByPersonality([])).toEqual([[], []]);
    });
  });

  describe("getPersonalityTypeLowerCase", () => {
    xit("returns the princesses array with personalityType transformed to lowercase", () => {
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
          bestFriend: null,
        },
      ]);
    });
    xit("returns an empty array if there are no princesses", () => {
      expect(getPersonalityTypeLowerCase([])).toEqual([]);
    });
  });
  describe("getPrincessesWithWaist", () => {
    xit("returns the princesses array with extra key and value pair (waistSizeInCm: 25)", () => {
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
          bestFriend: null,
          waistSizeInCm: 25,
        },
      ]);
    });
    xit("returns an empty array if there are no princesses", () => {
      expect(getPrincessesWithWaist([])).toEqual([]);
    });
  });
  describe("getIdealisticPrincesses", () => {
    xit("returns an array with princesses who are idealistic", () => {
      expect(getIdealisticPrincesses(princesses)).toEqual([
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
      ]);
    });
    xit("returns an empty array if there are no princesses", () => {
      expect(getIdealisticPrincesses([])).toEqual([]);
    });
  });
  describe("getBestFriendsUpperCase", () => {
    xit("returns an array of princesses with best friends transformed to uppercase", () => {
      expect(getBestFriendsUpperCase(princesses)).toEqual([
        {
          name: "Jasmine",
          relationshipStatus: "married",
          personalityType: "ESFP",
          characteristics: ["spontaneous", "fun-loving", "direct"],
          bestFriend: { tiger: "RAJAH" },
        },
        {
          name: "Moana",
          relationshipStatus: "too busy saving the world",
          personalityType: "ENFJ",
          characteristics: ["charismatic", "altruistic", "born-leader"],
          bestFriend: { chicken: "HEIHEI" },
        },
        {
          name: "Rapunzel",
          relationshipStatus: "entanglement",
          personalityType: "ENFP",
          characteristics: ["warm", "altruistic", "idealistic"],
          bestFriend: { chameleon: "PASCAL" },
        },
        {
          name: "Pocahontas",
          relationshipStatus: "engaged",
          personalityType: "INFJ",
          characteristics: ["curious", "independent", "idealistic"],
          bestFriend: { racoon: "MEEKO" },
        },
        {
          name: "Mulan",
          relationshipStatus: "married",
          personalityType: "ISTP",
          characteristics: ["reserved", "action-taker", "idealistic"],
          bestFriend: { dragon: "MUSHU" },
        },
      ]);
    });
    xit("returns an empty array if there are no princesses", () => {
      expect(getBestFriendsUpperCase([])).toEqual([]);
    });
  });
  describe("getTargetPrincess", () => {
    xit("returns an array with princesses who are idealistic", () => {
      expect(getTargetPrincess(princesses)).toEqual([
        {
          name: "Moana",
          relationshipStatus: "too busy saving the world",
          personalityType: "ENFJ",
          characteristics: ["charismatic", "altruistic", "born-leader"],
          bestFriend: { chicken: "Heihei" },
        },
      ]);
    });
    xit("returns an empty array if there are no princesses", () => {
      expect(getTargetPrincess([])).toEqual([]);
    });
  });
});
