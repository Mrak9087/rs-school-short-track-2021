/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const tmpArr = (`${n}`).split('').map(Number);
  const minItem = Math.min(...tmpArr);
  const index = tmpArr.findIndex((item) => item === minItem);
  tmpArr.splice(index, 1);
  return +tmpArr.join('');
}

module.exports = deleteDigit;
