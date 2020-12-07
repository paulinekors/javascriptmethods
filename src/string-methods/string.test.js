const { cat, car, getUpperCase } = require("./string");

describe("Strings", () => {
  describe("getUpperCase", () => {
    xit("returns strings in uppercase", () => {
      expect(getUpperCase(cat)).toEqual("TACOCAT");
    });
  });
});
