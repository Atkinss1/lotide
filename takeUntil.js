const takeUntil = function(array, callback) {
  let results = [];
  for (let element of array) {
    if (callback(element)) {
      break;
    } else {
      results.push(element);
    }
  }
  return results;

};

module.exports = takeUntil;