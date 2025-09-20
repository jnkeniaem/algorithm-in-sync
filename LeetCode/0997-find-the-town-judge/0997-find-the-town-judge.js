/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (n === 1) {
    // 예외처리
    return trust.length === 0 ? n : -1;
  }

  const aAry = new Array(n + 1).fill(false); // a자리에 위치한 사람들
  aAry[0] = true;
  const bAry = new Array(n + 1).fill(0);
  // trust 돌면서 각 배열에 넣기
  for (const [a, b] of trust) {
    aAry[a] = true;
    bAry[b] += 1;
  }

  for (let i = 1; i < aAry.length; ++i) {
    if (aAry[i] === false && bAry[i] === n - 1) {
      return i;
    }
  }

  return -1;
};