const {
  doggos,
  getBorderCollie,
  getSiberianHusky,
  getDoggosMaxFluff,
  getDoggosExtraHobby,
  getDoggosEnemy,
  getDoggosExcludingBreed,
  getDoggosExcludingBreeds,
} = require("./object");

describe("doggos", () => {
  describe("getBorderCollie", () => {
    it("returns a border collie", () => {
      expect(getBorderCollie(doggos)).toEqual({
        breed: "Collie",
        fluffLevel: 8,
        hobbies: ["herding sheep", "playing frisbee"],
      });
    });
    it("returns undefined when there are no doggos", () => {
      expect(getBorderCollie({})).toEqual(undefined);
    });
  });

  describe("getSiberianHusky", () => {
    it("returns a siberian husky", () => {
      expect(getSiberianHusky(doggos)).toEqual({
        breed: "Spitz",
        fluffLevel: 7,
        hobbies: ["pulling the sled", "paragliding"],
      });
    });
    it("returns undefined when there are no doggos", () => {
      expect(getSiberianHusky({})).toEqual(undefined);
    });
  });

  describe("getDoggosMaxFluff", () => {
    it("returns max fluff doggos", () => {
      expect(getDoggosMaxFluff(doggos)).toEqual({
        goldenRetriever: {
          breed: "Retriever",
          fluffLevel: 10,
          hobbies: ["swimming", "cuddling"],
        },
        borderCollie: {
          breed: "Collie",
          fluffLevel: 10,
          hobbies: ["herding sheep", "playing frisbee"],
        },
        jackRussel: {
          breed: "Terrier",
          fluffLevel: 10,
          hobbies: ["stealing food"],
        },
        japaneseAkita: {
          breed: "Spitz",
          fluffLevel: 10,
          hobbies: ["long walks", "guarding the family"],
        },
        siberianHusky: {
          breed: "Spitz",
          fluffLevel: 10,
          hobbies: ["pulling the sled", "paragliding"],
        },
      });
    });
  });

  describe("getDoggosEnemy", () => {
    it("returns doggos with an extra hide and treat hobby", () => {
      expect(getDoggosEnemy(doggos)).toEqual({
        goldenRetriever: {
          breed: "Retriever",
          fluffLevel: 9,
          hobbies: ["swimming", "cuddling"],
          enemy: "cats",
        },
        borderCollie: {
          breed: "Collie",
          fluffLevel: 8,
          hobbies: ["herding sheep", "playing frisbee"],
          enemy: "cats",
        },
        jackRussel: {
          breed: "Terrier",
          fluffLevel: 4,
          hobbies: ["stealing food"],
          enemy: "cats",
        },
        japaneseAkita: {
          breed: "Spitz",
          fluffLevel: 9,
          hobbies: ["long walks", "guarding the family"],
          enemy: "cats",
        },
        siberianHusky: {
          breed: "Spitz",
          fluffLevel: 7,
          hobbies: ["pulling the sled", "paragliding"],
          enemy: "cats",
        },
      });
    });
  });

  describe("getDoggosExtraHobby", () => {
    it("returns doggos with an extra hide and treat hobby", () => {
      expect(getDoggosExtraHobby(doggos)).toEqual({
        goldenRetriever: {
          breed: "Retriever",
          fluffLevel: 9,
          hobbies: ["swimming", "cuddling", "hide and treat"],
        },
        borderCollie: {
          breed: "Collie",
          fluffLevel: 8,
          hobbies: ["herding sheep", "playing frisbee", "hide and treat"],
        },
        jackRussel: {
          breed: "Terrier",
          fluffLevel: 4,
          hobbies: ["stealing food", "hide and treat"],
        },
        japaneseAkita: {
          breed: "Spitz",
          fluffLevel: 9,
          hobbies: ["long walks", "guarding the family", "hide and treat"],
        },
        siberianHusky: {
          breed: "Spitz",
          fluffLevel: 7,
          hobbies: ["pulling the sled", "paragliding", "hide and treat"],
        },
      });
    });
  });

  describe("getDoggosExcludingBreed", () => {
    it("returns doggos without the indicated breed", () => {
      expect(getDoggosExcludingBreed(doggos, "Spitz")).toEqual({
        borderCollie: {
          breed: "Collie",
          fluffLevel: 8,
          hobbies: ["herding sheep", "playing frisbee"],
        },
        goldenRetriever: {
          breed: "Retriever",
          fluffLevel: 9,
          hobbies: ["swimming", "cuddling"],
        },
        jackRussel: {
          breed: "Terrier",
          fluffLevel: 4,
          hobbies: ["stealing food"],
        },
      });
    });
  });

  describe("getDoggosExcludingBreeds", () => {
    it("returns doggos without the indicated breed", () => {
      expect(getDoggosExcludingBreeds(doggos, ["Spitz", "Terrier"])).toEqual({
        borderCollie: {
          breed: "Collie",
          fluffLevel: 8,
          hobbies: ["herding sheep", "playing frisbee"],
        },
        goldenRetriever: {
          breed: "Retriever",
          fluffLevel: 9,
          hobbies: ["swimming", "cuddling"],
        },
      });
    });
  });
});
