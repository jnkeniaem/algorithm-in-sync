function solution(board) {
  let length = 0;
  const [col, row] = [board[0].length, board.length];
  const dp = [...board].map((elem) => [...elem]);

  for (let r = 0; r < row; ++r) {
    for (let c = 0; c < col; ++c) {
      if (board[r][c] === 1) length = 1;
    }
  }

  if (col === 1 || row === 1) return length;

  for (let r = 1; r < row; ++r) {
    for (let c = 1; c < col; ++c) {
      if (dp[r][c] === 1) {
        const [l, d, u] = [dp[r][c - 1], dp[r - 1][c - 1], dp[r - 1][c]];

        dp[r][c] = Math.min(l, d, u) + 1;
        length = Math.max(dp[r][c], length);
      }
    }
  }

  return length * length;
}