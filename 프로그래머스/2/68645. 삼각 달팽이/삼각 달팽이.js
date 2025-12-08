function solution(n) {
  let totalCnt = 0; // 배열 요소 개수
  const pyramid = new Array(n).fill([]).map((_, idx) => {
    totalCnt += idx + 1;
    return new Array(idx + 1).fill(0);
  });

  let colIdx = 0;
  let rowIdx = 0;
  let curN = n;
  let updatedCnt = 0;
  let top = 1;
  let elem = 1;

  for (let j = 0; j < Math.floor(n - 1 / 3) + 1; ++j) {
    colIdx = updatedCnt;
    // rowIdx =  updatedCnt + elem - 1;
    rowIdx = updatedCnt * 2;
    for (let k = 0; k < curN; ++k) {
      pyramid[rowIdx][colIdx] = elem;
      rowIdx++;
      elem++;
    }
    rowIdx -= 1;
    for (let k = 0; k < curN - 1; ++k) {
      colIdx = updatedCnt + 1 + k;
      pyramid[rowIdx][colIdx] = elem;
      elem++;
    }
    colIdx = pyramid[rowIdx]?.length - 2 - updatedCnt;
    // colIdx = 맨 마지막 - updatedCnt;
    for (let k = 0; k < curN - 2; ++k) {
      rowIdx = n - 2 - updatedCnt - k;
      pyramid[rowIdx][colIdx] = elem;
      colIdx--;
      elem++;
    }
    updatedCnt++;
    curN -= 3;
  }

  // if (i - top + 1 <= n)
  // i가 첫번째 구간이라면
  // colidx = 0
  // rowIdx = number -1;
  // else if (i - top + 1 <= 2 * n - 1)
  // i가 두번째 구간이라면
  // colidx = i - curN
  // rowIdx = n - updatedCnt
  // else if () 3n -3까지
  // i가 세번째 구간이라면
  // colidx = 맨 마지막
  // 3n -3 이라면
  // top, curN, updatedCnt 갱신

  /*
      1. colidx = 0
      2. 1~n
      3. 맨 마지막 행에 도착했을때 옆 열로 idx 가리키기
      4. n + 1부터 n-1번 반복
      5. idx 마지막 열 가리키기
      6. n-2번 반복
      7. top curN, updatedCnt 갱신
    */
  // }
  const answer = [];
  for (const row of pyramid) {
    answer.push(...row);
  }

  return answer;
}
// topRow 
// 1~3 0 4~6 2