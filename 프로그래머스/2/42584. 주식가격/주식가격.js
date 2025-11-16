function solution(prices) {
  const answer = prices.map((_, idx) => prices.length - 1 - idx);

  const stack = [0];

  for (let i = 1; i < prices.length; ++i) {
    while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
      const top = stack.pop();
      answer[top] = i - top;
    }
    stack.push(i);
  }
  // stack엔 시점이 들어감

  return answer;
}