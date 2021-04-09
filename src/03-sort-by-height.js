/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrTmp = [];
  const newArr = arr.map((item) => {
    if (item !== -1) {
      arrTmp.push(item);
      return 0;
    }
    return item;
  });
  arrTmp.sort((a, b) => a - b);
  return newArr.map((item) => {
    if (!item) {
      return arrTmp.shift();
    }
    return item;
  });
}

module.exports = sortByHeight;
