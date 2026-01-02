function solution(data, col, row_begin, row_end) {
  const sortedData = [...data].map((elem) => [...elem]);
  //   const S = new Array(row_end - row_begin + 1).fill(0);

  //   정렬
  sortedData.sort((x, y) => {
    const subtraction = x[col - 1] - y[col - 1];

    if (subtraction === 0)
      // 첫 번째 컬럼의 값을 기준으로 내림차순 정렬
      return y[0] - x[0];
    return subtraction;
  });

  //   let answer = S[0];
  //   for (let j = 1; j < S.length; ++j) {
  // 	answer ^= S[j];
  //   }
  let answer = 0;

  for (let i = row_begin - 1; i < row_end; ++i) {
    // i 번째 행의 튜플에 대해 각 컬럼의 값을 i 로 나눈 나머지들의 합
    // S[i - row_begin + 1] = sortedData[i].reduce((acc, cur) => {
    //   acc + (cur % (i + 1));
    // }, 0);
    answer ^= sortedData[i].reduce((acc, cur) => acc + (cur % (i + 1)), 0);
  }

  return answer;
}