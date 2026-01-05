function solution(board) {
  let length = 0;
  const [w, h] = [board[0].length, board.length];
  const dp = [...board].map((elem) => [...elem]);

  //   첫번째 열에 1 있는지 확인
  const checkFirstColumnHasSquare = () => {
    for (let i = 0; i < h; ++i) {
      if (board[i][0] === 1) return true;
    }

    return false;
  };

  if (board[0].indexOf(1) !== -1 || checkFirstColumnHasSquare()) length = 1;

  for (let j = 1; j < h; ++j) {
    for (let k = 1; k < w; ++k) {
      if (dp[j][k] === 1) {
        const [l, d, u] = [dp[j][k - 1], dp[j - 1][k - 1], dp[j - 1][k]];

        dp[j][k] = Math.min(l, d, u) + 1;
        length = Math.max(dp[j][k], length);
      }
    }
  }

  return length * length;
}