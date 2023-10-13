// this function takes in an array of items and an object that determines what you want counted, it will return an object containing counts of everything that the object parameter listed
const countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
        console.log(results);
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

module.exports = countOnly;