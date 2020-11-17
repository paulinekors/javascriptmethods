const {
  queens,
  getQueensNames,
  getQueensNicknames,
  getCombinedAgeQueens,
  getFavoriteSongs,
  getQueensWithoutAge,
  getRenamedFavorite,
  getTotalFavoriteSong,
  getNickNameChange,
} = require("./array-leveltwo");

describe("queens", () => {
  describe("getQueensNames", () => {
    it("returns an array with queens with firstName and lastName", () => {
      expect(getQueensNames(queens)).toEqual([
        "Bianca del Rio",
        "Kim Chi",
        "Victoria Parker",
        "Trinity Taylor",
        "Latrice Royale",
      ]);
    });
    xit("returns an empty array if there are no queens", () => {
      expect(getQueensNames([])).toEqual([]);
    });
  });

  describe("getQueensNicknames", () => {
    xit('returns an array with queens with firstName "nickname" lastName', () => {
      expect(getQueensNicknames(queens)).toEqual([
        'Bianca "Not Today Satan" del Rio',
        'Kim "No Tea No Shade" Chi',
        'Victoria "Porkchop" Parker',
        'Trinity "The Tuck" Taylor',
        'Latrice "Large And In Charge" Royale',
      ]);
    });
    xit("returns an empty array if there are no queens", () => {
      expect(getQueensNicknames([])).toEqual([]);
    });
  });

  describe("getCombinedAgeQueens", () => {
    xit("returns the combined age of all queens", () => {
      expect(getCombinedAgeQueens(queens)).toEqual(190);
    });
    xit("returns zero if there is no age information", () => {
      expect(getCombinedAgeQueens([])).toEqual(0);
    });
  });

  describe("getFavoriteSongs", () => {
    xit("returns an array of queens with selected favorite songs", () => {
      // note: the order of the object's items isn't important
      expect(getFavoriteSongs(queens)).toEqual([
        {
          age: 34,
          favoriteSong: "Kitty Girl",
          firstName: "Kim",
          lastName: "Chi",
          nickname: "No Tea No Shade",
        },
        {
          age: 57,
          favoriteSong: "Call Me Mother",
          firstName: "Victoria",
          lastName: "Parker",
          nickname: "Porkchop",
        },
        {
          age: 41,
          favoriteSong: "Peanut Butter",
          firstName: "Latrice",
          lastName: "Royale",
          nickname: "Large And In Charge",
        },
      ]);
    });
    xit("returns an empty array if there are no queens", () => {
      expect(getQueensNames([])).toEqual([]);
    });
  });

  describe("getQueensWithoutAge", () => {
    xit("returns an array of queens without their age", () => {
      expect(getQueensWithoutAge(queens)).toEqual([
        {
          firstName: "Bianca",
          lastName: "del Rio",
          nickname: "Not Today Satan",
          favoriteSong: "Sissy That Walk",
        },
        {
          firstName: "Kim",
          lastName: "Chi",
          nickname: "No Tea No Shade",
          favoriteSong: "Kitty Girl",
        },
        {
          firstName: "Victoria",
          lastName: "Parker",
          nickname: "Porkchop",
          favoriteSong: "Call Me Mother",
        },
        {
          firstName: "Trinity",
          lastName: "Taylor",
          nickname: "The Tuck",
          favoriteSong: "Sissy That Walk",
        },
        {
          firstName: "Latrice",
          lastName: "Royale",
          nickname: "Large And In Charge",
          favoriteSong: "Peanut Butter",
        },
      ]);
    });
    xit("returns an empty array if there are no queens", () => {
      expect(getQueensNames([])).toEqual([]);
    });
  });

  describe("getRenamedFavorite", () => {
    xit("returns an array of queens with favorite movie instead of favorite song", () => {
      expect(getRenamedFavorite(queens)).toEqual([
        {
          firstName: "Bianca",
          lastName: "del Rio",
          nickname: "Not Today Satan",
          age: 37,
          favoriteMovie: "Sissy That Walk",
        },
        {
          firstName: "Kim",
          lastName: "Chi",
          nickname: "No Tea No Shade",
          age: 34,
          favoriteMovie: "Kitty Girl",
        },
        {
          firstName: "Victoria",
          lastName: "Parker",
          nickname: "Porkchop",
          age: 57,
          favoriteMovie: "Call Me Mother",
        },
        {
          firstName: "Trinity",
          lastName: "Taylor",
          nickname: "The Tuck",
          age: 21,
          favoriteMovie: "Sissy That Walk",
        },
        {
          firstName: "Latrice",
          lastName: "Royale",
          nickname: "Large And In Charge",
          age: 41,
          favoriteMovie: "Peanut Butter",
        },
      ]);
    });
    xit("returns an empty array if there are no queens", () => {
      expect(getQueensNames([])).toEqual([]);
    });
  });

  describe("getTotalFavoriteSong", () => {
    xit('returns the total number  of queens whose favorite song is "Sissy That Walk"', () => {
      expect(getTotalFavoriteSong(queens, "Sissy That Walk")).toEqual(2);
    });
    xit('returns the total number  of queens whose favorite song is "Call Me Mother"', () => {
      expect(getTotalFavoriteSong(queens, "Call Me Mother")).toEqual(1);
    });
    xit('returns the total number  of queens whose favorite song is "Shantay You Stay"', () => {
      expect(getTotalFavoriteSong(queens, "Shantay You Stay")).toEqual(0);
    });
  });

  describe("getNickNameChange", () => {
    it("returns an array with new nickname", () => {
      expect(getNickNameChange(queens)).toEqual([
        {
          firstName: "Bianca",
          lastName: "del Rio",
          nickname: "Not Today Satan",
          age: 37,
          favoriteSong: "Sissy That Walk",
        },
        {
          firstName: "Kim",
          lastName: "Chi",
          nickname: "Shadier Than A Palmtree",
          age: 34,
          favoriteSong: "Kitty Girl",
        },
        {
          firstName: "Victoria",
          lastName: "Parker",
          nickname: "Porkchop",
          age: 57,
          favoriteSong: "Call Me Mother",
        },
        {
          firstName: "Trinity",
          lastName: "Taylor",
          nickname: "The Tuck",
          age: 21,
          favoriteSong: "Sissy That Walk",
        },
        {
          firstName: "Latrice",
          lastName: "Royale",
          nickname: "Chunky Yet Funky",
          age: 41,
          favoriteSong: "Peanut Butter",
        },
      ]);
    });
  });
});
