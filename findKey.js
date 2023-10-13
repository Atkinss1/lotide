// function will take in an object and a call back. It will scan the object and return the first key when the callback returns a truthy value

const findKey = function(object, callback) {
  for (let item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
  return undefined;
};

module.exports = findKey;