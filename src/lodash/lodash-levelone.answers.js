// Returns an array of items that are present in all of the specified arrays
const getEveryonesFavs = () =>
  _.intersection(britneysFavorites, mariahsFavorites, christinasFavorites);

// Returns an array of all unique songs (removes duplicates)
const getUniqueSongs = () =>
  //   _.union(britneysFavorites, mariahsFavorites, christinasFavorites);
  _.uniq([...britneysFavorites, ...mariahsFavorites, ...christinasFavorites]);

// Returns an array of songs that are Britney's favorites but NOT Mariak's favorites
const getBritneyVsMariah = () =>
  _.difference(britneysFavorites, mariahsFavorites);
