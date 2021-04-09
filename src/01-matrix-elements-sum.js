/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((sum, item, index, arr) => {
    let locSum = 0;
    if (!index) {
      item.forEach((itmp) => {
        locSum += itmp;
      });
    } else {
      item.forEach((val, locI) => {
        if (arr[index - 1][locI]) {
          locSum += val;
        }
      });
    }
    return sum + locSum;
  }, 0);
}

module.exports = getMatrixElementsSum;
