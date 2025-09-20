function solution(N, road, K) {
  let answer = 0;

  const graph = new Array(N + 1).fill([]).map(() => new Array());
  const dists = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER); // dists[n] : n까지의 거리

  for (const [a, b, c] of road) {
    if (graph[a].length) {
      const aIdx = graph[a].findIndex((elem) => {
        return elem.to === b;
      });
      if (aIdx !== -1) {
        // 찾았고
        if (graph[a][aIdx] && graph[a][aIdx].dist > c) {
          // 작은걸로 갱신해줘야 함.
          // 똑같은 출발지 목적지 -> dist 더 작은거 남기기!
          //  여기서 지우고, 밑에서 새로운걸로 대체하기.
          graph[a].splice(aIdx, 1);
          // b에서도 마찬가지로 똑같이 해주기!
          const bIdx = graph[b].findIndex((elem) => elem.to === a);
          graph[b].splice(bIdx, 1);
        } else {
          continue;
        }
      }
    }
    graph[a].push({
      to: b,
      dist: c,
    });
    graph[b].push({
      to: a,
      dist: c,
    });
    // dist에 따라 정렬 필요함..!
    // queue도,
    // sortQueue
  }
  for (const elem of graph) {
    // graph[i] dist에 따라 정렬
    elem.sort((x, y) => x.dist - y.dist);
  }

  dists[1] = 0;
  const queue = [{ to: 1, dist: 0 }];

  while (queue.length) {
    const { to } = queue.shift();

    graph[to].forEach((elem) => {
      const weight = dists[to] + elem.dist;
      if (weight < dists[elem.to]) {
        // 갱신.
        dists[elem.to] = weight;
        queue.push(elem);
        // push 하면 정렬 필요함
        queue.sort((x, y) => x.dist - y.dist);
      }
    });
  }

  // return answer;
  return  dists.filter((elem) => elem <= K).length;
}