/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  let ret = 0;

  const splitAndFindMaxLen = (ary) => {
    for (const str of ary) {
      if (str.length >= k) {
        let map = new Map();
        let separator = "";

        for (const letter of str) {
          map.set(letter, (map.get(letter) || 0) + 1);
        }

        for (const [key, val] of map) {
          if (val < k) separator += key + "|";
        }

        if (separator) {
          // 다시 쪼개야됨
          let splitAry = [];
          separator = separator.substring(0, separator.length - 1);
          let regex = new RegExp(separator);

          splitAry = str.split(regex).filter(Boolean);

          splitAndFindMaxLen(splitAry);
        } else {
          ret = Math.max(ret, str.length);
        }
      }
    }
  };

  splitAndFindMaxLen([s]);

  return ret;
};
