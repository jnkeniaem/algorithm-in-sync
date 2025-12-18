function solution(n, wires) {
  let answer = 100;
  const map = new Map(); // v1 : [v2, ...]

  // 각 송전탑의 연결 현황 구하기
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

  for (const [v1, v2] of wires) {
    // 하나씩 끊어보기 시뮬레이션
    visited[v1] = true;
    nodeCnt = 1; // 본인
    getNodes(v2);

    answer = Math.min(answer, Math.abs(n - nodeCnt - nodeCnt));
    if (answer === 0 || answer === 1) return answer;
    visited.fill(false);
  }

  return answer;
}