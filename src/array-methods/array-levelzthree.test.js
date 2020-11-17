const { getNames, friends } = require("./array-levelzthree");

describe("friends", () => {
  describe("getNames", () => {
    xit("returns firstname and lastname", () => {
      expect(getNames(friends)).toEqual([
        "Rachel Green",
        "Ross Geller",
        "Joey Tribbiani",
        "Chandler Bing",
        "Monica Geller",
        "Gunther",
      ]);
    });
  });
});
