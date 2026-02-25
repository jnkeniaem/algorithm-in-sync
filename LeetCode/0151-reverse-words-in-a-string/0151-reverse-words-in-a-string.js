/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 띄어 쓰기 제거
  const strInAry = s.split(" ").filter((elem) => elem !== "");

  strInAry.reverse();
  return strInAry.join(" ");
};
