function solution(maps) {
  let answer = 0;
  let [sx, sy] = [0, 0];
  const [w, h] = [maps[0].length, maps.length];
  const visited = maps.map((_) => new Array(w).fill(false));
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  // S 위치 파악
  for (let y = 0; y < h; ++y) {
    const x = maps[y].indexOf("S");

    if (x !== -1) {
      [sx, sy] = [x, y];
      break;
    }
  }

  visited[sy][sx] = true;
  // console.log("first visited : ", [...visited]);
  const q = [[[sx, sy]]];

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
        while (positions.length) positions.pop();
        positions.length = 0;
        availablePos.length = 0;
        while (availablePos.length) availablePos.pop();

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