var canFinish = function (numCourses, prerequisites) {
  // 1. 진입차수가 0인 것 찾아서 q에 넣기
  //  이때 없으면 return false
  // 2. 큐에서 노드를 꺼내서 연결된 간선 끊기
  // 3. 이후 진입로가 없는 것들 q에 넣기
  //   const levels = new Array(numCourses).fill(0);
  const parents = new Array(numCourses).fill(new Set()).map(() => new Set()); // set로
  // 전에 들어야 할 것
  const children = new Array(numCourses).fill([]).map(() => []);
  // 바로 다음에 들을 것

  for (const [a, b] of prerequisites) {
    parents[a].add(b);
    // levels[a]++;
    children[b].push(a);
  }

  const q = []; // no entry nodes

  //   for (let i = 0; i < levels.length; ++i) {
  // if (levels[i] === 0) q.push(i);
  for (let i = 0; i < numCourses; ++i) {
    if (parents[i].size === 0) q.push(i);
  }

  if (q.length === 0) return false;

  let cnt = 0;
  while (q.length) {
    const node = q.shift();

    for (const child of children[node]) {
      parents[child].delete(node);
      //   levels[child]--;
      //   if (levels[child] === 0) q.push(child);
      if (parents[child].size === 0) q.push(child);
    }
    // children 돌면서
    // parents 중 node 가지고 있는 것 다 간선 쳐내기
    cnt++;
  }

  if (cnt >= numCourses) return true;
  return false;
};