function solution(maps) {
  const sPos = [0, 0];
  const lPos = [0, 0];
  const [w, h] = [maps[0].length, maps.length];
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // S, L 위치 파악
  for (let y = 0; y < h; ++y) {
    for (let x = 0; x < w; ++x) {
      if (maps[y][x] === "S") [sPos[0], sPos[1]] = [x, y];
      else if (maps[y][x] === "L") [lPos[0], lPos[1]] = [x, y];
    }
  }

  const bfs = (start, target) => {
    const q = [[...start, 0]];
    const visited = maps.map((_) => new Array(w).fill(false));

    visited[start[1]][start[0]] = true;

    while (q.length) {
      const [curX, curY, dist] = q.shift();

      for (const [x, y] of directions) {
        const newX = curX + x;
        const newY = curY + y;

        if (
          newX < 0 ||
          newX >= w ||
          newY < 0 ||
          newY >= h ||
          maps[newY][newX] === "X" ||
          visited[newY][newX]
        )
          continue;

        if (maps[newY][newX] === target) return dist + 1;

        q.push([newX, newY, dist + 1]);
        visited[newY][newX] = true;
      }
    }

    return -1;
  };

  const distToL = bfs(sPos, "L");
  if (distToL === -1) return -1;

  const distToE = bfs(lPos, "E");
  if (distToE === -1) return -1;

  return distToL + distToE;
}