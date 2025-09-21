function solution(board) {
  const visited = new Array(board.length)
    .fill([])
    .map(() => new Array(board[0].length).fill(false));

  let [r, g] = [
    [-1, -1],
    [-1, -1],
  ]; // [y, x]

  for (let y = 0; y < board.length; ++y) {
    for (let x = 0; x < board[0].length; ++x) {
      if (board[y][x] === "R") {
        r[0] = y;
        r[1] = x;
      } else if (board[y][x] === "G") {
        g[0] = y;
        g[1] = x;
      }
    }
  }

  const findValids = (y, x) => {
    let [curY, curX] = [y, x];
    let valids = [];
    // 상
    while (curY >= 0 && board[curY][x] !== "D") {
      curY--;
    }
    // 넣기 전에 현재 위치랑 같은지 확인
    curY++;
    if (curY !== y) {
      valids.push([curY, x]);
      curY = y;
    }
    // 우
    while (curX < board[0].length && board[y][curX] !== "D") {
      curX++;
    }
    curX--;
    if (curX !== x) {
      valids.push([y, curX]);
      curX = x;
    }
    // 하
    while (curY < board.length && board[curY][x] !== "D") {
      curY++;
    }
    curY--;
    if (curY !== y) {
      valids.push([curY, x]);
    }
    // 좌
    while (curX >= 0 && board[y][curX] !== "D") {
      curX--;
    }
    curX++;
    if (curX !== x) {
      valids.push([y, curX]);
    }
    return valids;
  };

  const q = [{ y: r[0], x: r[1], cnt: 0 }]; // 현재 위치에서 갈 수 있는 좌표 모음

  while (q.length) {
    const { y, x, cnt } = q.shift();

    const valids = findValids(y, x);
    for (const [validY, validX] of valids) {
      if (validY === g[0] && validX === g[1]) return cnt + 1;
      else if (visited[validY][validX] === false)
        q.push({ y: validY, x: validX, cnt: cnt + 1 });
    }
    visited[y][x] = true;
    // visited?
  }

  return -1;
}