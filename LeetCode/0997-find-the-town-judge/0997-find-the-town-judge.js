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

  // 각 배열 돌면서
  const nAry = [];

  aAry.map((elem, idx) => {
    // 1. a에 없는 사람, - false인 사람.
    if (elem === false) nAry.push(idx);
  });

  if (nAry.length === 0) return -1; // 다 누군가를 믿고 있는 것
  for (const elem of nAry) {
    // 2. 걸러진 사람들 중 다른 사람들(n-1명)은 ai를 믿어야 함(bi 개수가 n-1이여야함) - findIndex bAry 요소가 n - 1인 사람.
    if (bAry[elem] === n - 1) {
      return elem;
    }
  }
  return -1;
};