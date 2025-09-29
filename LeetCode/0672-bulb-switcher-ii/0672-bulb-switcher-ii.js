/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
var flipLights = function (n, presses) {
  if (presses === 0) return 1;
  else if (n === 1) {
    return 2;
  } else if (n === 2) {
    return presses === 1 ? 3 : 4;
  } else if (n >= 3) {
    return presses === 1 ? 4 : presses === 2 ? 7 : 8;
  }
};