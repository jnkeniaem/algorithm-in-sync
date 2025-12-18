function solution(n, wires) {
  let answer = n;
  // 계속 작은 값으로 갱신
  const graph = new Array(n + 1).fill([]).map((_) => new Array().fill([]));

  for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  // root 포함한 자식 노드 개수
  const dfs = (root, alreadyVisitedNode) => {
    const neighbors = graph[root];
    let nodesCnt = 1;

    for (const neighbor of neighbors) {
      if (neighbor !== alreadyVisitedNode) nodesCnt += dfs(neighbor, root);
    }

    answer = Math.min(answer, Math.abs(n - nodesCnt * 2));

    return nodesCnt;
  };

  dfs(1, 0);

  return answer;
}