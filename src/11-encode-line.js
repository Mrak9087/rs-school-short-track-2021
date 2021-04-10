/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const result = [];
  let count = 0;
  while (arr.length) {
    count = 1;
    const ch = arr.splice(0, 1)[0];
    while (ch === arr[0]) {
      count++;
      arr.splice(0, 1);
    }
    result.push(((count > 1) ? `${count}${ch}` : ch));
  }
  return result.join('');
}

module.exports = encodeLine;
