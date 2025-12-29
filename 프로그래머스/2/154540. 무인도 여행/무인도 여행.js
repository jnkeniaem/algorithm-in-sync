function solution(maps) {
  const answer = [];
  const [w, h] = [maps[0].length, maps.length];
  const visited = new Array(h).fill([]).map((_) => new Array(w).fill(false));

  const directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  const bfs = (x, y) => {
    const q = [[x, y]];
    let sum = 0;

    while (q.length) {
      const [curX, curY] = q.pop();

      if (!visited[curY][curX]) {
        visited[curY][curX] = true;
        sum += Number(maps[curY][curX]);
      }

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
        q.push([newX, newY]);
      }
    }

    answer.push(sum);
  };

  for (let j = 0; j < h; ++j) {
    for (let k = 0; k < w; ++k) {
      if (maps[j][k] !== "X" && visited[j][k] !== true) bfs(k, j);
    }
  }

  return answer.length ? answer.sort((x, y) => x - y) : [-1];
}