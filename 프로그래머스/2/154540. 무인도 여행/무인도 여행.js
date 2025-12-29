function solution(maps) {
  const answer = [];
  const visited = new Array(maps.length)
    .fill([])
    .map((_) => new Array(maps[0].length).fill(false));

  const findStartPoint = () => {
    for (let i = 0; i < maps.length; ++i) {
      const idx = Array.from(maps[i]).findIndex(
        (elem, idx) => visited[i][idx] === false && !isNaN(Number(elem))
      );
      if (idx === -1) continue;
      // 숫자 있는 곳 찾기
      // visited false
      // X가 아닌 곳
      return [idx, i];
    }

    return [-1, -1];
  };

  const directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  while (1) {
    const q = [findStartPoint()];
    if (q[0][0] === -1) break;

    let sum = 0;

    while (q.length) {
      const [curX, curY] = q.pop();

      if (!visited[curY][curX]) {
        visited[curY][curX] = true;
        sum += Number(maps[curY][curX]);
      }

      for (const [x, y] of directions) {
        // X인지 끝인지 확인
        const newX = curX + x;
        const newY = curY + y;

        if (
          newX < 0 ||
          newX >= maps[0].length ||
          newY < 0 ||
          newY >= maps.length ||
          maps[newY][newX] === "X" ||
          visited[newY][newX]
        )
          continue;
        q.push([newX, newY]);
        // console.log("sum : ", sum);
      }
    }

    answer.push(sum);
  }

  return answer.length ? answer.sort((x, y) => x - y) : [-1];
}