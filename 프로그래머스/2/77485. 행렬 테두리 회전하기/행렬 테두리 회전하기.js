function solution(rows, columns, queries) {
  const answer = [];
  const map = new Map(); // map에 [row, col] : elem

  for (let row = 1; row <= rows; ++row) {
    for (let col = 1; col <= columns; ++col) {
      map.set(`${row} ${col}`, map.size + 1);
    }
  }

  for (const [sy, sx, ey, ex] of queries) {
    // 각 방향마다 tmp에 대입을 먼저 수행해야돼
    let tmp = map.get(`${sy} ${sx}`);
    let min = 100001;
    let prev = 0;

    for (let i = 1; i < ex - sx + 1; ++i) {
      // 우
      // ex - sx + 1 만큼 반복
      prev = tmp; // 이전 꺼 업데이트
      tmp = map.get(`${sy} ${sx + i}`); // 현재를 tmp에 넣고
      min = Math.min(min, prev); // 이전 값이랑 비교해서 최솟값 갱신
      map.set(`${sy} ${sx + i}`, prev); // 현재 위치에 이전꺼를 넣는다.
    }

    for (let i = 1; i < ey - sy + 1; ++i) {
      // 하
      prev = tmp;
      tmp = map.get(`${sy + i} ${ex}`);
      min = Math.min(min, prev);
      map.set(`${sy + i} ${ex}`, prev);
    }
    for (let i = 1; i < ex - sx + 1; ++i) {
      // 좌
      prev = tmp;
      tmp = map.get(`${ey} ${ex - i}`);
      min = Math.min(min, prev);
      map.set(`${ey} ${ex - i}`, prev);
    }
    for (let i = 1; i < ey - sy + 1; ++i) {
      // 상
      prev = tmp;
      tmp = map.get(`${ey - i} ${sx}`);
      min = Math.min(min, prev);
      map.set(`${ey - i} ${sx}`, prev);
    }
    answer.push(min);
  }

  return answer;
}