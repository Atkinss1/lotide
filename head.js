// function will take in an array and return the [0] index

const head = (arr) => {
  if (arr === undefined) {
    return undefined;
  } else {
    return arr[0];
  }
};

module.exports = head;


