/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let romanNum = "";
  const numInStr = num.toString();
  const numLen = numInStr.length;
  const dict = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  for (let i = 0; i < numLen; ++i) {
    const firstNum = Number(numInStr[i]);
    let newRoman = "";
    const exponent = numLen - 1 - i;
    if (firstNum === 4 || firstNum === 9) {
      // (firstNum + 1) * 10 ** i - 10 ** exponent;
      const toBeSubtracted = (firstNum + 1) * 10 ** exponent;
      const toSubtract = 10 ** exponent;

      newRoman = dict[toSubtract] + dict[toBeSubtracted];
    } else {
      let toRepeat = 0;

      if (firstNum >= 5) {
        toRepeat = firstNum - 5;
        newRoman = dict[5 * 10 ** exponent];
      } else toRepeat = firstNum;

      newRoman += dict[10 ** exponent].repeat(toRepeat);
    }

    romanNum += newRoman;
  }
  return romanNum;
};
