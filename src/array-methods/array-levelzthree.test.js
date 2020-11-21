const {
  getNames,
  friends,
  getNewNames,
  getNewAndOldNames,
  getChangedLastName,
  getByPopularity,
  getCheeseLovers,
} = require("./array-levelzthree");

describe("friends", () => {
  describe("getByPopularity", () => {
    xit("returns a sorted array", () => {
      expect(getByPopularity(friends)).toEqual([
        {
          luckyNumber: 3,
          firstName: "Joey",
          lastName: "Tribbiani",
          friendsOnMySpace: 929,
          favoriteFood: [
            "Pizza",
            "Campbell's Tomato Soup",
            "Non Shareable Food",
          ],
        },
        {
          luckyNumber: 5,
          firstName: "Monica",
          lastName: "Geller",
          friendsOnMySpace: 565,
          favoriteFood: ["Applepie", "Grandma's Cookies", "Cheez-It"],
        },
        {
          luckyNumber: 1,
          firstName: "Rachel",
          lastName: "Green",
          friendsOnMySpace: 439,
          favoriteFood: ["S'mores", "Strawberry Cheesecake"],
        },
        {
          luckyNumber: 2,
          firstName: "Ross",
          lastName: "Geller",
          friendsOnMySpace: 222,
          favoriteFood: ["Lasagna", "Pancakes", "Lemon Cheesecake"],
        },

        {
          luckyNumber: 4,
          firstName: "Chandler",
          lastName: "Bing",
          friendsOnMySpace: 102,
          favoriteFood: ["Philly Cheese Steak", "Hamburger", "Pop Tarts"],
        },

        {
          luckyNumber: 6,
          firstName: "Gunther",
          lastName: null,
          friendsOnMySpace: 7,
          favoriteFood: ["Pancakes", "Tater Tots"],
        },
      ]);
    });
  });

  describe("getCheeseLovers", () => {
    xit("returns a list of people that love things with cheese", () => {
      expect(getCheeseLovers(friends)).toEqual([
        {
          favoriteFood: ["S'mores", "Strawberry Cheesecake"],
          firstName: "Rachel",
          friendsOnMySpace: 439,
          id: 1,
          lastName: "Green",
        },
        {
          favoriteFood: ["Lasagna", "Pancakes", "Lemon Cheesecake"],
          firstName: "Ross",
          friendsOnMySpace: 222,
          id: 2,
          lastName: "Geller",
        },
        {
          favoriteFood: ["Philly Cheese Steak", "Hamburger", "Pop Tarts"],
          firstName: "Chandler",
          friendsOnMySpace: 102,
          id: 4,
          lastName: "Bing",
        },
      ]);
    });
  });

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
    xit("returns an empty array if there are no friends", () => {
      expect(getNames([])).toEqual([]);
    });
  });

  describe("getNewNames", () => {
    xit("returns an array with new names", () => {
      expect(getNewNames(friends)).toEqual([
        "Rachel S'mores",
        "Ross Lasagna",
        "Joey Pizza",
        "Chandler Philly",
        "Monica Applepie",
        "Gunther Pancakes",
      ]);
    });
    xit("returns an empty array if there are no friends", () => {
      expect(getNames([])).toEqual([]);
    });
  });

  describe("getNewAndOldNames", () => {
    xit("returns an array with new and old names", () => {
      expect(getNewAndOldNames(friends)).toEqual([
        {
          newName: "Rachel S'mores",
          oldName: "Rachel Green",
        },
        {
          newName: "Ross Lasagna",
          oldName: "Ross Geller",
        },
        {
          newName: "Joey Pizza",
          oldName: "Joey Tribbiani",
        },
        {
          newName: "Chandler Philly",
          oldName: "Chandler Bing",
        },
        {
          newName: "Monica Applepie",
          oldName: "Monica Geller",
        },
        {
          newName: "Gunther Pancakes",
          oldName: "Gunther null",
        },
      ]);
    });
    xit("returns an empty array if there are no friends", () => {
      expect(getNewAndOldNames([])).toEqual([]);
    });
  });

  describe("getChangedLastName", () => {
    xit("should return an array with changed last name", () => {
      expect(getChangedLastName(friends, "Geller", "Smeller")).toEqual([
        {
          id: 1,
          firstName: "Rachel",
          lastName: "Green",
          friendsOnMySpace: 439,
          favoriteFood: ["S'mores", "Strawberry Cheesecake"],
        },
        {
          id: 2,
          firstName: "Ross",
          lastName: "Smeller",
          friendsOnMySpace: 222,
          favoriteFood: ["Lasagna", "Pancakes", "Lemon Cheesecake"],
        },
        {
          id: 3,
          firstName: "Joey",
          lastName: "Tribbiani",
          friendsOnMySpace: 929,
          favoriteFood: [
            "Pizza",
            "Campbell's Tomato Soup",
            "Non Shareable Food",
          ],
        },
        {
          id: 4,
          firstName: "Chandler",
          lastName: "Bing",
          friendsOnMySpace: 102,
          favoriteFood: ["Philly Cheese Steak", "Hamburger", "Pop Tarts"],
        },
        {
          id: 5,
          firstName: "Monica",
          lastName: "Smeller",
          friendsOnMySpace: 565,
          favoriteFood: ["Applepie", "Grandma's Cookies", "Cheez-It"],
        },
        {
          id: 6,
          firstName: "Gunther",
          lastName: null,
          age: 7,
          favoriteFood: ["Pancakes", "Tater Tots"],
        },
      ]);
    });
    xit("should return an array with changed last name if lastName is null", () => {
      expect(getChangedLastName(friends, null, "McMuffin")).toEqual([
        {
          id: 1,
          firstName: "Rachel",
          lastName: "Green",
          friendsOnMySpace: 439,
          favoriteFood: ["S'mores", "Strawberry Cheesecake"],
        },
        {
          id: 2,
          firstName: "Ross",
          lastName: "Geller",
          friendsOnMySpace: 222,
          favoriteFood: ["Lasagna", "Pancakes", "Lemon Cheesecake"],
        },
        {
          id: 3,
          firstName: "Joey",
          lastName: "Tribbiani",
          friendsOnMySpace: 929,
          favoriteFood: [
            "Pizza",
            "Campbell's Tomato Soup",
            "Non Shareable Food",
          ],
        },
        {
          id: 4,
          firstName: "Chandler",
          lastName: "Bing",
          friendsOnMySpace: 102,
          favoriteFood: ["Philly Cheese Steak", "Hamburger", "Pop Tarts"],
        },
        {
          id: 5,
          firstName: "Monica",
          lastName: "Geller",
          friendsOnMySpace: 565,
          favoriteFood: ["Applepie", "Grandma's Cookies", "Cheez-It"],
        },
        {
          id: 6,
          firstName: "Gunther",
          lastName: "McMuffin",
          age: 7,
          favoriteFood: ["Pancakes", "Tater Tots"],
        },
      ]);
    });
  });
});
