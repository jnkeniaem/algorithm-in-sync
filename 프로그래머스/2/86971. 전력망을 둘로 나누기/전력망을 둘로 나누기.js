function solution(n, wires) {
  let answer = 100;
  const map = new Map(); // v1 : [v2, ...]

  for (let i = 0; i < wires.length; ++i) {
    const [v1, v2] = wires[i];

    let val = map.get(v1);
    if (val === undefined) { 
      map.set(v1, [v2]);
    } else val.push(v2);

    val = map.get(v2);
    if (val === undefined) {
      map.set(v2, [v1]);
    } else val.push(v1);
  }
  // 각 송전탑의 연결 현황 구하기

  const mapIntoArray = Array.from(map);

  // 연결 개수가 가장 많은 순대로 sort
  mapIntoArray.sort((x, y) => y[1].length - x[1].length);

  const isEven = n % 2 === 0;

  const visited = new Array(n + 1).fill(false);
  let nodeCnt = 0;
  const getNodes = (root) => {
    visited[root] = true;
    const value = map.get(root);
    for (const node of value) {
      if (visited[node] === false) {
        visited[node] = true;
        nodeCnt++;
        getNodes(node);
      }
    }
  };

  for (const [number, val] of mapIntoArray) {
    for (const v of val) {
      visited[number] = true;

      nodeCnt = 1; // 본인

      getNodes(v);

      answer = Math.min(answer, Math.abs(n - nodeCnt - nodeCnt));
      if ((isEven && answer === 0) || (!isEven && answer === 1)) return answer;
      visited.fill(false);
      // 하나씩 끊어보기 시뮬레이션
      // 줄줄이 엮여있는 소세지를 비교해야됨.
    }
  }
  /*
  3. 연결개수 제일 높은것부터 차례로 끊기?
  - n/2 먼저 구하기
  */
  return answer;
}