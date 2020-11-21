// Returns sorted friends in descending order of number of friendsOnMySpace and changes id to luckyNumber
const getByPopularity = (friends) =>
  friends
    .sort((a, b) => b.friendsOnMySpace - a.friendsOnMySpace)
    .map(({ id: luckyNumber, ...friend }) => ({ ...friend, luckyNumber }));

// Returns an array of friends that have the word "cheese" in their favoriteFoods
const getCheeseLovers = (friends) => {
  return friends.filter((friend) =>
    friend.favoriteFood.some((food) => /cheese/i.test(food))
  );
};

// Returns an array of all friends containing only their firstname and lastname
const getNames = (friends) =>
  friends.map((friend) =>
    [friend.firstName, friend.lastName] //
      .filter((v) => v)
      .join(" ")
  );

// Returns an array with friends containing only their firstname and the first word of their first favorite food
const getNewNames = (friends) => {
  return friends.map((friend) => {
    return [friend.firstName, friend.favoriteFood[0].split(" ")[0]].join(" ");
  });
};

// Returns an array with friends listing their new name (as listed above) and their old name
const getNewAndOldNames = (friends) => {
  return friends.map(({ firstName, favoriteFood, lastName }) => ({
    oldName: `${firstName} ${lastName}`,
    newName: `${firstName} ${favoriteFood[0].split(" ")[0]}`,
  }));
};

// Lets you change a last name to a new last name (returns an array)
const getChangedLastName = (friends, lastName, changedLastName) => {
  return friends.map((friend) => {
    if (friend.lastName === lastName)
      return { ...friend, lastName: changedLastName };
    else return friend;
  });
};

const getChangedLastName = (friends, lastName, changedLastName) => {
  return friends.map((friend) => {
    return {
      ...friend,
      lastName:
        friend.lastName === lastName ? changedLastName : friend.lastName,
    };
  });
};
