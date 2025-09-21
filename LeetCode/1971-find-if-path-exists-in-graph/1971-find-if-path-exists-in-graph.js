/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
  if (n === 1) return true;

  const visited = new Array(n).fill(false);
  const neighbors = new Array(n).fill([]).map(() => new Array());

  for (const [u, v] of edges) {
    // edges 순회하면서 양쪽 다 넣어주기
    neighbors[u].push(v);
    neighbors[v].push(u);
  }

  const q = [source];
  let idx = 0;
  while (idx < q.length) {
    const vertex = q[idx];
    const curNeighbors = neighbors[vertex];

    for (const neighbor of curNeighbors) {
      if (neighbor === destination) return true;
      if (visited[neighbor] === false) q.push(neighbor);
    }
    visited[vertex] = true;
    idx++;
  }

  return false;
};