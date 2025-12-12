function solution(storey) {
  let answer = 0;

  for (let i = 0; storey > 0; ++i) {
    // const digit = (storey % 10 ** (i + 1)) / 10 ** i;
    const digit = storey % 10;
    // console.log("digit : ", digit);
    if (digit < 5) {
      // 정석대로 빼기
      // storey -= digit * 10 ** i;
      answer += digit;
    } else if (digit > 5) {
      // 더해서 10의 배수로 만들기
      // storey += (10 - digit) * 10 ** i;
      storey += 10 - digit;
      answer += 10 - digit;
    } else {
      // 앞의 자리수가 5 이상이면 더해주기
      // const prevDigit = (storey % 10 ** (i + 2)) / 10 ** (i + 1);
      const prevDigit = Math.floor((storey % 100) / 10);
      answer += 5;
      // if (prevDigit) storey += 5 * 10 ** i;
      // if (prevDigit >= 5) storey += 5 * 10;
      if (prevDigit >= 5) storey += 5;
      // storey += prevDigit >= 5 ? 5 * 10 ** i : -5 * 10 ** i;
    }
    // console.log("storey: ", storey);
    storey = Math.floor(storey / 10);
    // console.log("after  storey: ", storey);
  }

  return answer;
}
