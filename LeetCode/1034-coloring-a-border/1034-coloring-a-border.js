/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function (grid, row, col, color) {
  const m = grid.length;
  const n = grid[0].length;
  const finalGrid = grid.map((elem) => [...elem]);
  const visited = new Array(m).fill(false).map(() => new Array(n).fill(false));
  const q = [[row, col]]; // 컴포넌트 요소만 들어가기

  while (q.length) {
    const [curY, curX] = q.pop();

    const directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];

    const checkBorder = () => {
      if (curY === 0 || curY === m - 1 || curX === 0 || curX === n - 1)
        return true;
      for (const [y, x] of directions) {
        if (grid[curY + y][curX + x] !== grid[curY][curX]) return true;
      }
      return false;
    };

    if (!visited[curY][curX]) {
      visited[curY][curX] = true;

      const isBorder = checkBorder();
      if (isBorder) finalGrid[curY][curX] = color;
      // 경계 사각형이면 -> 제출 그리드 색 변경

      // grid 안에 있는 && 인접 사각형들 q에 다 넣기
      for (const [y, x] of directions) {
        const [newY, newX] = [curY + y, curX + x];

        if (
          newY < 0 ||
          newY >= m ||
          newX < 0 ||
          newX >= n ||
          grid[newY][newX] !== grid[curY][curX]
        )
          continue;

        q.push([newY, newX]);
      }
    }
  }

  return finalGrid;
};