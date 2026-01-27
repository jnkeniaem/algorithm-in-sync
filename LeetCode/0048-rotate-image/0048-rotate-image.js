/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let len = matrix.length;
  const matrixCopy = [...matrix].map((elem) => [...elem]);

  for (let j = 0; j < len; ++j) {
    for (let k = 0; k < len; ++k) {
      matrix[k][len - 1 - j] = matrixCopy[j][k];
    }
  }

  // console.log(matrix);

  /*
  행마다 복사하고 matrix 맨 오른쪽부터 차곡차곡 넣기
  */
};