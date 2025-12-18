function solution(n, wires) {
  let answer = 100;
  const adjacents = new Array(n + 1).fill([]).map((_) => new Array().fill([]));

  // 각 송전탑의 연결 현황 구하기
  for (let i = 0; i < wires.length; ++i) {
    const [v1, v2] = wires[i];
    adjacents[v1].push(v2);
    adjacents[v2].push(v1);
  }

  const visited = new Array(n + 1).fill(false);

  const getNodes = (root) => {
    const value = adjacents[root];
    let nodeCnt = 1;

    visited[root] = true;

    for (const node of value) {
      if (visited[node] === false) {
        visited[node] = true;
        nodeCnt += getNodes(node);
      }
    }

    return nodeCnt;
  };

  for (const [v1, v2] of wires) {
    // 하나씩 끊어보기 시뮬레이션
    visited[v1] = true;
    answer = Math.min(answer, Math.abs(n - 2 * getNodes(v2)));
    // if (answer === 0 || answer === 1) return answer;
    visited.fill(false);
  }

  return answer;
}