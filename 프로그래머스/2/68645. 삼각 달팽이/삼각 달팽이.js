function solution(n) {
  const pyramid = new Array(n)
    .fill([])
    .map((_, idx) => new Array(idx + 1).fill(0));

  let curN = n;
  let elem = 1;

  for (let j = 0; j < Math.floor(n - 1 / 3) + 1; ++j) {
    let [colIdx, rowIdx] = [j, j * 2 - 1];

    for (let k = 0; k < curN; ++k) pyramid[++rowIdx][colIdx] = elem++;
    for (let k = 0; k < curN - 1; ++k) pyramid[rowIdx][++colIdx] = elem++;
    for (let k = 0; k < curN - 2; ++k) pyramid[--rowIdx][--colIdx] = elem++;

    curN -= 3;
  }

  return pyramid.flat();
}
