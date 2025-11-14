function solution(prices) {
  const answer = [];

  for (let j = 0; j < prices.length - 1; ++j) {
    // let period = 0;
    let k = j + 1;
    // while (k < prices.length && prices[j] <= prices[k]) k++;
    while (k < prices.length) {
      if (prices[j] <= prices[k]) k++;
      else break;
    }

    // for (let k = j + 1; k < prices.length && curPrice > prices[k]; ++k) {
    // if (curPrice <= prices[k]) period++;
    // }
    // answer.push(period);
    if (k === prices.length) {
      // 끝까지 안떨어짐
      answer.push(k - 1 - j);
    } else answer.push(k - j);
  }

  answer.push(0);
  return answer;
}