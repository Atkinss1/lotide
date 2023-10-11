const tail = (arr) => {
  let emptyArr = [];
  if (!arr) {
    return emptyArr;
  } else {
    return arr.slice(1);
  }
};
module.exports = tail;
