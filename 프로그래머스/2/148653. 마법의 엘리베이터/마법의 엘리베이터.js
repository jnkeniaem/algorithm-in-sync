function solution(storey) {
  let answer = 0;
  const storeyInStr = storey.toString();
  const storeyLen = storeyInStr.length;

  for (let i = 0; i < storeyLen; ++i) {
    const digit = (storey % 10 ** (i + 1)) / 10 ** i;
    if (digit < 5) {
      // 정석대로 빼기
      storey -= digit * 10 ** i;
      answer += digit;
      // 실제로 안빼도 됨
    } else if (digit > 5) {
      // 더해서 10의 배수로 만들기
      storey += (10 - digit) * 10 ** i;
      answer += 10 - digit;
    } else {
      // 앞의 자리수를 보고 더해줬을때 6이상이 될것같으면 더해주기
      // 앞의 자리수가 5 이상이면 더해주기
      const prevDigit = (storey % 10 ** (i + 2)) / 10 ** (i + 1);
      if (prevDigit >= 5) {
        storey += (10 - digit) * 10 ** i;
        answer += 10 - digit;
      } else {
        storey -= digit * 10 ** i;
        answer += digit;
      }
    }
  }

  return storey ? answer + 1 : answer;
}