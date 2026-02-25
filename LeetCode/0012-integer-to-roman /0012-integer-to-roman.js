/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let romanNum = "";
  const dict = [
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
  ];

  for (let i = dict.length - 1; i >= 0; --i) {
    const [val, sym] = dict[i];
    const repeatCnt = Math.floor(num / val);

    romanNum += sym.repeat(repeatCnt);
    num -= repeatCnt * val;
  }

  return romanNum;
};
