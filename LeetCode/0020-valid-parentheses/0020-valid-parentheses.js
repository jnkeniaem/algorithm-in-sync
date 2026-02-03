/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // const len = s.length;
  // if (len % 2) return false;
  const stack = []; // open brackets

  const openSet = new Set("({[");
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (const paranthesis of s) {
    if (openSet.has(paranthesis)) {
      stack.push(paranthesis);
    } else {
      const top = stack.pop();
      if (map.get(paranthesis) !== top) return false;
    }
  }

  return true;
};