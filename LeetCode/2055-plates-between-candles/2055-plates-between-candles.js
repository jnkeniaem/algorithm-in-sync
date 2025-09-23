/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
  const answer = [];
  const prefixSum = new Array(s.length).fill(0);
  prefixSum[0] = s[0] === "*" ? 1 : 0;

  for (let i = 1; i < s.length; ++i) {
    if (s[i] === "*") prefixSum[i] += prefixSum[i - 1] + 1;
    else prefixSum[i] = prefixSum[i - 1];
  }

  for (const [left, right] of queries) {
    const startIdx = s.indexOf("|", left);
    if (startIdx === -1 || startIdx >= right - 1) {
      answer.push(0);
      continue;
    }
    const endIdx = s.lastIndexOf("|", right);
    if (
      endIdx === -1 ||
      startIdx === endIdx ||
      startIdx + 1 === endIdx ||
      endIdx <= left + 1
    ) {
      answer.push(0);
      continue;
    }

    answer.push(prefixSum[endIdx] - prefixSum[startIdx]);
  }

  return answer;
};