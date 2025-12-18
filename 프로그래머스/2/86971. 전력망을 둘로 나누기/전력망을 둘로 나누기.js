function solution(n, wires) {
  let answer = 100;
  const adjacents = new Array(n + 1).fill([]).map((_) => new Array().fill([]));
  const visited = new Array(n + 1).fill(false);
 
  // 각 송전탑의 연결 현황 구하기
  for (let i = 0; i < wires.length; ++i) {
    const [v1, v2] = wires[i];
    adjacents[v1].push(v2);
    adjacents[v2].push(v1);
  }

  const getNodes = (root) => {
    let nodeCnt = 1;

    visited[root] = true;

    for (const node of adjacents[root]) {
      if (visited[node] === false) nodeCnt += getNodes(node);
    }

    return nodeCnt;
  };

  for (const [v1, v2] of wires) {
    // 하나씩 끊어보기 시뮬레이션
    visited[v1] = true;
    answer = Math.min(answer, Math.abs(n - 2 * getNodes(v2)));
    visited.fill(false);
  }

  return answer;
}