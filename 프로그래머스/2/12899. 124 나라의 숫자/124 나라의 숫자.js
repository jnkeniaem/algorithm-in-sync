function solution(n) {
  let result = '';
  const digits = [4, 1, 2]; // 인덱스: 나머지값 (0,1,2)

  while (n > 0) {
    const remainder = n % 3;
    result = digits[remainder] + result;
    n = Math.floor((n - 1) / 3); // 나머지가 0일 때를 보정하기 위해 n-1
  }

  return result;
}
