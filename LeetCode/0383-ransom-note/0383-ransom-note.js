/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  for (const letter of magazine) {
    map.set(letter, (map.get(letter) || 0) + 1);
  }

  for (const letter of ransomNote) {
    const cnt = map.get(letter);

    if (cnt) map.set(letter, cnt - 1);
    else return false;
  }

  return true;
};