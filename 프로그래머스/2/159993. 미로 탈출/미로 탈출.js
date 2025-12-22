function solution(maps) {
  let answer = 0;
  let start = [0, 0];
  const [w, h] = [maps[0].length, maps.length];
  const visited = maps.map((elem) => new Array(w).fill(false));

  // S 위치 파악
  for (let y = 0; y < h; ++y) {
    const x = maps[y].indexOf("S");

    if (x !== -1) {
      start = [x, y];
      break;
    }
  }

  let [curX, curY] = start;
  const q = [[[curX, curY]]];
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // 상 하 좌 우 움직일 수 있는 위치 반환
  const move = (curX, curY, positions, availablePos) => {
    const availables = [];

    for (const [x, y] of directions) {
      const newX = curX + x;
      const newY = curY + y;

      // 벽 / 미로 밖
      if (
        newX < 0 ||
        newX >= w ||
        newY < 0 ||
        newY >= h ||
        maps[newY][newX] === "X" ||
        visited[newY][newX]
      )
        continue;

      if (!pulledLever && maps[newY][newX] === "L") {
        // q 비우기
        // E 찾기
        // visited 초기화
        q.length = 0;
        pulledLever = true;
        for (let j = 0; j < h; ++j) {
          for (let k = 0; k < w; ++k) {
            visited[j][k] = false;
          }
        }
        visited[newY][newX] = true;
        positions.length = 0;
        availablePos.length = 0;
        return [[newX, newY]];
      }

      if (pulledLever && maps[newY][newX] === "E") {
        exited = true;
        return [];
      }

      availables.push([newX, newY]);
      visited[newY][newX] = true;
    }

    return availables;
  };

  let pulledLever = false;
  let exited = false;

  while (q.length) {
    const positions = q.shift();
    const availablePos = [];

    for (const pos of positions) {
      availablePos.push(...move(...pos, positions, availablePos));

      if (exited) return answer + 1;
    }

    if (availablePos.length) q.push(availablePos);
    answer++;
  }

  return -1;
}