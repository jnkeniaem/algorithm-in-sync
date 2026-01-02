function solution(data, col, row_begin, row_end) {
  const sortedData = [...data].sort(
    (x, y) => x[col - 1] - y[col - 1] || y[0] - x[0]
  );

  let answer = 0;

  for (let i = row_begin; i <= row_end; ++i) {
    const S_i = sortedData[i - 1].reduce((acc, cur) => acc + (cur % i), 0);
    answer ^= S_i;
  }

  return answer;
}