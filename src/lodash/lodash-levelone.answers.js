// Returns an array of items that are present in all of the specified arrays
const getEveryonesFavs = () =>
  _.intersection(britneysFavorites, mariahsFavorites, christinasFavorites);
// Which can also be written as:
// const getEveryonesFavs = (...songs) => _.intersection(...songs);
// Or even shorter:
// const getEveryonesFavs = _.intersection()

// Returns an array of all unique songs (removes duplicates)
const getUniqueSongs = () =>
  _.union(britneysFavorites, mariahsFavorites, christinasFavorites);
// Which could also be written as:
// const getUniqueSongs = (...songs) => _.union(...songs);
// const getUniqueSongs = () => _.uniq([...britneysFavorites, ...mariahsFavorites, ...christinasFavorites]);

// Returns an array of songs that are Britney's favorites but NOT Mariak's favorites
const getBritneyVsMariah = () =>
  _.difference(britneysFavorites, mariahsFavorites);

// Returns one array with all songs (flattens the array and combines inner arrays)
const getFlattenedSongs = (...songs) => _.flattenDeep(songs);
