/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []; // open brackets
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (const paranthesis of s) {
    if (map.has(paranthesis)) {
      const top = stack.pop();
      if (map.get(paranthesis) !== top) return false;
    } else {
      stack.push(paranthesis);
    }
  }

  return stack.length ? false : true;
};