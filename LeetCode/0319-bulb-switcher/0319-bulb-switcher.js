/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  let answer = 0;
  /*
  if (n === 0)
  return 0;
  */
  const getDivisor = (num) => {
    let cnt = 0;

    for (let i = 1; i <= num / 2; ++i) {
      if (num % i === 0) cnt++;
    }
    cnt++;
    // num 추가
    return cnt;
  };

  for (let i = 1; i < n + 1; ++i) {
    let ret = getDivisor(i);
    if (ret % 2 !== 0) answer++;
    // ret이 짝수인지 확인
    // 짝수 -> off
    // 홀수 -> on
  }

  return answer;
};