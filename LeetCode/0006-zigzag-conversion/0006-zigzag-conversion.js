/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let rows = new Array(numRows).fill(0).map(() => new Array(0).fill(""));
  let sCopy = s;
  let ret = "";

  while (sCopy.length) {
    for (let i = 0; i < numRows && sCopy.length; ++i) {
      rows[i] += sCopy[0];
      sCopy = sCopy.substring(1);
    }
    for (let i = numRows - 2; i > 0 && sCopy.length; --i) {
      rows[i] += sCopy[0];
      sCopy = sCopy.substring(1);
    }
  }

  for (let i = 0; i < rows.length; ++i) {
    ret += rows[i];
  }

  return ret;
}
