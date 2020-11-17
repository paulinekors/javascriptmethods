// ARRAY METHODS - LEVEL THREE

// Instructions:
// Complete the functions below and check to see if your work is correct by
// running the tests in the testfile (open a terminal window and run
// "yarn watch" in the correct folder). All tests expect for the first one
// start with "xit", this means that only the first test will run and the
// rest will be skipped. When you are ready to run the next test, just
// remove the "x" (so it says "... it("assumption")...".)
// You can find all array methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// You can find the answers in the answers file, but please try to solve it first without checking the answers

// HINT: You could use map, reduce, filter, join

const friends = [
  {
    id: 1,
    firstName: "Rachel",
    lastName: "Green",
    friendsOnMySpace: 439,
    favoriteFood: ["Strawberry Cheesecake", "S'mores"],
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
    favoriteFood: ["Non shareable food", "Pizza", "Campbell's Tomato Soup"],
  },
  {
    id: 4,
    firstName: "Chandler",
    lastName: "Bing",
    friendsOnMySpace: 102,
    favoriteFood: ["Philly cheese steak", "Hamburger", "Pop Tarts"],
  },
  {
    id: 5,
    firstName: "Monica",
    lastName: "Geller",
    friendsOnMySpace: 565,
    favoriteFood: ["Grandma's cookies", "Applepie", "Cheez-It"],
  },
  {
    id: 6,
    firstName: "Gunther",
    lastName: null,
    age: 7,
    favoriteFood: ["Pancakes", "Tater Tots"],
  },
];

// Show a list of all friends containing only their firstname and lastname
getNames = (friends) =>
  friends.map(
    (friend) =>
      [friend.firstName, friend.lastName] //
        .filter((v) => v) // v => v haalt de falsey er uit
        .join(" ") //  ["Jan", "de Boer"] -> "Jan de Boer"
  );

//create new array with only cartoons
// const cartoonArray = users => {
//   const cartoons = users.reduce((cartoons, user) => {
//     return [user.favoriteCartoon, ...cartoons] //reversed list
//   }, [])
//   return [...new Set(cartoons)]; //door te spreaden is het weer een array ipv set in array
// }
// cartoonArray(users)

// const teenMums = teens => teens
//   .filter(teen => teen.kids.some(kid => (/Jay/i).test(kid)))

module.exports = {
  getNames,
  friends,
};
