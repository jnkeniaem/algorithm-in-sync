function solution(storey) {
  let answer = 0;

  while (storey > 0) {
    const digit = storey % 10;

    if (digit < 5) {
      // 빼기
      answer += digit;
    } else if (digit > 5) {
      // 더하기
      storey += 10 - digit;
      answer += 10 - digit;
    } else {
      // 앞의 자리수가 5 이상이면 더해주기
      const prevDigit = Math.floor((storey % 100) / 10);
      if (prevDigit >= 5) storey += 5;
      answer += 5;
    }

    storey = Math.floor(storey / 10);
  }

  return answer;
}
