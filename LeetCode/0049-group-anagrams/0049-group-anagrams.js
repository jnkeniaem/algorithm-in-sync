/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  const anagrams = [];

  for (const str of strs) {
    const key = str.split("").sort().join("");
    const val = map.get(key) || [];

    val.push(str);
    map.set(key, val);
  }

  for (const [_, val] of map) {
    anagrams.push(val);
  }

  // map의 values 모은 것
  return anagrams;
};
