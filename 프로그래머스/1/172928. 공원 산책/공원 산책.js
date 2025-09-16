function solution(park, routes) {
  const [h, w] = [park.length, park[0].length];
  let [sx, sy] = [0, 0];

  // start 지점 찾기
  for (let i = 0; i < h; ++i) {
    let x = park[i].indexOf("S");
    if (x !== -1) {
      sx = x;
      sy = i;
    }
  }

  let [curX, curY] = [sx, sy];

  const simulate = (op, n, x, y) => {
    for (let i = 0; i < n; ++i) {
      if (op == "N") {
        if (y - 1 < 0 || park[y - 1][x] == "X") return;
        y--;
      } else if (op == "S") {
        if (y + 1 >= h || park[y + 1][x] == "X") return;
        y++;
      } else if (op == "E") {
        if (x + 1 >= w || park[y][x + 1] == "X") return;
        x++;
      } else if (op == "W") {
        if (x - 1 < 0 || park[y][x - 1] == "X") return;
        x--;
      }
    }
    // 정상적으로 명령 수행했다면 현재 위치 업데이트
    [curX, curY] = [x, y];
  };

  for (const route of routes) {
    // 이동하기 전 경로에 장애물이나 산책 밖의 영역으로 가는지 시뮬레이션 돌리기
    const [op, n] = [route[0], route[2]];

    simulate(op, n, curX, curY);
  }

  return [curY, curX];
}