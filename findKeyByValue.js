const findKeyByValue = (obj, value) => {
  // takes in an object and scans it, then return the first key that contains the given value
  for (let show of Object.keys(obj)) {
    if (obj[show] === value) {
      return show;
    }
  }
};

module.exports = findKeyByValue;