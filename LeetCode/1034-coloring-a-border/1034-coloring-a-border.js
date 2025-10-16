var colorBorder = function (grid, row, col, color) {
  const m = grid.length;
  const n = grid[0].length;
  const finalGrid = new Array(m).fill([]).map((_, idx) => [...grid[idx]]);
  const visited = new Array(m).fill(false).map(() => new Array(n).fill(false));
  const q = [[row, col]]; // 컴포넌트 색만 들어가기

  while (q.length) {
    const [curY, curX] = q.pop();
    // 순서가 중요하지 않아서 shift 말고 pop해도 상관없을듯. 시간 복잡도 더 낮은 pop으로 ㄱ
    // visited 체크

    // 4방향 체크
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

      // 경계인지 확인.
      if (isBorder) finalGrid[curY][curX] = color;
      // 제출 그리드 색 변경

      // 인접 사각형들 q에 다 넣기 + grid 안에만 있어야 함.
      for (const [y, x] of directions) {
        if (
          curY + y < 0 ||
          curY + y >= m ||
          curX + x < 0 ||
          curX + x >= n ||
          grid[curY + y][curX + x] !== grid[curY][curX]
        )
          continue;

        q.push([curY + y, curX + x]);
      }
    }
  }

  return finalGrid;
};