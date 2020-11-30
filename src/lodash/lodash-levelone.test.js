const {
  britneysFavorites,
  mariahsFavorites,
  christinasFavorites,
  getEveryonesFavs,
  getUniqueSongs,
  getBritneyVsMariah,
} = require("./lodash-levelone");

describe("Songs", () => {
  describe("getEveryonesFavs", () => {
    xit("returns an array with songs that Britney, Mariah ans Christina love", () => {
      expect(
        getEveryonesFavs(
          britneysFavorites,
          mariahsFavorites,
          christinasFavorites
        )
      ).toEqual(["No Diggity"]);
    });
  });

  describe("getUniqueSongs", () => {
    xit("returns an array with unique songs (filter duplicates)", () => {
      expect(
        getUniqueSongs(britneysFavorites, mariahsFavorites, christinasFavorites)
      ).toEqual([
        "Livin' La Vida Loca",
        "What is Love?",
        "Baby Got Back",
        "No Diggity",
        "Waiting for Tonight",
        "Waterfalls",
        "Ice Ice Baby",
        "Jump",
        "MMMBop",
      ]);
    });
  });

  describe("getBritneyVsMariah", () => {
    xit("returns an array with songs that Britney loves minus the songs that Mariah loves as well", () => {
      expect(getBritneyVsMariah(britneysFavorites, mariahsFavorites)).toEqual([
        "Livin' La Vida Loca",
        "What is Love?",
        "Baby Got Back",
      ]);
    });
  });
});
