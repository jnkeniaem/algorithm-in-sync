function solution(n) {
  let totalCnt = 0; // 배열 요소 개수
  const pyramid = new Array(n).fill([]).map((_, idx) => {
    totalCnt += idx + 1;
    return new Array(idx + 1).fill(0);
  });

  let [colIdx, rowIdx] = [0, 0];
  let curN = n;
  let updatedCnt = 0;
  let elem = 1;

  for (let j = 0; j < Math.floor(n - 1 / 3) + 1; ++j) {
    colIdx = updatedCnt;
    rowIdx = updatedCnt * 2;
    for (let k = 0; k < curN; ++k) {
      pyramid[rowIdx++][colIdx] = elem++;
      // rowIdx++;
      // elem++;
    }

    rowIdx -= 1;
    colIdx = updatedCnt + 1;
    for (let k = 0; k < curN - 1; ++k) {
      pyramid[rowIdx][colIdx++] = elem++;
      // elem++;
      // colIdx++;
    }
    colIdx = pyramid[rowIdx]?.length - 2 - updatedCnt;
    // colIdx = 맨 마지막 - updatedCnt;
    rowIdx = n - 2 - updatedCnt;
    for (let k = 0; k < curN - 2; ++k) {
      pyramid[rowIdx--][colIdx--] = elem++;
      // elem++;
      // colIdx--;
      // rowIdx--;
    }
    updatedCnt++;
    curN -= 3;
  }

  // i가 첫번째 구간이라면 n번 반복
  // colidx = 맨 앞
  // rowIdx = 하나씩 증가;
  // i가 두번째 구간이라면 n-1번 반복
  // rowIdx = 맨 밑
  // colidx = 하나씩 증가
  // i가 세번째 구간이라면 n-2번 반복
  // colidx = 행의 맨 마지막
  // rowIdx 하나씩 감소
  // 3n -3 이라면
  // top, curN, updatedCnt 갱신

  return pyramid.flat();
}