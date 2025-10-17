/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  // 1. 진입차수가 0인 것 찾아서 q에 넣기
  //  이때 없으면 return false
  // 2. 큐에서 노드를 꺼내서 연결된 간선 끊기
  // 3. 이후 진입로가 없는 것들 q에 넣기
  const degrees = new Array(numCourses).fill(0);
  const nexts = new Array(numCourses).fill([]).map(() => []);
  // const preRs = new Array(numCourses).fill([]).map(() => []); // set로
  const preRsSet = new Array(numCourses).fill(new Set()).map(() => new Set()); // set로

  for (const [a, b] of prerequisites) {
    preRsSet[a].add(b);
    degrees[a]++;
    nexts[b].push(a);
  }

  const q = []; // no entry

  //   for (let i = 0; i < preRsSet.length; ++i) {
  //     if (preRsSet[i].length === 0) q.push(i);
  //   }
  for (let i = 0; i < degrees.length; ++i) {
    if (degrees[i] === 0) q.push(i);
  }

  if (q.length === 0) return false;
  let cnt = 0;
  while (q.length) {
    const node = q.shift();

    for (const next of nexts[node]) {
      preRsSet[next].delete(node);
      degrees[next]--;
      if (degrees[next] === 0) q.push(next);
    }
    //     // nexts 돌면서
    //     // preRsSet 중 node 가지고 있는 것 다 간선 쳐내기
    cnt++;
  }

  if (cnt >= numCourses) return true;
  return false;
};