// function will take in an array and a callback. It will return a new array based on the results of the callback

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;